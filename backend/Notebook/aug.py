import pandas as pd
import numpy as np
import random

file_path = "/Users/zaiyaannajam/Downloads/ anime and movies/Specfinal/SpectrumCue/backend/Notebook/autismall.csv"
df = pd.read_csv(file_path)

# Handle missing values in the age column
if "age" in df.columns:
    df["age"] = df["age"].fillna(df["age"].median())

def augment_row(row, target="Class/ASD"):
    augmented_row = row.copy()

    # Augment question scores
    for col in [f"A{i}_Score" for i in range(1, 11)]:
        prob = 0.7 if augmented_row[target] == "YES" else 0.3
        augmented_row[col] = np.random.choice([0, 1], p=[1 - prob, prob])

    # Augment other columns
    if not pd.isna(augmented_row["age"]):
        augmented_row["age"] = max(1, int(augmented_row["age"] + random.gauss(0, 3)))

    augmented_row["gender"] = random.choice(["m", "f"])
    augmented_row["ethnicity"] = random.choice(
        ["White-European", "Latino", "Asian", "Black", "Middle Eastern", "Others", "?"]
    )
    augmented_row["jundice"] = "yes" if augmented_row[target] == "YES" and random.random() < 0.6 else "no"
    augmented_row["austim"] = "yes" if augmented_row[target] == "YES" and random.random() < 0.7 else "no"
    augmented_row["used_app_before"] = random.choice(["yes", "no"])
    augmented_row["relation"] = random.choice(["Self", "Parent", "Relative", "Health care professional", "?"])

    return augmented_row

def augment_dataset_balanced(df, target="Class/ASD", num_augmented_samples=100):
    # Separate rows into `YES` and `NO` classes
    yes_rows = df[df[target] == "YES"]
    no_rows = df[df[target] == "NO"]
    
    # Calculate required samples for balancing
    num_per_class = num_augmented_samples // 2

    # Augment samples for each class
    augmented_yes_rows = [augment_row(yes_rows.sample(1).iloc[0], target) for _ in range(num_per_class)]
    augmented_no_rows = [augment_row(no_rows.sample(1).iloc[0], target) for _ in range(num_per_class)]

    # Combine augmented samples
    return pd.DataFrame(augmented_yes_rows + augmented_no_rows)

# Perform iterative augmentation
iterations = 10
augmented_datasets = [df]  # Include the original dataset

for i in range(iterations):
    print(f"Performing iteration {i + 1}/{iterations}...")
    augmented_df = augment_dataset_balanced(df, num_augmented_samples=len(df))
    augmented_datasets.append(augmented_df)

# Combine all datasets
final_combined_df = pd.concat(augmented_datasets, ignore_index=True)

# Save the final augmented dataset to a CSV file
output_path = "autism_dataset_balanced.csv"
final_combined_df.to_csv(output_path, index=False)
print(f"Balanced iteratively augmented dataset saved to {output_path}")

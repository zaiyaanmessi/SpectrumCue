import pandas as pd
import numpy as np
import random


# file_path = "/workspace/Test_otsu/autism-dataset-all.csv"  
file_path = '/autismall.csv'
df = pd.read_csv(file_path)


if "age" in df.columns:
    df["age"] = df["age"].fillna(df["age"].median())


def augment_row(row, target="Class/ASD"):
   
    augmented_row = row.copy()

   
    for col in [f"A{i}_Score" for i in range(1, 11)]:
        prob = 0.7 if augmented_row[target] == "YES" else 0.3 
        augmented_row[col] = np.random.choice([0, 1], p=[1 - prob, prob])

   
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

def augment_dataset(df, target="Class/ASD", num_augmented_samples=100):
    
    augmented_rows = []
    for _ in range(num_augmented_samples):
        random_row = df.sample(1).iloc[0]
        augmented_row = augment_row(random_row, target)
        augmented_rows.append(augmented_row)

    return pd.DataFrame(augmented_rows)


iterations = 10  
augmented_datasets = [df]  

for i in range(iterations):
    print(f"Performing iteration {i + 1}/{iterations}...")
   
    augmented_df = augment_dataset(df, num_augmented_samples=len(df))
    augmented_datasets.append(augmented_df)

final_combined_df = pd.concat(augmented_datasets, ignore_index=True)

output_path = "test_dataset_aug.csv"
final_combined_df.to_csv(output_path, index=False)
print(f"Iteratively augmented dataset saved to {output_path}")

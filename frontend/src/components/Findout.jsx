import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Findout.module.css";
const Findout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    A1_Score: "0",
    A2_Score: "0",
    A3_Score: "0",
    A4_Score: "0",
    A5_Score: "0",
    A6_Score: "0",
    A7_Score: "0",
    A8_Score: "0",
    A9_Score: "0",
    A10_Score: "0",
    age: "0",
    gender: "1",
    ethnicity: "0",
    jundice: "0",
    austim: "0",
    contry_of_res: "0",
    used_app_before: "0",
    result: "0",
    relation: "0",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const scoreSum =
      parseInt(formData.A1_Score) +
      parseInt(formData.A2_Score) +
      parseInt(formData.A3_Score) +
      parseInt(formData.A4_Score) +
      parseInt(formData.A5_Score) +
      parseInt(formData.A6_Score) +
      parseInt(formData.A7_Score) +
      parseInt(formData.A8_Score) +
      parseInt(formData.A9_Score) +
      parseInt(formData.A10_Score);

    setFormData((prevData) => ({
      ...prevData,
      result: scoreSum.toString(),
    }));
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/get_prediction",
        formData
      );
      const prediction = response.data["ASD PREDICTION"];
      console.log(prediction);

      navigate("/result", { state: { prediction } });
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const swapDivsWithClick = (div1, div2) => {
    const d1 = document.getElementById(div1);
    const d2 = document.getElementById(div2);
    if (d2.style.display === "none") {
      d1.style.display = "none";
      d2.style.display = "block";
    } else {
      d1.style.display = "block";
      d2.style.display = "none";
    }
  };
  const goBack = (currentStep, previousStep) => {
    const currentDiv = document.getElementById(currentStep);
    const previousDiv = document.getElementById(previousStep);
    currentDiv.style.display = "none";
    previousDiv.style.display = "block";
  };
  return (
    <div className={styles.container} style={{ marginBottom: "220px" }}>
      <div className="custom-container ">
        <form onSubmit={handleSubmit}>
          <div
            id="step1"
            className={styles.step}
            style={{
              display: "block",
              marginTop: "20px",
              padding: "25px",
              borderRadius: "10px",
              border: "2px solid #95a5a6",
            }}
          >
            <h4 className={styles.header} style={{ textAlign: "center" }}>
              Fill in basic details to continue
            </h4>
            <div className={styles.formGroup}>
              <label htmlFor="gender">Gender:</label>
              <select
                className={`${styles.customSelect}`}
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                className={`${styles.formControl}`}
                id="age"
                placeholder="Enter Age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Ethnicity:</label>
              <select
                className={`${styles.customSelect}`}
                id="ethnicity"
                name="ethnicity"
                onChange={handleInputChange}
              >
                <option value="4">Middle Eastern</option>
                <option value="9">White European</option>
                <option value="7">South Asian</option>
                <option value="6">Pasifika</option>
                <option value="0">Asian</option>
                <option value="8">Turkish</option>
                <option value="3">Latino</option>
                <option value="2">Hispanic</option>
                <option value="1">Black</option>
                <option value="5">Others</option>
              </select>
            </div>
            <div
              id="side1"
              className={styles.side}
              style={{ float: "left", marginRight: "10%" }}
            >
              <p>Born With Jaundice?</p>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="jundice"
                  id="jundice"
                  value={0}
                  onChange={handleInputChange}
                />
                No
              </label>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="jundice"
                  id="jundice"
                  value={1}
                  onChange={handleInputChange}
                />
                Yes
              </label>
            </div>
            <div id="side2" style={{ float: "left", marginRight: "10%" }}>
              <p>Family member with austim?</p>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="austim"
                  id="austim"
                  value={0}
                  onChange={handleInputChange}
                />
                No
              </label>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="austim"
                  id="austim"
                  value={1}
                  onChange={handleInputChange}
                />
                Yes
              </label>
            </div>
            <div id="side3">
              <p>Attended screening before?</p>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="used_app_before"
                  id="used_app_before"
                  value={0}
                  onChange={handleInputChange}
                />
                No
              </label>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="used_app_before"
                  id="used_app_before"
                  value={1}
                  onChange={handleInputChange}
                />
                Yes
              </label>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="country">Country:</label>
              <select
                className={`${styles.customSelect}`}
                id="contry_of_res"
                name="contry_of_res"
                value={formData.contry_of_res}
                onChange={handleInputChange}
              >
                <option value="18">India</option>
                <option value="51">USA</option>
                <option value="49">UAE</option>
                <option value="50">UK</option>
                <option value="34">New Zealand</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="who">Who is taking this test?</label>
              <select
                className={`${styles.customSelect}`}
                id="relation"
                name="relation"
                value={formData.relation}
                onChange={handleInputChange}
              >
                <option value="4">Self</option>
                <option value="2">Parent</option>
                <option value="3">Relative</option>
                <option value="0">Health care professional</option>
              </select>
            </div>
            <input type="hidden" name="hidden_jaun" id="hidden_id_jaun" />
            <input type="hidden" name="hidden_pdd" id="hidden_id_pdd" />
            <input type="hidden" name="hidden_screen" id="hidden_id_screen" />
            <div className={`${styles.btns}`}>
              <button
                type="button"
                id="next1"
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={() => swapDivsWithClick("step1", "step2")}
              >
                Next
              </button>
            </div>
          </div>

          <div
            id="step2"
            style={{
              display: "none",
              marginTop: "20px",
              padding: "25px",
              borderRadius: "10px",
              border: "2px solid #95a5a6",
            }}
          >
            <h4 style={{ textAlign: "center" }}>Answer the questions</h4>
            <p>1.I often notice small sounds when others do not?</p>
            <label className="radio-inline">
              <input
                type="radio"
                name="A1_Score"
                id="A1_Score"
                value={1}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="A1_Score"
                id="A1_Score"
                value="0"
                onChange={handleInputChange}
              />
              No
            </label>
            <br />
            <p>
              2.I usually concentrate more on the whole picture, rather than the
              small details?
            </p>
            <label className="radio-inline">
              <input
                type="radio"
                name="A2_Score"
                id="A2_Score"
                value={1}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="A2_Score"
                id="A2_Score"
                value="0"
                onChange={handleInputChange}
              />
              No
            </label>
            <br />
            <p>3.I find it easy to do more than one thing at once?</p>
            <label className="radio-inline">
              <input
                type="radio"
                name="A3_Score"
                id="A3_Score"
                value={1}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="A3_Score"
                id="A3_Score"
                value="0"
                onChange={handleInputChange}
              />
              No
            </label>
            <br />
            <p>
              4.If there is an interruption, I can switch back to what I was
              doing very quickly?
            </p>
            <label className="radio-inline">
              <input
                type="radio"
                name="A4_Score"
                id="A4_Score"
                value={1}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="A4_Score"
                id="A4_Score"
                value="0"
                onChange={handleInputChange}
              />
              No
            </label>
            <br />
            <p>
              5.I find it easy to read between the lines when someone is talking
              to me?
            </p>
            <label className="radio-inline">
              <input
                type="radio"
                name="A5_Score"
                id="A5_Score"
                value={1}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="A5_Score"
                id="A5_Score"
                value="0"
                onChange={handleInputChange}
              />
              No
            </label>
            <br />
            <div className={`${styles.btns}`}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => goBack("step2", "step1")}
              >
                Back
              </button>
              <button
                type="button"
                id="next2"
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={() => swapDivsWithClick("step2", "step3")}
              >
                Next
              </button>
            </div>
          </div>

          <div
            id="step3"
            style={{
              display: "none",
              marginTop: "20px",
              padding: "25px",
              borderRadius: "10px",
              border: "2px solid #95a5a6",
            }}
          >
            <h4 style={{ textAlign: "center" }}>Just a few more..!</h4>
            <p>
              6. I know how to tell if someone listening to me is getting bored?
            </p>
            <label className="radio-inline">
              <input
                type="radio"
                name="A6_Score"
                value={1}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="A6_Score"
                id="A6_Score"
                value="0"
                onChange={handleInputChange}
              />
              No
            </label>
            <br />
            <p>
              7. When I’m reading a story, I find it difficult to work out the
              character’s intentions?
            </p>
            <label className="radio-inline">
              <input
                type="radio"
                name="A7_Score"
                id="A7_Score"
                value={1}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="A7_Score"
                id="A7_Score"
                value="0"
                onChange={handleInputChange}
              />
              No
            </label>
            <br />
            <p>
              8. I like to collect information about categories of things (e.g.
              types of cars, types of birds, types of trains, types of plants,
              etc)?
            </p>
            <label className="radio-inline">
              <input
                type="radio"
                name="A8_Score"
                id="A8_Score"
                value={1}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="A8_Score"
                id="A8_Score"
                value="0"
                onChange={handleInputChange}
              />
              No
            </label>
            <br />
            <p>
              9. I find it easy to work out what someone is thinking or feeling
              just by looking at their face?
            </p>
            <label className="radio-inline">
              <input
                type="radio"
                name="A9_Score"
                id="A9_Score"
                value={1}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="A9_Score"
                id="A9_Score"
                value="0"
                onChange={handleInputChange}
              />
              No
            </label>
            <br />
            <p>10. I find it difficult to work out people’s intentions?</p>
            <label className="radio-inline">
              <input
                type="radio"
                name="A10_Score"
                id="A10_Score"
                value={1}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="A10_Score"
                id="A10_Score"
                value="0"
                onChange={handleInputChange}
              />
              No
            </label>
            <br />
            <div className={`${styles.btns}`}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => goBack("step3", "step2")}
              >
                Back
              </button>
              <button
                type="submit"
                id="submit"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Findout;

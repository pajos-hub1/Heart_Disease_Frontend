import React from "react";
import Zoom from "react-reveal/Zoom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Symptoms() {
  return (
    <React.Fragment>
      <NavBar />
      <Zoom>
        <div style={{ margin: "3% 5% 5% 5%", color: "#757575" }}>
          <h2 style={{ color: "#375863" }}>Symptoms and Diagnosis</h2>
          <hr />
          <p>
            Heart disease, such as coronary heart disease, heart attack,
            congestive heart failure, and congenital heart disease,
            is the leading cause of death for men and women in the U.S. Prevention
            includes quitting smoking, lowering cholesterol, controlling high blood pressure,
            maintaining a healthy weight, and exercising.
          </p>
          <p>
            Your doctor will perform a physical exam and
            ask about your personal and family medical history.
            The tests you'll need to diagnose your heart disease depend
            on what condition your doctor thinks you might have.

          </p>
          <p>
            Heart disease describes a range of conditions that affect your heart. Heart diseases include:
            <ul>
              <li> Blood vessel disease, such as coronary artery disease </li>
              <li>   Heart rhythm problems (arrhythmias)</li>
              <li>  Heart defects you're born with (congenital heart defects)</li>
              <li>  Heart valve disease</li>
              <li>  Disease of the heart muscle</li>
              <li> Heart infection </li>
            </ul>
          </p>
        </div>
      </Zoom>
      <Zoom>
        <div style={{ margin: "5%", color: "#757575" }}>
          <h5 style={{ color: "#b5857b" }}>
            Symptoms of heart disease in your blood vessels
          </h5>
          <p>
            Coronary artery disease symptoms may be different for men and women.
            For instance, men are more likely to have chest pain.
            Women are more likely to have other signs and symptoms
            along with chest discomfort, such as shortness of breath,
            nausea and extreme fatigue.Signs and symptoms can include:
          </p>
          <div>
            <ul>
              <li>Chest pain, chest tightness, chest pressure and chest discomfort (angina)</li>
              <li>Shortness of breath</li>
              <li>Pain, numbness, weakness or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed</li>
              <li>Pain in the neck, jaw, throat, upper abdomen or back</li>
              <li>Fluttering in your chest</li>
              <li>Shortness of breath</li>
              <li>Swelling in the legs, abdomen or areas around the eyes</li>
              <li>Easily getting short of breath during exercise or activity</li>
              <li>Swelling in the hands, ankles or feet</li>
              <li>Dizziness, lightheadedness and fainting</li>
            </ul>
          </div>
        </div>

        <div style={{ margin: "5% ", color: "#757575" }}>
          <p>
            Always call 911 or emergency medical help if you think you might be having a heart attack.
          </p>
          <p>
            Heart disease is easier to treat when detected early,
            so talk to your doctor about your concerns regarding your heart health.
            If you're concerned about developing heart disease,
            talk to your doctor about steps you can take to reduce
            your heart disease risk.
            This is especially important if you have a family history of heart disease.
          </p>
          <p>
            If you think you may have heart disease,
            based on new signs or symptoms you're having,
            make an appointment to see your doctor.
          </p>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "#e09d9d", fontSize: "20px" }}
            >
              Know more on mayoclinic.org
            </a>
          </div>
        </div>
      </Zoom>

      <Footer />
    </React.Fragment>
  );
}

export default Symptoms;

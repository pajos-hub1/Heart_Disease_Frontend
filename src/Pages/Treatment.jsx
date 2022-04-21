import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Zoom from "react-reveal/Zoom";

var listHeadColor = "#eedfgg";

function Treatment() {
  return (
    <React.Fragment>
      <NavBar />

      <div style={{ margin: "3% 5% 5% 5%", color: "#757575" }}>
        <h2 style={{ color: "#375863" }}>Treatment</h2>
        <hr />
        <Zoom>
          <p>
            The type of treatment you receive depends on
            the type of heart disease you have.
            In general, treatment for heart disease usually includes:
          </p>
        </Zoom>
        <Zoom>
          <p>
            mayoclinic.org can help you understand your disease stage and
            appropriate options, so you and your doctors can arrive at the best
            treatment plan for YOU.
          </p>
          <p>
            In the following pages of the Treatment and Side Effects section,
            you can learn about:
          </p>
        </Zoom>

        <div style={{ padding: "0% 4% 0% 4%" }}>
          <dl>
            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Lifestyle changes.{" "}
              </dt>
              <dd>
                You can lower your risk of heart disease by
                eating a low-fat and low-sodium diet,
                getting at least 30 minutes of moderate exercise
                on most days of the week, quitting smoking,
                and limiting alcohol intake.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Medications.
              </dt>
              <dd>
                If lifestyle changes alone aren't enough,
                your doctor may prescribe medications
                to control your heart disease.
                he type of medication you receive will depend on the type of heart disease.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Medical procedures or surgery.
              </dt>
              <dd>
                If medications aren't enough, it's possible your doctor
                will recommend specific procedures or surgery.
                The type of procedure or surgery will depend on
                the type of heart disease and the extent of the damage to your heart.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Control your blood pressure.
              </dt>
              <dd>
                Ask your doctor for a blood pressure measurement at least every two years.
                He or she may recommend more frequent measurements
                if your blood pressure is higher than normal or you have
                a history of heart disease. Optimal blood pressure is less
                than 120 systolic and 80 diastolic, as measured in millimeters of mercury (mm Hg).
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Check your cholesterol
              </dt>
              <dd>
                Ask your doctor for a baseline cholesterol test
                when you're in your 20s and then at least every five years.
                You may need to start testing earlier if high cholesterol
                is in your family. If your test results aren't within desirable ranges,
                your doctor may recommend more-frequent measurements.
                <br />
                <br />
                Most people should aim for a low-density lipoprotein (LDL)
                level below 130 milligrams per deciliter (mg/dL),
                or 3.4 millimoles per liter (mmol/L).
                If you have other risk factors for heart disease,
                you should aim for an LDL level below 100 mg/dL (2.6 mmol/L).
                If you're at very high risk of heart disease —
                if you've already had a heart attack or have diabetes,
                for example — aim for an LDL level below 70 mg/dL (1.8 mmol/L).
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Lead Extraction
              </dt>
              <dd>
                That’s removal of one or more leads from inside the heart.
                Leads that are placed outside the heart during open heart
                surgery cannot be removed by this procedure.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Heart Transplant
              </dt>
              <dd>
                A person's diseased heart is replaced with a healthy donor's heart.
                The donor is a person who has died and whose family has agreed to donate their loved one's organs.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Left Ventricular Assist Device (LVAD)
              </dt>
              <dd>
                It’s a kind of mechanical heart.
                A surgeon would place it inside your chest.
                It would help the heart pump oxygen-rich blood throughout the body.
              </dd>
            </Zoom>
            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Drug-Eluting Stents
              </dt>
              <dd>
                Find out what you need to know about drug-eluting stents,
                and discover the procedure, risks, benefits, and how it may affect health.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Drugs for Treatment and Risk Reduction
              </dt>
              <dd>
                A reference list of drugs used to treat and reduce the risk of
                breast cancer, including how they work, to whom they are
                typically given, and side effects.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Angiotension II Receptor Blockers
              </dt>
              <dd>
                These heart drugs decrease certain chemicals that narrow blood vessels.
                That allows blood to flow more easily through your body.
                These drugs also decrease chemicals that cause salt and fluid to build up in the body.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Nitrates
              </dt>
              <dd>
                These are meds that treat angina in people with coronary artery disease.
                They also help ease chest pain caused by blocked blood vessels of the heart.
              </dd>
            </Zoom>
          </dl>
        </div>
      </div>
      <Zoom>
        <div style={{ margin: "5% ", color: "#757575", textAlign: "center" }}>
          <a
            href="https://www.mayoclinic.org/diseases-conditions/heart-disease/diagnosis-treatment/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e09d9d", fontSize: "20px" }}
          >
            Know more on mayoclinic.org
          </a>
        </div>
      </Zoom>
      <Footer />
    </React.Fragment>
  );
}

export default Treatment;

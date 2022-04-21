import React from "react";
import Zoom from "react-reveal/Zoom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Myth from "../Images/myths1.png";
import Doctor from "../Images/images.png";
import heartbeats from "../Images/heart-beats.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <div
        style={{
          overflowX: "hidden",
          margin: "3%",
          borderTop: "1px solid #C0C0C0",
          borderLeft: "1px solid #C0C0C0",
          borderRight: "1px solid #C0C0C0",
          borderBottom: "4px solid #033E3E",
          borderRadius: "6px",
        }}
      >
        <Row xs="1" md="2" xl="2">
          <Col>
            <div style={{ padding: "7% 5% 1% 5%" }}>
              <Zoom>
                <h2
                  className="text-muted"
                  style={{ textDecoration: "underline" }}
                >
                  ALL ABOUT HEART DISEASE
                </h2>
              </Zoom>
              <Zoom>
                <p className="text-muted">
                  If you have people that has been diagnosed with heart disease,
                  it's important to understand some basics: What is heart disease and how does it happen?
                </p>
                <p className="text-muted">
                  In this section, you can learn about how heart disease
                  develops, how many people get heart disease, and what factors
                  can increase risk for getting heart disease. You also can
                  learn more about signs and symptoms to watch for and how to
                  manage any fears you may have about heart disease.
                </p>
                <p className="text-muted">
                  Heart disease is a collection of diseases and conditions
                  that cause cardiovascular disease (CVD). According to World Health Organization (2021),
                  cardiovascular disease (CVD) is a group of disorders of the
                  heart and blood vessels and includes coronary heart disease,
                  cerebrovascular disease, rheumatic heart disease, and other conditions.
                </p>
              </Zoom>
            </div>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <img
              src={heartbeats}
              width="80%"
              height="80%"
              alt="heartbeats"
              style={{ padding: "7% 0% 0% 2%" }}
            />
          </Col>

        </Row>
      </div>

      <div
        style={{
          overflowX: "hidden",
          margin: "3%",
          borderTop: "1px solid #C0C0C0",
          borderLeft: "1px solid #C0C0C0",
          borderRight: "1px solid #C0C0C0",
          borderBottom: "4px solid #033E3E",
          borderRadius: "6px",
        }}
      >
        <Row xs="1" md="2" xl="2">
          <Col>
            <div style={{ padding: "2% 5% 1% 5%" }}>
              <Zoom>
                <h2
                  className="text-muted"
                  style={{ textDecoration: "underline" }}
                >
                  HEART DISEASE FACTS
                </h2>
                <p className="text-muted">
                  More than four out of five cardiovascular disease (CVD) deaths
                  are due to heart attacks and strokes, and one-third of these deaths
                  occur prematurely in people under 70 years of age (WHO, 2021).
                  It is widely discovered that cardiovascular deaths occur mostly
                  in low-income or minimal economy countries due to the fact
                  it resources and awareness cannot be pushed to contain it or
                  to incur preventive measures through the health sector,
                  as the standard of living is so low.
                </p>
                <p className="text-muted">
                  In fact, a study few years ago looked at the symptoms
                  most often seen in women who had experienced a heart attack.
                  The number of people suffering from heart disease is on the rise.
                  The report from the world health organization (WHO) shows us a
                  large number of people die every year due to heart disease
                  all over the world. Heart disease is also stated to be a
                  great life taker amongst different races especially the Americans.
                </p>
                <p className="text-muted">
                  For more information on understanding Heart disease
                  factors, visit www.heart.org
                </p>
              </Zoom>
            </div>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <Zoom>
              <img
                src={Doctor}
                width="80%"
                height="80%"
                alt="girlImage"
                style={{ padding: "10% 0% 0% 2%" }}
              />
            </Zoom>
          </Col>
        </Row>
      </div>

      <div
        style={{
          overflowX: "hidden",
          margin: "3%",
          borderTop: "1px solid #C0C0C0",
          borderLeft: "1px solid #C0C0C0",
          borderRight: "1px solid #C0C0C0",
          borderBottom: "4px solid #033E3E",
          borderRadius: "6px",
        }}
      >
        <Row xs="1" md="2" xl="2">
          <Col style={{ textAlign: "center" }}>
            <Zoom>
              <img
                src={Myth}
                width="80%"
                height="80%"
                alt="girlImage"
                style={{ padding: "10% 0% 0% 2%" }}
              />
            </Zoom>
          </Col>
          <Col>
            <div style={{ padding: "7% 5% 1% 5%" }}>
              <Zoom>
                <h2
                  className="text-muted"
                  style={{ textDecoration: "underline" }}
                >
                  HEART DISEASE Myths
                </h2>
              </Zoom>
              <Zoom>
                <p className="text-muted">
                  Over the past decade, we've learned a great deal
                  about what causes heart attacks and how to prevent them.
                  But unless you follow medical news closely,
                  there's a chance you might have misconceptions
                  about the risk factors for heart disease, or heart disease itself.
                  Here are 10 commonly held but mistaken beliefs.
                  Replacing these myths with truths will give you
                  the information you need so you and your doctor
                  can plan the best path to a healthy heart.
                </p>
                <p className="text-muted">
                  If you have heart disease, you need to take it easy. <br />
                  If you take a cholesterol-lowering drug, you can eat anything. <br />
                  It's okay to have higher blood pressure when you're older.<br />
                  read more on myths www.health.harvard.edu/
                </p>
              </Zoom>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          overflowX: "hidden",
          margin: "3%",
          borderTop: "1px solid #C0C0C0",
          borderLeft: "1px solid #C0C0C0",
          borderRight: "1px solid #C0C0C0",
          borderBottom: "4px solid #033E3E",
          borderRadius: "6px",
        }}
      >
      </div>

      <div
        style={{
          overflowX: "hidden",
          margin: "3%",
          padding: "2% 4% 3% 3%",
          borderTop: "1px solid #C0C0C0",
          borderLeft: "1px solid #C0C0C0",
          borderRight: "1px solid #C0C0C0",
          borderBottom: "4px solid #033E3E",
          borderRadius: "6px",
        }}
      >
        <Zoom>
          <h2
            className="text-muted"
            style={{ textAlign: "center", textDecoration: "underline" }}
          >
            Know more
          </h2>
          <Row xs={1} sm={2} md={2} xl={4}>
            <Col style={{ marginBottom: "2%" }}>
              <Card
                style={{ width: "18rem", borderBottom: "4px solid #7eb8f2" }}
              >
                <Card.Body className="text-muted">
                  <Card.Title>Heart Disease Related Fears</Card.Title>
                  <Card.Text>
                    You’re likely to be shocked by your near-death experience and
                    extremely hesitant to do the things you used to do.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ marginBottom: "2%" }}>
              <Card
                style={{ width: "18rem", borderBottom: "4px solid #7eb8f2" }}
              >
                <Card.Body className="text-muted">
                  <Card.Title>Stages of Fear</Card.Title>
                  <Card.Text>
                    Most people go through several stages of fear when they are
                    first diagnosed. The stages ..
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ marginBottom: "2%" }}>
              <Card
                style={{ width: "18rem", borderBottom: "4px solid #7eb8f2" }}
              >
                <Card.Body className="text-muted">
                  <Card.Title>Manage Fear</Card.Title>
                  <Card.Text>
                    As you begin gathering information to make decisions, get to
                    know the ..
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ marginBottom: "2%" }}>
              <Card
                style={{ width: "18rem", borderBottom: "4px solid #7eb8f2" }}
              >
                <Card.Body className="text-muted">
                  <Card.Title>Types of Heart Disease </Card.Title>
                  <Card.Text>
                    Coronary Artery Disease (CAD) <br />
                    Heart Arrhythmias<br />
                    Heart Failure . .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ paddingLeft: "47%" }}>
            <Button
              href="https://www.breastcancer.org"
              rel="/notfound"
              target="_blank"
              style={{ backgroundColor: "#7eb8f2", borderColor: "#7eb8f2" }}
            >
              Know More
            </Button>
          </Row>
        </Zoom>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Home;

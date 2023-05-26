import { useRef, useState } from "react";
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap";


function Connexion() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const isVisible = useRef();


  async function Entree() {


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": email,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const reponse = await fetch(
      "https://social-network-api.osc-fr1.scalingo.io/theBlhook/login",
      requestOptions
    );
    const conex = await reponse.json();

    console.log("donnees", conex);
    const token = conex.token;
    localStorage.setItem("token", JSON.stringify(token));


    if (conex.success == false) {
      isVisible.current.style.display = "block";
      localStorage.clear();
    }
    if (conex.success == true) {
      localStorage.removeItem("check");
      window.location = "/";

    }


  }

  return (
    <div className="align-items-center">
      <Container className="d-flex justify-content-center">
        <Row className=" d-flex justify-content-center align-items-center">
          <Col >
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Connexion</h2>
                  <p className=" mb-5">Merci d&apos;entrer votre adresse mail et votre mot de passe </p>
                  <div className="mb-3">
                    <Form >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Adresse E-mail
                        </Form.Label>
                        <Form.Control type="email" onChange={(e) => {
                          setEmail(e.target.value);
                        }} placeholder="Email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Mot de Passe</Form.Label>
                        <Form.Control type="password" onChange={(e) => {
                          setPassword(e.target.value);
                        }} placeholder="Mot de Passe" />
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="success" onClick={Entree}  >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <Alert key="danger" variant="danger" ref={isVisible} style={{ display: 'none' }}>
                      Mauvais Login ou Mot de Passe!
                    </Alert>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Connexion;

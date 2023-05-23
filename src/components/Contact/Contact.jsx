import { Form, Button } from "react-bootstrap"


function Contact() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Votre Nom</Form.Label>
                <Form.Control type="nom" placeholder="Nom" />
                <Form.Label>Votre Prénom</Form.Label>
                <Form.Control type="prenom" placeholder="Prénom" />
                <Form.Label>Votre E-mail</Form.Label>
                <Form.Control type="mailNomailm" placeholder="Mail" />
                <Form.Label>Votre Message</Form.Label>
                <Form.Control type="message" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Envoyer
            </Button>
        </Form>
    )
}



export default Contact
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import TokenStorage from '../components/Connect/StorageToken';
import { useEffect } from 'react';


function Profil() {
    // information du token (StorageToken)
    const [profil, setProfil] = useState([])
    useEffect(() => {
        TokenStorage(setProfil)
    }, [])


    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [occupation, setOccupation] = useState();
    const token = JSON.parse(localStorage.getItem("token"));

    function Modify() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var raw = JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "age": age,
            "occupation": occupation
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://social-network-api.osc-fr1.scalingo.io/theBlhook/user/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    return (
        <div className='flex-column roboto20'>
            <Form >
                <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicEmail">
                    <Form.Label>Votre id</Form.Label>
                    <Form.Control type="text" value={profil._id} disabled />
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" onChange={(e) => { setFirstName(e.target.value) }} defaultValue={profil.firstname} />
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="ltext" onChange={(e) => { setLastName(e.target.value) }} value={profil.lastname} disabled />
                    <Form.Text className="text-muted">
                        Pour modifier votre prénom, merci de contacter votre administrateur.
                    </Form.Text>
                    <Form.Label>Adresse Mail</Form.Label>
                    <Form.Control type="email" onChange={(e) => { setEmail(e.target.value) }} value={profil.email} disabled />
                    <Form.Text className="text-muted">
                        Pour modifier votre adresse e-mail , merci de contacter votre administrateur.
                    </Form.Text>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" onChange={(e) => { setAge(e.target.value) }} defaultValue={profil.age} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control type="text" onChange={(e) => { setOccupation(e.target.value) }} defaultValue={profil.occupation} placeholder="quel est votre occupation?" />
                </Form.Group>
                <Button variant="primary" onClick={Modify} type="submit">
                    Modifier
                </Button>
            </Form>
        </div >)
}

export default Profil
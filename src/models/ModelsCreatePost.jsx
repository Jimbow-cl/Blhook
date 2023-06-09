import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import '../App.css'
import { useEffect, useState } from 'react';
import Post from '../components/post/Post';




function ModelsCP() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [title, setTitle] = useState();
  const [content, setContent] = useState();



  function Publier() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var raw = JSON.stringify({
      "title": title,
      "content": content
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://social-network-api.osc-fr1.scalingo.io/theBlhook/post", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }


  return (
    <Card style={{ width: '70%' }}>
      <Card.Header>Ajouter un post</Card.Header>
      <Card.Body className="d-flex flex-column align-items-sm-center">
        <Card.Title>Titre de votre post</Card.Title>
        <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} default maxLength="10" placeholder="Titre" />
        <Card.Title>Texte</Card.Title>
        <Form.Control type="text" onChange={(e) => setContent(e.target.value)} maxLength="70" placeholder="Votre texte" />
        <Card.Title></Card.Title>
        <Button className="align" style={{ width: '70%' }} variant="success" onClick={Publier}>Publier</Button>
      </Card.Body>
    </Card>
  );
}

export default ModelsCP;
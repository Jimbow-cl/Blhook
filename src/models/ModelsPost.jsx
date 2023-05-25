import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import '../App.css'
import Comment from "./ModelsCreateComment";
import { useEffect, useState, useRef } from "react";
import Post from "../components/post/Post";
import ModelsComment from "./ModelsComment";

function ModelsPost(props) {

    const isConnect = useRef();
    const tokenSet = (localStorage.getItem('token') !== null);

    const [comm, setComm] = useState()

    useEffect(() => {
        Post
    }, []);





    const popover = (
        <Popover id="popover-basic" className="contenairajoutcomm">
            <Popover.Header as="h3" className="titlecomm">Ajoute un commentaire:</Popover.Header>
            <Popover.Body >
                <input type="textarea" className="inputcomm" onChange={(e) => {
                    setComm(e.target.value)
                }} placeholder="Ici votre commentaire" ></input>
                <div className="contenairbtnsend">
                    <button onClick={() => { DisplayComm() }} className="btnsend">Envoyer</button>
                </div>
            </Popover.Body>
        </Popover >
    );

    function DisplayComm() {
        console.log("Envoie de Commentaire en cours...")
        Comment(comm, props.id)
    }



    return (

        <Card className="align" body style={{ width: '450px' }}>
            <Card.Title className="align roboto36bold">{props.title}</Card.Title>
            <Card.Body>
                <Card.Text className="roboto20">
                    {props.post}
                </Card.Text>
                <Card.Footer className="text-muted roboto20">Message de {props.lastname} le {props.date}</Card.Footer>
                <br></br>
                <ModelsComment />
            </Card.Body>
            <div className="btncommdisplay">
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="success" ref={isConnect} type="submit" className="btncomm">Commentaire</Button>
                </OverlayTrigger>
            </div>
        </Card>
    )
}

export default ModelsPost
import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import '../App.css'
import Comment from "./ModelsCreateComment";
import { useEffect, useState, useRef } from "react";
import Post from "../components/post/Post";
import Accordion from 'react-bootstrap/Accordion';

function ModelsPost(props) {

    const isConnect = useRef();
    const tokenSet = (localStorage.getItem('token'));

    const [comm, setComm] = useState()

    useEffect(() => {
        Post
        Connect()
    }, []);




    const popover = (
        <Popover id="popover-basic" className="contenairajoutcomm">
            <Popover.Header as="h3" className="titlecomm">Ajoute un commentaire:</Popover.Header>
            <Popover.Body >
                <input type="textarea" className="inputcomm" maxLength="30" onChange={(e) => {
                    setComm(e.target.value)
                }} placeholder="30 caractères max" ></input>
                <div ref={isConnect} className="contenairbtnsend">
                    <button onClick={() => { DisplayComm() }} className="btnsend">Envoyer</button>
                </div>
            </Popover.Body>
        </Popover >
    );

    function DisplayComm() {
        console.log("Envoie de Commentaire en cours...")
        Comment(comm, props.id)
    }

    function Connect() {
        if (tokenSet) {
            isConnect.current.style.display = "block"
        }
        else { isConnect.current.style.display = "none" }

    }



    return (

        <Card className="align mh" body style={{ width: '450px' }}>
            <Card.Title className="align roboto36bold">{props.title}</Card.Title>
            <Card.Body>
                <Card.Text className="roboto20">
                    {props.post}
                </Card.Text>
                <Card.Footer className="text-muted roboto20">Message de {props.lastname} le {props.date}</Card.Footer>
                <br></br>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Commentaire</Accordion.Header>
                        <Accordion.Body>
                            {props.comments}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
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
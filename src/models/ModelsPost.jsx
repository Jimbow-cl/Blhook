import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import '../App.css'
import Comment from "./ModelsCreateComment";
import { useState } from "react";

function ModelsPost(props) {

    const [comm, setComm] = useState()

    const popover = (
        <Popover id="popover-basic" className="contenairajoutcomm">
            <Popover.Header as="h3" className="titlecomm">Ajoute un commentaire:</Popover.Header>
            <Popover.Body >
                <input type="textarea" className="inputcomm" onChange={(e) => {
                    setComm(e.target.value)
                }} placeholder="Ici votre commentaire" ></input>
                <div className="contenairbtnsend">
                    <button onClick={() => { DisplayComm() }} className="btnsend">Send</button>
                </div>
            </Popover.Body>
        </Popover >
    );

    function DisplayComm() {
        console.log("test")
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
                <h6>Commentaire:</h6>
                <div className="commutilisateur">{props.comments}</div>
            </Card.Body>
            <div className="btncommdisplay">
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="success" type="submit" className="btncomm">Commentaire</Button>
                </OverlayTrigger>
            </div>
        </Card>
    )
}

export default ModelsPost
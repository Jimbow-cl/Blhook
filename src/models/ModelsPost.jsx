import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import '../App.css'
import { useEffect,useState } from "react";

function ModelsPost(props) {
    const [comm, setComm] = useState();
    const [comm2, setComm2] = useState([]);


    
    const btnclick = async() =>{ 
      
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": "bearer token"
            },
            body: JSON.stringify({
                postld: postld,
                content: comm
           
            }),
        };
    

        const reponse = await fetch("https://social-network-api.osc-fr1.scalingo.io/theBlhook/post/comment",options);
       
        const data= await reponse.json();
        console.log(data); 
            
        setComm2  (data );
        console.log(comm2);
    }

    useEffect (()=> { }, []);
    
     
    const popover = (
        <Popover id="popover-basic" className="contenairajoutcomm">
          <Popover.Header as="h3" className="titlecomm">Ajoute un commentaire:</Popover.Header>
          <Popover.Body >
           <input  type="textarea"  className="inputcomm" ></input>
           <div className="contenairbtnsend">
                <button onClick={btnclick} className="btnsend">Send</button>
           </div>
          </Popover.Body>
        </Popover>
      );


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
                <p className="commutilisateur">ici commentaire</p>
            </Card.Body>
            <div className="btncommdisplay">
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="success" className="btncomm">Commentaire</Button>
                </OverlayTrigger>
            </div>
        </Card>
    )
}

export default ModelsPost
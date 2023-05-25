import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import '../App.css'
import { useEffect,useState } from "react";

function ModelsPost(props) {
    const [comm, setComm] = useState();
    const [comm2, setComm2] = useState([]);

    const [like, setLike] = useState(0);
    const [historiqueLike, setHistoriqueLike] = useState([]);

    
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
    
    async function btnLike() {

        const postLike = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer token"
            },
            body: JSON.stringify({
            postId: postId,
            })
            };


            const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/theBlhook/post/like", postLike);
            const data = await response.json()


            
          }

          useEffect (()=> { }, []);

          console.log("ok");
          setLike((like) => like + 1)
          console.log(like)
          //setHistoriqueLike([...historiqueLike, like]);
          //console.log("tableau", historiqueLike);
          setHistoriqueLike(data);
          console.log(historiqueLike)
          const token = historiqueLike.token
          localStorage.setItem("token", JSON.stringify(token))
  
          
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

            {" "}
      <button onClick={btnLike}className="btncomm">👍</button>
      <p>{like}</p>
      <strong>
       

        
      </strong>
     
        </Card>
    )
}

export default ModelsPost
import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import '../App.css'
import { useEffect,useState } from "react";
import Disconnect from "../user/Disconnect";
import Likes from "../components/post/likes";



function ModelsPost(props) {
    const [comm, setComm] = useState();
    const [comm2, setComm2] = useState([]);

    const [like, setLike] = useState(0);
    const [historiqueLike, setHistoriqueLike] = useState([]);
    
    Likes ()
    //const user = JSON.parse(localStorage.getItem("user"));

    //useEffect(() => {
      //TokenStorage(setHistoriqueLike)
 // }, [])

 

    
    const btnclick = async() =>{ 
      
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": "bearer $"
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

    
  async function ajoutLike(){
        let postLike = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer token"
            },

            body: JSON.stringify({
            })
            };
            let response = await fetch("https://social-network-api.osc-fr1.scalingo.io/theBlhook/post/like", postLike);
            console.log(response)
            //accepte url de l'api comme paramètre
            let ul = document.getElementById("like")
            
            .then(response => response.json())
            .this(data=>this.setHistoriqueLike({postld:data.id}))
            console.log(data);

            //si la methode fetch() est resolve càd si promesse bien
            //envoyée alors cette fonction ci dessur contien le
            //code qui permet de trairer les donéees reçues

            //.catch(function() {});
        
            //la méthode catch sert si l'api est défaillante
            //le code catch s'exécute en cas de rejet

            let data = await response.json();
            console.log('test',data);
             setHistoriqueLike(data);
           
            console.log(historiqueLike)
    
     let token = like.token
     localStorage.setItem("token", JSON.stringify(token))

    }

  
    const buttonlike = () => {
      console.log("ok");
      setLike((like) => like + 1)
      console.log(like)
      //setHistoriqueLike([...historiqueLike, like]);
      console.log("tableau", historiqueLike);
     
      ajoutLike()
    
    };
  
     
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
//{user}

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
      <p onClick={buttonlike}className="like">👍</p>

            {" "}
      <p>{like}</p>
     <ul id="like"></ul>
      <strong>
       

        
      </strong>
     
        </Card>
    )
}

export default ModelsPost
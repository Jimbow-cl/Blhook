import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';



function Connexion() {
  const [donnees, setDonnees] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const home = useNavigate('/Profil');

  useEffect(() => { donnees }, [])


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

    setDonnees(conex);
    console.log(donnees);
    const token = donnees.token
    localStorage.setItem("token", JSON.stringify(token));
    Display()

    function Display() {
      if (token != null && token != undefined) {
      }
    }
  }



  return (
    <div>
   <Card className="container" style={{ width: '30rem' }} >
    <h1>Connectez-vous !</h1>

    <Card.Img className="logo" style={{ width: '10rem' }} src="./public/logo/logoBlhook.png" />
    <Card.Body>
   
      <div>
         <label>Email </label>
         <input onChange={(e) => {setEmail(e.target.value);}}/>
       <div>
        <label>Mot de passe </label>
        <input onChange={(e) => {setPassword(e.target.value);}}/>
        <div>
        <button onClick={() => {Entree();}}>
        Connexion
        </button>
        </div>
        </div>  
      
      
          
        
      </div>
  </Card.Body>
</Card>
    </div>
    
  );
}

export default Connexion;

import { useEffect, useState } from "react";
import Home from "../../pages/Home";

function Connexion() {
  const [donnees, setDonnees] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const token ="";

  
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
    token= donnees.token
    localStorage.setItem("token", JSON.stringify(token));
    
    function Display() {
      if (token != null && token != undefined) {
         {Home}
      }
      else {
         
      }
  };
  useEffect(()=>{donnees},[])
  useEffect(()=>{Display},[])
  }



  return (
    <div>
      <div>
        <div>
          <div>
            <label>Email </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Mot de passe </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              onClick={() => {
                Entree();
              }}
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;

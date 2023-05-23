import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


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

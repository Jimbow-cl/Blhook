import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Create.css'


function Create() {


    return (
        <div>

            <div  >
                <Link className="align a " to="/"><Button >Home</Button>{' '}</Link>
            </div>

            <form >
                <Card classname="container" style={{ width: '31rem', margin: "5% 0% 0% 30%" }} >
                    <Card.Img className="logo" style={{ width: '10rem' }} src="./public/logo/logoBlhook.png" />
                    <Card.Body>
                        <div className="input" >
                            <label className="margin">Civilité: <select name="civilité">
                                <option value="Choix"> Choix</option>
                                <option value="Madame"> Madame</option>
                                <option value="Monsieur"> Monsieur</option>
                            </select> </label>


                            <label className="margin">Prénom: <input ></input></label>

                            <label className="margin">Nom: <input ></input></label>

                            <label className="margin">Birthday: <input type="date"></input></label>

                            <label className="margin">Téléphone: <input type="tel"></input></label>

                            <label className="margin">Email: <input type="email"></input></label>

                        </div>
                        <div className="input2">
                            <input type="checkbox"></input><label className="conditions"> Autorise à recevoir des notifications concernant les dernières publications postés.</label>
                            <br></br>
                            <input type="checkbox"></input><label className="conditions"> Autorise la reception de mail emisent par les differents partenaires publicitaires de The Blhook.</label>
                            <br></br>
                            <input type="checkbox"></input><label className="conditions"> j'accepte les termes et conditions d'accées.</label>
                        </div>

                        <br></br>
                        <button className="btnenvoyer">Envoyer</button>

                    </Card.Body>
                </Card>


            </form>


        </div>



    );

}

export default Create
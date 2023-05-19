import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Menu() {


    return (
        <nav>
            <div className="row mt-5">
                <Link className="align a " to="/"><Button className="w-75" variant="warning">Home</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Create"><Button className="w-75" variant="warning">Creer votre compte</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Post"><Button className="w-75" variant="warning">Post</Button>{' '}</Link>
                <Link className="align a" to="/Create"><Button className="w-75" variant="warning">Inscription</Button>{' '}</Link>
            </div>

            <div className="row mt-5 ">
                <Link className="align a" to="/Connect"><Button className="w-75" variant="success">Connexion</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Profil"><Button className="w-75" variant="primary">Profil</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Disconnect"><Button className="w-75" variant="danger">Déconnexion</Button>{' '}</Link>
            </div>

            <div className="row mt-5 ">
            </div>
            <div className="row mt-5 ">
            </div>
            <div className="row mt-5 ">
            </div>

            <div className="row mt-5 ">
                <Link className="align a" to="/Disconnect"><Button className="w-75" variant="info">Nous contacter</Button>{' '}</Link>
            </div>

        </nav>
    )
}

export default Menu
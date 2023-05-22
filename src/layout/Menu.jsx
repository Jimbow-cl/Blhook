import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useEffect, useRef } from "react";
import Disconnect from "../user/Disconnect";

function Menu() {
    const create = useRef()
    const connect = useRef()
    const profil = useRef()
    const disconnect = useRef()
    const token = JSON.parse(localStorage.getItem("token"));

    function Display() {
        if (token != null) {
            create.current.style.display = "none";
            connect.current.style.display = "none";
            profil.current.style.display = "block";
            disconnect.current.style.display = "block";
        }
        else {
            create.current.style.display = "block";
            connect.current.style.display = "block";
            profil.current.style.display = "none";
            disconnect.current.style.display = "none";

        }
    };
    useEffect(() => { Display() }, [])
    return (
        <nav>
            <div className="row mt-5">
                <Link className="align a " to="/"><Button className="w-75" variant="warning">Home</Button>{' '}</Link>
            </div>
            <div className="row mt-5 " >
                <Link className="align a" to="/Create"><Button ref={create} className="w-75" variant="warning">Creer votre compte</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Post"><Button className="w-75" variant="warning">Post</Button>{' '}</Link>
            </div>

            <div className="row mt-5 ">
                <Link className="align a" to="/Connect"><Button ref={connect} className="w-75" variant="success">Connexion</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Profil"><Button ref={profil} className="w-75" variant="primary">Profil</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Disconnect"><Button ref={disconnect} className="w-75" onClick={Disconnect} variant="danger">Déconnexion</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
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
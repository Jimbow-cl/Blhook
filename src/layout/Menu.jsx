import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import { useEffect, useRef } from "react";
import Disconnect from "../user/Disconnect";

function Menu() {
    const create = useRef()
    const connect = useRef()
    const profil = useRef()
    const vosposts = useRef()
    const vosposts2 = useRef()
    const disconnect = useRef()
    const token = JSON.parse(localStorage.getItem("token"));

    function Display() {
        if (token != null) {
            create.current.style.display = "none";
            connect.current.style.display = "none";
            profil.current.style.display = "block";
            disconnect.current.style.display = "block";
            vosposts.current.style.display = "block";
            vosposts2.current.style.display = "none";
        }
        else {
            create.current.style.display = "block";
            connect.current.style.display = "block";
            profil.current.style.display = "none";
            disconnect.current.style.display = "none";
            vosposts.current.style.display = "none";
            vosposts2.current.style.display = "block";


        }
    };
    useEffect(() => { Display() }, [])
    return (
        <nav>
            <div className="row mt-5">
                <Link className="align a " to="/"><Button className="w-75" variant="warning">Home</Button>{' '}</Link>
            </div>
            <div className="row mt-5 " >
                <Link className="align a" to="/Create"><Button ref={create} className="w-75" variant="primary">Creer votre compte</Button>{' '}</Link>
                <Link className="align a" to="/Profil"><Button ref={profil} className="w-75" variant="primary">Profil</Button>{' '}</Link>

            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Post"><Button className="w-75" variant="warning">Post'Book</Button>{' '}</Link>
            </div>

            <div className="row mt-5 ">
                <Link className="align a" to="/ConnectPost"><Button ref={vosposts} className="w-75" variant="warning">Vos Posts</Button>{' '}</Link>
                <Link className="align a" to="/"><Button ref={vosposts2} className="w-75" variant="warning">Lorem Ipsum</Button>{' '}</Link>

            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Profil"><Button className="w-75" variant="primary">Profil</Button>{' '}</Link>
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
            </div>

            <div className="row mt-5 ">
                <Link className="align a" to="/Contact"><Button className="w-75" variant="info">Nous contacter</Button>{' '}</Link>
            </div>

        </nav>
    )
}

export default Menu
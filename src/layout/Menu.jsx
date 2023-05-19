import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Menu() {


    return (
        <nav>
            <div className="row mt-5">
                <Link className="align a " to="/"><Button className="w-75" variant="warning">Home</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Login"><Button className="w-75" variant="warning">Login</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Create"><Button className="w-75" variant="warning">Inscription</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Login"><Button className="w-75" variant="warning">Login</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Login"><Button className="w-75" variant="warning">Login</Button>{' '}</Link>
            </div>
            <div className="row mt-5 ">
                <Link className="align a" to="/Login"><Button className="w-75" variant="warning">Login</Button>{' '}</Link>
            </div>
        </nav>
    )
}

export default Menu
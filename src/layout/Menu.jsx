import { Link } from "react-router-dom";
function Menu() {

    return (
        <nav>

            <Link to="/"><button>Home</button></Link>
            <Link to="/Login"><button>Vide1</button></Link>

        </nav>
    )
}

export default Menu
import Accordion from 'react-bootstrap/Accordion';

function ModelsComment(props) {

    return (
        <Accordion.Body>
            <h6>Commentaire:</h6>
            <div className="commutilisateur d-flex flex-column">
                <span className="roboto20"><img className="mx-5" src="src/assets/icon/man.png" style={{ width: "20px" }} />{props.firstname}</span>
                <span><img className="mx-5" src="src/assets/icon/note.png" style={{ width: "20px" }} />{props.content}</span>
                <span className="roboto20"> <img className="mx-5" src="src/assets/icon/like.png" style={{ width: "20px" }} />{props.likes}</span>
            </div>
        </Accordion.Body>
    )

}

export default ModelsComment
function ModelsComment(props) {

    return (
        <div>
            <h6>Commentaire:</h6>
            <div className="commutilisateur">
                <p>de : {props.firstname}</p>
                <p>Com :{props.content}</p>
                <p>Likes: {props.likes}</p>
            </div>
        </div>
    )

}

export default ModelsComment
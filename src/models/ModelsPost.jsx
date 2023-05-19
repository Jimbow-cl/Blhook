import { Card } from "react-bootstrap"

function ModelsPost(props) {

    return (

        <Card className="align" body style={{ width: '400px' }}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Img variant="top" style={{ width: '150px' }} src='./public/logo/logoBlhook.png' />
            <Card.Body>
                <Card.Text>
                    {props.post}
                </Card.Text>
                <Card.Footer className="text-muted">Message de {props.lastname}</Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default ModelsPost
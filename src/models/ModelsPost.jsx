import { Card } from "react-bootstrap"

function ModelsPost(props) {

    return (

        <Card body style={{ width: '400px' }}>

            <Card.Img variant="top" src='./public/logo/logoBlhook.png' />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {props.post}
                </Card.Text>
                <Card.Footer className="text-muted">page {props.page} sur {props.totalPages}</Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default ModelsPost
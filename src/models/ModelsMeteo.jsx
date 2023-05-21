import Card from 'react-bootstrap/Card';


function Models(props) {
    let image = `public/iconMeteo/${props.weather}.svg`


    return (
        <div className='d-flex align'  >

            <Card style={{ width: '38rem' }} >
                <Card.Img style={{ width: '200px' }} variant="top" className="weather" src={image} />
                <Card.Body>
                    <Card.Title className="roboto36 bold">{props.city}</Card.Title>
                    <Card.Text className="roboto20">Temperature de l'après-midi: {props.tmax}°C</Card.Text>
                    <Card.Text className="roboto20">Temperature du Matin: {props.tmin}°C</Card.Text>
                    <Card.Text className="roboto20">Vitesse du vent : {props.wind10m} km/h</Card.Text>
                    <Card.Text className="roboto20"> Précipitation {props.probarain} % mètres</Card.Text>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted roboto20">{props.datetime}</small>
                </Card.Footer>
            </Card>
        </div >
    )

}

export default Models
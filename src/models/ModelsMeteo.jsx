import Card from 'react-bootstrap/Card';


function ModelsMeteo(props) {
    let time = `Météo  du : ${props.dt_txt}`
    let image = `https://openweathermap.org/img/wn/${props.icon}.png`

    return (
        <div  >

            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" className="weather" src={image} />
                <Card.Body>
                    <Card.Title>{time}</Card.Title>
                    <Card.Text>
                        <p >Temperature de l'après-midi: {props.temp_max}°C</p>
                        <p>Temperature du Matin: {props.temp_min}°C </p>
                        <p >Vitesse du vent : {props.speed} km/h</p>
                        <p>Visibilité {props.visibility} mètres</p>
                        <p>{props.description}</p>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>


        </div >
    )

}

export default ModelsMeteo
import ModelsMeteo from "../../models/ModelsMeteo";
import { useState, useEffect } from "react";

function Meteo() {

    const [meteo, setMeteo] = useState([]);


    async function Meteo1() {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=43.70&lon=7.27&units=metric&lang=fr&appid=48e51318a2fe8630fa5b92fae26ea42b

        `);
        console.log('reponse meteo', response);
        let donnees = await response.json();
        console.log('données meteo', donnees.list);
        setMeteo(donnees.list)

    }
    useEffect(() => { Meteo1() }, []);
    const RenderMyArray = () => {
        return meteo.map((item, id) => {

            return (
                <div>
                    <ModelsMeteo key={id} dt_txt={item.dt_txt} description={item.weather[0].description} visibility={item.visibility} icon={item.weather[0].icon} temp_min={item.main.temp_min} temp_max={item.main.temp_max} speed={item.wind.speed} />
                </div>
            );
        }
        );

    };
    return (
        <div className='d-flex weather'> <RenderMyArray /></div>

    )

};

export default Meteo
import { useEffect, useState } from "react";
import Models from "../../models/ModelsMeteo";
import moment from 'moment';
import 'moment/dist/locale/fr';
import 'moment/locale/fr';


//meteo

function Meteo() {

    const [meteo, setMeteo] = useState([]);


    async function Meteo1() {
        let response = await fetch("https://api.meteo-concept.com/api/forecast/daily/0?token=94b3abb204b7ca08be81516641cbdef7f3ca3d2f08766871f3a4e4c56b40f464&insee=06088");
        let donnees = await response.json();
        console.log('données', donnees);
        setMeteo([donnees]);
    };

    useEffect(() => { Meteo1() }, []);

    const RenderMyArray = () => {
        console.log('meteo', meteo);
        return meteo.map((item) => {
            return (
                <div>
                    <Models key={item.city.insee} datetime={moment(item.forecast.datetime).format("LL")} city={item.city.name} wind10m={item.forecast.wind10m} probarain={item.forecast.probarain} weather={item.forecast.weather} tmin={item.forecast.tmin} tmax={item.forecast.tmax} />
                </div>
            );
        }
        );

    };
    return (
        <div className='d-flex weather align'> <RenderMyArray /></div>

    )

};

export default Meteo
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';
import Menu from "./layout/Menu"
import Timer from "./components/timer/Timer";
import Meteo from "./components/weather/Weather";


function Home() {


    return (

        <div className="container-fluid vh-100">
            {/*Header*/}
            <div className='row lh-50 bkgColorGrey'>
                <header>
                    <div className='row'>
                        {/*Logo The Blhook*/}
                        <div className='col-2 lh-50 align gap-5 colorWhite roboto36'><img className='lh-41' src='./public/logo/logoBlhook.png' /><p>The Blhook</p></div>
                        <div className='col-3 lh-50'></div>
                        <div className='col-3 lh-50 align gap-5 colorWhite roboto36'><p> Nous sommes le {moment().format('LLL')}  </p></div>
                        <div className='col-3 lh-50 align gap-5 colorWhite roboto36' id="timer"> <Timer /></div>
                        <div className='col-1 lh-50 align gap-5 ' id="timer"><img src="./public/icon/delog orange.png" /></div>

                    </div>

                </header>
            </div>
            <div className='row '>
                {/*Colonne de Gauche, Menu*/}
                <div className="col-2 h945 colorWhite  bkgColorBlack  ">
                    <div className="row m-3 align roboto36 borderb">
                        <p className='align'>Menu</p>
                    </div>
                    <Menu />

                </div>
                {/*Colonne de Droite, Contenu*/}
                <div className='col-10 bkgColorBisque'>
                    <div className="row lh-50"></div>
                    <div className="row lh-50"></div>

                    <div className="row h-100">
                        <Meteo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
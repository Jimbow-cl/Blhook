import TokenStorage from "../components/Connect/StorageToken";
import Header from "../models/Header";
import Meteo from "../components/weather/Weather";
import Menu from "../layout/Menu";

function Connect() {
    TokenStorage()

    return (

        <div className="container-fluid ">
            {/*Header*/}
            <Header />
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

                    <div className="row">
                        <Meteo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connect
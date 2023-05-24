import Menu from "../layout/Menu"
import Meteo from "../components/weather/Weather";
import Header from "../models/Header";
import LocalStorage from "../components/storage/LocalStorage";




function Home() {
    const tokenSet = (localStorage.getItem('token') !== null);

    if (tokenSet) {
        LocalStorage()
    }



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

export default Home
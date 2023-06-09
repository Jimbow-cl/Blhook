import Menu from "../layout/Menu"
import Meteo from "../components/weather/Weather";
import Header from "../models/ModelsHeader";
import LocalStorage from "../components/storage/LocalStorage";
import Footer from "../models/ModelsFooter";


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
                <Menu />
                {/*Colonne de Droite, Contenu*/}
                <div className='col-10 bkgColorBisque'>
                    <div className="row h-10"></div>
                    <div className="row"></div>

                    <div className="row">
                        <Meteo />
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
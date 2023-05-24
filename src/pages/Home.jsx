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

        <div className="container-fluid vh-100 ">
            {/*Header*/}
            <Header />

            <div className='row h945 '>
                {/*Colonne de Gauche, Menu*/}
                <Menu />
                {/*Colonne de Droite, Contenu*/}
                <div className='col-10 bkgColorBisque'>
                    <div className="row lh-50"></div>
                    <div className="row lh-50"></div>

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
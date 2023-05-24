import Menu from "../layout/Menu";
import Header from "../models/ModelsHeader";
import Profil from "../user/Profil";
import Footer from "../models/ModelsFooter";

function PageProfil() {


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
                        <Profil />
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PageProfil
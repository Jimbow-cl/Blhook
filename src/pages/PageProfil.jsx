import Menu from "../layout/Menu";
import Header from "../models/ModelsHeader";
import Profil from "../user/Profil";
import Footer from "../models/ModelsFooter";

function PageProfil() {


    return (

        <div className="container-fluid">
            {/*Header*/}
            <Header />

            <div className='row'>
                {/*Colonne de Gauche, Menu*/}
                <Menu />
                {/*Colonne de Droite, Contenu*/}
                <div className='col-10 bkgColorBisque'>
                    <div className="row"></div>
                    <div className="row"></div>

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
import Menu from "../layout/Menu"
import Header from "../models/ModelsHeader";
import Contact from "../components/Contact/Contact";

function PageContact() {

    return (

        <div className="container-fluid ">
            {/*Header*/}
            <Header />
            <div className='row '>
                {/*Colonne de Gauche, Menu*/}
                <Menu />
                {/*Colonne de Droite, Contenu*/}
                <div className='col-10 bkgColorBisque'>
                    <div className="row lh-50"></div>
                    <div className="row lh-50 roboto36 align ">Contactez-nous!</div>
                    <div className="row lh-50"></div>
                    <div className="row h-100">
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PageContact
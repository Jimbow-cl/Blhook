import Menu from "../layout/Menu"
import Header from "../models/ModelsHeader";
import Contact from "../components/Contact/Contact";
import Footer from "../models/ModelsFooter";

function PageContact() {

    return (

        <div className="container-fluid">
            {/*Header*/}
            <Header />

            <div className='row  '>
                {/*Colonne de Gauche, Menu*/}
                <Menu />
                {/*Colonne de Droite, Contenu*/}
                <div className='col-10 bkgColorBisque'>
                    <div className="row"></div>
                    <div className="row"></div>

                    <div className="row">
                        <Contact />
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )

}

export default PageContact
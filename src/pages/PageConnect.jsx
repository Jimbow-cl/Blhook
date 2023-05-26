import Header from "../models/ModelsHeader";
import Menu from "../layout/Menu";
import Connexion from "../user/Connect";
import Footer from "../models/ModelsFooter";

function PageConnect() {


  return (
    <div className="container-fluid  ">
      {/*Header*/}
      <Header />

      <div className='row '>
        {/*Colonne de Gauche, Menu*/}
        <Menu />
        {/*Colonne de Droite, Contenu*/}
        <div className='col-10 bkgColorBisque'>
          <div className="row"></div>
          <div className="row"></div>

          <div className="row">
            <Connexion />
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PageConnect;

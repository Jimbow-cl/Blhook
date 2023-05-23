import TokenStorage from "../components/Connect/StorageToken";
import Header from "../models/Header";
import Menu from "../layout/Menu";
import Connexion from "../components/Connect/Connect";

function PageConnect() {
  TokenStorage();

  return (
    <div className="container-fluid ">
      {/*Header*/}
      <Header />
      <div className="row ">
        {/*Colonne de Gauche, Menu*/}
        <div className="col-2 h945 colorWhite  bkgColorBlack  ">
          <div className="row m-3 align roboto36 borderb">
            <p className="align">Menu</p>
          </div>
          <Menu />
        </div>
        {/*Colonne de Droite, Contenu*/}
        <div className="col-10 bkgColorBisque">
          <div className="row lh-50"></div>
          <div className="row lh-50"></div>

          <div className="row">
            <Connexion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageConnect;

import Menu from "../layout/Menu";
import Header from "../models/Header";
import ConnectPost from "../components/post/ConnectPost";
import ModelsCP from "../models/ModelsCreatePost";
import '../App.css'


function PageConnectPost() {


    return (

        <div className="container-fluid vh-100">
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
                    <div className="publierunpost">Publier un post</div>
                    <div className="row m-bb"><ModelsCP /></div>
                    <div className="row  overflow ">
                        <ConnectPost />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageConnectPost
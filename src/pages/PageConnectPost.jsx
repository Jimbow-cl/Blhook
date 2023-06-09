import Menu from "../layout/Menu";
import Header from "../models/ModelsHeader";
import ConnectPost from "../components/post/ConnectPost";
import ModelsCP from "../models/ModelsCreatePost";
import Footer from "../models/ModelsFooter";
import '../App.css'


function PageConnectPost() {


    return (

        <div className="container-fluid ">
            {/*Header*/}
            <Header />
            <div className='row '>
                {/*Colonne de Gauche, Menu*/}
                <Menu />
                {/*Colonne de Droite, Contenu*/}
                <div className='col-10 bkgColorBisque'>
                    <div className="publierunpost">Publier un post</div>
                    <div className="row align m-bb"><ModelsCP /></div>
                    <div className="row   ">
                        <ConnectPost />
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PageConnectPost
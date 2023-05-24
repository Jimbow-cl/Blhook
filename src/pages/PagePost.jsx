import Menu from "../layout/Menu"
import Header from "../models/ModelsHeader";
import Post from "../components/post/Post";


function PagePost() {


    return (

        <div className="container-fluid vh-100">
            {/*Header*/}
            <Header />
            <div className='row '>
                {/*Colonne de Gauche, Menu*/}
                <Menu />
                {/*Colonne de Droite, Contenu*/}
                <div className='col-10 bkgColorBisque'>
                    <div className="row lh-50"></div>
                    <div className="row lh-50 roboto36 align "> Post&apos;Book</div>
                    <div className="row lh-50"></div>
                    <div className="row overflow">
                        <Post />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagePost
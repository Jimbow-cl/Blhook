import Menu from "./layout/Menu"
import Header from "./models/Header";
import Post from "./components/post/Post";


function PagePost() {


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
                    <div className="row lh-50"></div>
                    <div className="row lh-50 roboto36 align "> Post'Book</div>
                    <div className="row lh-50"></div>
                    <div className="row h-100">
                        <Post />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagePost
import Timer from "../components/timer/Timer"
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';
import { useEffect } from "react";


function Header() {
    // information du localStorage
    let user = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        user

    },)





    return (

        <div className='row lh-50 bkgColorOrange '>
            <header>
                <div className='row'>
                    {/*Logo The Blhook*/}
                    <div className='col-2 lh-50 align gap-5 colorGrey roboto36'><img className='lh-41' src='./public/logoBlhook.png' /><p>The Blhook</p></div>
                    <div className='col-2 lh-50 colorGrey roboto36 d-flex justify-content-end'><p>Bienvenue</p></div>
                    <div className='col-1 lh-50  colorGrey roboto36'>{user}</div>
                    <div className='col-4 lh-50 align gap-5 colorGrey roboto36'><p> Nous sommes le {moment().format('LL')}  </p></div>
                    <div className='col-3 lh-50 align gap-5 ccolorGrey roboto36' id="timer"> <Timer /></div>

                </div>

            </header>
        </div>

    )
}

export default Header 
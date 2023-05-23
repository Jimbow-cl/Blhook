import Timer from "../components/timer/Timer"
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';
import TokenStorage from "../components/Connect/StorageToken";
import { useEffect, useState } from "react";


function Header() {
    // information du token (StorageToken)
    const token = JSON.parse(localStorage.getItem("token"));
    const [user, setUser] = useState([]);
    if (token != null) {
        useEffect(() => {
            TokenStorage(setUser)
        }, [])

    }
    else {
        useEffect(() => {
            setUser({ "firstname": "!" })
        }, [])

    }


    return (

        <div className='row lh-50 bkgColorGrey'>
            <header>
                <div className='row'>
                    {/*Logo The Blhook*/}
                    <div className='col-2 lh-50 align gap-5 colorWhite roboto36'><img className='lh-41' src='./public/logo/logoBlhook.png' /><p>The Blhook</p></div>
                    <div className='col-2 lh-50 colorWhite roboto36 d-flex justify-content-end'><p>Bienvenue</p></div>
                    <div className='col-1 lh-50  colorWhite roboto36'>{user.firstname}</div>
                    <div className='col-4 lh-50 align gap-5 colorWhite roboto36'><p> Nous sommes le {moment().format('LL')}  </p></div>
                    <div className='col-3 lh-50 align gap-5 colorWhite roboto36' id="timer"> <Timer /></div>

                </div>

            </header>
        </div>

    )
}

export default Header 
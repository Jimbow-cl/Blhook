import Timer from "../components/timer/Timer"
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';


function Header() {

    return (

        <div className='row lh-50 bkgColorGrey'>
            <header>
                <div className='row'>
                    {/*Logo The Blhook*/}
                    <div className='col-2 lh-50 align gap-5 colorWhite roboto36'><img className='lh-41' src='./public/logo/logoBlhook.png' /><p>The Blhook</p></div>
                    <div className='col-3 lh-50'></div>
                    <div className='col-3 lh-50 align gap-5 colorWhite roboto36'><p> Nous sommes le {moment().format('LLL')}  </p></div>
                    <div className='col-3 lh-50 align gap-5 colorWhite roboto36' id="timer"> <Timer /></div>
                    <div className='col-1 lh-50 align gap-5 ' id="timer"><img src="./public/icon/delog orange.png" /></div>

                </div>

            </header>
        </div>

    )
}

export default Header 
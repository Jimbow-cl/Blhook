import Timer from "../components/timer/Timer"
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';


function Header() {





    return (

        <div className='row pding-13  bkgColorBlack   '>
            <header>
                <div className='row'>
                    {/*Logo The Blhook*/}
                    <div className='col-2  align  colorWhite roboto36'><img className='lh-41' src='./public/logoBlhook.png' /><p>The Blhook</p></div>
                    <div className='col-3  align  colorWHite roboto36'></div>
                    <div className='col-4  align  colorWhite roboto36'><p> Nous sommes le {moment().format('LL')}  </p></div>
                    <div className='col-3  align  colorWhite roboto36' id="timer"> <Timer /></div>

                </div>

            </header>
        </div>

    )
}

export default Header 
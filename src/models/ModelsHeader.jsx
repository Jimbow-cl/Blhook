import Timer from "../components/timer/Timer"
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';


function Header() {





    return (

        <div className='row  d-flex bkgColorOrange '>
            <header>
                <div className='row'>
                    {/*Logo The Blhook*/}
                    <div className='col-2  align  colorGrey roboto36'><img className='lh-41' src='./public/logoBlhook.png' /><p>The Blhook</p></div>
                    <div className='col-4  align  colorGrey roboto36'></div>
                    <div className='col-3  align  colorGrey roboto36'><p> Nous sommes le {moment().format('LL')}  </p></div>
                    <div className='col-3  align  ccolorGrey roboto36' id="timer"> <Timer /></div>

                </div>

            </header>
        </div>

    )
}

export default Header 
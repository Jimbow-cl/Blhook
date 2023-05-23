import moment from 'moment';
import 'moment/dist/locale/fr';
import 'moment/locale/fr';

function Timer() {
    var UpdatesTheTime = () => {
        const time = moment().format('LTS');
        //document.getElementById("timer").innerHTML = `<p> Il est ${time} </p>`;

    }
    setInterval(UpdatesTheTime, 1000);
}


export default Timer
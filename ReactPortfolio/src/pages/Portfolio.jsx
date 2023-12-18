import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';

function Portfolio(){
    return(
        <div className="cont">
        <a href="https://shindekokoro.github.io/concert-groupie/"><img src={one} alt="Concert Groupie" className='img'/></a>
        <a href="https://propplanner-production.up.railway.app/"><img src={two} alt="PropPlanner" className='img'/></a>
        <a href="https://parent-connect-production.up.railway.app/"><img src={three} alt="Parent Connect" className='img' /></a>
        </div>
    )
}
export default Portfolio
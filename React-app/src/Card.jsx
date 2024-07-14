import Cardpic from './assets/Cardpic.gif'

function Card(){
return(
    <div className="card">
        <img className="card-image" src={Cardpic} alt="" />
<h2 className="card-title">Joy Khanna</h2>
<p>IT undergrad MUJ</p>


    </div>
)

}

export default Card;
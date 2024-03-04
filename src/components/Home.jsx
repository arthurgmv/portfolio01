import "./HomeStyle.css";
import Ninja from "../assets/leNinja.png"
export default function Home(){
    return(
        <div className="mainText">
            <p>Welcome to </p>
            <p className="name">Arthur Gabriel</p>
            <p>Full Stack Developer <span>Page</span></p><br/>
            <img src={Ninja} alt="Ninja" className="ninjaImage" />

        </div>
    )

}

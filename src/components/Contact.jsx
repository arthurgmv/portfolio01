import "./Contact.css"
import BlackBelt from "../assets/blackBelt.png"
export default function Contact(){
    return(
        <div id="contact"><br/>
            <h2>Contact:</h2><br/>
            <p>Email: arthurgabrielmv@gmail.com</p>
            <a href="https://www.linkedin.com/in/arthur-gabriel-de-menezes-viana-1223a6239/" target="_blank" rel="noreferrer">Linkedin</a><br/>
            <a href="https://github.com/arthurgmv" target="_blank" rel="noreferrer">Github</a>
            <p>Phone Number (Whatsapp): 55+ 15 998455468 </p>
            <img src={BlackBelt} alt="black belt"/>

        </div>
    )
}
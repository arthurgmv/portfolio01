import gas from "../assets/projects/gas.jpg"
import ralph from "../assets/projects/Ralph.jpg"
import drum from "../assets/projects/drum.jpg"
import dice from "../assets/projects/click.jpg"
import memory from "../assets/projects/memory.jpg"
import age from "../assets/projects/age.jpg"
import conv from "../assets/projects/conversorMoeda.png"
import "./projects.css"
export default function Projects(){
    return(
        <div>
            <br/>
            <div className="projetinhos">
                <h2>Projects</h2><br/><br/>
                <div className="gas-alc">
                    <h3>Gasoline vs Ethanol calculator</h3>
                    <p>Description:<br/>A simple calculator that shows
                    weather or not is better to fill the tank with gasoline</p>
                    <p>Technologies used: <strong>React-Vite, TypeScript and CSS3 </strong></p>
                    <p>Click on the image to access the website</p><br/>
                    <a href="https://calculadora-gas-alcool.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={gas} className="p-img" alt="website image"/>
                    </a><br/>
                </div><br/>

                <div className="ConversorMoeda">
                    <h3>Real to Dollar / Dollar to Real Converter</h3>
                    <p>Description:<br/>A web application that converts Brazilian real to US dollars and US dollars to Brazilian real using an API from the Central Bank of Brazil.</p>
                    <p>Technologies used: <strong>PHP, HTML, CSS and JavaScript(ES6) </strong></p>
                    <p>Click on the image to access the website</p>
                    <p>OBS: To better visualize, please rotate your mobile device horizontally.</p><br/>
                    <a href="https://conversor-git-3ce4b4-arthur-gabriel-de-menezes-vianas-projects.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={conv} className="p-img" alt="website image" />
                    </a>
                </div><br/>

                <div className="ralph">
                    <h3>Ralph Game</h3>
                    <p>Description:<br/> A game where you need to click on Ralph as many times as you can
                    before the time ends.</p>
                    <p>Technologies used: <strong>JavaScript(ES6), HTML5 and CSS3</strong></p>
                    <p>Click on the image to access the website</p><br/>
                    <a href="https://arthurgmv.github.io/detonoaralph_jogo/" target="_blank" rel="noreferrer"> <img src={ralph} className="p-img" alt="website image"/> </a>
                </div><br/>

                <div className="Drum Kit">
                    <h3>Drum Kit</h3>
                    <p>Description:<br/> A simple drum simulator where you can make the sounds by clikcing or pressing the correct keys</p>
                    <p>Technologies used: <strong>JavaScript(ES6), HTML5 and CSS3</strong></p>
                    <p>Click on the image to access the website</p><br/>
                    <a href="https://arthurgmv.github.io/VirtualDrums/" target="_blank" rel="noreferrer"><img src={drum} alt="website image" className="p-img"/></a>
                </div><br/>
                <div className="Dice">
                    <h3>Dice Game</h3>
                    <p>Description:<br/> CLick on the "Click me" to see who is the winner</p>
                    <p>Technologies used <strong>JavaScript(ES6), HTML5 and CSS3</strong></p>
                    <p>Click on the image to access the website</p><br/>
                    <a href="https://arthurgmv.github.io/superdicegame/" target="_blank" rel="noreferrer"><img src={dice} alt="website image" className="p-img"/></a>
                </div><br/>

                <div className="Memory">
                    <h3>Emoji Memory Game</h3>
                    <p>Description:<br/> An emoji memory game</p>
                    <p>Technologies used <strong>JavaScript(ES6), HTML5 and CSS3</strong></p>
                    <p>Click on the image to access the website</p><br/>
                    <a href="https://arthurgmv.github.io/JogoDaMemoria/" target="_blank" rel="noreferrer"><img src={memory} className="p-img" alt="website image"/></a>
                </div><br/>

                <div className="Age">
                    <h3>Age Verifier</h3>
                    <p>Description:<br/> You write the year of birth and the website will give you the age</p>
                    <p>Technologies used<strong>JavaScript(ES6), HTML5 and CSS3</strong></p>
                    <p>Click on the image to access the website</p><br/>
                    <a href="https://arthurgmv.github.io/detectordeidade/" target="_blank" rel="noreferrer"><img src={age} className="p-img" alt="website image"/></a>

                </div><br/>


            </div>
            <br/><br/><br/><br/>
        </div>
    )
}
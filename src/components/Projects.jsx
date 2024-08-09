import gas from "../assets/projects/gas.jpg";
import ralph from "../assets/projects/Ralph.jpg";
import drum from "../assets/projects/drum.jpg";
import dice from "../assets/projects/click.jpg";
import memory from "../assets/projects/memory.jpg";
import age from "../assets/projects/age.jpg";
import conv from "../assets/projects/conversorMoeda.png";
import angBlog from "../assets/projects/AngularBlog.jpg";
import travel from "../assets/projects/SuperTopViagens.jpg";
import psClone from "../assets/projects/psclone.jpg";
import lgPage from "../assets/projects/loginsignup.jpg";
import notes from "../assets/projects/notesApp.jpg";
import "./projects.css";

export default function Projects() {
    return (
        <div>
            <br />
            <div className="projetinhos">
                <h2>Projects</h2>
                <br/><br/>

                <div className="lgPage">
                    <h3>Login and Signup </h3>
                    <p>Description:<br/>A login and signup page with form validation and password security checks</p>
                    <p>Technologies used: <strong>Angular, TypeScript, and CSS3</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://log-in-sign-up-black.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={lgPage} className="p-img" alt="Login Page"/>
                    </a>
                    <br/>
                </div>
                <br/>

                <div className="gas-alc">
                    <h3>Gasoline vs Ethanol calculator</h3>
                    <p>Description:<br/>A simple calculator that shows whether or not it is better to fill the tank with
                        gasoline</p>
                    <p>Technologies used: <strong>React-Vite, TypeScript, and CSS3</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://calculadora-gas-alcool.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={gas} className="p-img" alt="Gasoline vs Ethanol calculator"/>
                    </a>
                    <br/>
                </div>
                <br/>

                <div className="note">
                    <h3>My Note App </h3>
                    <p>Description:<br/>A note/memo page</p>
                    <p>Technologies used: <strong>React, JavaScript, and CSS3</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://notes-five-jade.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={notes} className="p-img" alt="Login Page"/>
                    </a>
                    <br/>
                </div>
                <br/>

                <div className="psStore">
                    <h3>Playstation Store Clone</h3>
                    <p>Description:<br/>A Playstation Store design clone made using Angular 17 (standalone components)
                    </p>
                    <p>Technologies used: <strong>Angular, TypeScript, and CSS3</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://ps-store-clone-xi.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={psClone} className="p-img" alt="Playstation Store Clone"/>
                    </a>
                    <br/>
                </div>
                <br/>

                <div className="Travel">
                    <h3>Travel Agency</h3>
                    <p>Description:<br/>A web application of a Travel Agency</p>
                    <p>Technologies used: <strong>Angular, TypeScript, CSS3, and Bootstrap</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://super-top-viagens.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={travel} className="p-img" alt="Travel Agency"/>
                    </a>
                </div>
                <br/>

                <div className="ConversorMoeda">
                    <h3>Real to Dollar / Dollar to Real Converter</h3>
                    <p>Description:<br/>A web application that converts Brazilian real to US dollars and US dollars to
                        Brazilian real using an API from the Central Bank of Brazil.</p>
                    <p>Technologies used: <strong>PHP, HTML, CSS, and JavaScript (ES6)</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://conversor-git-3ce4b4-arthur-gabriel-de-menezes-vianas-projects.vercel.app/"
                       target="_blank" rel="noreferrer">
                        <img src={conv} className="p-img" alt="Currency Converter"/>
                    </a>
                </div>
                <br/>

                <div className="Blog">
                    <h3>A Blog sampler built with Angular</h3>
                    <p>Description:<br/>A Blog made with Angular with post samples.</p>
                    <p>Technologies used: <strong>Angular, TypeScript, and CSS3</strong></p>
                    <br/>
                    <a href="https://blog-com-angular-8s4fncst6.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={angBlog} className="p-img" alt="Angular Blog"/>
                    </a>
                </div>
                <br/>

                <div className="ralph">
                    <h3>Ralph Game</h3>
                    <p>Description:<br/>A game where you need to click on Ralph as many times as you can before the time
                        ends.</p>
                    <p>Technologies used: <strong>JavaScript (ES6), HTML5, and CSS3</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://arthurgmv.github.io/detonoaralph_jogo/" target="_blank" rel="noreferrer">
                        <img src={ralph} className="p-img" alt="Ralph Game"/>
                    </a>
                </div>
                <br/>

                <div className="Drum Kit">
                    <h3>Drum Kit</h3>
                    <p>Description:<br/>A simple drum simulator where you can make the sounds by clicking or pressing
                        the correct keys</p>
                    <p>Technologies used: <strong>JavaScript (ES6), HTML5, and CSS3</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://arthurgmv.github.io/VirtualDrums/" target="_blank" rel="noreferrer">
                        <img src={drum} className="p-img" alt="Drum Kit"/>
                    </a>
                </div>
                <br/>

                <div className="Dice">
                    <h3>Dice Game</h3>
                    <p>Description:<br/>Click on the "Click me" to see who is the winner</p>
                    <p>Technologies used: <strong>JavaScript (ES6), HTML5, and CSS3</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://arthurgmv.github.io/superdicegame/" target="_blank" rel="noreferrer">
                        <img src={dice} className="p-img" alt="Dice Game"/>
                    </a>
                </div>
                <br/>

                <div className="Memory">
                    <h3>Emoji Memory Game</h3>
                    <p>Description:<br/>An emoji memory game</p>
                    <p>Technologies used: <strong>JavaScript (ES6), HTML5, and CSS3</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://arthurgmv.github.io/JogoDaMemoria/" target="_blank" rel="noreferrer">
                        <img src={memory} className="p-img" alt="Emoji Memory Game"/>
                    </a>
                </div>
                <br/>

                <div className="Age">
                    <h3>Age Verifier</h3>
                    <p>Description:<br/>You write the year of birth and the website will give you the age</p>
                    <p>Technologies used: <strong>JavaScript (ES6), HTML5, and CSS3</strong></p>
                    <p>Click on the image to access the website</p>
                    <br/>
                    <a href="https://arthurgmv.github.io/detectordeidade/" target="_blank" rel="noreferrer">
                        <img src={age} className="p-img" alt="Age Verifier"/>
                    </a>
                </div>
                <br/>

            </div>
            <br/><br/><br/><br/>
        </div>
    );
}

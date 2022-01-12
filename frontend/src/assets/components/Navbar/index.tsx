import {ReactComponent as GithubIcon} from "assets/img/github.svg";
import './style.css';

function Navbar(){
    return(
        <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>JVLivros</h1>
            <a href="https://github.com/yuxis445" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/Yuxis445</p>
                </div>
            </a>
        </div>
    </nav>
</header>
    );
}

export default Navbar;
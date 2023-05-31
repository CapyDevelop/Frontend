import Container from "../container/Container";
import "./Header.css"
import logo from './../../img/logo.svg'
function Header() {
    return(
        <div className="header">
            <Container>
                <header>
                    <div className="logo">
                    <img src={logo} alt="Capibaras Tribe"></img>  
                    </div>
                    <div className="namelogo">
                    <p>Capibaras <br/>Tribe</p> 
                    </div>
                </header>
            </Container>
        </div>
    );
}

export default Header;
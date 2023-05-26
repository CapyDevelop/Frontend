import Container from "../container/Container";
import "./Header.css"
function Header() {
    return(
        // описать по-классике  header
        <div className="header">
            <Container>
                <header>
                    <div className="logo">
                    <img src="../img/logo.svg" alt="Capibaras Tribe"></img>  
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
import Container from "../container/Container";
import "./Footer.css"
function Footer() {
    return(
        <div className="footer">
            <Container>
                <footer>
                    <div className="foot">2023 Ⓒ All rights reserved</div>
                    <div className="progy">Разработчики</div>
                </footer>
            </Container>
        </div>
    );
}

export default Footer;
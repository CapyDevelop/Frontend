import Container from "../container/Container";
import "./Main.css"
function Main() {
    return(
        // описать по-классике  header
        <div className="main">
            <Container>
                <main>
                    <div className="form">
                        <div className="leftpart">
                        <p className="logining">Вход</p>
                        <p className="Hi">Привет!</p>
                        <p className="text1">Авторизируйся через школьный логин,<br/> чтобы перейти к голосованию</p>
                        <p className="login">Логин:</p>
                        <div className="field">
                            <input type="text" className="fieldlogin" placeholder="Capybara"></input>
                            {/* <p className="fieldlogin">Capybara</p> */}
                        </div>
                        <p className="password">Пароль:</p>
                        <div className="field">
                        <input type="text" className="passwordstars" placeholder="* * * * * *" ></input>
                        {/* <p className="passwordstars">* * * * * *</p> */}
                        </div>
                        <div className="buttonlogIn">Войти</div>
                        </div>
                        <div className="rightpart">
                            <img src="../img/capi1.png"></img>
                        </div>
                    </div>
                </main>
            </Container>
        </div>
    );
}

export default Main;
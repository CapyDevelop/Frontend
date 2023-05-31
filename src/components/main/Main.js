import Container from "../container/Container";
import "./Main.css"
import img from './../../img/capi1.jpg'
import { useEffect, useState } from "react";
import axios from 'axios'

function Main() {
    const [login, setLogin] = useState("")

    useEffect(() => {
        console.log(login);
    }, [login])
    const send = () => {
        axios("http://195.133.197.62:3000/api/check_peer", {
            method: "POST",
            data: {
                "peer": login
            }
        })
        .then(data => console.log(data.data))
        .catch(e => console.log(e))
    }
    return(
        <div className="main">
            <Container>
                <main>
                    <div className="form">
                        <div className="leftpart">
                            <div className="leftpart-block">
                                <p className="logining">Вход</p>
                                <p className="Hi">Привет!</p>
                                <p className="text1">Авторизируйся через школьный логин,<br/> чтобы перейти к голосованию</p>
                                <p className="login">Логин:</p>
                                <div className="field">
                                    <input type="text" className="fieldlogin" placeholder="Capybara" onChange={e => setLogin(e.target.value)}/>
                                </div>
                                <p className="password">Пароль:</p>
                                <div className="field">
                                    <input type="password" className="passwordstars" placeholder="* * * * * *"/>
                                </div>
                                <button onClick={() => send()} className="buttonlogIn">Войти</button>
                            </div>
                            
                        </div>
                        <div className="rightpart">
                            <img src={img}></img>
                        </div>
                    </div>
                </main>
            </Container>
        </div>
    );
}

export default Main;
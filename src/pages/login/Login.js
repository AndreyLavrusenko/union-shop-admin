import React, {useEffect, useState} from 'react';
import './login.scss'
import {adminAuthAPI} from "../../api/api";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";

const Login = () => {
    const [email, setEmail] = useState('unionunioverse@gmail.com')
    const [password, setPassword] = useState('q1w2e3r4t5')

    const [error, setError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem("unionAdminKey9512")
    }, [])

    const signInAdmin = async (e) => {
        e.preventDefault()

        try {
            const res = await adminAuthAPI.loginAdmin({email, password})
            if (res.resultCode === 0) {
                setError(false)
                if (jwtDecode(res.token).isAdmin) {
                    window.localStorage.setItem("unionAdminKey9512", res.token)
                    navigate('/')
                }
            } else {
                setError(true)
            }
        } catch (err) {}
    }

    return (
        <div className="login">
            <h2>Вход в панель администратора</h2>
            <p>Введите логин и пароль от учетной записи</p>
            <form>
                <input onChange={e => setEmail(e.target.value)} value={email} required type="email" autoComplete='off' className="login__input" placeholder="Email" name="login"/>
                <input onChange={e => setPassword(e.target.value)} value={password} required type="password" className="login__input" placeholder="Пароль" name="password"/>
                {error ? <span>Ошибка при входе</span> : <span style={{opacity:0}}>Ошибка при входе</span>}
                <button onClick={signInAdmin} type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;
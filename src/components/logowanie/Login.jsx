import '../../scss/Login.scss'
import {Link, Link as RouterLink} from 'react-router-dom';
import decoration from '../../assets/images/decoration.png'
import React, { useState } from 'react';


    const Login = () => {
        const [login, setLogin] = useState('');
        const [password, setPassword] = useState('');

        const handleLoginChange = (e) => {
            setLogin(e.target.value);
        };

        const handlePasswordChange = (e) => {
            setPassword(e.target.value);
        };

        const handleLoginSubmit = (e) => {
            e.preventDefault();
            console.log('Login:', login);
            console.log('Password:', password);

        };

    return (
        <section className="login__section">
                <div className='login__menu'>
                    <RouterLink to="/Login" className="login__menu--item" href="">
                        <a className="login__menu--login">Zaloguj</a>
                    </RouterLink>
                    <RouterLink to="/Register" className="login__menu--item" href="">
                        <a className="login__menu--register">Załóż konto</a>
                    </RouterLink>
                </div>
                <div className="login__nav">
                    <a href="/">Start</a>
                    <a href="/">O co chodzi?</a>
                    <a href="/">O nas</a>
                    <a href="/">Fundacja i organizacje</a>
                    <a href="/">Kontakt</a>
                </div>

            <div className="container">
                <div className="login__container">
                    <h2 className="login__container--title">Zaloguj się</h2>
                    <img  className="login__container--img" src={decoration} alt="Decoration"/>
                </div>

                <form  action="" className="login__form" onSubmit={handleLoginSubmit}>
                    <label className="login__form--label">Email</label>  <br />
                    <input
                        type="text"
                           id="email"
                           className="login__form--in"
                           value={login}
                           onChange={handleLoginChange}

                    /> <br />
                    <label className="login__form--label"> Hasło </label> <br />
                    <input
                        type="password"
                        id="haslo"
                        className="login__form--in"
                        value={password}
                        onChange={handlePasswordChange}/>
                </form>

                <div className="login__btn">
                    <Link to='/Register' className="login__btn--addAccount">Załóż konto</Link>
                    <button
                        type="submit"
                        className="login__btn--LoggIn">Zaloguj się</button>


                </div>


            </div>
        </section>
    )
}

export default Login;
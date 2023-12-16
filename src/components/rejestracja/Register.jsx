import {Link, Link as RouterLink} from "react-router-dom";
import decoration from "../../assets/images/decoration.png";
import '../../scss/Register.scss'
import React, { useState } from 'react';

const Register = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Perform login logic with the login and password values
        console.log('Login:', login);
        console.log('Password:', password);
        // Add your authentication logic here
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Perform registration logic with the login, password, and password confirmation values
        console.log('Register - Email:', login);
        console.log('Register - Password:', password);
        console.log('Register - Password Confirmation:', passwordConfirmation);
        // Add your registration logic here
    };


    return (

        <section className="register__section">
            <div className="register__menu">
                <RouterLink to="/Login" className="register__menu--itemR" href="">
                    <a className="register__menu--loginR">Zaloguj</a>
                </RouterLink>
                <RouterLink to="/Register" className="register__menu--itemR" href="">
                    <a className="register__menu--registerR">Załóż konto</a>
                </RouterLink>
            </div>

            <div className="register__nav">
                <a href="/">Start</a>
                <a href="/">O co chodzi?</a>
                <a href="/">O nas</a>
                <a href="/">Fundacja i organizacje</a>
                <a href="/">Kontakt</a>
            </div>

            <div className="box">
                <div className="register__box">
                    <h2 className="register__box--titleR">Załóż konto</h2>
                    <img className="register__box--imgR" src={decoration} alt="Decoration"/>
                </div>

                <form onSubmit={handleRegisterSubmit} action="" className="register__form">
                    <label className="register__form--labelR">Email</label> <br/>
                    <input onChange={handleLoginChange} type="email" id="email" className="register__form--inR"/> <br/>
                    <label className="register__form--labelR"> Hasło </label> <br/>
                    <input value={password} onChange={handlePasswordChange} type="password" id="haslo"
                           className="register__form--inR"/><br/>
                    <label className="register__form--labelR"> Powtórz hasło </label>
                    <input value={passwordConfirmation} onChange={handlePasswordConfirmationChange} type="password"
                           id="Powtorz haslo" className="register__form--inR"/>
                </form>

                <div className="register__btn">
                    <Link to="/login" className="register__btn--addAccountR">Zaloguj się</Link>
                    <button  type="submit" className="register__btn--LoggInR">Załóż konto</button>

                </div>


            </div>


        </section>


    );
};

export default Register;
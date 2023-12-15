import {Link as RouterLink} from "react-router-dom";
import decoration from "../../assets/images/decoration.png";
import '../../scss/Register.scss'
const Register = () => {
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
                    <h2 className="register__box--titleR">Zaloguj się</h2>
                    <img  className="register__box--imgR" src={decoration} alt="Decoration"/>
                </div>

                <form  action="" className="register__form">
                    <label className="register__form--labelR">Email</label>  <br />
                    <input type="email" id="email" className="register__form--inR" /> <br />
                    <label className="register__form--labelR"> Hasło </label> <br />
                    <input type="text" id="haslo" className="register__form--inR"/><br />
                    <label className="register__form--labelR">  Powtórz hasło </label>
                    <input type="text" id="Powtorz haslo" className="register__form--inR"/>
                </form>

                <div className="register__btn">
                    <button className="register__btn--addAccountR">Załóż konto</button>
                    <button className="register__btn--LoggInR">Zaloguj się</button>

                </div>


            </div>



        </section>


    );
};

export default Register;
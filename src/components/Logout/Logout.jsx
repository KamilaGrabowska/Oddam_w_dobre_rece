import '../../scss/Logout.scss'
import decoration from "../../assets/images/decoration.png";
import {Link, Link as RouterLink} from 'react-router-dom';


const Logout = ()=>{

    return(
        <section className="logout__section">

            <div className="logout__menu">
                <RouterLink to="/Login" className="logout__menu--item" href="">
                    <a className="logout__menu--login">Zaloguj</a>
                </RouterLink>
                <RouterLink to="/Register" className="logout__menu--item" href="">
                    <a className="logout__menu--register">Załóż konto</a>
                </RouterLink>
            </div>
            <div className="logout__nav">
                <a href="/">Start</a>
                <a href="/">O co chodzi?</a>
                <a href="/">O nas</a>
                <a href="/">Fundacja i organizacje</a>
                <a href="/">Kontakt</a>
            </div>

            <div className="logoutBox">
                <h1 className="logoutBox--hdl">Wylogowanie nastąpiło pomyślnie!</h1>
                <img className="logoutBox--img" src={decoration} alt="Decoration" />
                <Link
                    to="/"
                    className="logoutBox--btn"
                    type="submit"
                >
                    Strona główna</Link>

            </div>


        </section>
);
    }


export default Logout
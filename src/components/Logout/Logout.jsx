import '../../scss/Logout.scss'
import decoration from "../../assets/images/decoration.png";


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

            <div className="LogoutBox">
                <h1 className="logoutBox--hdl">Wylogowanie nastąpiło pomyślnie!</h1>
                <img className="logoutBox--img" src={decoration} alt="Decoration" />
                <a href="/">Strona główna</a>


            </div>

        </section>
);
    }


export default Logout
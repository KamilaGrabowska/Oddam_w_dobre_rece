import '../../scss/Login.scss'
import {Link as RouterLink} from 'react-router-dom';
import decoration from '../../assets/images/decoration.png'

const Login = () => {


    return (
        <section className="login__section">
                <div className='login__menu'>
                    <RouterLink to="/Login" className="login__menu--item" href="">
                        <a className="login__menu--login">Zaloguj</a>
                    </RouterLink>
                    <RouterLink to="/Register" className="login__menu--item" href="">
                        <a className="llogin__menu--register">Załóż konto</a>
                    </RouterLink>
                </div>
                <div className="login__nav">
                    <a href="/">Start</a>
                    <a href="/">O nas</a>
                    <a href="/">Fundacja i organizacje</a>
                    <a href="/">Kontakt</a>
                </div>

            <div className="container">
                <div className="login__container">
                    <h2 className="login__container--title">Zaloguj się</h2>
                    <img  className="login__container--img" src={decoration} alt="Decoration"/>
                </div>

                <form className="login__form">
                    <label>Email</label> <br />
                    <label >Hasło</label>
                </form>

                <div className="login__btn">
                    <button className="login__btn--addAccount">Załóż konto</button>
                    <button className="login__btn--LoggIn">Zaloguj się</button>


                </div>


            </div>
        </section>
    )
}

export default Login;
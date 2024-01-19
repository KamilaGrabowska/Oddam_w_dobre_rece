import {Link as RouterLink} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import decoration from '../../assets/images/decoration.png'
import '../../scss/HomeHeader.scss'
import HeroImage from '../../assets/images/Hero_Image.png'
import '../../scss/HomeHeaderLoggedIn.scss'

const HomeHeaderLoggedIn = () => {


    return (
        <header>
            <div className="header__section">
                <div className="hero">
                    <img className="hero__img" src={HeroImage} alt="Hero Image" align="left"/>
                </div>
                <div className="topMenu">

                    <p className="topMenu__email" >Cześć krzysztof@gmail.com! </p>
                    <RouterLink to="/Login" className="topMenu__item" href="">
                        <a className="topMenu__login">Oddaj rzeczy</a>
                    </RouterLink>
                    <RouterLink to="/Logout" className="topMenu__item" href="">
                        <a className="topMenu__add">Wyloguj</a>
                    </RouterLink>

                </div>

                <div className="navigation">

                    <ScrollLink to="header__section" smooth={true} duration={500}
                                className="navigation__item navigation__item--active">
                        <a className="navigation__highlight" href="/"> Start </a>
                    </ScrollLink>

                    <ScrollLink to="columns" smooth={true} duration={500}
                                className="navigation__item">
                        <a href="/"> O co chodzi? </a>
                    </ScrollLink>

                    <ScrollLink to="aboutUs" smooth={true} duration={500} className="navigation__item">
                        <a href="/"> O nas </a>
                    </ScrollLink>

                    <ScrollLink to="organization" smooth={true} duration={500} className="navigation__item">
                        <a href="/"> Fundacja i organizacje </a>
                    </ScrollLink>

                    <ScrollLink to="contact__section" smooth={true} duration={500} className="navigation__item">
                        <a href="/"> Kontakt </a>
                    </ScrollLink>


                </div>

                <div className="intro">
                    <h1 className="intro__info">Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className="intro__img" src={decoration} alt="Decoration"/>
                </div>
                <div className="btn">
                    <RouterLink to="ODDAJ RZECZY" className="btn__btn btn__btn-return">ODDAJ RZECZY</RouterLink>
                    <RouterLink to="ORGANIZUJ ZBIÓRKĘ" className="btn__btn btn__btn-organize">ZORGANIZUJ
                        ZBIÓRKĘ </RouterLink>
                </div>

            </div>

        </header>
    );
};

export default HomeHeaderLoggedIn;


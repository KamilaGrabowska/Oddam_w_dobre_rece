import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import decoration from '../../assets/images/decoration.png'
import './HomeHeader.scss'
import HeroImage from '../../assets/images/Hero_Image.png'
const HomeHeader = () => {
    return (
        <header>
            <Link />
            <ScrollLink />
            <div className="header__section">
                <div className="hero">
                <img className="hero__img" src={HeroImage} alt="Hero Image" align="left"/>
                </div>
             <div className="topMenu">
                <a className="topMenu__item" href="">
                        <span className="topMenu__login">Zaloguj</span>
                    </a>

                    <a className="topMenu__item" href="">
                        <span className="topMenu__add">Załóż konto</span>
                    </a>
                 </div>
                <div className="navigation">
                    <a className="navigation__item navigation__item--active" href="">
                        <span className="navigation__highlight"> Start </span>
                    </a>

                    <a className="navigation__item" href="">
                        <span className="navigation__highlight"> O co chodzi? </span>
                    </a>

                    <a className="navigation__item" href="">
                        <span className="navigation__highlight"> O nas </span>
                    </a>

                    <a className="navigation__item" href="">
                        <span className="navigation__highlight"> Fundacja i organizacje </span>
                    </a>
                    <a className="navigation__item" href="">
                        <span className="navigation__highlight"> Kontakt </span>
                    </a>

                     </div>
                <div className="intro">
                     <h1 className="intro__info">Zacznij pomagać! <br />Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className="intro__img" src={decoration} alt="Decoration"/>
                </div>
                <div className="btn">
                    <button className="btn__btn btn__btn-return" >ODDAJ RZECZY</button>
                    <button className="btn__btn btn__btn-organize" >ZORGANIZUJ ZBIÓRKĘ</button>
                </div>

            </div>

        </header>
    );
};

export default HomeHeader;
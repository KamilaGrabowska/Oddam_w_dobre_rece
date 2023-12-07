import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import decoration from '../../assets/images/decoration.png'
import './HomeHeader.scss'
import HeroImage from '../../assets/images/Hero_Image.png'
const HomeHeader = () => {
    return (
        <header>
            <div className="header__section">
                <div className="hero">
                <img className="hero__img" src={HeroImage} alt="Hero Image" align="left"/>
                </div>
             <div className="topMenu">
                <Link to="/Login" className="topMenu__item" href="">
                        <span className="topMenu__login">Zaloguj</span>
                    </Link>
                    <Link to="/Register" className="topMenu__item" href="">
                        <span className="topMenu__add">Załóż konto</span>
                    </Link>
                 </div>
                <div className="navigation">
                    <ScrollLink to="start" className="navigation__item navigation__item--active" href="">
                        <span className="navigation__highlight"> Start </span>
                    </ScrollLink>

                    <ScrollLink to="O co chodzi?" className="navigation__item" href="">
                        <span className="navigation__highlight"> O co chodzi? </span>
                    </ScrollLink>

                    <ScrollLink to="O nas" className="navigation__item" href="">
                        <span className="navigation__highlight"> O nas </span>
                    </ScrollLink>

                    <ScrollLink to="Fundacja i Organizacja" className="navigation__item" href="">
                        <span className="navigation__highlight"> Fundacja i organizacje </span>
                    </ScrollLink>
                    <ScrollLink to="Kontakt" className="navigation__item" href="">
                        <span className="navigation__highlight"> Kontakt </span>
                    </ScrollLink>

                     </div>
                <div className="intro">
                     <h1 className="intro__info">Zacznij pomagać! <br />Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className="intro__img" src={decoration} alt="Decoration"/>
                </div>
                <div className="btn">
                    <Link to="ODDAJ RZECZY" className="btn__btn btn__btn-return" >ODDAJ RZECZY</Link>
                    <Link to="ORGANIZUJ ZBIÓRKĘ" className="btn__btn btn__btn-organize" >ZORGANIZUJ ZBIÓRKĘ </Link>
                </div>

            </div>

        </header>
    );
};

export default HomeHeader;
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import decoration from '../../assets/images/decoration.png'
import './HomeHeader.scss'

const HomeHeader = () => {
    return (
        <header>
            <Link />
            <ScrollLink />
            <div className="header__section">
                <div className="topMenu">
                    <a className="topMenu__item" href="">
                        <span className="topMenu__login">Zaloguj</span>
                    </a>

                    <a className="topMenu__item" href="">
                        <span className="topMenu__addAccount">Załóż konto</span>
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
                    <h1 className="intro__info">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className="intro__img" src={decoration} alt="Decoration"/>
                    <button className="intro__btn intro__btn-return" >ODDAJ RZECZY</button>
                    <button className="intro__btn intro__btn-organize" >ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;
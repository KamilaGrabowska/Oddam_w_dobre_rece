import decoration from '../../assets/images/decoration.png'
import Icon_tshirt from '../../assets/images/Icon_tshirt.png'
import Icon_Bag from '../../assets/images/Icon_Bag.png'
import Icon_search from '../../assets/images/Icon_search.png'
import Icon_reload from '../../assets/images/Icon_reload.png'
import {Link} from "react-router-dom";
import '../../scss/HomeSimpleSteps.scss'

const HomeSimpleSteps = () => {

    return (
        <section className="steps">
            <div className="title">
                <h1 className="title__hdl">Wystarczą 4 proste kroki</h1>
                <img className="title__img" src={decoration} alt="dekoracja"/>
            </div>

            <div className="columnsSteps">

            <div className="colSteps">
                <img  className="colSteps__img colSteps__img--1" src={Icon_tshirt} alt="Tshirt"/>
                <h4 className="colSteps__hdl">Wybierz rzeczy</h4>
                <p className="colSteps__dsc">ubrania, zabawki, sprzęt i inne</p>
            </div>

            <div className="colSteps">
                <img  className="colSteps__img colSteps__img--2" src={Icon_Bag} alt="Tshirt"/>
                <h4 className="colSteps__hdl">Spakuj je</h4>

                <p className="colSteps__dsc">skorzystaj z worków na śmieci</p>
            </div>


            <div className="colSteps">
                <img  className="colSteps__img colSteps__img--3" src={Icon_search} alt="Tshirt"/>
                <h4 className="colSteps__hdl">Zdecyduj komu < br /> chcesz pomóc</h4>
                <p className="colSteps__dsc">wybierz zaufane miejsce</p>
            </div>

            <div className="colSteps">
                <img  className="colSteps__img colSteps__img--4" src={Icon_reload} alt="Tshirt"/>
                <h4 className="colSteps__hdl">Zamów kuriera</h4>
                <p className="colSteps__dsc">kurier przyjedzie w dogodnym terminie</p>
            </div>
            </div>

            <div className="btn">
                <Link to="/Login" className="btn__steps" >ODDAJ RZECZY</Link>
            </div>





        </section>
    )
}


export default HomeSimpleSteps;
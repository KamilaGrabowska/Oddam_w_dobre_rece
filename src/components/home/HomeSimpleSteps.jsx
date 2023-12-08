import decoration from '../../assets/images/decoration.png'
import Icon_tshirt from '../../assets/images/Icon_tshirt.png'
import Icon_Bag from '../../assets/images/Icon_Bag.png'
import Icon_search from '../../assets/images/Icon_search.png'
import Icon_reload from '../../assets/images/Icon_reload.png'
import {Link} from "react-router-dom";

const HomeSimpleSteps = () => {

    return (
        <section className="steps">
            <div className="title">
                <h1 className="title__hdl">Wystarczą 4 proste kroki</h1>
                <img className="title__img" src={decoration} alt="dekoracja"/>
            </div>

            <div className="col">
                <img  className="col__img col__img--1" src={Icon_tshirt} alt="Tshirt"/>
                <h4 className="col__hdl">Wybierz rzeczy</h4>
                <p className="col__dsc">ubrania, zabawki, sprzęt i inne</p>
            </div>

            <div className="col">
                <img  className="col__img col__img--2" src={Icon_Bag} alt="Tshirt"/>
                <h4 className="col__hdl">Wybierz rzeczy</h4>
                <p className="col__dsc">ubrania, zabawki, sprzęt i inne</p>
            </div>


            <div className="col">
                <img  className="col__img col__img--3" src={Icon_search} alt="Tshirt"/>
                <h4 className="col__hdl">Wybierz rzeczy</h4>
                <p className="col__dsc">ubrania, zabawki, sprzęt i inne</p>
            </div>

            <div className="col">
                <img  className="col__img col__img--4" src={Icon_reload} alt="Tshirt"/>
                <h4 className="col__hdl">Wybierz rzeczy</h4>
                <p className="col__dsc">ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className="btn">
                <Link to="/Login" className="btn__steps" >ODDAJ RZECZY</Link>
            </div>





        </section>
    )
}


export default HomeSimpleSteps;
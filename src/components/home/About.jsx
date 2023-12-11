import './About.scss'
import decoration from '../../assets/images/decoration.png'
import People from '../../assets/images/People.png'
const About = () =>{
    return (
        <section className="aboutUs">
            <div className="desc">
                <h2 className="desc__hdl">O nas</h2>
                <img className="desc__img" src={decoration} alt="decoration"/>
                <p className="desc__info">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            </div>
            <div className="bgimg">
             <img className="bgimg__img" src={People} alt="Smile Poeple"/>
            </div>

        </section>
    )

}

export default About;
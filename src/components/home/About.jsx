import '../../scss/About.scss'
import decoration from '../../assets/images/decoration.png'
import People from '../../assets/images/People.png'
import Signature from '../../assets/images/Signature.png'

const About = () => {
    return (
        <section className="aboutUs">
            <div className="desc">
                <div className="desc__content">
                    <h2 className="hdl">O nas</h2>
                    <img className="img" src={decoration} alt="decoration"/>
                    <p className="info">Nori grape silver beet broccoli kombu beet greens fava bean potato
                        quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img className="imgSignature" src={Signature} alt="Signature"/>
                </div>
            </div>
            <div className="bgimg">
                <img className="bgimg__img" src={People} alt="Smile Poeple" align="right"/>
            </div>

        </section>
    )

}

export default About;
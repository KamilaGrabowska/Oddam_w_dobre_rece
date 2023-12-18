import '../../scss/Contact.scss'
import background from '../../assets/images/background.png'
import decoration from '../../assets/images/decoration.png'
import Istagram from '../../assets/images/Istagram.png'
import Facebook from '../../assets/images/Facebook.png'

const Contact = () => {
    return (
        <section className="contact__section">

            <img  className="contact__img"
                  src={background}
                  alt="Blankes on chair"
                  style={{
                      width:'1900px',
                      height:'1026px',
                  }}
            />

             <div className="box__right">
             <h1 className="box__right--hdl">Skontaktuj się z nami</h1>
            <img className="box__right--decoration" src={decoration} alt="decoration"/>
             </div>

            <form action="" className="contact__form">
                <label  className="contact__form--label">
                    Wpisz swoje imię
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Krzysztof"
                    className="contact__form--in"/>

                <label  className="contact__form--label">
                    Wpisz swój email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="abc@xyz.pl"
                    className="contact__form--in"/>

                <label  className="contact__form--label">
                    Wpisz swoją wiadomość
                    <textarea
                        name="text"
                        cols="40"
                        rows="5"
                        placeholder="Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et
                 dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                </label>

                <button className="contact__form__btn--btn">
                    Wyślij
                </button>
            </form>

            <div className="footer">
                <p className="footer__copy">Copyright by Coders Lab</p>
                <div className="footer__icons">
                    <a href="#" className="footer__icons--icon">
                        <img src={Istagram} alt="Instagram" />
                    </a>
                    <a href="#" className="footer__icons--icon">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Contact;
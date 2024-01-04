import '../../scss/Contact.scss'
import background from '../../assets/images/background.png'
import decoration from '../../assets/images/decoration.png'
import Istagram from '../../assets/images/Istagram.png'
import Facebook from '../../assets/images/Facebook.png'

const Contact = () => {
    return (
        <section className="contact__section">

            <img className="contact__img"
                 src={background}
                 alt="Blankes on chair"
                 style={{
                     width: '1900px',
                     height: '1026px',
                 }}
            />

            <div className="box__right">
                <h1 className="box__right--hdl">Skontaktuj się z nami</h1>
                <img className="box__right--decoration"
                     src={decoration}
                     alt="decoration"
                />
            </div>

            <form action="" className="contact__form">
                <div className="contact__form--group">
                    <div className="contact__form--group--1">
                        <label className="contact__form--group--1--label" htmlFor="name">
                            Wpisz swoje imię
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Krzysztof"
                            className="contact__form--group--1--in"
                            style={{
                                border: 'none',
                                borderBottom: '1px solid rgba(112, 112, 112, 1)',


                            }}
                        />
                    </div>

                    <div className="contact__form--group--1">
                        <label className="contact__form--group--1--label" htmlFor="email">
                            Wpisz swój email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="abc@xyz.pl"
                            className="contact__form--group--1--in"
                            style={{
                                border: 'none',
                                borderBottom: '1px solid rgba(112, 112, 112, 1)',

                            }}
                        />
                    </div>
                </div>

                <div className="contact__form--msg">
                    <label className="contact__form--msg--label2" htmlFor="message">
                        Wpisz swoją wiadomość
                    </label>
                    <textarea
                        className="contact__form--msg--in2"
                        id="message"
                        name="text"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                         ut aliquip ex ea commodo consequat."

                        style={{
                            border: 'none',
                            borderBottom: '1px solid rgba(112, 112, 112, 1)',
                            width: '530px',
                            height: '100px',

                        }}

                    >

                    </textarea>
                </div>

                <button
                    className="contact__btn"
                    type="submit"
                >Wyślij
                </button>
            </form>

            <div className="footer">
                <p className="footer__copy">Copyright by Coders Lab</p>
                <div className="footer__icons">
                    <a href="#" className="footer__icons--icon">
                        <img src={Istagram} alt="Instagram"/>
                    </a>
                    <a href="#" className="footer__icons--icon">
                        <img src={Facebook} alt="Facebook"/>
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Contact;
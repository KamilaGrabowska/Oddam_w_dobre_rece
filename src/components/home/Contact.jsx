import '../../scss/Contact.scss'
import background from '../../assets/images/background.png'
import decoration from '../../assets/images/decoration.png'
import Istagram from '../../assets/images/Istagram.png'
import Facebook from '../../assets/images/Facebook.png'
import {useState} from "react";




    const Contact = () => {

        const [errors, setErrors] = useState({
            email: '',
            name: '',
            message: '',
        });

        const [form, setForm] = useState({
            email: '',
            name: '',
            message: '',
        });

        const validateForm = () => {
            let newErrors = { email: '', name: '', message: '' };

            if (form.name.trim() === '') {
                newErrors.name = 'Imię jest wymagane';
            } else if (form.name.split(' ').length > 1) {
                newErrors.name = 'Imię powinno być jednym wyrazem';
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (form.email.trim() === '') {
                newErrors.email = 'Email jest wymagany';
            } else if (!emailPattern.test(form.email)) {
                newErrors.email = 'Podany email jest niepoprawny';
            }

            if (form.message.trim() === '') {
                newErrors.message = 'Wiadomość jest wymagana';
            } else if (form.message.length < 120) {
                newErrors.message = 'Wiadomość musi mieć co najmniej 120 znaków';
            }

            setErrors(newErrors);

            // Sprawdź, czy są jakiekolwiek błędy
            return Object.values(newErrors).every((error) => error === '');
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            if (!validateForm()) {
                // Jeśli są błędy walidacji, przerwij obsługę submit
                return;
            }

            try {
                const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.errors.join('\n'));
                }

                const responseData = await response.json();

                if (responseData.status === 'success') {
                    setErrors({ email: '', name: '', message: '' }); // Zresetuj błędy
                    console.log('Formularz został wysłany pomyślnie!');
                    setForm({
                        email: '',
                        name: '',
                        message: '',
                    });
                } else {
                    throw new Error('Wystąpił problem z wysłaniem danych.');
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        const updateField = (e) => {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            });

            // Zresetuj błąd po wprowadzeniu zmiany w polu
            setErrors({
                ...errors,
                [e.target.name]: '',
            });
        };


        return (
            <section className="contact__section">

                <img className="contact__img"
                     src={background}
                     alt="Blankes on chair"
                     style={{
                         width: '1850px',
                         height: '950px',
                     }}
                />

                <div className="box__right">
                    <h1 className="box__right--hdl">Skontaktuj się z nami</h1>
                    <img className="box__right--decoration"
                         src={decoration}
                         alt="decoration"
                    />
                </div>

                <form action="" className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form--group">
                        <div className="contact__form--group--1">
                            <label className="contact__form--group--1--label" htmlFor="name">
                                Wpisz swoje imię
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Krzysztof"
                                className="contact__form--group--1--in"
                                onChange={updateField }
                                style={{
                                    border: 'none',
                                    borderBottom: '1px solid rgba(115, 115, 115, 1)',


                                }}
                            />
                        </div>
                        <div className="error-message">{errors.name}</div>
                        <div className="contact__form--group--1">
                            <label className="contact__form--group--1--label" htmlFor="email">
                                Wpisz swój email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="abc@xyz.pl"
                                className="contact__form--group--1--in"
                                onChange={updateField }
                                style={{
                                    border: 'none',
                                    borderBottom: '1px solid rgba(112, 112, 112, 1)',

                                }}
                            />
                        </div>
                    </div>
                    <div className="error-message">{errors.email}</div>
                    <div className="contact__form--msg">
                        <label className="contact__form--msg--label2" htmlFor="message">
                            Wpisz swoją wiadomość
                        </label>
                        <textarea
                            className="contact__form--msg--in2"
                            id="message"
                            name="message"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            onChange={updateField }
                            style={{
                                border: 'none',
                                borderBottom: '1px solid rgba(112, 112, 112, 1)',
                                width: '450px',
                                height: '80px',

                            }}

                        >

                    </textarea>
                    </div>

                     <div className="error-message">{errors.message}</div>

                    <button
                        className="contact__btn"
                        type="submit"
                    >Wyślij
                    </button>
                </form>

                <div className="footer">
                    <div className="footer__copyright">
                        <p className="footer__copyright--text">Copyright by Coders Lab</p>
                    </div>
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
import '../../scss/Contact.scss'
import background from '../../assets/images/background.png'
import decoration from '../../assets/images/decoration.png'
import Istagram from '../../assets/images/Istagram.png'
import Facebook from '../../assets/images/Facebook.png'

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//
//     const data = {
//         name,
//         email,
//         message
//     };
//
// let formErrors = [];
//
//     if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
//         formErrors.push('Proszę wypełnić wszystkie pola');
//         return;
//     }
//
//     if (name.split(' ').length > 1) {
//         formErrors.push('Imię powinno być jednym wyrazem');
//         return;
//     }
//
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         formErrors.push('Proszę podać poprawny adres email');
//         return;
//     }
//
//     if (message.length < 120) {
//         formErrors.push('Wiadomość musi mieć co najmniej 120 znaków');
//         return;
//     }
//
//     fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error('Wystąpił problem z wysłaniem danych.');
//         })
//         .then(responseData => {
//             if (responseData.status === 'success') {
//                 displayStatus('Formularz został wysłany pomyślnie!', 'success');
//                 document.getElementById('contactForm').reset(); // Wyczyszczenie formularza po wysłaniu
//             } else {
//                 throw new Error('Wystąpił problem z wysłaniem danych.');
//             }
//         })
//         .catch(error => {
//             displayStatus('Wystąpił problem z wysłaniem formularza: ' + error.message);
//         });
// });
//
// // Funkcja do wyświetlania komunikatów statusu
// function displayStatus(message, type = 'error') {
//     const statusElement = document.getElementById('status');
//     statusElement.textContent = message;
//     statusElement.className = type;
// }
//
//

    const Contact = () => {
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
                                    borderBottom: '1px solid rgba(115, 115, 115, 1)',


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
                            name="message"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

                            style={{
                                border: 'none',
                                borderBottom: '1px solid rgba(112, 112, 112, 1)',
                                width: '450px',
                                height: '80px',

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
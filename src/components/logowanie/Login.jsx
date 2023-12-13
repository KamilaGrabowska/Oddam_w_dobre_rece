import '../../scss/Login.scss'
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {


    return (
       <section className="loginSection">
           <div className="container">
               <div className='login'>
                   <RouterLink to="/login">Zaloguj</RouterLink>
                   <RouterLink to="/register">Załóż konto</RouterLink>
               </div>
               <div>
                   <a href="/">Start</a>
                   <a href="/">O nas</a>
                   <a href="/">Fundacja i organizacje</a>
                   <a href="/">Kontakt</a>
               </div>
               <div className="content-container">
                   <h2 >Zaloguj się</h2>
               </div>


           </div>
       </section>


    )
}
export default Login;
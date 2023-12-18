import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps.jsx'
import About from './About.jsx'
import OrganizationsHome from "./OrganizationsHome.jsx";
import Contact from "./Contact.jsx";


const Home = () => {

    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <About />
            <OrganizationsHome/>
            <Contact />
        </div>
    );
};

export default Home;
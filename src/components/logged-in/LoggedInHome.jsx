import HomeThreeColumns from "../home/HomeThreeColumns.jsx";
import HomeSimpleSteps from "../home/HomeSimpleSteps.jsx";
import About from "../home/About.jsx";
import OrganizationsHome from "../home/OrganizationsHome.jsx";
import Contact from "../home/Contact.jsx";
import HomeHeaderLoggedIn  from "../logged-in/HomeHeaderLoggedIn.jsx"

const LoggedInHome = () => {
    return (
        <>
            <HomeHeaderLoggedIn/>
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <About />
            <OrganizationsHome/>
            <Contact />
        </>
    );
};

export default LoggedInHome;
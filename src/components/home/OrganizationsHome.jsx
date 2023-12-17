import decoration from "../../assets/images/decoration.png";
import '../../scss/OrganizationsHome.scss'
import {useState, useEffect} from "react";

const organizationsData = {
    fundacje: [
        {
            name: "Fundacja",
            subtext: '" Dbam o Zdrowie"',
            mission: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
            name: "Fundacja",
            subtext:'"Dla dzieci " ',
            mission: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            needs: "ubrania, meble, zabawki",
        },
        {
            name: "Fundacja",
            subtext: '"Bez domu"',
            mission: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            needs: "ubrania, jedzenie, ciepłe koce",
        },
        {
            name: "Fundacja",
            subtext:'"Dbam o Zdrowie -2"',
            mission: " Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
            name: "Fundacja",
            subtext:'"Dla dzieci-2"',
            mission: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            needs: "ubrania, meble, zabawki",
        },
        {
            name: "Fundacja",
            subtext: '"Bez domu-2"',
            mission: " Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            needs: "ubrania, jedzenie, ciepłe koce",
        },
        {
            name: "Fundacja",
            subtext:'"Dbam o Zdrowie -3"',
            mission: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
            name: "Fundacja",
            subtext:'"Dla dzieci-3"',
            mission: "Cel i misja:Pomoc dzieciom z ubogich rodzin.",
            needs: "ubrania, meble, zabawki",
        },
        {
            name: "Fundacja",
            subtext: '"Bez domu-3"',
            mission: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            needs: "ubrania, jedzenie, ciepłe koce",
        },

    ],
    organizacje: [
        {
            name: "Organizacjom pozarzdowym",
            subtext:'"Lorem Ipsum 1"',
            mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            needs: "Egestas, sed, tempus",
        },
        {
            name: "Organizacjom pozarzdowym",
            subtext:'"Lorem Ipsum 2"',
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            needs: "Ut, aliquam, purus, sit, amet",
        },
        {
            name: "Organizacjom pozarzdowym",
            subtext:'"Lorem Ipsum 3"',
            mission: "Scelerisque in dictum non consectetur a erat nam.",
            needs: "Mi, quis, hendrerit, dolor",
        },
        {
            name: "Organizacjom pozarzdowym",
            subtext:'"Lorem Ipsum 4"',
            mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            needs: "Egestas, sed, tempus",
        },
        {
            name: "Organizacjom pozarzdowym",
            subtext:'"Lorem Ipsum 5"',
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            needs: "Ut, aliquam, purus, sit, amet",
        },
        {
            name: "Organizacjom pozarzdowym",
            subtext:'"Lorem Ipsum 6"',
            mission: "Scelerisque in dictum non consectetur a erat nam.",
            needs: "Mi, quis, hendrerit, dolor",
        },

    ],
    zbiorki: [
        {
            name: "Lokalnym zbiórkom ",
            subtext:'"Lorem Ipsum 1"',
            mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            needs: "Egestas, sed, tempus",
        },
        {
            name: "Lokalnym zbiórkom ",
            subtext:'"Lorem Ipsum 2"',
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            needs: "Ut, aliquam, purus, sit, amet",
        },
        {
            name: "Lokalnym zbiórkom ",
            subtext:'"Lorem Ipsum 3"',
            mission: "Scelerisque in dictum non consectetur a erat nam.",
            needs: "Mi, quis, hendrerit, dolor",
        },

    ],
};

const tabs = ['Fundacjom', 'Organizacjom  pozarządowym', 'Lokalnym zbiórkom'];

const tab1 = organizationsData["fundacje"];
const tab2 = organizationsData["organizacje"];
const tab3 = organizationsData["zbiorki"];

const OrganizationsHome = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [activeItems, setActiveItems] = useState(tab1);
    const [currentPage, setCurrentPage] = useState(1);


    const itemsPerPage = 3;

    useEffect(() => {
        switch (activeTab) {
            case 0: {
                setActiveItems(tab1);
                break;
            }
            case 1: {
                setActiveItems(tab2);
                break;
            }
            case 2: {
                setActiveItems(tab3);
                break;
            }
        }
    }, [activeTab]);

    return (
   <div>

           <section className="organization">

               <div className="title__organization">
                   <h1 className="title__organization--hdl">Komu pomagamy?</h1>
                   <img className="title__organization--img" src={decoration} alt="Decoration"/>
               </div>


               <div className="list">

                   {
                       tabs.map((tab, index) => (
                           <button
                               className="list__fund"
                               key={index + 1}
                               onClick={() => setActiveTab(index)}
                               style={{
                                   background: activeTab === index ? 'transparent' : '',

                               }}
                           >
                               {tab}</button>
                       ))
                   }
               </div>


               <div className="fund">
                   <p className="fund__descryption">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br /> którymi
                       współpracujemy. Możesz sprawdzić czym się zajmują, < br/>  komu pomagają i czego potrzebują. </p>




                   <div className="fund__item">
                       {
                           activeItems.slice(currentPage * itemsPerPage - itemsPerPage, currentPage * itemsPerPage).map(item => (
                               <div
                                   className="fund__item__dsc"
                                   key={item.id}>

                                   <div className="fund__item__dsc--hdl">
                                   {item.name}
                                       &nbsp;
                                       &nbsp;
                                   {item.subtext}
                                   </div>
                                   <div className="fund__item__dsc--txt">
                                   {item.mission}
                               </div>
                                   <div className="fund__item__dsc--txt__right">
                                   {item.needs}
                               </div>


                               </div>
                           ))
                       }
                   </div>



                   <div className="btn__organization">
                       {
                           new Array(Math.ceil(activeItems.length / itemsPerPage)).fill(1).map((_, index) =>
                               <button
                                   className="btn__organization--btn"
                                   key={index}
                                   style={{background: currentPage === index + 1 ? 'white' : '',


                                   }}
                                   onClick={() =>
                                       setCurrentPage(index + 1)}
                               >
                                   {index + 1} </button>)
                       }
                   </div>

               </div>

           </section>

   </div>
    )

};

export default OrganizationsHome;


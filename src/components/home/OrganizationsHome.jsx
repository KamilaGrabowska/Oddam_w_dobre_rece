import decoration from "../../assets/images/decoration.png";
import '../../scss/OrganizationsHome.scss'
import {useState, useEffect} from "react";

const tabs = ['Tab1', 'Tab2', 'Tab3'];

const tab1 = [
    {
        id: 1,
        name: 'Tab 1',
        subtext: 'A',
    },
    {
        id: 2,
        name: 'Tab 1',
        subtext: 'B',
    },
    {
        id: 3,
        name: 'Tab 1',
        subtext: 'C',
    },
    {
        id: 4,
        name: 'Tab 1',
        subtext: 'D',
    },
    {
        id: 5,
        name: 'Tab 1',
        subtext: 'E',
    },
    {
        id: 6,
        name: 'Tab 1',
        subtext: 'F',
    },
    {
        id: 7,
        name: 'Tab 1',
        subtext: 'G',
    },
    {
        id: 8,
        name: 'Tab 1',
        subtext: 'H',
    },
    {
        id: 9,
        name: 'Tab 1',
        subtext: 'I',
    },
];

const tab2 = [
    {
        id: 1,
        name: 'Tab 2',
        subtext: 'A',
    },
    {
        id: 2,
        name: 'Tab 2',
        subtext: 'B',
    },
    {
        id: 3,
        name: 'Tab 2',
        subtext: 'C',
    },
    {
        id: 4,
        name: 'Tab 2',
        subtext: 'D',
    },
    {
        id: 5,
        name: 'Tab 2',
        subtext: 'E',
    },
    {
        id: 6,
        name: 'Tab 2',
        subtext: 'F',
    },
    {
        id: 7,
        name: 'Tab 2',
        subtext: 'G',
    },
    {
        id: 8,
        name: 'Tab 2',
        subtext: 'H',
    },
    {
        id: 9,
        name: 'Tab 2',
        subtext: 'I',
    },
];

const tab3 = [
    {
        id: 1,
        name: 'Tab 3',
        subtext: 'A',
    },
    {
        id: 2,
        name: 'Tab 3',
        subtext: 'B',
    },
    {
        id: 3,
        name: 'Tab 3',
        subtext: 'C',
    },
    {
        id: 4,
        name: 'Tab 3',
        subtext: 'D',
    },
    {
        id: 5,
        name: 'Tab 3',
        subtext: 'E',
    },
    {
        id: 6,
        name: 'Tab 3',
        subtext: 'F',
    },
    {
        id: 7,
        name: 'Tab 3',
        subtext: 'G',
    },
    {
        id: 8,
        name: 'Tab 3',
        subtext: 'H',
    },
    {
        id: 9,
        name: 'Tab 3',
        subtext: 'I',
    },
    {
        id: 10,
        name: 'Tab 3',
        subtext: 'J',
    },
];
const OrganizationsHome  = () => {

    const [activeTab, setActiveTab] =useState(0);
    const [activeItems, setActiveItems] = useState(tab1);
    const [currentPage, setCurrentPage] = useState(1);


    const itemsPerPage = 3;

    useEffect(() => {
        switch(activeTab) {
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



        <section className="organization">

            <div className="title__organization">
                <h1 className="title__organization--hdl">Komu pomagamy?</h1>
                <img className="title__organization--img" src={decoration} alt="Decoration"/>
            </div>

            <div className="list">
                <h2 className="list__fund">Fundacjom</h2>
                <h2 className="list__org">Organizacjom <br/> pozarządowym</h2>
                <h2 className="list__local">Lokalnym <br/> zbiórkom</h2>
            </div>



            <div className="fund">

                    <p className="fund__descryption" >W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują. </p>


                <div className="fund__health">
                    <h4>Fundacja “Dbam o Zdrowie”</h4>
                    <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    <p>ubrania , jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>

                <div className="fund__kids">
                    <h4>Fundacja “Dla dzieci”</h4>
                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    <p>ubrania, meble, zabawki</p>
                </div>

                <div className="fund__wihoutHome">
                    <h4>Fundacja “Bez domu”</h4>
                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </div>

                <div >
                    <div  >
                    {
                        tabs.map((tab,index) => (
                            <button
                                key={index + 1}
                                onClick={()=> setActiveTab(index)}
                                style={{ background: activeTab ===index ? 'transparent': '',

                                }}
                            >
                                {tab}</button>
                        ))
                    }
                </div>

                    <div>
                        {
                            activeItems.slice(currentPage * itemsPerPage - itemsPerPage, currentPage * itemsPerPage).map(item => (
                                <div key={item.id}>
                                    {item.name}
                                    {item.subtext}
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        {
                            new Array(Math.ceil(activeItems.length / itemsPerPage)).fill(1).map((_, index) =>
                                <button
                                    style={{ background: currentPage === index + 1 ? 'green' : '' }}
                                    onClick={() =>
                                    setCurrentPage(index + 1)}
                                >
                                    {index + 1}</button>)
                        }
                    </div>


                </div>


            </div>



        </section>
    );
};

export default OrganizationsHome ;
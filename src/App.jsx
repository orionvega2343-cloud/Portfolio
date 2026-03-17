import { useState } from 'react'
import geminiImg from './assets/Gemini.png'


function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    function closeModal() {
        document.body.classList.remove('noscroll')
        document.documentElement.classList.remove('noscroll')
        setIsModalOpen(false)
    }
    function openModal() {
        document.body.classList.add('noscroll')
        document.documentElement.classList.add('noscroll')
        setIsModalOpen(true)
    }




    const [isContacts, setConntacts] = useState(false)
    function closeContacts () {
        document.body.classList.remove('noscroll')
        document.documentElement.classList.remove('noscroll')
        setConntacts(false)
    }
    function openContacts () {
        document.body.classList.add('noscroll')
        document.documentElement.classList.add('noscroll')
        setConntacts(true)
    }



    return (
        <div className="app">
            {isModalOpen && <Modal onClose={closeModal} />}
            <Header openContacts= {openContacts}/>
            <SectionMe title="Разрабатываю веб-сайты и приложения" text="От простых страниц до больших интернет-магазинов." subtext="Сроки — от 5 дней." onOrderClick={openModal} />
            <Portfolio />
            <Gallery />
            <Footer />
            {isContacts && <Contacts closeContacts={closeContacts} />}

        </div>
    )
}

function Header({openContacts}) {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">P</div>
                <nav className="menu">
                    <a href="#portfolio" className="item">Портфолио</a>
                    <a href="#prices" className="item">Цены</a>
                    <a href="#contacts" className="item" onClick={openContacts}>Контакты</a>
                </nav>
            </div>
        </header>
    )
}

function SectionMe({ title, text, subtext, onOrderClick }) {
    return (
        <section className="me">
            <div className="me-container">
                <h1 className="me-title">{title}</h1>
                <div className="me-text">{text}</div>
                {subtext && <div className="me-text me-text--sub">{subtext}</div>}
                <div className="me-photo">
                    <img src={geminiImg} alt="Gemini" />
                </div>
                <button className="order" onClick={onOrderClick}>Заказать</button>
            </div>
        </section>
    )
}

function Portfolio() {
    const [active, setActive] = useState(1)
    function onClick(index) {
        setActive(prev => (prev === index ? null : index))

    }
    return (
        <section className="portfolio" id='portfolio'>
            <div className="portfolio-container">
                <div className="portfolio-screen">
                    <img src="/photo_2026-02-23_00-45-36.jpg" alt="Pc" />
                </div>
                <div className="descr">
                    <div className="portfolio-title">Портфолио</div><br></br>
                    <div className="portfolio-text">На странице представлены примеры моего портфолио,<br></br>узнать больше можно по ссылке ниже</div>
                    <a href="#" className="more">Узнать подробнее</a>
                </div>
                <div className="accordion" id='prices'>
                    <button className="accordion-btn" onClick={() => onClick(1)}>Лендинг ▼</button>
                    {active === 1 && <p className='content'>Лендинг,от 2000р,правок 300р/час</p>}
                    <button className="accordion-btn" onClick={() => onClick(2)}>Многостраничник ▼</button>
                    {active === 2 && <p className='content'>Многостраничник,от 5000р,правок 500р/час</p>}
                    <button className="accordion-btn" onClick={() => onClick((3))}>Приложение ▼</button>
                    {active === 3 && <p className='content'>Приложение,от 10000р,правок 800р/час</p>}
                </div>

            </div>
        </section>
    )
}

function Gallery() {
    return (

        <section className="gallery">
            <div className="gallery-container">
                <div className="gallery-item">
                    <img src="public\photo_2026-02-23_00-43-09.jpg" alt="" />
                </div>
                <div className="gallery-item">
                    <img src="public\photo_2026-02-23_00-45-32.jpg" alt="" />
                </div>
                <div className="gallery-item">
                    <img src="public\photo_2026-02-23_00-47-34.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

function Footer() {
    {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <nav className="footer-menu">
                        <p>Все права защищены.<br></br>Данный сайт носит информационно-справочный характер и ни при
                            каких условиях не является публичной офертой.</p>
                    </nav>
                </div>
            </footer>
        )
    }
}

function Modal({ onClose }) {

    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <section className="modal">
                <div className="modal-close" onClick={onClose}>
                    <img src="public\icons8-крестик-78.png" alt="cross" />
                </div>

                <form action="" className="modal-form">
                    <h1>Отправить заявку</h1>
                    <input type="text" placeholder='Ваше имя' />
                    <input type="email" placeholder='Ваша почта' />
                    <input type="text" placeholder='Ваш ник в Телеграм' />
                    <button type="submit" className='send'>Отправить заявку</button>
                </form>

            </section>
        </>
    )
}

function Contacts({closeContacts}) {
    return (
        <>
            <div className="contacts-overlay" onClick={closeContacts}></div>
            <div className="contacts-modal">
                <div className="modal-close">
                    <img src="public\icons8-крестик-78.png" alt="cross" onClick={closeContacts} />
                </div>
                <div className="modal-container">
                    <h1>Связь со мной:</h1>
                    <div className="modal-item">
                        <img src="public\icons8-vk-48.png" alt="" />
                    </div>
                    <div className="modal-item">
                        <img src="public\icons8-телеграм-48.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}



export default App  

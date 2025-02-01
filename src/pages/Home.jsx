import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'
import Footer from '../components/Footer'
import Medical from '../assets/врачспациентом.webp'
import ServiceCateter from '../assets/катетер.webp'
import ServiceVnutrivenny from '../assets/serviceCart-внутривенные.webp'
import ServiceIntoksikasya from '../assets/интоксикация.webp'
import ServiceCart from '../assets/service-cart.webp'
import ServiceCart2 from '../assets/service-cart2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import Up from '../components/Up'

export default function Home() {
  let questions = [
    {question:"Lorem ipsum dolor sit amet?", answer:"Lorem ipsum dolor sit amet consectetur adipisicing."},
    {question:"dolor sit amet?", answer:"Ipsum dolor sit amet consectetur adipisicing."},
    {question:"ipsum dolor sit amet?", answer:"Sit amet consectetur adipisicing."},
  ]

  useEffect(() => {
    const faqs = document.querySelectorAll(".accordion-item");

    if (!faqs) {
        return <Loader/>;
    }

    const handleClick = (event) => {
        event.currentTarget.classList.toggle('active');
    };

    faqs.forEach(faq => {
        faq.addEventListener("click", handleClick);
    });

    // Cleanup function to remove event listeners
    return () => {
        faqs.forEach(faq => {
            faq.removeEventListener("click", handleClick);
        });
    };
}, [questions]);


  return (
    <>
      <Navbar/>
      <Whatsapp/>
      <Up/>
      <div className='wrapper'>
          <main>
              <section className='header'>
                  <div className='header-left'>
                    <div className='header-content'>
                        <h2><span className='only-home'>Вызов врача <br/>на дому</span></h2>
                        <div className='mainService'>
                            <h4>У нас предоставляются следующие услуги</h4>
                            <div className='mainService-list'>
                                <p>Снятие интоксикации</p>
                                <p>Терапевт</p>
                                <p>Педиатр</p>
                                <p>Нарколог<br/>(с опытом 10лет)</p>
                            </div>
                        </div>
                    </div>
                    <div className='header-buttons'>
                        <a href="#services">Остальные услуги</a>
                        <a href="">
                            <FontAwesomeIcon className='phoneIcon-home' icon={faPhoneVolume}/>
                            Позвонить врачу
                        </a>
                    </div>
                  </div>
                  <div className='header-right'>

                  </div>
              </section>
              <section className='services' id='services'>
                    <div className='services-title'> 
                        <h1>Services part</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, porro dignissimos. Rerum harum facilis, alias iure fuga fugit magni. Nulla.</p>
                    </div>
                    <div className='services-content'>
                        <div className='service-cart'>
                            <img src={ServiceIntoksikasya} alt="" />
                            <div className='serviceCart-content'>
                                <h3>Снятие интоксикации</h3>
                                <p>Снятие интоксикации при алкогольном отравлении</p>
                            </div>
                        </div>
                        <div className='service-cart'>
                            <img src={ServiceVnutrivenny} alt="" />
                            <div className='serviceCart-content'>
                                <h3>Уколы</h3>
                                <p>Внутривенные/Внутримышечные уколы</p>
                            </div>
                        </div>
                        <div className='service-cart'>
                            <img src={ServiceCateter} alt="" />
                            <div className='serviceCart-content'>
                                <h3>Катетеры</h3>
                                <p>Периферический/Мочевой катетер</p>
                            </div>
                        </div>
                        <div className='service-cart'>
                            <img src={ServiceCart} alt="" />
                            <div className='serviceCart-content'>
                                <h3>Cart text</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
              </section>
              <section className='about-us'>
                    <div className='background-aboutUs'></div>
                    <div className='aboutUs-title'> 
                        <h1>About Us part</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, porro dignissimos. Rerum harum facilis, alias iure fuga fugit magni. Nulla.</p>
                    </div>
                    <div className='content-aboutUs'>
                        <div className='aboutUs-cart'>
                            <img src={Medical} alt="aboutUs-cart-img"/>
                        </div>
                        <div className='aboutUs-cart'>
                            <div className='aboutUs-cart-content'>
                                <h2>1000+</h2>
                                <h3>Довольных клиентов</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsam quia voluptas perspiciatis mollitia accusamus eaque placeat nobis repudiandae est.</p>
                            </div>
                            <div className='aboutUs-detailed'>
                                <a href="">Detailed</a>
                            </div>
                        </div>
                        <div className='aboutUs-cart'>
                            <img src={Medical} alt="aboutUs-cart-img"/>
                        </div>
                        <div className='aboutUs-cart'>
                            <div className='aboutUs-cart-content'>
                                <h2>5+</h2>
                                <h3>год опыта</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsam quia voluptas perspiciatis mollitia accusamus eaque placeat nobis repudiandae est.</p>
                            </div>
                            <div className='aboutUs-detailed'>
                                <a href="">Detailed</a>
                            </div>
                        </div>
                        <div className='aboutUs-cart'>
                            <img src={Medical} alt="aboutUs-cart-img"/>
                        </div>
                        <div className='aboutUs-cart'>
                            <div className='aboutUs-cart-content'>
                                <h2>200+</h2>
                                <h3>Qualified Doctors</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsam quia voluptas perspiciatis mollitia accusamus eaque placeat nobis repudiandae est.</p>
                            </div>
                            <div className='aboutUs-detailed'>
                                <a href="">Detailed</a>
                            </div>
                        </div>
                    </div>
              </section>
              <section className='qa-section'>
                  <div className='qa-section-header'>
                    <h2>Часто задаваемые вопросы</h2>
                  </div>
                  <ul id='accordion'>
                      {questions && questions.map((question, index) => (
                            <li className='accordion-item' key={index}>
                                <div className='according-question'>
                                    <label htmlFor='third'>{question.question}</label>
                                        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="50" height="50" rx="25" fill="cornflowerblue"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M26.2426 31.0037C25.9186 31.3215 25.4793 31.5 25.0212 31.5C24.5632 31.5 24.1238 31.3215 23.7999 31.0037L14.0274 21.4144C13.8624 21.258 13.7308 21.071 13.6403 20.8642C13.5497 20.6574 13.5021 20.4349 13.5001 20.2098C13.4981 19.9848 13.5418 19.7616 13.6286 19.5532C13.7155 19.3449 13.8438 19.1556 14.006 18.9965C14.1682 18.8373 14.3611 18.7115 14.5734 18.6262C14.7857 18.541 15.0131 18.4981 15.2425 18.5001C15.4719 18.502 15.6986 18.5488 15.9093 18.6376C16.1201 18.7265 16.3107 18.8556 16.4701 19.0175L25.0212 27.4083L33.5724 19.0175C33.8982 18.7087 34.3346 18.5379 34.7875 18.5417C35.2405 18.5456 35.6737 18.7239 35.994 19.0381C36.3143 19.3524 36.496 19.7776 36.4999 20.222C36.5039 20.6665 36.3297 21.0947 36.0151 21.4144L26.2426 31.0037Z" fill="white"/>
                                        </svg>
                                </div>
                                <div className='content'>
                                    {question.answer.split('\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </li>
                      ))}
                  </ul>
              </section>
          </main>
      </div>
      <Footer/>
    </>
  )
}

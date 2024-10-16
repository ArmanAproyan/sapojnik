import style from './style.module.scss';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Знания о нас",
  description: "Generated by create next app",
};

const About = () => {
      return (
        <div className={style.aboutUs}>
          <h1 className={style.title}>Знания о нас</h1>
          <p className={style.description}>
            Добро пожаловать в наш сапожный сервис! Мы — команда опытных мастеров, 
            которые страстно любят свое дело и готовы предоставить вам широкий спектр 
            услуг по ремонту и уходу за обувью.
          </p>
          <h2 className={style.subTitle}>Наша миссия</h2>
          <p className={style.description}>
            Помочь вам продлить срок службы вашей обуви и вернуть ей первоначальный вид. 
            Мы понимаем, как важна комфортная и стильная обувь в вашей повседневной жизни, 
            и стараемся сделать все возможное, чтобы вы были довольны нашим обслуживанием.
          </p>
          <h2 className={style.subTitle}>Наши услуги</h2>
          <p className={style.description}>
            Охватывают все аспекты ремонта обуви: от простого устранения дефектов до 
            индивидуального изготовления стелек. Мы используем только качественные материалы 
            и новейшие технологии, чтобы гарантировать высокое качество выполнения работ.
          </p>
          <h2 className={style.subTitle}>Почему выбирают нас?</h2>
          <ul className={style.list}>
            <li><strong>Профессионализм:</strong> Наша команда состоит из опытных специалистов с большим стажем работы.</li>
            <li><strong>Индивидуальный подход:</strong> Мы учитываем все ваши пожелания и предпочтения.</li>
            <li><strong>Доступные цены:</strong> Мы предлагаем конкурентоспособные расценки на все виды услуг.</li>
            <li><strong>Гарантия качества:</strong> Мы уверены в своем ремонте и предоставляем гарантию на все выполненные работы.</li>
          </ul>
          <p className={style.description}>
            Мы стремимся создать комфортную атмосферу для наших клиентов и готовы 
            ответить на любые ваши вопросы. Приходите к нам, и вы убедитесь, что 
            качественный ремонт обуви — это не только наша работа, но и наше призвание!
          </p>
          <h2 className={style.subTitle}>Контакты:</h2>
          <p className={style.description}>Телефон: +7 (911) 276-04-14</p>
          <p className={style.description}>Email: vahagstepanyan@mail.ru</p>
          <p className={style.description}>Адрес: ул. Примерная, 1, Санкт Петербург</p>
        </div>
      );
    };
    
    

export default About

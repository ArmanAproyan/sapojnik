import style from './style.module.scss';
import Image from 'next/image';
import IsOpen from '../../simple/isOpen/IsOpen';
import logo from '../../../assets/logo/sapojnikLogo.png'

const MainPage = () => {
  return (
    <div className={style.main_page}>
      <div className={style.wrapper}>
        <div className={style.text}>
          <h1>Добро пожаловать в "Мастерская Новая Походка"!</h1>
          <br />
          <h3>Ваш надежный мастер по ремонту и изготовлению обуви!</h3>
          <br />
          <span>Мастерская Новая Походка открыта с <b>09:00</b> до <b>19:00</b> и предлагает широкий спектр услуг по ремонту и уходу за обувью.</span>
          {<IsOpen/>}
          <div className={style.button_block}>
            <div className={style.button}>Подробнее</div>
          </div>
        </div>
        <div className={style.image}>
          <Image
            src={logo}
            alt="Sapojnik Logo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}

export default MainPage

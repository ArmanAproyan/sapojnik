import style from './style.module.scss';
import Image from 'next/image';
import logo from '../../../assets/logo/sapojnikLogo.png'

const MainPage = () => {
  return (
    <div className={style.main_page}>
      <div className={style.wrapper}>
        <div className={style.text}>
          <h1>Добро пожаловать в "Мастерская обуви"!</h1>
          <br />
          <h3>Ваш надежный мастер по ремонту и изготовлению обуви!</h3>
          <br />
          <span>В нашей мастерской мы понимаем, что качественная обувь — это залог вашего комфорта и уверенности. Мы предлагаем широкий спектр услуг, чтобы ваша обувь всегда выглядела и ощущалась прекрасно.</span>
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

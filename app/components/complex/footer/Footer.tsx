import styles from './style.module.scss';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <Link href="/about">О нас</Link>
                    <Link href="/services">Услуги</Link>
                    <Link href="#">Контакты</Link>
                    <Link href="#">Политика конфиденциальности</Link>
                </div>
                <div className={styles.social}>
                    <Link href="https://www.facebook.com/vahagn.stepanyan.37?locale=ru_RU" className={styles.icon} target='_blank'>Facebook</Link>
                    <Link href="#" className={styles.icon}>Twitter</Link>
                    <Link href="#" className={styles.icon}>Instagram</Link>
                </div>
            </div>
            <div className={styles.bottom}>
            </div>
        </footer>
    );
};

export default Footer;

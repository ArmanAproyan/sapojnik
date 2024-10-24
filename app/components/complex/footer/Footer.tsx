'use client'
import { useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { divide } from 'lodash';


const Footer = () => {



    const [mouseCordinats, setMouseCordinats] = useState<boolean>(false);


    const copyText = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('текст скопирован')
            })
            .catch((error) => {
                console.log('текст не скопирован')
            })
        setMouseCordinats(true)

        setTimeout(() => {
            setMouseCordinats(false)
        }, 500)

    };


    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <Link href="/about">О нас</Link>
                    <Link href="/services">Услуги</Link>
                    <div>{mouseCordinats && <span className={styles.copy_text}>Текст Скопирован</span>}</div>
                    <span style={{ cursor: 'pointer' }} onClick={(e) => {
                        const target = e.currentTarget as HTMLSpanElement;
                        copyText(target.innerText);
                    }}>+7 (911) 276-04-14</span>
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

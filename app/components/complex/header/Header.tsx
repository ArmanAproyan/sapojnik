'use client';
import style from './style.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Ilink } from '@/app/types/types';

const links: Ilink[] = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'Знания о нас' },
  { href: '/services', label: 'Услуги' }
  // { href: '/Reviews', label: 'Отзывы' },
];

const Header = () => {
  const path = usePathname();

  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        {links.map(({ href, label }) => (
          <Link key={href} style={{ textDecoration: 'none' }} href={href}>
            <span className={style.text} style={{ color: path === href ? 'red' : 'black' }}>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;

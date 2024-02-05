import Link from "next/link";
import { FC } from "react";
import styles from './Header.module.scss';
import { useRouter } from "next/router";

const Header: FC = () => {

   const {pathname} = useRouter();

   return (
   <div className={styles.header}>
      <Link href='/' className={pathname === '/' ? styles.active : ''}>Home</Link>
      <Link href='/about' className={pathname === '/about' ? styles.active : ''}>About</Link>
   </div>
   )
}

export default Header;
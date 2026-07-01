import Link from "next/link";
import Image from "next/image";

import Background from "./background";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css"
import NavLink from "./NavLinks";

export default function MainHeader() {
  return (
    <>
    <Background />
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image priority src={logoImg} alt="A plate with food" />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

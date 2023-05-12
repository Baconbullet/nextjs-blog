import Link from "next/link";
import styles from "./layout.module.css"


export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link href="/home">
                            <a className={styles.navLink}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href="/blogs">
                            <a className={styles.navLink}>Blog Posts</a>
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href="/about">
                            <a className={styles.navLink}>About Me</a>
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href="/contact">
                            <a className={styles.navLink}>Contact Me</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
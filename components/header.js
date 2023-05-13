import Link from "next/link";
import styles from "./layout.module.css"


export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link id="index" href="/" className={styles.navLink}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link id="blogs" href="/blogs" className={styles.navLink}>
                            Blog Posts
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link id="about" href="/about" className={styles.navLink}>
                            About Me
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link id="contact" href="/contact" className={styles.navLink}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
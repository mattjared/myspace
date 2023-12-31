import Image from 'next/image'
import styles from './NavMenu.module.css'
import Link from 'next/link'

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image 
          src="/next.svg"
          width={216}
          height={30}
          alt="nextspacelogo"
        />
      </Link>
      <ul className={styles.links}>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/blog"}>Blog</Link></li>
        <li><Link href={"/users"}>Users</Link></li>
      </ul>
    </nav>
  )
}

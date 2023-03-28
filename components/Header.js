import Image from "next/image"
import Logo from '../static/natgeo-logo.svg'

export default function Header() {

  
  const styles = {
    wrapper: 'flex border justify-between sticky top-0 z-10 bg-white' ,
    logoContainer: 'flex items-center ml-2',
    logo: 'cursor-pointer',
    nav: 'flex space-x-5 cursor-pointer mr-5 items-center'
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={Logo}
          alt='logo of the website'
          width={150}
          height={150}
        />
      </div>
      <ul className={styles.nav}>
        <li className="uppercase font-bold tracking-[.15em]">
          Login
        </li>
        <li>Search</li>
        <li>Newsletter</li>
        <li>Subscribe</li>
        <li>Menu</li>
      </ul>
    </div>
  )
}
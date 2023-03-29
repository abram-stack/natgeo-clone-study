import Image from "next/image"
import Logo from '../static/natgeo-logo.svg'
import Link from 'next/link';
import { FiSearch} from 'react-icons/fi'

export default function Header() {

  
  const styles = {
    wrapper: 'flex border justify-between sticky top-0 z-10 bg-white' ,
    logoContainer: 'flex items-center ml-2',
    logo: 'cursor-pointer',
    nav: 'flex space-x-5 cursor-pointer mr-5 items-center border uppercase',
    navItem:'mx-2 border'
  }


  return (
    <div className={styles.wrapper}>
      <Link href={`/`}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            alt='logo of the website'
            width={150}
            height={150}
          />
          </div>
       </Link> 
      <ul className={styles.nav}>
        <li className="mx-4">Login</li>
        <li className="mx-2"><FiSearch/></li>
        <li className="normal-case text-base mx-2"><span className="border-b-4 border-[#fcc017] hover:bg-[#fcc017]">Newsletters</span></li>
        <li className="mx-2 text-sm font-[1100]">Subscribe</li>
        <li className="mx-2">Menu</li>
      </ul>
    </div>
  )
}
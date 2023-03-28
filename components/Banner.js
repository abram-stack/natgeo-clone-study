import Image from 'next/image';
import BannerImage from '../static/river.jpg'

export default function Banner() {
  const styles = {
    bannerWrapper: 'w-full h-60 relative',
    // bannerWrapper: 'max-w-4xl mx-auto p-4 flex bg-[#fcc017] justify-center',
    content: 'max-w-5xl mx-auto pt-[9rem] pb-5  flex items-center z-10 relative',
    line: 'border-l-4 border-[#fcc017] w-[1.5em] h-[3em]',
    title: 'text-[3rem] text-white font-bold uppercase tracking-[.2rem] '
  }
  return (
    <div className={styles.bannerWrapper}>
      <div>
        <Image
          className='object-cover opacity-95'
          src={BannerImage}
          alt='background image'
          fill
        />
      </div>
      <div className={styles.content}>
        <span className={styles.line}></span>
        <h1 className={styles.title}>
          Environment
        </h1>
      </div>
    </div>
  )
}
import Image from 'next/image';
import SampleImg from '../static/greenland.jpg'

export default function Card({article}) {
  
  const styles = {
    cardWrapper: 'flex max-w-[45rem] max-h-[25rem] border mt-5 shadow-md overflow-hidden',
    imageWrapper: ' flex-1 overflow-hidden w-full relative',
    cardContent: 'flex-1 flex flex-col p-4 gap-5 bg-[white]',
    cardCategory: 'uppercase tracking-[.3rem] text-gray-400 text-sm',
    cardTitle: 'text-xl font-[1100] tracking-[.025rem]'
  }
  return (
    <div className={styles.cardWrapper}> 
      <div className={styles.imageWrapper}>
        <Image
          className='object-cover'
          alt='sample image'
          src={SampleImg}
          fill
        />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardCategory}>Environment</p>
        <p className={styles.cardTitle}>{article.title}</p>
        <span></span>Read
      </div>
    </div>
  )
}
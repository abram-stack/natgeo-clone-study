import { db } from "../../firebase";
import { getDocs, doc, collection, getDoc } from 'firebase/firestore';
import Header from "../../components/Header";
import Image  from 'next/image';
import SampleImg from '../../static/compost.jpg'
import { IoLogoTwitter } from 'react-icons/io'
import { IoIosMail } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'


export async function getStaticPaths() {
  //request goes here
  const articleRef = collection(db, 'articles')
  const articlesSnapshot = await getDocs(articleRef)    

  const paths = articlesSnapshot.docs.map((doc) => {
      return {
        params: {id: doc.id.toString()}
      }
    })

  return {
    paths: paths,
    fallback: false
  }
}


export async function getStaticProps({ params }) {
  const articleRef = doc(db, 'articles', `${params.id}`)
  const articleSnap = await getDoc(articleRef)

  const article = articleSnap.data()
  const articleRes = JSON.parse(JSON.stringify(article)
  )
  return {
    props: {
      article: articleRes
    },  
    revalidate: 30
  }
}

export default function Article({article}) {
  const styles = {
    mainContainer: 'max-w-5xl mx-auto',
    articleContainerNarrow: 'w-[45rem]',
    banner: 'flex flex-col gap-2.5 max-w-[45rem] max-h-[25rem] overflow-hidden mt-5',
    bannerImageContainer: '  overflow-hidden w-full relative',
    bannerAlt: 'text-sm ',
    bannerPhotographer: 'uppercase text-sm text-gray-500 tracking-[.1rem] ',
    tags: 'my-10 flex items-center gap-6 text-lg uppercase tracking-[.05rem]',
    tagsCategory: 'font-[1100]',
    tagsType: 'font-[200]',
    lineYellow: 'border-l-4 border-[#fcc017] w-[1em] h-[1em]',
    articleTitle: 'text-5xl font-[1100] mb-5',
    articleAction: 'uppercase flex justify-between tracking-[.2rem] border-b-2 border-gray pb-4',
    articleAuthor: 'text-black font-[1100] text-sm ',
    socialMedia: 'flex gap-5',
    articleInfo: 'my-5 flex gap-3 text-sm uppercase text-gray-500 tracking-[.1rem]',
    articleBody: 'leading-relaxed'
  }
  return (
    <div>
      <Header />
      <section className={styles.mainContainer}>
        <div className={styles.articleContainerNarrow}>
          <div className={styles.banner}>
            <div className={styles.bannerImageContainer}>
              <Image
                className='object-cover'
                alt='article image'
                src={SampleImg}
                width={720}
                height={150}
              />
            </div>
            <p className={styles.bannerAlt}>People paddle and row through the flooded Barlow Market District of Sebastopol, California, after an atmospheric river dumped inches of rain on the region in February, 2019.</p>
            <p className={styles.bannerPhotographer}>photograph by someone</p>
          </div>
          <div className={styles.tags}>
            <p className={styles.tagsCategory}>Environment</p>
            <span className={styles.lineYellow}></span>
            <p className={styles.tagsType}>explainer</p>
          </div>

          <section className={styles.mainArticle}>
            <h1 className={styles.articleTitle}>{article.title} </h1>

            <div className={styles.articleAction}>
              <p className="text-gray-500">by <span className={styles.articleAuthor}>Bramantyo</span> </p>
              <div className={styles.socialMedia}>
                <span><FaFacebook className='fill-[#3B5998]'/></span>
                <span><IoLogoTwitter className='fill-[#55ACEE]'/></span>
                <span><IoIosMail/></span>
              </div>
            </div>

            <div className={styles.articleInfo}>
              <span>published</span>
              <span>march 29 2023</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
            
            <div className={styles.articleBody}>
              <p className="text-lg tracking-[.05rem] text-gray-600 font-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur laborum laboriosam nulla quaerat voluptate, voluptatem suscipit placeat repudiandae dicta saepe necessitatibus debitis eius, itaque reprehenderit. Numquam id exercitationem provident culpa, debitis sequi delectus, ipsam laborum, inventore repudiandae non corporis vel nisi odio. Deserunt nesciunt ab maxime repellendus veniam, nulla facere iusto rerum accusamus aliquam ipsa dicta voluptates, voluptas deleniti. Illum, sit. Accusamus sed cum velit porro, debitis nisi ut, asperiores nulla quibusdam temporibus architecto molestias doloremque ratione. Nobis neque deleniti obcaecati dolor, facilis ratione soluta, ducimus consequatur quam odio, placeat sunt. Labore cum, optio quis dolores voluptatibus repudiandae blanditiis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, libero adipisci dignissimos alias error labore architecto harum molestiae dolorem placeat! Laborum saepe in quo quis nostrum mollitia molestiae. Eius deleniti, blanditiis quisquam ea autem consequuntur quo omnis repellat magnam nam iusto explicabo pariatur natus repudiandae error, accusantium sit odio culpa! Autem possimus quo aliquam nostrum esse unde cupiditate deleniti facilis dolorem id adipisci mollitia laboriosam voluptatum qui iure hic laudantium asperiores maiores consectetur nulla, atque aut. Eaque beatae perferendis temporibus cumque exercitationem distinctio laudantium hic sapiente? Perferendis rerum distinctio illum libero nihil neque aliquam nam in quam accusamus commodi magni, animi labore. Expedita eaque iste repudiandae, alias vero quo perferendis accusantium ipsa sed illo velit vel assumenda enim? Nihil pariatur eos, quidem a ratione perspiciatis similique voluptatum consequatur veritatis, ipsum recusandae esse neque molestiae. Nihil, quidem quis fugit aut maiores odit vero amet ullam ut. Mollitia porro quo totam quasi repudiandae sunt dignissimos, a ab exercitationem possimus! Quaerat facere assumenda hic repellendus quidem ipsa non molestias ducimus tempora incidunt cumque, esse itaque, similique iste quos eveniet. Soluta aut tempora doloremque nihil, ea necessitatibus vero facere, vel commodi repellendus ullam numquam distinctio. Quod libero consequuntur quam laudantium! Asperiores, architecto vero earum, id quos facilis iusto commodi ducimus, dignissimos delectus molestiae. Necessitatibus accusamus ab beatae, earum ex eius magni sequi similique qui amet reiciendis debitis ducimus odio minus ea? Illo blanditiis quisquam magni quae, et eveniet. Quam voluptate dolor, provident perferendis odit eius dolorem tenetur adipisci libero exercitationem. Ratione praesentium soluta libero tempora voluptate repellendus nulla blanditiis culpa necessitatibus tempore, perspiciatis facere velit dolore sed rem, eveniet vitae expedita perferendis iusto esse animi dolorum! Sit, omnis. Blanditiis esse tempore nostrum quaerat dicta suscipit sint placeat beatae sapiente. Provident ullam autem labore quisquam necessitatibus natus vitae non modi ex! Veritatis, molestias earum aperiam iste esse consequuntur blanditiis labore. Nesciunt perferendis dicta minima sapiente, cum sint mollitia quasi nostrum fuga ipsa. Nobis possimus eius, ut a nam delectus rerum quia quae numquam, provident quod? Qui, iste error in dolore perspiciatis omnis corporis. Velit veritatis laborum corporis quo, vero ea impedit quis commodi repellat. Natus accusantium rerum voluptatem maiores. Voluptate placeat repudiandae rem hic eaque sequi ducimus exercitationem perferendis ipsa et asperiores voluptatibus reprehenderit facere debitis voluptatem eos autem, perspiciatis ullam consequatur numquam illum velit. A enim dignissimos distinctio, iure mollitia officia amet odio fugiat totam corporis sint soluta, nam quae ullam pariatur nostrum sed ab earum eos ut iusto natus atque itaque. Accusantium iste earum sit libero obcaecati quaerat esse consequuntur voluptate ipsa illo aut, ducimus aspernatur facilis, incidunt aperiam enim rerum harum consectetur. Voluptatem iure quibusdam modi saepe nulla, soluta similique esse reprehenderit explicabo cum rem eos exercitationem odio sunt magnam amet, illo laborum. Ipsa ipsam velit inventore illo, culpa id cum incidunt sequi sapiente sed possimus tenetur alias quidem. Sed repudiandae expedita quam ratione minima eligendi, corporis sequi corrupti laudantium modi molestias voluptatem ad explicabo iure quas, rem, eum quis. Architecto obcaecati omnis dolores nostrum repellendus illum odit quod in nihil blanditiis.
              </p>
            </div>
          </section>
          </div>
         
      </section>
    </div>
  )
}
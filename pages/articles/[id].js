import { db } from "../../firebase";
import { getDocs, doc, collection, getDoc } from 'firebase/firestore';


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

  return (
    <h1>hi this is article {article.title} </h1>
  )
}
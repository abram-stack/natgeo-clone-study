import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { db } from '../firebase'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ArticleTab from '../components/ArticleTab'
import Articles from '../components/Articles'

export async function getStaticProps() {
  //request goes here
  const articleRef = collection(db, 'articles')
  const articlesSnapshot = await getDocs(articleRef)    

  const articles = articlesSnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
  const articleRes = JSON.parse(JSON.stringify(articles))
  return {
    props: {
      articles: articleRes
    }
  }
}

export default function Home({ articles}) {

  const styles = {
    articleContainer: 'bg-[#f7f7f7] h-screen',
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="sustainable version website for study purpose" content="sustainable version website for study purpose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header element navbar */}
      <Header />
      
      <Banner />
      <ArticleTab/>
      
      <main className={styles.articleContainer}>
        <Articles articles={articles} />
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </footer>
    </div>
  )
}




 //test fetch using CSR(works)
  // const [articles, setArticles] = useState([])

  // useEffect(() => {
  //   const articleRef = collection(db, 'articles')

  //   getDocs(articleRef)
  //     .then(snapshot => {
  //       let articleResults = []
  //       snapshot.docs.forEach(doc => {
  //         articleResults.push({
  //           id: doc.id,
  //           ...doc.data()
  //         })
  //       })
  //     setArticles(articleResults)
  //     })
  // },[])
import Link from "next/link"
import Card from "./Card"

export default function Articles({ articles }) {
  const styles = {
    articleList: 'max-w-5xl mx-auto flex flex-col',
    link: 'max-w-[45rem]'
  }

  return (
    <div>
      <div className={styles.articleList}>
        {articles.map(article => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className={styles.link}
          >
            <Card article={article} />
          </Link>
          ))}
        </div>
    </div>
  )
}
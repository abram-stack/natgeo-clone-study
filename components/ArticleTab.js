
export default function ArticleTab() {
  const styles = {
    wrapper: 'bg-[white] w-full',
    content: 'flex max-w-5xl mx-auto uppercase gap-10 font-[900] text-[1rem] pt-[.5rem] tracking-[.2rem]',
    tab: 'border-b-4 border-[#fcc017] pb-[.5rem]'
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.tab}>All stories</p>
        <p>Series</p>
      </div>
    </div>
  )
}
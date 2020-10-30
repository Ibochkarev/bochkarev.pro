import fetch from 'isomorphic-unfetch'
import Card from '../components/Card'
import Link from 'next/link'

const Home = ({ works }) => {
  return (
    <main className="flex-1">
      <div className="wrapper">
        <div className="hero__block">
          <div className="max-w-lg mx-auto">
            <div>
              <h1 className="font-serif text-center text-56">
                <span>
                  Тут будет <br />
                  какой то текст
                </span>
              </h1>
            </div>
          </div>
        </div>
        <section className="o-container container mx-auto md:my-32 md:mt-26">
          <div className="works__grid">
            {works
              .map(work => <Card key={work.id} work={work} />)
              .reverse()
              .slice(0, 6)}
            <div className="c-case-studies__cta style-links">
              <Link href="/works">
                <a className="leading-normal text-llama text-gray-700">
                  Посмотреть все
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/works`)
  const data = await res.json()

  return {
    props: {
      works: data,
    },
  }
}

export default Home

import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import Link from 'next/link'

const Home = ({ works }) => {
  return (
    <main className="flex-1">
      <div className="wrapper">
        <div className="hero__block">
          <div className="mx-auto">
            <div>
              <h1 className="font-serif text-center text-56">
                <span>Последние проекты</span>
              </h1>
            </div>
          </div>
        </div>
        <section className="o-container container mx-auto md:my-32 md:mt-26">
          <div className="works__grid works__grid-all">
            {works.map(work => <Card key={work.id} work={work} />).reverse()}
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

import fetch from 'isomorphic-unfetch'
import Card from '../components/Card'

const Home = ({ works }) => {
  return (
    <div className="outline-none">
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            {works.map(work => (
              <Card key={work.id} work={work} />
            ))}
          </div>
        </div>
      </section>
      <a
        className="footer__content-social-item"
        href="#"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
      >
        <span className="footer__content-social-item-title">
          <span data-text="Instagram">Instagram</span>
        </span>
      </a>
    </div>
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

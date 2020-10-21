import fetch from 'isomorphic-unfetch'
import { NextSeo } from 'next-seo'

function Work({ work }) {
  console.log(work)

  const SEO = {
    title: `${work.title} | Bochkarev.PRO`,
    description: work.description,
    openGraph: {
      title: `${work.title} | Bochkarev.PRO`,
      description: work.description,
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <div className="container mx-auto">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
          {work.title}
        </h2>
      </div>
    </>
  )
}

const { API_URL } = process.env

export async function getServerSideProps(context) {
  const { slug } = context.query
  const res = await fetch(`${API_URL}/works?slug=${slug}`)
  const data = await res.json()
  return {
    props: {
      work: data[0],
    },
  }
}

export default Work

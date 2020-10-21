import fetch from 'isomorphic-unfetch'

function Work({ work }) {
  console.log(work)
  return (
    <div className="container mx-auto">
      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
        {work.title}
      </h2>
    </div>
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

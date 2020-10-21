import Link from 'next/link'

function Card({ work }) {
  const { API_URL } = process.env

  return (
    <div className="p-4 lg:w-1/3 md:w-full">
      <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <img src={API_URL + work.cover.url} alt={work.title} />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            {work.title}
          </h2>
          <p className="leading-relaxed text-base">{work.introtext}</p>
          <Link href="/works/[slug]" as={`/works/${work.slug}`}>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card

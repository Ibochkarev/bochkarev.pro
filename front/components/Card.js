import Link from 'next/link'

function Card({ work }) {
  const { API_URL } = process.env

  return (
    <div className="works-item relative">
      <Link href="/works/[slug]" as={`/works/${work.slug}`}>
        <a className="works-item__media" aria-label={work.title}>
          <div className="works-item__image">
            <div className="relative h-full">
              <div className="pointer-events-none works-item__image-wrapper relative overflow-hidden">
                <div aria-hidden="true" className="w-full"></div>
                {/* <picture>
                  <img
                    className="object-cover"
                    src={API_URL + work.cover.url}
                  />
                </picture> */}
              </div>
            </div>
          </div>
        </a>
      </Link>
      <div className="works-item__content pointer-events-none text-black">
        <h2 className="mb-2 font-serif text-llama">{work.title}</h2>
        <div className="case-study__subtitle">
          <span className="case-study__services">{work.type_work}</span>
          <span className="case-study__link-text">Посмотреть проект</span>
        </div>
      </div>
    </div>
  )
}

export default Card

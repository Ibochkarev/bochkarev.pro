import fetch from 'isomorphic-unfetch'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

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
      <main className="flex-1">
        <div className="project-wrap w-full">
          <div className="project__wrapper z-1">
            <section className="project-hero container mx-auto bg-gray-200 mt-16 sm:mt-20 flex flex-col project-hero__bg">
              <div className="flex flex-col items-center flex-auto">
                <img
                  src={API_URL + work.cover.url}
                  width="1216"
                  height="760"
                  alt={work.title}
                ></img>
              </div>
            </section>
            <section className="py-16 bg-white sm:mt-3 md:py-24 case-intro">
              <div className="container mx-auto">
                <div className="case-intro__max-width">
                  <header className="max-w-2xl">
                    <div>
                      <div className="animate">
                        <h1 className="mb-3 text-xl font-semibold sm:mb-4">
                          {work.title}
                        </h1>
                        <div className="mb-8 font-serif text-40px">
                          {work.longtitle}
                        </div>
                      </div>
                    </div>
                  </header>
                  <div className="flex-wrap justify-between -ml-12 md:flex">
                    <div className="w-full pl-12 md:w-8/12">
                      <div className="max-w-2xl">
                        <div>
                          <div className="animate">
                            <div className="mb-8 md:mb-0 style-links">
                              {work.content}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full pl-12 md:w-4/12 md:mt-0">
                      <div>
                        <div className="animate">
                          <Link href={work.link}>
                            <a
                              target="_blank"
                              rel="nore"
                              className=" bg-teal-400 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full"
                            >
                              Перейти на сайт
                            </a>
                          </Link>
                        </div>
                        {work.type_work
                          ? `<div className="animate">
                          <div className="font-serif case-intro__aside style-links c-rich-text has-line-bullets md:text-center">
                            <ul>
                              <li>Visual language</li>
                            </ul>
                          </div>
                        </div>`
                          : ''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
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

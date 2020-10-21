import Link from 'next/link'

function Header() {
  return (
    <div className="header__wrapper">
      <header className="header container mx-auto sticky top-0 pl-5 pr-5 pt-8 pb-8">
        <div className="container flex items-center justify-between">
          <div className="header__logo">
            <Link href="/">
              <a className="text-gray-800 font-bold">Bochkarev.PRO</a>
            </Link>
          </div>
          <div className="hidden sm:flex items-center">
            <nav className="header__nav flex items-center">
              <Link href="/works">
                <a className="header__nav-item relative">
                  <span className="header__nav-item-title font-medium font-serif text-xs normal-case md:uppercase text-gray-800">
                    <span data-text="Работы">Работы</span>
                  </span>
                </a>
              </Link>
              <Link href="/about">
                <a className="header__nav-item md:ml-8 ml-6 relative">
                  <span className="header__nav-item-title font-medium font-serif text-xs normal-case md:uppercase text-gray-800">
                    <span data-text="Обо мне">Обо мне</span>
                  </span>
                </a>
              </Link>
              <Link href="/blog">
                <a className="header__nav-item md:ml-8 ml-6 relative">
                  <span className="header__nav-item-title font-medium font-serif text-xs normal-case md:uppercase text-gray-800">
                    <span data-text="Блог">Блог</span>
                  </span>
                </a>
              </Link>
            </nav>
          </div>
          <div className="block sm:hidden">
            <button className="header__burger">
              <div>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      <div className="sm:hidden header__nav-mobile bg-gray-400 fixed inset-0 overflow-hidden overflow-y-auto">
        <div className="flex flex-col justify-between min-h-full">
          <nav className="flex items-center">
            <Link href="/works">
              <a className="relative font-medium text-xs normal-case md:uppercase text-gray-800">
                Работы
              </a>
            </Link>
            <Link href="/about">
              <a className="md:ml-8 ml-6 relative font-medium text-xs normal-case md:uppercase text-gray-800">
                Обо мне
              </a>
            </Link>
            <Link href="/blog">
              <a className="md:ml-8 ml-6 relative font-medium text-xs normal-case md:uppercase text-gray-800">
                Блог
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header

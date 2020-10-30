import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
    this.handleMobileMenu = this.handleMobileMenu.bind(this)
  }

  handleMobileMenu = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state
    return (
      <div className="header__wrapper">
        <header className="header container mx-auto sticky top-0 pl-5 pr-5 pt-8 pb-8 opacity-100">
          <div className="flex items-center justify-between">
            <div className="header__logo">
              <Link href="/">
                <a className="text-gray-800 font-bold">BOCHKAREV.PRO</a>
              </Link>
            </div>
            <div className="hidden sm:flex items-center">
              <nav className="header__nav flex items-center">
                <Link href="/works">
                  <a className="header__nav-item relative" aria-label="Работы">
                    <span className="header__nav-item-title font-medium font-serif text-xs normal-case md:uppercase text-gray-800">
                      <span data-text="Работы">Работы</span>
                    </span>
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className="header__nav-item md:ml-8 ml-6 relative"
                    aria-label="Обо мне"
                  >
                    <span className="header__nav-item-title font-medium font-serif text-xs normal-case md:uppercase text-gray-800">
                      <span data-text="Обо мне">Обо мне</span>
                    </span>
                  </a>
                </Link>
                <Link href="/blog">
                  <a
                    className="header__nav-item md:ml-8 ml-6 relative"
                    aria-label="Блог"
                  >
                    <span className="header__nav-item-title font-medium font-serif text-xs normal-case md:uppercase text-gray-800">
                      <span data-text="Блог">Блог</span>
                    </span>
                  </a>
                </Link>
              </nav>
            </div>
            <div className="block sm:hidden">
              <button
                className="header__burger"
                onClick={this.handleMobileMenu}
                // onClick={handleClick}
                aria-label="Menu"
              >
                <div>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
        </header>
        <div
          className={`sm:hidden header__nav-mobile fixed bg-gray-400 inset-0 overflow-hidden overflow-y-auto ${
            isOpen ? 'is-open' : ''
          }`}
        >
          <div className="flex flex-col justify-between min-h-full">
            <nav className="flex items-center">
              <Link href="/works">
                <a
                  className="relative font-medium text-xs normal-case md:uppercase text-gray-800"
                  aria-label="Работы"
                >
                  Работы
                </a>
              </Link>
              <Link href="/about">
                <a
                  className="md:ml-8 ml-6 relative font-medium text-xs normal-case md:uppercase text-gray-800"
                  aria-label="Обо мне"
                >
                  Обо мне
                </a>
              </Link>
              <Link href="/blog">
                <a
                  className="md:ml-8 ml-6 relative font-medium text-xs normal-case md:uppercase text-gray-800"
                  aria-label="Блог"
                >
                  Блог
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

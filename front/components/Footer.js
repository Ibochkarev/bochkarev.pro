import Link from 'next/link'

function Footer() {
  return (
    <footer className="pt-12 pb-12 md:pt-16 md:pb-26 mt-16">
      <div className="o-container">
        © Bochkarev.PRO {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer

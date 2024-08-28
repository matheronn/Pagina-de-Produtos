
export default function Header() {
  return (
    <header className='bg-yellow-100'>
      <div className='container flex justify-between'>
        {/* <img src="" alt="" /> */}
        <p>logo</p>
        <nav>
					<ul className="flex gap-4">
						<li>Home</li>
						<li>Produtos</li>
						<li>Contato</li>
					</ul>
        </nav>
      </div>
    </header>
  )
}

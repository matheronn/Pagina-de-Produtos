import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black text-white'>
      <div className='container flex justify-between gap-6 items-center flex-col sm:flex-row'>
        <img src="/lv.png" alt="Logo Loja Virtual" width="200"/>
        <div>
          <p>&copy; 2024 Loja Virtual. Todos os direitos reservados.</p>
        </div>
        <div className='text-center space-y-4'>
          <h5>Social:</h5>
          <div className='flex space-x-2'>
          <a href="https://www.facebook.com/"><img src="/social/facebook.webp" alt="Facebook logo" width="30"/></a>
          <a href="https://www.instagram.com/"><img src="/social/instagram.webp" alt="Instagram logo" width="30"/></a>
          <a href="https://www.tiktok.com/"><img src="/social/tiktok.webp" alt="Tiktok Logo" width="30"/></a>
          </div>
        </div>
        <div>
          <h5>E-mail:</h5>
          <p>sac@lojavirtual.com.br</p>
        </div>
      </div>
    </footer>
  )
}

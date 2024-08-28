import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-yellow-100'>
      <div className='container flex justify-between items-center'>
        <p>logo</p>
        <div>
          <h5>Atendimento</h5>
          <p>Horário de atendimento:</p>
          <p>08:00 às 20:00 -</p>
          <p>Segunda a Sexta,</p>
          <p>09:00 às 15:00 -</p>
          <p>Sabado,</p>
          <p>horário de Brasília</p>
        </div>
        <div>
          <h5>Endereço:</h5>
            <p>Rua Lorem Ipsum, 1234 -</p>
            <p>1° andar - Centro</p>
            <p>São Paulo/SP - CEP: 12345-678</p>
            <p>Central SAC:</p>
            <p>(11) 1234-5678</p>
        </div>
        <div>
          <h5>E-mail:</h5>
          <p>sac@lojavirtual.com.br</p>
        </div>
      </div>
    </footer>
  )
}

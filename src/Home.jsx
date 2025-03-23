import { useState } from 'react'
import './Home.css'
import cadastroImage from './images/cadastro.png'
import notasImage from './images/notas.png'
import infoImage from './images/info.png'
import lixoImage from './images/lixo.png'

function Home() {
  

  return (
    <>
        <div>
            <div className="title">
                <h1>Olá, Usuário</h1>
                <h3>Bem vindo a Hora do Remédio, cadastre seus medicamentos e horários para facilitar seu tratamento. 😉</h3>
            </div>

            <div className="container">

                <div className="itemApp">
                    <div className="imageApp">
                        <a href='/cadastro'>
                            <img src={cadastroImage} alt="Imagem da sessão cadastro" className="fa-solid fa-capsules"></img>
                        </a>
                    </div>
                    <div className="textApp">
                        <p>Cadastre seus remédios e horários aqui.</p>
                    </div>
                </div>

                <div className="itemApp">
                    <div className="imageApp">
                        <a href='/notas'>
                            <img src={notasImage} alt="Imagem da sessão de notas" className="fa-solid fa-notes-medical"></img>
                        </a>
                    </div>
                    <div className="textApp">
                        <p>Marque se tomou seu remédio no horário certo aqui.</p>
                    </div>
                </div>

                <div className="itemApp">
                    <div className="imageApp">
                        <a href='/info'>
                            <img src={infoImage} alt="Imagem da sessão de informações" className="fa-solid fa-notes-medical"></img>
                        </a>
                    </div>
                    <div className="textApp">
                        <p>Veja as informações do seu remédio aqui.</p>
                    </div>
                </div>

                <div className="itemApp">
                    <div className="imageApp">
                        <a href='/lixo'>
                            <img src={lixoImage} alt="Imagem da sessão de informações" className="fa-solid fa-notes-medical"></img>
                        </a>
                    </div>
                    <div className="textApp">
                        <p>Veja os locais de descarte mais próximos de você.</p>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Home

import './Rodape.css';

const Rodape =()=>{
    return(
        <div className='rodape'>
            <section className='redes-sociais'>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src="/imagens/fb.png" alt='Facebook'/>
                        </a>
                    </li>
                    <li>
                       <a href='twitter.com' target='_blank'>
                            <img src='/imagens/tw.png' alt='Twitter'/>
                       </a>
                    </li>
                    <li>
                       <a href='instagram.com' target='_blank'>
                            <img src='/imagens/ig.png' alt='Instagram'/>
                        </a> 
                    </li>
                </ul>
            </section>
            <section className='logo'>
            <img src='/imagens/logo.png' alt='Organo'/>
            </section>
            <section className='info'>
            Desenvolvido por Alura
            </section>
        </div>
    )
}

export default Rodape;
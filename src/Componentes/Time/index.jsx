import Colaborador from '../Colaborador';
import './Time.css';

const Time =(props)=>{
    const style={backgroundColor: props.corSecundaria}
    const styleborder = {borderColor: props.corDestaque}
    return(
        (props.colaboradores.length>0) ? <section className='time' style={style}>
            <h3 style={styleborder}>{props.nome}</h3>
           <div className='colaboradores'>
            {props.colaboradores.map(colaborador=>
                <Colaborador
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    corDeFundo={props.corDestaque}
                    />)}
                </div>
        </section>
        :''
    )
};

export default Time;
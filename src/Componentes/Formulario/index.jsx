import "./Formulario.css"
import Campotexto from "../Campotexto"
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Button";
import { useState } from "react";

const Formulario =(props)=>{

    const [nome,setNome]=useState('');
    const [cargo,setCargo]=useState('');
    const [imagem,setImagem]=useState('');
    const [time,setTime]=useState('');


    const aoSalvar =(evento)=>{
        evento.preventDefault()
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setImagem('')
        setCargo('')
        setTime('')
    }

    return(
        <section className="formulario"> 
            <form onSubmit={aoSalvar}>
            <h2>Preencha suas informações para criar o cartão de colaborador</h2>
            <Campotexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome" 
                valor={nome}
                aoAlterado={valor=>setNome(valor)}
            />
            <Campotexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor=>setCargo(valor)}
            />
            <Campotexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor=>setImagem(valor)} 
            />
            <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                items={props.times}
                valor={time}
                aoAlterado={valor=>setTime(valor)}
            /> 
            <Botao texto="Criar card"/>
            </form>
        </section>
    )

};

export default Formulario;
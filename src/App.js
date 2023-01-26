import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Rodape from './Componentes/Rodapé';
import Time from './Componentes/Time';

function App() {

  const times=[
    {
      nome:'Programação',
      corDestaque:'#57C278',
      corSecundaria:'#D9F7E9',
    },
    {
      nome:'Front-End',
      corDestaque:'#82CFFA',
      corSecundaria:'#E8F8FF',
    },
    {
      nome:'Data Science',
      corDestaque:'#A6D157',
      corSecundaria:'#F0F8E2',
    },
    {
      nome:'Devops',
      corDestaque:'#E06B69',
      corSecundaria:'#FDE7E8',
    },
    {
      nome:'UX e Design',
      corDestaque:'#DB6EBF',
      corSecundaria:'#FAE9F5',
    },
    {
      nome:'Mobile',
      corDestaque:'#FFBA05',
      corSecundaria:'#FFF5D9',
    },
    {
      nome:'Inovação e Gestão',
      corDestaque:'#FF8A29',
      corSecundaria:'#FFEEDF',
    },
];

  const[colaboradores,setColaboradores]=useState([]);

  const colaboradorAdicionado =(colaborador)=>{
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner /> 
      <Formulario times={times.map(time=>time.nome)} colaboradorCadastrado={colaborador=>colaboradorAdicionado(colaborador)}/>
      {times.map(time=> <Time 
                          key={time.nome} 
                          nome={time.nome} 
                          corDestaque={time.corDestaque}
                          corSecundaria={time.corSecundaria}
                          colaboradores={colaboradores.filter(colaborador=>colaborador.time === time.nome)}
                          />)}    
     <Rodape/>                      
    </div>
    
  );
}

export default App;

import './ListaSuspensa.css'

const ListaSuspensa =(props)=>{
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento=>props.aoAlterado(evento.target.value)} value={props.valor} required={props.obrigatorio}>
                {props.items.map(item =>{return <option key={item}> {item} </option>
            })}
            <option value=""></option>
            </select>
        </div>

    )
};

export default ListaSuspensa;
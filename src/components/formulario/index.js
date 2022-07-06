import './Formulario.css'
import TextInput from '../TextInput'
import ListUp from '../listUp'
import Button from '../button'
import { useState } from 'react'

const Formulario = (props) => {
    
        
    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')

    const saveOn = (event) =>{
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        
    }

    return (

        <section className='formulario'>
            <form onSubmit={saveOn}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput label="Nome" placeholder="Digite o nome" valor = {nome} aoAlterado = {valor=>setNome(valor)}/>
                <TextInput label="Cargo" placeholder="Digite o cargo" valor = {cargo} aoAlterado = {valor=>setCargo(valor)}/>
                <TextInput label="Imagem" placeholder="Informe o endereço da imagem" valor = {imagem} aoAlterado = {valor=>setImagem(valor)}/>
                <ListUp label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Button>Criar Card</Button>
            </form>
        </section>

    )

}

export default Formulario
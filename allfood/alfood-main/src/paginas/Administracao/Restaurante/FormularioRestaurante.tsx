import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const FormularioRestaurante = () => {
    const [nomeRestaurante, setNomeRestaurante] = useState('');

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        
        axios.post('http://localhost:8000/api/v2/restaurantes/', {
            nome: nomeRestaurante
        }).then(() => {
            alert('Restaurante cadastrado');
        }).catch (erro => {
            console.log(erro);
        })
    }

    return (
        <form onSubmit={aoSubmeterForm}>
            <TextField value={nomeRestaurante} 
                onChange={evento => setNomeRestaurante(evento.target.value)} 
                id="standard-basic" 
                label="Nome do restaurante" 
                variant="standard"
            />
            <Button type='submit' variant='outlined'>Salvar</Button>
        </form>
    )
}

export default FormularioRestaurante;
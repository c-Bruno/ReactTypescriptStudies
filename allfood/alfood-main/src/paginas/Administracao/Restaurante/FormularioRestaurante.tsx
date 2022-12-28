import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import IRestaurante from '../../../interfaces/IRestaurante';
import { Typography, Box } from '@mui/material';
import http from '../../../http';

const FormularioRestaurante = () => {
    const parametros = useParams();
    useEffect(() =>{
        if (parametros.id){
            http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
        }
    }, [parametros])

    const [nomeRestaurante, setNomeRestaurante] = useState('');

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if(parametros.id){
            http.put<IRestaurante>(`restaurantes/${parametros.id}/`, {
                nome: nomeRestaurante
            }).then(() => {
                alert('Restaurante atualizado com sucesso');
            }).catch (erro => {
                console.log(erro);
            })
        } else {
            http.post('restaurantes/', {
                nome: nomeRestaurante
            }).then(() => {
                alert('Restaurante cadastrado com sucesso');
            }).catch (erro => {
                console.log(erro);
            })
        }
    }

    return (
        <Box sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <Typography component='h1' variant='h6'>Formulario de restaurantes</Typography>
            <Box component='form' onSubmit={aoSubmeterForm}>
                <TextField value={nomeRestaurante} 
                    onChange={evento => setNomeRestaurante(evento.target.value)} 
                    id="standard-basic" 
                    label="Nome do restaurante" 
                    variant="standard"
                    fullWidth
                    required
                />
                <Button sx={{marginTop: 1}} type='submit' fullWidth variant='outlined'>Salvar</Button>
            </Box>
        </Box>
    )
}

export default FormularioRestaurante;
import { FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, TextField, Radio} from "@mui/material";
import { useState } from "react";
import Input from "../../controls/Input";
import {useForm, Form} from '../../UseForm';

const initialValues = {
    nome: 'a',
    email: '',
    sexo: 'masculino'
}

export default function ClienteCadastroForm(props){
   
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialValues)


    return(

        <Form>
            <Grid container>
                <Grid item xs={4}>
                    <Input 
                        name='nome'
                        label='Nome'
                        value={values.nome}
                        onChange={handleInputChange}
                    />
                    <Input 
                        name='email'
                        label='Email'
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <FormControl>
                        <FormLabel>Sexo</FormLabel>
                        <RadioGroup
                            value={values.sexo}
                            name='sexo'
                            onChange={handleInputChange}
                        >
                            <FormControlLabel value='masculino' control={ <Radio />} label='Masculino'/>
                            <FormControlLabel value='feminino' control={ <Radio />} label='Feminino'/>
                            <FormControlLabel value='outro' control={ <Radio />} label='Outro'/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>

    )
}
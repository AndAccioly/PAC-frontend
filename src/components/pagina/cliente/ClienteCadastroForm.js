import { Grid } from "@mui/material";
import Controls from "../../controls/Controls";
import { useForm, Form, useEnderecoForm } from '../../UseForm';
import * as planoSaudeService from '../../../services/planoSaudeService'
import EnderecoForm from "./EnderecoForm";


const initialValues = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    sexo: 'masculino',
    planoSaude: '',
    dataNascimento: new Date(),
}

const endereco = {
    bairro: '',
    rua: '',
    cep: '',
    numero: '',
    estado: '',
    cidade: '',
    complemento: '',
}

const sexoItems = [
    { id: 'masculino', title: 'Masculino' },
    { id: 'feminino', title: 'Feminino' },
    { id: 'outro', title: 'Outro' }
]
export default function ClienteCadastroForm(props) {
    const classes = props.classes
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialValues)

    const {
        enderecoValues,
        setEnderecoValues,
        handleEnderecoInputChange
    } = useEnderecoForm(endereco)

    function onClickLimpar(){
        console.log('chamou')
        setValues({ 
            nome: '',
            cpf: '',
            email: '',
            telefone: '',
            sexo: 'masculino',
            planoSaude: '',
            dataNascimento: new Date(),
        })
        setEnderecoValues({
            bairro: '',
            rua: '',
            cep: '',
            numero: '',
            estado: '',
            cidade: '',
            complemento: '',
        })
    }

    return (
        <Form>
            <Grid container>
                <Grid item md={4} xs={6}>
                    <Controls.Input
                        name='nome'
                        label='Nome'
                        value={values.nome}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={2} xs={6}>
                    <Controls.Input
                        name='cpf'
                        label='Cpf'
                        value={values.cpf}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='email'
                        label='Email'
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Controls.Input
                        name='telefone'
                        label='Telefone'
                        value={values.telefone}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item md={2} xs={4}>
                    <Controls.DatePicker
                        name='dataNascimento'
                        label='Data de Nascimento'
                        value={values.dataNascimento}
                        onChange={handleInputChange}
                    />
                     </Grid>
                    <Grid item md={2} xs={4}>
                    <Controls.Select
                        name='planoSaude'
                        label='Plano de Saúde'
                        value={values.planoSaude}
                        onChange={handleInputChange}
                        options={planoSaudeService.getPlanosSaudeLista()}
                    />
                </Grid>

                <Grid item md={4} xs={6}>
                    <Controls.RadioGroup
                        value={values.sexo}
                        label='Sexo'
                        name='sexo'
                        onChange={handleInputChange}
                        items={sexoItems}
                        row={true}
                    />
                </Grid>
            </Grid>
            <div className={classes.paperSubtitulo}>Endereço</div>
            <div className={classes.linhaForm}></div>
            
            <EnderecoForm
                values={enderecoValues}
                handleInputChange={handleEnderecoInputChange}
                
            />
            
            <div className={classes.linhaForm}></div>
            <Grid item xs={2}>
                <Controls.Button
                    text='Enviar'
                    type='submit'
                />
                <Controls.Button
                    text='Limpar'
                    variant='outlined'
                    onClick={onClickLimpar}
                />
            </Grid>
        </Form>

    )
}
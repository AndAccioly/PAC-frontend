import EnderecoForm from '../../components/EnderecoForm';
import { Form } from '../../components/UseForm';
import PerfilInfoBasicaForm from './PerfilInfoBasicaForm';

export default function PerfilForm(props) {

    const { perfil } = props
    const classes = props.classes

    function handleSubmit() {

    }
    function handleInputChange() {

    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className={classes.paperSubtitulo}>Informações Básicas</div>
            <div className={classes.linhaForm}></div>
            <PerfilInfoBasicaForm

            />

            <div className={classes.paperSubtitulo}>Endereço</div>
            <div className={classes.linhaForm}></div>
            <EnderecoForm
                values={perfil.enderecoInicial}
                handleInputChange={handleInputChange}
            />

        </Form>
    )
}
import { Grid } from "@mui/material";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/UseForm';
import * as planoSaudeService from '../../services/planoSaudeService'
import EnderecoForm from "../../components/EnderecoForm";
import { useEffect } from "react";


export default function PacienteCadastroForm(props) {


    const handleSubmit = e => {
        console.log('validou')
    }

    return(
        <Form onSubmit={handleSubmit}>

        </Form>
    )
}
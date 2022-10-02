import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import Controls from '../../components/controls/Controls'
import { Form, useForm } from "../../components/UseForm";
import { Grid } from "@mui/material";
import Icones from "../../util/icones";
import Cores from "../../util/cores";

const useStyles = makeStyles({
    header: {
        backgroundColor: 'white',
        height: '9%',
        margin: 'auto',
        borderRadius: '10px',
        width: '99.5%',
        marginTop: '0.25%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    form: {
        width: '15%',
        marginLeft: '5%',
        paddingTop: '0.8%',
        display: 'flex',
        '& .MuiFormControl-root': {
            width: '100%',
        },
    },
    icones: {
        display: 'flex',
        transform: 'translateY(12%)',
    },
    icone: {
        marginLeft: '15%',
        cursor: 'pointer',
        '& .MuiSvgIcon-root': {
            color: Cores.azul5,
            marginTop: '1%',
            fontSize: '2.4rem'
        },
    },
    botao: {
        marginTop: '0.8%',
        marginBottom: '1%',
        marginRight: '1%'
    },
    botaoHoje: {
        marginTop: '0.8%',
        marginBottom: '1%',
        borderRadius: '50px'
    },
    esquerdo: {
        width: '100%',
        marginLeft: '2%',
        display: 'flex'
    }
})


const tiposVisualizacao = [
    { id: '1', value: 'Dia' },
    { id: '2', value: 'Mês' },
    { id: '3', value: 'Ano' },
]

export default function AgendaHeader(props) {
    const classes = useStyles();
   
    const {onChangeProps, openInPopup} = props

    const onClickLeft = () => {
        console.log('Clicado Left')
    }
    const onClickRight = () => {
        console.log('Clicado Right')
    }
   
    const onChangeHoje = (e) => {
        onChangeProps('1')
    }
    const onChangeVisualizacao = (e) => {
        onChangeProps(e.target.value)
    }
    return (
        <div className={classes.header}>
            <div className={classes.esquerdo}>
                <Controls.ButtonVanila
                    text='Hoje'
                    onClick={() => onChangeHoje()}
                    className={classes.botaoHoje}
                />
                <Form className={classes.form}>
                    <Grid container>
                        <Controls.Select
                            name='tipoVisualizacao'
                            value={props.tipoVisualizacao}
                            onChange={(e) => onChangeVisualizacao(e)}
                            options={tiposVisualizacao}
                        />

                    </Grid>
                    <div className={classes.icones}>
                        <div onClick={onClickLeft} className={classes.icone}>
                            {Icones.arrowLeft}
                        </div>
                        <div onClick={onClickRight} className={classes.icone}>
                            {Icones.arrowRight}
                        </div>
                    </div>

                </Form>
            </div>
            <Controls.ButtonVanila
                text='Adicionar'
                onClick={() => openInPopup()}
                className={classes.botao}
            />
        </div>
    )
}
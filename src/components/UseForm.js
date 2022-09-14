import { makeStyles } from "@material-ui/styles"
import {useState} from 'react'

const useStyles = makeStyles({
    root: {
        marginTop: '2%',
        textAlign: 'left',
        '& .MuiFormControl-root':{
            marginTop: '20px',
            width: '90%',
        }
    }
})

export function useForm(initialValues, validateOnChange=false, validate){
    
    const [values, setValues] = useState(initialValues)
    const [erros, setErros] = useState({})
    
    function resetForm(){
        setValues(initialValues)
        setErros({})
    }
    
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        if(validateOnChange)
            validate({[name]: value})
    }

    return {
        values,
        erros,
        setErros,
        setValues,
        handleInputChange,
        resetForm
    }

}


export function useEnderecoForm(initialValues, validateOnChange=false, validate){

    const [enderecoValues, setEnderecoValues] = useState(initialValues)
    const [enderecoErros, setEnderecoErros] = useState(initialValues)
    
    function resetFormEndereco(){
        setEnderecoValues(initialValues)
        setEnderecoErros({})
    }

    const handleEnderecoInputChange = e => {
        const {name, value} = e.target
        setEnderecoValues({
            ...enderecoValues,
            [name]: value
        })
        if(validateOnChange)
        validate({[name]: value})
    }

    return {
        enderecoErros,
        setEnderecoErros,
        enderecoValues,
        setEnderecoValues,
        handleEnderecoInputChange,
        resetFormEndereco
    }

}


export function Form(props){

    const classes = useStyles()
    const {children, ...other} = props
    return(
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}
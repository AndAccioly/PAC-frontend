import { makeStyles } from "@material-ui/styles"
import {useState} from 'react'

const useStyles = makeStyles({
    root: {
        textAlign: 'left',
        '& .MuiFormControl-root':{
            paddingLeft: '10px',
            width: '100%',
            marginTop: '15px',
            marginRight: '10px',
            '& .MuiInputLabel-root':{
                marginLeft: '10px'
            },
        },
        '& .MuiButton': {
            marginLeft: '10px'
        },
        '& .MuiGrid-root ':{
            paddingRight: '10px',
        },
        '& .makeStyles-root-142':{
            marginLeft: '10px'
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


export function Form(props){

    const classes = useStyles()
    const {children, ...other} = props
    return(
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}
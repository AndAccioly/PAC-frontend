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

export function useForm(initialValues){
    
    const [values, setValues] = useState(initialValues)
    
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        handleInputChange
    }

}


export function useEnderecoForm(initialValues){

    const [enderecoValues, setEnderecoValues] = useState(initialValues)
    
    const handleEnderecoInputChange = e => {
        const {name, value} = e.target
        setEnderecoValues({
            ...enderecoValues,
            [name]: value
        })
    }

    return {
        enderecoValues,
        setEnderecoValues,
        handleEnderecoInputChange
    }

}


export function Form(props){

    const classes = useStyles()

    return(
        <form className={classes.root} autoComplete="off">
            {props.children}
        </form>
    )
}
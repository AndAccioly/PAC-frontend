import { makeStyles } from "@material-ui/styles"
import {useState} from 'react'

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

const useStyles = makeStyles({
    root: {
        '& .MuiFormControl-root':{
            marginLeft: '10px',
            marginTop: '10px'
        }
    }
})

export function Form(props){

    const classes = useStyles()

    return(
        <form className={classes.root}>
            {props.children}
        </form>
    )
}
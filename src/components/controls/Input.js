import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
            '-webkit-text-fill-color': 'rgba(0, 0, 0, 0.8)',
        },
        '& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
            '-webkit-text-fill-color': 'rgba(0, 0, 0, 0.8)',
        },
        '& .MuiInputBase-root.Mui-disabled': {
            '-webkit-text-fill-color': 'rgba(12, 43, 92, 0.8)',
        },
     
    }
})

export default function Input(props) {

    const { name, label, value, error = null, onChange, ...other } = props
    const classes = useStyles()

    return (
        <TextField
            className={classes.root}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from "@mui/material";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    root: {
        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
            '-webkit-text-fill-color': 'rgba(0, 0, 0, 0.8)',
        },
     
    }
})

export default function Select(props) {

    const { name, label, value, error=null, onChange, options, ...other } = props;
    const classes = useStyles()


    return (
        <FormControl variant='outlined'
            {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                className={classes.root}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...other}>
                {
                    options.map(
                        item => (
                            <MenuItem key={item.id} value={item.id}>{item.value}</MenuItem>
                        )
                        
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
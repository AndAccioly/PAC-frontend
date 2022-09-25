import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from "@mui/material";


export default function Select(props) {

    const { name, label, value, error=null, onChange, options, ...other } = props;

    return (
        <FormControl variant='outlined'
            {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
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
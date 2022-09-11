import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from "@mui/material";


export default function Select(props) {

    const { name, label, value, onChange, options } = props;

    return (
        <FormControl
            variant='outlined'>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value='99'>Nenhum</MenuItem>
                {
                    options.map(
                        item => (
                            <MenuItem key={item.id} value={item.id}>{item.value}</MenuItem>
                        )
                        
                    )
                }
            </MuiSelect>
        </FormControl>
    )
}
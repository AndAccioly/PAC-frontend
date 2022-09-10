import { TextField } from "@mui/material";

export default function Input(props) {

    const { name, label, value, onChange } = props

    return (
        <div>
            <TextField
                variant="outlined"
                label={label}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
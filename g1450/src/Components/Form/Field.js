import TextField from '@mui/material/TextField';

export default function Field(props)  {
    return  (
        <TextField fullWidth id="outlined-basic" label={props.label} variant="outlined" value={props.value} error={props.error} helperText={props.error ? props.helperText : ' '} onChange={(e) => { props.onChange(e)}}/>
    )
}
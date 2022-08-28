import TextField from '@mui/material/TextField';

export default function InputField({type,label,name,value,onChange,sx}) {
  return (
    <TextField   type= {type||'text'} size='large' value = {value} onChange={(e) => onChange(e)} required
    sx={{width:'300px',margin:'10px 5px',...sx}} label={label||"Outlined"} name={name||''} variant="outlined" />
  )
}

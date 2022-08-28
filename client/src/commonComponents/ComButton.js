import Button from '@mui/material/Button';

export default function ComButton({type,bText,onPress}) {
  return (
    <Button type={type || null} sx={{margin:'15px 0'}} variant="contained" onClick={onPress}>{bText || 'text'}</Button>
  )
}

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import SelectorList from "../molecules/SelectorList";
import Label from "../atoms/input/Label";



export default function Dropdown({
  onChange,
  label,
  currentValue,
  values = []
}:{
  onChange:Function, 
  label: string,
  currentValue: string | number,
  values: string[] | number[]
}) {

  return (
    <Box sx={{ paddingBlockEnd: 2 }}>
      <FormControl fullWidth>
        <Label label={label}/>
        <SelectorList options={values} currentValue={currentValue} label={label} onChange={onChange} />
      </FormControl>
    </Box>
  );
}

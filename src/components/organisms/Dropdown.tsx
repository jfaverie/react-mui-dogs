import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SelectorOption from "../atoms/SelectorOption";
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
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event?.target?.value);
  };
  return (
    <Box sx={{ paddingBlockEnd: 2 }}>
      <FormControl fullWidth>
        <Label label={label}/>
        <SelectorList options={values} currentValue={currentValue} label={label} onChange={handleChange} />
      </FormControl>
    </Box>
  );
}

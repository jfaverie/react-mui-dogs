import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
        <InputLabel>{label}</InputLabel>
        <Select value={currentValue.toString()} label={label} onChange={handleChange}>
          {[...values].map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

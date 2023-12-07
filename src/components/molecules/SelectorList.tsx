import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";

const SelectorList = ({
    options=[],
    label,
    onChange,
    currentValue,
}: {
    options: string[] | number[],
    label:string ,
    onChange: Function,
    currentValue: string | number
}) => {
    const handleChange = (event: SelectChangeEvent<string>) => {
        onChange(event?.target?.value);
    };
    return (
        <Select value={currentValue.toString()} label={label} onChange={handleChange}>
            {[...options].map((value) => (
                <MenuItem key={value} value={value}>
                   {value}
                 </MenuItem>
          ))}
        </Select>
    )
}

export default SelectorList
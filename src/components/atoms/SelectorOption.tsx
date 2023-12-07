import { MenuItem } from "@mui/material"
import { useEffect } from "react"

const SelectorOption = ({
    option,
}: {
    option: string | number,
}) => {

    return (
        <MenuItem key={option} value={option}>
            {option}
        </MenuItem>
    )
}

export default SelectorOption
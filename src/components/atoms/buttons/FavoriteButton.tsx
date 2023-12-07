import { FavoriteTwoTone } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { MouseEventHandler } from "react"

const FavoritesButton = ({handleClick, isClicked =false}: { handleClick:MouseEventHandler, isClicked?: boolean}) => {
    return (
        <IconButton 
         onClick={handleClick} 
         className={`btn favoriteBtn ${isClicked && "clicked"}`}
        >
            <FavoriteTwoTone/>
        </IconButton>
    )
}

export default FavoritesButton
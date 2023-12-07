import { List, ListItem, ListItemText } from "@mui/material"

const FavoritesPetList = ({favoritesDog: favoritesPet, onDogSelect}:{favoritesDog:string[], onDogSelect: Function}) => {
    return (
        <List>
            {
                favoritesPet.map((favDog)=>(
                    <ListItem button key={favDog} onClick={()=>onDogSelect(favDog)}>
                        <ListItemText>{favDog}</ListItemText>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default FavoritesPetList
import { Breeds } from "../../types"
import FavoritesPetList from "../molecules/FavoritePetList"

const FavoritesPetContainer = ({
    petName,
    favoritePets,
    onPetSelect
}: {
    petName: string,
    favoritePets: Breeds,
    onPetSelect: Function
}) => {
    return (
    <div>
        <h1>Favorites {petName}s</h1>
        <FavoritesPetList
            favoritesDog={favoritePets}
            onDogSelect={onPetSelect}
        />
      </div>
    )
}
export default FavoritesPetContainer
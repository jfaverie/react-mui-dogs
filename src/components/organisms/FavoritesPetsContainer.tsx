import { Breeds } from "../../types"
import FavoritesPetList from "../molecules/FavoritePetList"

const FavoritesPetContainer = ({
    petName,
    favoritePets,
    onPetSelect,
    showFavoritesPetsList
}: {
    petName: string,
    favoritePets: Breeds,
    onPetSelect: Function,
    showFavoritesPetsList: boolean
}) => {
    return (
    <div className="favorites_pets_container">
        <div className={`favorites_pets ${showFavoritesPetsList && "show"}`}>
            <h1>Favorites {petName}s</h1>
            <FavoritesPetList
                favoritesDog={favoritePets}
                onDogSelect={onPetSelect}
            />
        </div>
      </div>
    )
}
export default FavoritesPetContainer
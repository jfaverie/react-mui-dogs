import { Container } from "@mui/material";
import Dropdown from "../organisms/Dropdown";
import DogCard from "../organisms/DogCard";
import DogList from "../molecules/DogList";

import "../../styles.css"
import { useEffect, useState } from "react";
import { getAllBreeds, getAllImageByBreed, getImageRandomByBreed } from "../../services/breedApiHandler";
import FavoritesPetList from "../molecules/FavoritePetList";
import FavoritesPetContainer from "../organisms/FavoritesPetsContainer";
import NavBar from "../organisms/Navbar";

const Pet = ({
    petName,
}: {
    petName:string

}) => {
  const [dogList, setDogList] = useState<string[]>([])
  const [currentPetBreed, setCurrentDogBreed] = useState<string>("doberman")
  const [maxCountChoices, setMaxCountChoices] = useState<number[]>([])
  const [maxColoumnChoice, setMaxCoulumnChoices] = useState<number[]>([])
  const [countChoice, setCountChoice] = useState<number>(5)
  const [columnChoice, setColumnChoice] = useState<number>(5)
  const [petImageUrl, setDogImageUrl] = useState("")
  const [imagesCurrentBreed, setImagesCurrentBreed] = useState<string[]>([])
  const [favoritesPets, setFavoritesPets] = useState<string[]>([])
  const [showFavoritesPetList, setShowFavoritesPetList] = useState(false)

  const numberList = (n: number) => {
    return [...Array(n)].map((_, i) => i + 1);
  }
  

  useEffect(()=>{
    getAllBreeds(petName).then(allbreeds=> setDogList(allbreeds))
    const favDogs  =  localStorage.getItem("favoritesDogs")
    if(favDogs){
      setFavoritesPets(JSON.parse(favDogs))
    }
  }, [])


  useEffect(() => {
    const fetchPetData = async () => {
      if (currentPetBreed) {
        try {
          const url = await getImageRandomByBreed(petName,currentPetBreed);
          setDogImageUrl(url);
  
          const images = await getAllImageByBreed(petName,currentPetBreed);
          const imagesNumberList = numberList(images.length);
          setMaxCountChoices(imagesNumberList);
  
          if (countChoice) {
            const imagesCurrentBreed = await getAllImageByBreed(petName,currentPetBreed, countChoice);
            setImagesCurrentBreed(imagesCurrentBreed);
            setMaxCoulumnChoices(numberList(imagesCurrentBreed.length));
          }
        } catch (error) {
          console.log({ error });
        }
      }
    };
  
    // Appeler la fonction asynchrone définie ci-dessus
    fetchPetData();
  }, [currentPetBreed, countChoice]);

  const toggleFavoriteDog = () => {
    if(currentPetBreed){
      const favoritesDogsCopy = [...favoritesPets]
      const index = favoritesDogsCopy.indexOf(currentPetBreed)
      if(index === -1){
        favoritesDogsCopy.push(currentPetBreed)
      }
      else {
        favoritesDogsCopy.splice(index, 1)
      }
  
      setFavoritesPets(favoritesDogsCopy)

      localStorage.setItem("favoritesDogs", JSON.stringify(favoritesDogsCopy))

      console.log({favoritesDogsCopy, index})
    }
    else{
      console.log("Select a dog breed")
    }
  }

  return (
    <main className="pet">
      <NavBar handleClickBtn={()=>setShowFavoritesPetList(!showFavoritesPetList)}/>
      <Container className="petcontainer">
        <h1>Choose your {petName}</h1>
        <div className="pet_head">
          <div className="pet_head_dropdowns">
            <Dropdown
              onChange={(value : string) => setCurrentDogBreed(value)}
              label={`Choose a ${petName}`}
              values={dogList}
              currentValue={currentPetBreed}
            />
            <Dropdown
              onChange={(value: number) => setCountChoice(value)}
              label={`How many ${petName}s`}
              values={maxCountChoices}
              currentValue={countChoice ?? ""}
            />
            <Dropdown
              onChange={(value: number) => setColumnChoice(value)}           
              label="How many columns"
              values={maxColoumnChoice}
              currentValue={columnChoice ?? ""}
            />
          </div>
          <DogCard
            url={petImageUrl}
            alt={currentPetBreed}
            text={currentPetBreed}
            handleClickFavoriteBtn={toggleFavoriteDog}
            isBreedFavorite={favoritesPets.indexOf(currentPetBreed) !== -1}
          />
        </div>
        <DogList itemData={imagesCurrentBreed} cols={columnChoice} />
        <FavoritesPetContainer 
            petName={petName}
            favoritePets={favoritesPets}
            onPetSelect={setCurrentDogBreed}
            showFavoritesPetsList={showFavoritesPetList}
        />
      </Container>
    </main>
  );
}


export default Pet
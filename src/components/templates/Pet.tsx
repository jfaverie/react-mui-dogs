import { Container } from "@mui/material";
import Dropdown from "../organisms/Dropdown";
import DogCard from "../organisms/DogCard";
import DogList from "../molecules/DogList";

import "../../styles.css"
import { useEffect, useState } from "react";
import { getAllBreeds, getAllImageByBreed, getImageRandomByBreed } from "../../services/breedApiHandler";

const dogBreedlist = ["labrador"];

const dogCountChoices = [5];

const columnChoices = [1];

const dogImageUrl =
  "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_4972.jpg";

const dogList = [
  dogImageUrl,
  dogImageUrl,
  dogImageUrl,
  dogImageUrl,
  dogImageUrl
];

const Pet = ({
    petName,
}: {
    petName:string
}) => {
  const [dogList, setDogList] = useState<string[]>([])
  const [currentDogBreed, setCurrentDogBreed] = useState<string>("doberman")
  const [dogCountChoices, setDogCountChoices] = useState<number[]>([])
  const [dogColumnChoices, setDogColumnChoices] = useState<number[]>([])
  const [countChoice, setCountChoice] = useState<number>(5)
  const [columnChoice, setColumnChoice] = useState<number>(5)
  const [dogImageUrl, setDogImageUrl] = useState("")
  const [imagesCurrentBreed, setImagesCurrentBreed] = useState<string[]>([])

  const numberList = (n: number) => {
    return [...Array(n)].map((_, i) => i + 1);
  }
  

  useEffect(()=>{
    console.log("HOOOO")
    getAllBreeds(petName).then(allbreeds=> setDogList(allbreeds))
  }, [])


  useEffect(() => {
    const fetchDogData = async () => {
      if (currentDogBreed) {
        try {
          const url = await getImageRandomByBreed(petName,currentDogBreed);
          setDogImageUrl(url);
  
          const images = await getAllImageByBreed(petName,currentDogBreed);
          const imagesNumberList = numberList(images.length);
          setDogCountChoices(imagesNumberList);
  
          if (countChoice) {
            const imagesCurrentBreed = await getAllImageByBreed(petName,currentDogBreed, countChoice);
            setImagesCurrentBreed(imagesCurrentBreed);
            setDogColumnChoices(numberList(imagesCurrentBreed.length));
          }
        } catch (error) {
          console.log({ error });
        }
      }
    };
  
    // Appeler la fonction asynchrone définie ci-dessus
    fetchDogData();
  }, [currentDogBreed, countChoice]);

  return (
    <main className="pet">
      <Container>
        <h1>Choose your {petName}</h1>
        <div className="pet_head">
          <div className="pet_head_dropdowns">
            <Dropdown
              onChange={(value : string) => { console.log({value}),setCurrentDogBreed(value)}}
              label={`Choose a ${petName}`}
              values={dogList}
              currentValue={currentDogBreed}
            />
            <Dropdown
              onChange={(value: number) => setCountChoice(value)}
              label={`How many ${petName}s`}
              values={dogCountChoices}
              currentValue={countChoice ?? ""}
            />
            <Dropdown
              onChange={(value: number) => setColumnChoice(value)}           
              label="How many columns"
              values={dogColumnChoices}
              currentValue={columnChoice ?? ""}
            />
          </div>
          <DogCard
            url={dogImageUrl}
            alt={currentDogBreed}
            text={currentDogBreed}
          />
        </div>
        <DogList itemData={imagesCurrentBreed} cols={columnChoice} />
      </Container>
    </main>
  );
}


export default Pet
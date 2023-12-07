import { Container } from "@mui/material";
import Dropdown from "../organisms/Dropdown";
import DogCard from "../organisms/DogCard";
import DogList from "../molecules/DogList";

import "../../styles.css"

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
  const defaultDogBreed = "australianshepard";

  return (
    <main className="pet">
      <Container>
        <h1>Choose your {petName}</h1>
        <div className="pet_head">
          <div className="pet_head_dropdowns">
            <Dropdown
              onChange={() => console.log("click")}
              label="Label 1"
              values={dogBreedlist}
              currentValue=""
            />
            <Dropdown
              onChange={() => console.log("click")}
              label="Label 2"
              values={
                dogCountChoices}
              currentValue=""
            />
            <Dropdown
              onChange={() => console.log("click")}
              label="Label 3"
              values={columnChoices}
              currentValue=""
            />
          </div>
          <DogCard
            url={dogImageUrl}
            alt={defaultDogBreed}
            text={defaultDogBreed}
          />
        </div>
        <DogList itemData={dogList} cols={2} />
      </Container>
    </main>
  );
}


export default Pet
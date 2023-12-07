import { Container } from "@mui/material";

import DogCard from "./components/DogCard";
import DogList from "./components/DogList";
import Dropdown from "./components/Dropdown";

import "./styles.css";

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

const App = () => {
  const defaultDogBreed = "australianshepard";

  return (
    <main className="App">
      <Container>
        <h1>Choose your dog</h1>
        <div className="App_head">
          <div className="App_head_dropdowns">
            <Dropdown
              onChange={(event) => event}
              label="Label 1"
              values={dogBreedlist}
              currentValue=""
            />
            <Dropdown
              onChange={(event) => event}
              label="Label 2"
              values={dogCountChoices}
              currentValue=""
            />
            <Dropdown
              onChange={(event) => event}
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


export default App
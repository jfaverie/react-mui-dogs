import "./styles.css";
import DogPage from "./components/pages/DogPage";


const App = () => {
  const defaultDogBreed = "australianshepard";

  return (
    <main className="App">
      <DogPage/>
    </main>
  );
}


export default App
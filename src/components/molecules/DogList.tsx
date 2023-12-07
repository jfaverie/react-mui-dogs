import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Dogs } from "../../types";
import DogImgItem from "../atoms/DogImgItem";

export default function DogList({ itemData, cols = 2 }: {itemData:Dogs, cols?: number}) {
  return (
    <ImageList sx={{ width: "100%" }} cols={cols} rowHeight={164}>
      {itemData.map((item) => (
        <DogImgItem imgUrl={item}/>
      ))}
    </ImageList>
  );
}

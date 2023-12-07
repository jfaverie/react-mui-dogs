import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DogCartText from "../atoms/card/DogCardText";
import DogCardImg from "../atoms/card/DogCardImg";
import { CardActions } from "@mui/material";
import FavoritesButton from "../atoms/buttons/FavoriteButton";
import { MouseEventHandler } from "react";

export default function DogCard({
    url, 
    alt,
    text,
    handleClickFavoriteBtn,
    isBreedFavorite,
  }: {
    url:string,
    alt:string,
    text:string,
    handleClickFavoriteBtn : MouseEventHandler,
    isBreedFavorite : boolean,
  }
  ) {
  return (
    <Card sx={{ width: 400 }}>
      <DogCardImg url={url} alt={alt}/>
      <DogCartText text={text}/>
      <CardActions>
        <FavoritesButton 
            handleClick={handleClickFavoriteBtn}
            isClicked={isBreedFavorite}
        />
      </CardActions>
    </Card>
  );
}

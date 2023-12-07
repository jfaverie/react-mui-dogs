import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DogCartText from "../atoms/card/DogCardText";
import DogCardImg from "../atoms/card/DogCardImg";

export default function DogCard({
   url, alt, text 
  }: {
    url: string,
    alt: string,
    text: string
  }
  ) {
  return (
    <Card sx={{ width: 400 }}>
      <DogCardImg url={url} alt={alt}/>
      <DogCartText text={text}/>
    </Card>
  );
}

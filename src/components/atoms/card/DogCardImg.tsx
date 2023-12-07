import { CardMedia } from "@mui/material"

const DogCardImg = ({
    url,
    alt,
}:{
    url:string,
    alt:string
}) => {
    return <CardMedia component="img" height={300} image={url} alt={alt} />
}

export default DogCardImg
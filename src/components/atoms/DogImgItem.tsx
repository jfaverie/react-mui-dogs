import { ImageListItem } from "@mui/material"

const DogImgItem = ({
    imgUrl,
}:{
    imgUrl: string
}) => {
    return (
        <ImageListItem>
            <img
                src={`${imgUrl}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${imgUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={imgUrl}
                loading="lazy"
            />
        </ImageListItem>
    )
}

export default DogImgItem
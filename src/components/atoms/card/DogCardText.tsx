import { CardContent, Typography } from "@mui/material"

const DogCartText = ({
    text,
}:{
    text:string,
}) => {
    return(
        <CardContent>
            <Typography variant="h2" component="div">
            {text}
            </Typography>
      </CardContent>
    )
}

export default DogCartText
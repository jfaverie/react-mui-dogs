import { petsUrlApi } from "./petsUrlApi"

export const getAllBreeds = async (petName:string) : Promise<string[]>  => {
    try{
        if (petName in petsUrlApi) {
            const url = petsUrlApi[petName as keyof typeof petsUrlApi].allBreedUrl
            console.log({url})
            const response = await fetch(url)
            const data = await response.json()
            const message = data?.message
            if(!message){
                throw Error()
            }
    
            const breeds = Object.keys(message).flatMap((breed:string)=> {
                if(message[breed]?.length === 0)
                    return [breed]
                else {
                   return message[breed].map((value: string) => `${breed} ${value}` )
                }
            })
            return breeds
        } else {
            throw Error(`${petName} doesn't exit`)
        }
    }catch(error){
        throw Error("An error occurred")
    }
}

export const getImageRandomByBreed = async (petName:string,breedName : string ) : Promise<string> => {
    try{
        const breedsName = breedName.split(" ").join('/')
        const url = petsUrlApi[petName as keyof typeof petsUrlApi].imageRandomUrl(breedsName)
        if(url){
            const response = await fetch(url)
            const data = await response.json()
    
            return data.message
        }
        else {
            throw Error(`${petName} doesn't exit`)
        }
    }catch(error){
        throw Error("An error occurred")
    }
}

export const getAllImageByBreed = async (petName:string,breedName: string, countChoice?: number) :  Promise<string[]> => {
    try{
        const breedsName = breedName.split(" ").join('/')
        let url = petsUrlApi[petName as keyof typeof petsUrlApi].allImagesByBreedUrl(breedsName)
        if(countChoice)
            url = petsUrlApi[petName as keyof typeof petsUrlApi].allImagesByBreedUrlLimited(breedsName, countChoice)
        const response = await fetch(url)
        const data = await response.json()

        return data.message
    }catch(error: any){
        throw Error("An error occurred")
    }
}

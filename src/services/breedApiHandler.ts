export const getAllBreeds = async () : Promise<string[]>  => {
    try{
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
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

    }catch(error){
        throw Error("An error occurred")
    }
}

export const getImageRandomByBreed = async (breedName : string ) : Promise<string> => {
    try{
        const breedsName = breedName.split(" ").join('/')
        const response = await fetch(`https://dog.ceo/api/breed/${breedsName}/images/random`)
        const data = await response.json()

        return data.message
    }catch(error){
        throw Error("An error occurred")
    }
}

export const getAllImageByBreed = async (breedName: string, countChoice?: number) :  Promise<string[]> => {
    try{
        console.log({countChoice})
        const breedsName = breedName.split(" ").join('/')
        let url = `https://dog.ceo/api/breed/${breedsName}/images`
        if(countChoice)
            url = `https://dog.ceo/api/breed/${breedsName}/images/random/${countChoice}`
        const response = await fetch(url)
        const data = await response.json()

        return data.message
    }catch(error: any){
        throw Error("An error occurred")
    }
}

export const petsUrlApi =  {
    dog: {
        allBreedUrl: "https://dog.ceo/api/breeds/list/all",
        imageRandomUrl: (breedsName:string) => `https://dog.ceo/api/breed/${breedsName}/images/random`,
        allImagesByBreedUrl: (breedsName:string) => `https://dog.ceo/api/breed/${breedsName}/images`,
        allImagesByBreedUrlLimited: (breedsName:string,limit:number) => `https://dog.ceo/api/breed/${breedsName}/images/random/${limit}`,
    }
}


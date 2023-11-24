const catEndPointFact = 'https://catfact.ninja/fact';
const catEndPointImage = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = "live_8TUcMK5A9pmdmDxvdGT8eJUn9q160k7Rac0YK5RuIh8d8q92P3POOWiDeteTKFGX";
export const getRandomFact = async () => {
    const res = await fetch(catEndPointFact);
    const data = await res.json();
    const { fact } = data;
    return fact;
}

export const getRandomImageUrl = async () => {
    const res = await fetch(catEndPointImage, {headers: {
        'x-api-key': API_KEY
      }});
    const data = await res.json();
    const { url } = data[0];
    return url;
}

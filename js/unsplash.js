class Unsplash{

    constructor(){
        this.clientId = "bykJW0a54YSJtu1poDL1xcXV5IAwFjoa-2ospv4YoV0";
    }

    // gets a random photo
    async getRandomPhoto(){
        const apiResponse = await fetch(`https://api.unsplash.com/photos/random?client_id=${this.clientId}`);

        const randomPhoto = await apiResponse.json();

        return{
            randomPhoto
        }
    }

    // get photos on load
    async getPhotos(){
        const apiResponse = await fetch(`https://api.unsplash.com/photos?page=1&per_page=30&client_id=${this.clientId}`);

        const photos = await apiResponse.json();

        return{
            photos
        }
    }

    // gets search photos
    async getSearchPhotos(parameter){
        const apiResponse = await fetch("https://api.unsplash.com/search/photos?per_page=30&client_id=" + this.clientId + "&query=" + parameter);

        const searchPhotos = await apiResponse.json();

        return{
            searchPhotos
        }
    }
}
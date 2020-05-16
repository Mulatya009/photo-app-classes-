// instance of class unsplash
const unsplash = new Unsplash();

// instance of class ui
const ui = new UI();

// eventListeners
document.addEventListener('DOMContentLoaded', documentReady);
document.getElementById('search-form').addEventListener('submit', generateSearch);


// functions
function documentReady(){
    unsplash.getRandomPhoto()
        .then(randomPhoto => {
            const rand = randomPhoto.randomPhoto;
            ui.displayRandomPhoto(rand);
        })
        .catch(error => console.log(error));

    unsplash.getPhotos()
        .then(photos => {
            console.log(photos)
            ui.displayPhotos(photos.photos)
        })
        .catch(error => console.log(error));
}
ui.removePrevResults();

function generateSearch(e){
    e.preventDefault();
    const searchParameter = document.getElementById('search').value;
    if(searchParameter === ''){
        // print message
        ui.printMessage('Please type your search parameter', ' alert alert-danger text-center px-5 mt-2');
    }
    else{
        unsplash.getSearchPhotos(searchParameter)
        .then(searchPhotos => {
            const photoS = searchPhotos.searchPhotos.results;
            // console.log(photoS)
            if(photoS === null){
                ui.printMessage('Sorry there are no results for your search!', ' alert alert-danger text-center px-5 mt-2');
            }
            else{
                
                ui.displaySearchPhotos(photoS);                  
            }
        })
        .catch(error => console.log(error));
    }
}
class UI{
    
    // displays random photo
    displayRandomPhoto(randomPhoto){
        const randomDiv = document.getElementById('home-sliding');
        const randomBg = document.createElement('img');
        randomBg.classList.add('img-fluid', 'w-100');
        randomBg.src = `${randomPhoto.urls.regular}`;
        randomBg.style.position = "center";
        randomDiv.appendChild(randomBg);
    }

    // remove prev search results
    removePrevResults(){        
        const prevR = document.querySelector('.current-results');
        if(prevR){
            prevR.remove();
        }
    }

    // display photos on load
    displayPhotos(photo){
        photo.forEach(photo =>{
            let photoList = `
                <div id="search-images" class="col-lg-4 col-md-4 col-sm-6 ap">
                    <div class="h_gallery_item">
                        <img src="${photo.urls.regular}" style="max-height: 400px; width: 100%; position: center;">
                        <a class="light" href="${photo.links.download}"></a>
                        <div class="hover">
                            <a href="#"><h6 class="text-capitalize">${photo.alt_description}</h6></a>
                            <a class="light" href="${photo.urls.regular}" target="_blank"><i class="fa fa-expand"></i></a>
                        </div>
                    </div>
                </div>                
            `;
            $('#images').append(photoList);

        })
    }

    // displays photos from search
    displaySearchPhotos(photos){
        document.querySelector('.results-wrapper').style.display = 'block';
        const resultsDiv = document.querySelector('.results-wrapper', '#results');

        photos.forEach(photo => {
            let result = `
                <div id="search-images" class="current-results col-lg-3 col-md-4 col-sm-6 ap">
                    <div class="h_gallery_item">
                        <img src="${photo.urls.small}" style="max-height: 300px; width: 100%; position: center;">
                        <a class="light" href="${photo.links.download}"></a>
                        <div class="hover">
                            <a href="#"><h6 class="text-capitalize text-white">${photo.alt_description}</h6></a>
                            <a class="light" href="${photo.urls.regular}" target="_blank"><i class="fa fa-expand"></i></a>
                        </div>
                    </div>
                </div>                    
             `;

            $("#results").append(result);
            //resultsDiv.innerHTML = result;
        })
    }
    // print message
    printMessage(message, className){
        const div = document.querySelector('.search-message', '#message'),
              messageWrapper = document.createElement('div');

        messageWrapper.classList = className;
        messageWrapper.innerHTML = `<h4>${message}</h4>`;

        div.appendChild(messageWrapper);

        setTimeout(() => {
            this.clearMessage();
        }, 3000);
    }
    // clear message
    clearMessage(){
        document.querySelector('.alert').remove();
    }

}
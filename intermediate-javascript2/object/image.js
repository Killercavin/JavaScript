let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let getImage = function(title, artist, date) {
    return {
        title,
        artist,
        date
    }
}

let images1 = [];
let images2 = [];

images.forEach(image => images1.push(new Image(image.title, image.artist, image.date)));
images1.forEach(image => images2.push(getImage(image.title, image.artist, image.date)));
images2.forEach(image => {console.log(`${image.title} (${image.artist}, ${image.date})`)});
export function getImageUrl(place) {
    console.log('place.imageId :>> ', place.imageId);
    return (
      'https://i.imgur.com/' +
      place.imageId +
      'l.jpg'
    );
  }
  
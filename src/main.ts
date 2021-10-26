import { Album, PhotoOrientation, Picture, User } from "./photo-app";

const user = new User(1, 'josemha', 'Jose', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '2020-03', PhotoOrientation.Lanscape);

//Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);
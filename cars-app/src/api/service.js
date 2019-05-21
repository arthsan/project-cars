import axios from 'axios';

const service = axios.create({
  baseURL: `https://project-cars-app.herokuapp.com/api`,
  // withCredentials: true // => you might need this when having the users in the app 
});

const errorHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service,

  handleUpload (theFile) {
    console.log('file in service: ', theFile)
    return service.post('/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewCar(newCar) {
    console.log('new car is: ', newCar)
    return service.post('/cars/create', newCar)
      .then(res => res.data)
      .catch(errorHandler);
  },

  getAllCars() {
    return service.get('/cars')
      .then(res => res.data)
      .catch(errorHandler);
  }
}
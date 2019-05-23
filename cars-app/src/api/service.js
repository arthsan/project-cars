import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api',
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

  saveNewQuiz(newQuiz) {
    console.log('new quiz is : ', newQuiz)
    return service.post('/quizform', newQuiz)
      .then(res => res.data)
      .catch(errorHandler);
  },

  editUser(userId, quizId) {
    return service.patch(`/user-update/${userId}`, { quizId })
      .then(res => res.data)
      .catch(errorHandler)
  },

  getAllCars(user) {
    return service.get('/cars', {user})
      .then(res => res.data)
      .catch(errorHandler);
  },

  getQuiz(userId) {
    console.log(userId)
    return service.get(`/quiz/${userId}`)
      .then(res => res.data)
      .catch(errorHandler);
  }
}
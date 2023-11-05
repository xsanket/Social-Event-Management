
import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/api/v1/users"; // Update the URL as needed

const UserService = {
  registerUser: (user) => {
    return axios.post(`${USER_API_BASE_URL}/register`, user); // Adjust the registration endpoint URL
  },
};

export default UserService;



// import axios from "axios";

// const USER_API_BASE_URL = "http://localhost:8081/api/v1/register"; // Update with your user API URL

// class UserService {
//   saveUser(user) {
//     return axios.post(USER_API_BASE_URL, user);
//   }

//   getUsers() {
//     return axios.get(USER_API_BASE_URL);
//   }

//   deleteUser(id) {
//     return axios.delete(USER_API_BASE_URL + "/" + id);
//   }

//   getUserById(id) {
//     return axios.get(USER_API_BASE_URL + "/" + id);
//   }

//   updateUser(user, id) {
//     return axios.put(USER_API_BASE_URL + "/" + id, user);
//   }
// }

// export default new UserService();

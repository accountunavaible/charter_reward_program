// this file is only for memory storage of the user.
// not recommend in real development, use Redux in real development.
export default {
  user: null,
  getUser() {
    return this.user;
  },
  removeUser() {
    this.user = null;
  },
  storeUser(user) {
    this.user = user;
  }
};

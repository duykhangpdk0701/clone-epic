class User {
  constructor(user = {}, message = "", isLogin = false) {
    this.user = user;
    this.message = message;
    this.isLogin = isLogin;
  }
}

module.exports = User;

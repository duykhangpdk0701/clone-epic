class Resister {
  constructor(
    firstName = null,
    lastName = null,
    username = null,
    email = null,
    password = null,
    date = Date.now(),
    admin = false,
    expire = false,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.date = date;
    this.admin = admin;
    this.expire = expire;
  }
}

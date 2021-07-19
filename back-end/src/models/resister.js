class Resister {
  constructor(object) {
    this.firstName = object.firstName || null;
    this.lastName = object.lastName || null;
    this.username = object.username || null;
    this.email = object.email || null;
    this.password = object.password || null;
    this.date = object.date || Date.now();
    this.admin = object.admin || false;
    this.expire = object.expire || false;
  }
}

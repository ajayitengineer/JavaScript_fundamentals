// Singleton pattern ensure that there is only one instance of class throghout the project.

class DbConnection {
  constructor(name) {
    if (DbConnection.instance) {
      return DbConnection.instance;
    }
    this.name = name;
    DbConnection.instance = this;
  }
}

let db1 = new DbConnection("MYSQL1");
let db2 = new DbConnection("MYSQL2");

console.log(db1 === db2);
console.log(db1.name);

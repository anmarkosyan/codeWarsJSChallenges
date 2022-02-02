class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    // const fullName = `${this.firstName} ${this.lastName}`;
    //
    // return `${
    //   this.firstName && this.lastName
    //     ? fullName
    //     : this.firstName || this.lastName
    // }`;
      return `${this.firstName} ${this.lastName}`.trim();
  }
}
const fullName = new Dinglemouse("Anush", "");

console.log(fullName.getFullName());

// first object
let user = {
  sex: 'female',
  favColor: 'blue',
  pet: 'cat',
  age: 19,
  location: {
    country: 'Ukraine',
    city: 'Kyiv'
  },
  hobbies: ['swiming', 'music', 'sci-fi']
};
const location = user.location;
console.log(location);

const country = user.location.country;
console.log(country);

const hobby = user.hobbies;
console.log(hobby);

const firstHobby = user.hobbies[0];
console.log(firstHobby);

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies);

//second object

let userInInstagram = {
  followers: 2003,
  posts: 23,
  photos: {
    likes: 800,
    dislikes: 40,
    comments: 48
  }
};
const followers = userInInstagram.followers;
console.log(followers);

const likes = userInInstagram.photos.likes;
console.log(likes);

// 3 object

let person = {
  name: 'Mary',
  age: 20,
  gender: 'female',
  sayHello: function (name = 'Kate', age = 22) {
    console.log(
      `Hello, my name is ' + ${name} + ' and I am ' + ${age} +  years old.`
    );
  },
  sayGoodBye: function () {
    console.log('Goodbye');
  }
};

person.sayHello('Carl', 33);
person.sayHello();

// 4 object
let book = new Object();
book.title = 'The Great Gatsby';
book.author = 'F. Scott Fitzgerald';
book.pages = 180;
book.published = true;

// 5 object
let film = new Object();
film.title = 'Ashoka';
film.genre = 'trailer';
film.releaseYear = 2023;
film.director = 'director';
film.actors = ['Actor1', 'Actor2', 'Actor3'];
film.play = function () {
  console.log(`Now playing: ${this.title}`);
};

console.log(film);
film.play();

// 6 object

const anotherBook = new Object();
anotherBook.title = "The Hitchhiker's Guide to the Galaxy";
anotherBook.author = 'Douglas Adams';
anotherBook.genres = ['science fiction', 'comedy'];
anotherBook.isPublic = true;
anotherBook.rating = 9.42;
anotherBook.pageCount = 224;
anotherBook.originalLanguage = 'en';
anotherBook.translations = ['fr', 'de', 'es'];

console.log(anotherBook.pageCount);
console.log(anotherBook.originalLanguage);
console.log(anotherBook.translations);

// Task 3
// Прототипний об'єкт
const protoObject = {
  greet: function () {
    console.log('I am a prototype!');
  }
};

// Створення нового об'єкту на основі прототипу через Object.create
const newObj1 = Object.create(protoObject);
newObj1.newGreet = function () {
  console.log('I am NOT a prototype!');
};
protoObject.greet();
newObj1.newGreet();

// Task 3 (2)
const protoObject2 = {
  greet: function () {
    console.log('Hello I am the second prototype!');
  }
};

// Створення нового об'єкту через __proto__
const newObj2 = {
  newGreet: function () {
    console.log('Hello I am NOT the second prototype!');
  },
  __proto__: protoObject2
};

newObj2.greet();
newObj2.newGreet();

// Task 4 & 5

// Об'єкт person
const Person = {
  name: 'Vlad',
  age: 30,
  gender: 'male'
};

// Об'єкт engineer, успадковує від person
const engineer = Object.create(person);
engineer.role = 'Engineer';
engineer.experience = 5;
engineer.showDetails = function () {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Role: ${this.role}, Experience: ${this.experience} years`
  );
};

// Об'єкт QA_engineer, успадковує від engineer
const QA_engineer = Object.create(engineer);
QA_engineer.testingTool = 'Selenium';
QA_engineer.showDetailsQA = function () {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Role: ${this.role}, Experience: ${this.experience} years, Testing Tool: ${this.testingTool}`
  );
};

// Виведення деталей для об'єкта person
console.log('Details for Person:');
console.log(
  `Name: ${person.name}, Age: ${person.age}, Gender: ${person.gender}`
);

// Виведення деталей для об'єкта engineer
console.log('Details for Engineer:');
engineer.showDetails();

// Виведення деталей для об'єкта QA_engineer
console.log('Details for QA Engineer:');
QA_engineer.showDetailsQA();

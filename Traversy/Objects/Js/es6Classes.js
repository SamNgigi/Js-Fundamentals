// Es6 class

class Person {
  constructor(first_name, last_name, birth_date) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.birth_date = new Date(birth_date);
  }

  /* 
    Using Es6 classes we don't have to add prototypes like we did below
      "
      Person.prototype.greeting = function(){
        return `Hello there ${this.first_name} ${this.last_name}`
      }
      "

      We can just define our function within the class definition similar
      to other Object oriented languages.
  */
  greeting() {
    return `Hello there ${this.first_name} ${this.last_name}.`;
  }

  // Calculating age function.
  calculate_age() {
    // Getting the  time difference between the date of birth an now.
    const diff = Date.now() - this.birth_date.getTime();
    const age_in_format_we_dont_understand = new Date(diff);
    const age = Math.abs(age_in_format_we_dont_understand.getUTCFullYear() - 1970);
    return age;
  }

  // Changing last name
  gets_married(new_last_name) {
    this.last_name = new_last_name;
  }
  /* 
    We have static methods that we can define within our constructor/
    class.

    We would not need to use the this keyword but then we can only use it
    with specific reference to the class where it is defined in.
  */
  static addStuff(a, b) {
    return a + b;
  }
}

const diana = new Person("Diana", "Rose", '11-23-1918');

// returns the diana instance of the Person object..
console.log(diana);
// returns the 'Hello there Diana Rose.'
console.log(diana.greeting());
// returns 99
console.log(diana.calculate_age());
diana.gets_married("Ngigi");
// returns "Hello there Diana Ngigi".
console.log(diana.greeting());
console.log(Person.addStuff(7, 7));
console.log(Person.addStuff("Oooh", "Sam!"));
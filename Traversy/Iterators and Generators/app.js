// Iterator Example
console.log("%c Iterators", "color: green;")
const nameIterator = (names) => {
  let next_index = 0;

  return {
    next: () => {
      // next_index is less than names.length the
      return next_index < names.length ? {
        value: names[next_index++],
        done: false
      } : {
        done: true
      }
    }
  }
}

// An array of names
const names_array = ['Jack', 'Victor', 'Phil'];

// Initializing iterator and passing in the names_array
const iterator_result = nameIterator(names_array);

// returns {next: f}
console.log(iterator_result)
// returns Jack
console.log(iterator_result.next().value)
// returns Victor
console.log(iterator_result.next().value)
// returns Phill
console.log(iterator_result.next().value)
// returns undefined
console.log(iterator_result.next().value)
// returns {done: true}
console.log(iterator_result.next())

console.log("")
console.log("%c Generators", "color: green;")

// Generator Example
function* sayName() {
  yield "Jack";
  yield "Phill";
  yield "Victor";
}

const name = sayName();

// returns Jack
console.log(name.next().value);
// returns Jack
console.log(name.next().value);
// returns Phill
console.log(name.next().value);
// returns Victor
console.log(name.next().value);
// returns undefined
console.log(name.next().value);
// returns {value: undefined, done: true}
console.log(name.next());

console.log("")
console.log("%c Generator on creating Id", "color: green;")

// Use case of generators can be I.d creation
function* createIds() {
  let index = 1;

  while (true) {
    // Will yield an infinite amount of ids.
    yield index++;
  }
}

const id_gen = createIds();
// returns 1
console.log(id_gen.next().value);
// returns 2
console.log(id_gen.next().value);
// returns 3
console.log(id_gen.next().value);
// returns 4
console.log(id_gen.next().value);
// returns 5
console.log(id_gen.next().value);
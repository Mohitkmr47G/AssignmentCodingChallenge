function extractNameAndStreet(person) {
  const { name, address: { street } } = person;
  return { name, street };
}

const personObj = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Cityville",
    country: "Countryland"
  }
};

const result = extractNameAndStreet(personObj);
console.log("Extracted Name and Street:", result);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]; // gets value from data obj with index key
  }

  push(item) {
    this.data[this.length] = item; // data[length] = item
    this.length++; // increments length
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1]; // sets var to rmb item being deleted
    delete this.data[this.length - 1]; // deletes the item
    this.length--; // decrements length
    return lastItem; // returns item deleted
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItemsLeft(index); // shifts items after index to the left
    return item;
  }

  unshift(item) {
    // adds item to front of array
    this.length++;
    this.shiftItemsRight(0);
    this.data[0] = item;
    return this.length;
  }

  shift() {
    // deletes first item in array
    const item = this.data[0];
    this.shiftItemsLeft(0);
    return item;
  }

  insert(item, index) {
    // add item in between array
    this.length++;
    this.shiftItemsRight(index);
    this.data[index] = item;
    return this.length;
  }

  shiftItemsLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; // current = next(right)
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  shiftItemsRight(index) {
    let current = this.data[index]; // sets current to obj[item] outside of loop so doesnt reset
    for (let i = index; i < this.length - 1; i++) {
      let next = this.data[i + 1]; // keeps value of next item
      this.data[i + 1] = current; // sets next = current (left)
      current = next; // assign next value to current
    }
  }
}

// const newArray = new MyArray(); // instantiate new MyArray copy

module.exports = { MyArray };

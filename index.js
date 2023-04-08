// index.js
class Scooter {
    constructor(year, color, model) {
      this.year = year;
      this.color = color;
      this.model = model;
    }
  }
  
  class Driver {
    constructor(name, age, experience) {
      this.name = name;
      this.age = age;
      this.experience = experience;
    }
  }
  
  class PickupLocation {
    constructor(address, city) {
      this.address = address;
      this.city = city;
    }
  }
  
  module.exports = { Scooter, Driver, PickupLocation };
  
  // indexTest.js
  const { scooter, Driver, PickupLocation } = require('./index');
  
  describe('objects', function() {
    describe('Scooter constructor', function() {
      it('should create a new scooter with three properties', function() {
        const scooter = new Scooter(2015, 'red', 'vespa');
        expect(scooter.year).toEqual(2015);
        expect(scooter.color).toEqual('red');
        expect(scooter.model).toEqual('vespa');
      });
    });
  
    describe('Driver constructor', function() {
      it('should create a new driver with three properties', function() {
        const driver = new Driver('Alice', 25, '5 years');
        expect(driver.name).toEqual('Alice');
        expect(driver.age).toEqual(25);
        expect(driver.experience).toEqual('5 years');
      });
    });
  
    describe('PickupLocation constructor', function() {
      it('should create a new PickupLocation with two properties', function() {
        const location = new PickupLocation('123 Main St', 'Anytown');
        expect(location.address).toEqual('123 Main St');
        expect(location.city).toEqual('Anytown');
      });
    });
  });
  
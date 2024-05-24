const Singleton = require('./singleton');
const Module = require('./module');
const { Subject, Observer } = require('./observer');
const VehicleFactory = require('./factory');
const { SimpleCoffee, MilkDecorator, SugarDecorator } = require('./decorator');

// Singleton
const singleton1 = new Singleton();
const singleton2 = new Singleton();
console.log('Singleton instances are the same:', singleton1 === singleton2);
console.log('Singleton data:', singleton1.getData());

// Module
Module.publicMethod();

// Observer
const subject = new Subject();
const observer = new Observer();
subject.addObserver(observer);
subject.notify('Hello Observers!');

// Factory
const factory = new VehicleFactory();
const car = factory.createVehicle('car');
const truck = factory.createVehicle('truck');
car.drive();
truck.drive();

// Decorator
let coffee = new SimpleCoffee();
console.log('Simple coffee cost:', coffee.cost());

coffee = new MilkDecorator(coffee);
console.log('Coffee with milk cost:', coffee.cost());

coffee = new SugarDecorator(coffee);
console.log('Coffee with milk and sugar cost:', coffee.cost());
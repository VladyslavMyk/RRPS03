class Car {
    constructor() {
        this.type = 'Car';
    }

    drive() {
        console.log('Driving a car...');
    }
}

class Truck {
    constructor() {
        this.type = 'Truck';
    }

    drive() {
        console.log('Driving a truck...');
    }
}

class VehicleFactory {
    createVehicle(vehicleType) {
        if (vehicleType === 'car') {
            return new Car();
        } else if (vehicleType === 'truck') {
            return new Truck();
        }
    }
}

module.exports = VehicleFactory;
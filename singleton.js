class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.data = 'Singleton Instance';
        Singleton.instance = this;
    }

    getData() {
        return this.data;
    }
}

module.exports = Singleton;
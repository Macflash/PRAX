class Need {
    name: string;
    rate: number;
    value: number;
    constructor(nane: string, rate: number) {
        this.name = name;
        this.rate = rate;
        this.value = 0;
    }
    update(time: number) {
        if (this.value >= 100) {
            this.value = 100;
        }
        else {
            this.value += this.rate * time;
        }
    }
    satiate(amount?: number) {
        if (amount == null) {
            this.value = 0;
        }
        else {
            this.value -= amount;
            if (this.value < 0) {
                this.value = 0;
            }
        }
    }
}

class Shift {
    name: string;
    rate: number;
    progress: number;
    constructor(name: string, rate: number) {
        this.name = name;
        this.rate = rate;
    }
    update(time: number) {
        this.progress += this.rate * time;
        if (this.progress >= 100) {
            return true;
        }
        return false;
    }
}

interface NeedsArray {
    [index: number]: Need;
}

class Person {
    name: string;
    working: boolean;
    needs: NeedsArray;
    task: Shift;

    constructor(name: string) {
        this.name = name;
        this.working = false;
    }

    update(time: number) {
        // increment needs
        for (var need in this.needs) {
            need.update(time);
        }

        // check if working, if so do that
        if (this.working) {

        }
        
        // otherwise figure out what you should satisfy
        else {

        }
    }
}
class Laptop {
    KeyBoard() {
        console.log("Method keyBoard");
    }
    Touchpad() {
        console.log("Method Touchpad");
    }
}
class Dell extends Laptop {
    KeyBoard() {
        console.log("Dell keyBoard");
    }
    Mouse() {
        console.log("Method Mouse of Class Child");
    }
}
let objLaptop = new Dell();
objLaptop.KeyBoard();
objLaptop.Mouse();

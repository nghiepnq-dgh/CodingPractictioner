abstract class Laptop {
    public KeyBoard():void {
        console.log("Method keyBoard")
    }
    //abtract method khong dc xu ly gi ben trong method
    public abstract Mouse():void;

    public Touchpad():void {
        console.log("Method Touchpad")
    }
}

// de tao 1 obj cho class abstract ta nen tao 1 class extend class object do

class Dell extends Laptop {
    //overwrite method
    public KeyBoard():void {
        console.log("Dell keyBoard")
    }
    //do abtract method nen phai dinh nghia cho lop con
    public Mouse():void{
        console.log("Method Mouse of Class Child")
    }

}

let objLaptop: Laptop = new Dell()


//>>>
objLaptop.KeyBoard()
objLaptop.Mouse()



// завдання1
class Iphone{
    constructor(){
        this.model = '14 Pro Max';
        this.year = 2022;
        this.color = 'black';
        this.size = "Full HD+ AMOLED touchscreen"
        this.brand = 'Aplle';
        this.battery ='3500 mAh'
    }
}
class Samsung{
    constructor(){
        this.model = ' Galaxy S22';
        this.year = 2021;
        this.color = 'blue';
        this.size = '6.1" Full HD+ AMOLED touchscreen'
        this.brand = 'Samsung';
        this.battery ='3700 mAh'
    }
}
class Xiaomi{
    constructor(){
        this.model = 'Redmi 9AT';
        this.year = 2021;
        this.color = 'black';
        this.size = '6.53" Full HD+ touchscreen'
        this.brand = 'Xiaomi';
        this.battery ='3700 mAh'
    }
}
    let iphone = new Iphone();
    console.log(iphone)
    let samsung = new Samsung();
    console.log(samsung)
    let xiaomi = new Xiaomi();
    console.log(xiaomi)


// завдання 2
class Iphone{
    constructor(model , year , color , size , brand , battery){
        this.model = model;
        this.year = year;
        this.color = color;
        this.size = size;
        this.brand = brand;
        this.battery =battery;
    }
}
class Samsung{
    constructor(model , year , color , size , brand , battery){
        this.model = model;
        this.year = year;
        this.color = color;
        this.size = size;
        this.brand = brand;
        this.battery =battery;
    }
}
class Xiaomi{
    constructor(model , year , color , size , brand , battery){
        this.model = model;
        this.year = year;
        this.color = color;
        this.size = size;
        this.brand = brand;
        this.battery =battery;
    }
}
    let iphone = new Iphone('14 Pro Max', '2022', 'black','Full HD+ AMOLED touchscreen','Aplle','3500 mAh' );
    console.log(iphone)
    let samsung = new Samsung(' Galaxy S22' , '2021' , 'blue' , '6.1" Full HD+ AMOLED touchscreen' , 'Samsung', '3700 mAh' );
    console.log(samsung)
    let xiaomi = new Xiaomi('Redmi 9AT','2021','black','6.53" Full HD+ touchscreen', 'Xiaomi' , '3700 mAh');
    console.log(xiaomi)

// завдання 3
class Phone{
    constructor(weight, color, memory, Resolution, size, main_camera ){
        this.weight = weight;
        this.color = color;
        this.memory = memory;
        this.size = size;
        this.Resolution  = Resolution;
        this.main_camera= main_camera;
       
       
    }
}


class Iphone extends Phone {
}


class Xiaomi extends Phone {
}


 class Samsung extends Phone {
}
let iphone = new Iphone('14 Pro Max', '2022', 'black','Full HD+ AMOLED touchscreen','Aplle','3500 mAh' );
    console.log(iphone)
    let samsung = new Samsung(' Galaxy S22' , '2021' , 'blue' , '6.1" Full HD+ AMOLED touchscreen' , 'Samsung', '3700 mAh' );
    console.log(samsung)
    let xiaomi = new Xiaomi('Redmi 9AT','2021','black','6.53" Full HD+ touchscreen', 'Xiaomi' , '3700 mAh');
    console.log(xiaomi)



// завдання 4
class Phone {
    constructor (year, memory, price) {
        this.year = year;
        this.memory = memory;
        this.price = price;
    }

    calculatePrice() {
        return Math.round((this.memory * 3 + this.price) / 10);
    }

    calculateAge() {
        return 2022 - this.year;
    }

    description() {
        return `Це ${this.nameClass}, він має ${(this.calculateAge())} роки і коштує ${(this.calculatePrice())} доларів`
    }
}

class Redmi extends Phone {
    constructor (year, memory, price, color = 'black', nameClass = 'Redmi') {
        super (year, memory, price)
        this.color = color;
        this.nameClass = nameClass;
    }
}

class Iphone extends Phone {
    constructor (year, memory, price, color = 'violet', nameClass = 'Iphone') {
        super (year, memory, price)
        this.color = color;
        this.nameClass = nameClass;
    }
}

class Huawei extends Phone {
    constructor (year, memory, price, color = 'red', nameClass = 'Huawei') {
        super (year, memory, price)
        this.color = color;
        this.nameClass = nameClass;
    }
}

const redmi = new Redmi(2020, 64, 8500)
const poco = new Iphone (2018, 256, 18000)
const huawei = new Huawei(2019, 16, 5500)

console.log (redmi.description() + '\n', poco.description() + '\n', huawei.description() + '\n')
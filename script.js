 do{
     var a = +prompt('введите число')
 }while(isNaN(a) || a == 0) {
     console.log(a);
 }
 do{
     var b = +prompt('введите степень числа')
 }while(isNaN(b) || b == 0) {
     console.log(b);
 }

let str = 1;

if(b == 0 || isNaN(b)) {
    str = a * a
}else {
    for(let i = 1; i <= b; i++) {
        str = str * a
    }
    
}
alert(str)
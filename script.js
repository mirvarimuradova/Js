// var name = "mirvari";


// console.log(name[0].toUpperCase() + name.slice(1));
//  let a =5, b=6;
//  let temp = a;
//  a = b ;

//  b=temp;
//  console.log(a + " "+ b)
let pcbrands = [
    ["Macbookpro" , 14, 2000],
    ["Acer", 15.6 , 3000],
    ["Asus", 16, 4000]
];
for( let i=0 ; i< pcbrands.length;i++){

      let message = pcbrands[i]
      console.log("Model " +(i+1) + ":  Name- " + message[0]+ " , Inch :" + message[1] + ", Price:" + message[2] )
       
       //Model: Name - Macbook, Inch: 14, price: 2000
      // Model: Name - Macbook, Inch: 14, price: 2000
      //Model: Name - Macbook, Inch: 14, price: 2000
}

// let num = [1,2,3,4,5]


// for(let i=0;i<num.length;i++){
//  num[i] = num[i]*3
 
// }
// console.log(num)
 
// let nam = 'Chirayu'
// for(let i=0;i<nam.length;i++){
//     if (nam[i]=='a' || nam[i]=='e' || nam[i]=='o' || nam[i]=='u' || nam[i]=='i'  ) {
//         console.log(nam[i],'Vowels');
//     } else {
//         console.log(nam[i],"constant");
//     }
// }



// -----------Array Mathods----------------

// let num = [1,2,3,4,5]
// let a = num.toString()
// let b = num.join("_")

// console.log(b);


// console.log(typeof{});
// console.log(typeof[]);
// console.log(typeof Array.isArray([]));



// let num =[2,3,4,9,6,7,]
// for(i=0; i<num.length;i++){
    // console.log(num[i]*num[i]);
    // }
    
    
    
    
    // forEach Loop
    
    // num.forEach((itm)=>{
        //     console.log(itm*itm);
        // })
        
        
        
        
        
        // Array.from
        
        // let nam = "Harry"
        // let arr = Array.from(nam)
        // console.log(arr);
        
        
        
        // for ...of
        
//         let num = [1,2,3,4,5]
//         for(let i of num){
//             console.log(i);
// }


// Hoisting


// console.log(a);

// var  a =546



// let num = [12,34,5,3,10,9]
// console.log(num);
// let arr =  num.sort();
// console.log(arr);




// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
//     console.log("hey kunal")
// }
// x()




//     for(let i=0; i<=4; i++){
//         setTimeout(function(){
//             // console.log(i)
//         },i*1000)
//     }


// console.log(i); 


// for(var i=1; i<=5; i++){
//     console.log(i);
// }




// let arr = [1,2,3]





// let  arr = [1,2,3]

// let revArr = []

// for(let i = arr.length -1; i>=0; i--){

//     let valueindex = arr[i]

//     revArr.push(valueindex)

// }

// console.log(revArr);




// let arr = [1,2,3,4,5]

// let revarr = []

// for(let i = arr.length-1; i>=0; i--){
//     let valIndex = arr[i]

//     revarr.push(valIndex)

// }

// arr.reverse()       //<-----Predefind Mathods

// console.log(arr);


// let arr = [1,2,3,4,5,6,7,8,9,10]

// let revArr = []

// for(let i = arr.length - 1; i>=0; i--){
    
    //     let valIndex = arr[i]
    
    //     revArr.push(valIndex)
    
    // }
    
    // console.log(revArr);



    
let arr = [1,-2,-3,4,5,-6,7,-8,-9,10]

let newarr = []

for(let i=0; i<=arr.length; i++){

    if(arr[i]>0){
        newarr.push(arr[i])
    }
}


for(let i=0; i<=arr.length; i++){

    if(arr[i]<0){
        newarr.push(arr[i])
    }
}
console.log(newarr);














































//         let val = arr[i]

        

//         if(i>=arr.length){
//         console.log(newarr);
//     }
// }
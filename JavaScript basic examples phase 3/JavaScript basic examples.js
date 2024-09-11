1. Convert Date to Number - 
const d1 = new Date();
console.log(d1);
const result = d1.getTime();
console.log(result);

2. Remove All Whitespaces From a Text - 
const string = 'Hello World';
const result = string.split(' ').join('');
console.log(result);

3. Get the Dimensions of an Image - 
const img = new Image();
img.src = 'C:\Users\lenovo\Downloads\HTML Sample Projects\JavaScript basic examples phase 3\White1.jpeg';
img.onload = function() {
  console.log('width ' + this.width)
  console.log('height '+ this.height);
}

4. Perform Function Overloading - 
function sum() {        
    if (arguments.length == 0) {  
        console.log('You have not passed any argument');  
    }
    else if (arguments.length == 1) {  
        console.log('Pass at least two arguments');  
    }
    else {
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result); 
    }  
}
sum();
sum(6); 
sum(6, 8);    
sum(1, 2, 3, 4, 5, 6, 7, 8,); 

5. Work With Constants - 
const a = 5;
console.log(a);
{
    const a = 50;
    console.log(a);
}
console.log(a);
const arr = ['hy', 'good', 'ok'];
console.log(arr);
arr[3] = 'hello';
console.log(arr);

6. Get The Current URL - 
const url1 = www.google.com;
const url2 = www.yahoo.com;
console.log(url1);
console.log(url2);
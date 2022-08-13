/* Program 7- Create an array of length 5 and store below numbers 
       1,11,111,222,555 . Write a program to calculate the average of numbers. */


       let arr = [1, 11, 111, 222, 555];
       let sum = 0;

       arr.forEach(function(num) { sum += num });

       average = sum / arr.length;
    
       console.log(average);

// ANS : 180
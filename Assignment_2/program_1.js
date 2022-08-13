
// Program 1- Write a program to calculate the average of 5 numbers.

function add ( a1 , a2 , a3 , a4 , a5 )
{
 //   let sum = a1 + a2 + a3 + a4 + a5;
    let average = [ (a1 + a2 + a3 + a4 + a5) % 5 ];
    console.log(average);
    return(average);
}

let final_ans = add (1 + 2 + 3 + 4 + 5) 

console.log(final_ans);


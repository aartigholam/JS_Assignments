
/*
Program 4- Write a program to display student results.
If number above 90 then grade A
If number above 70 and below 90 then grade B
If number above 50 and below 70 then grade C
If number below 70 then Fail
*/

let result = 75 ;

switch (true) 
{
    case result > 90 :
        console.log('Grade A ') ;
        break;

    case result > 70  && result < 90 :
        console.log('Grade B ');
        break;
    
    case result > 50 && result < 70 :
        console.log(' Grade C ');
         break;
    
    case result < 50 :  
        console.log( ' fail ');
        break;
    
    default:
        break;
}

// Ans : Grade B

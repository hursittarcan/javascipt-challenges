# CHALLENGE ONE
---------------------------
We are creating a simple tax calculator for Billy. Billy wants a console application that allows him to enter any sequence of numbers and a total calculated by himself. He wants our application to check if his calculations are correct and to give helpfull info if needed.  

Billy only wants to submit one single array. He want's to enter any length of numbers and he wants the last index of the array to be his own calculated total. 

Example: 
--> 
let bills = [150, 40, 12, 84, 20];
The first four elements of the array are bills: 150, 40, 12, 84.
The last element in this array is the total sum calculated by Billy himself: 20. His calculations are wrong in this example. 

He wants us to create a function that accepts a single array. 

This array should be checked in the function. 

If the total of all bills equals the total sum provided by Billy. You should return a text saying 'ok'. 
If the total of all bills is lower than the total sum provided by Billy. You should return a text saying that he is paying too much. 
If the total of all bills is higher than what is provided by Billy. You should return a text saying he needs to pay more. 

Make sure to check on illegal inputs too. If there is any element in the array that isn't a number, just return an error message. 

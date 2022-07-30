# CHALLENGE ONE
We are creating a simple tax calculator for Max. Max wants a console application that allows him to enter `any sequence of numbers` including `a total calculated by himself`. He wants our application to check if his calculations are correct and to give helpful info if needed.  

Example input:   
`let bills = [150, 40, 12, 84, 20];`

Example output:     
`"Your calculated total is €266 lower then expected"`

* The `first four elements` of the array are `bills`: 150$, 40$, 12$, 84$. You don't have to include the $-sign.          
* The `last element` in this array is the `total sum calculated by Max himself`: 20$. His calculations are wrong in this example. 

He wants us to create a `function` that accepts a `single array` as a `parameter`. The requirements are:     
* If the total of all bills equals the total sum provided by Max. You should return a text saying `"Your calculations are correct"`. 
* If the total of all bills is lower than the total sum. You should return a text saying `"Your calculated total is higher then expected"`.
* If the total of all bills is higher than what is provided. You should return a text saying `"Your calculated total is lower then expected"`.
* If there is any element in the array that isn't a number, you should return a text saying `"ERROR, please check input array!"`.

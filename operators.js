/*
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
*/
// operation on string
let str = "Dhruv , How are you "
let str2 = "? Are you fine ?"
console.log(str + str2);
console.log('d'*3);

//operations on string and numbers
console.log("str + 5 : ",str + 5)
console.log("7 + str : ",7 + str)

/*
Operator	Description	Example
==	equal to	x == 5
===	equal value and equal type	x === 5
!=	not equal	x != 5
!==	not equal value or not equal type	x !== 5
>	greater than	x > 5
<	less than	x < 5
>=	greater than or equal to	x >= 5
<=	less than or equal to	x <= 5
*/

console.log("5==5 : ",5==5);
console.log("5=='5' : ",5=='5');
console.log("5==='5' : ",5==='5');
console.log("5===5 : ",5===5);

/*
Operator	Description
&&	logical and
||	logical or
!	logical not
*/

// logical and
console.log(34=='34' && 32=='32');
console.log(34=='34' || 32=='32');
console.log(!(34=='34' && 32=='32'));


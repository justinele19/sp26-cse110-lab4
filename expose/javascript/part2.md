1. The console prints 3 since that's the number i increments to until it exits the for loop after it has checked 3 < 3. 
2. The console will print 150 since its the last value assigned to discountedPrice before it exits the for loop. We are able to access discountedPrice outside of the for loop becase it was defined with var. 
3. The console will print 150 since its the last value assigned to finalPrice before it exits the for loop. We are able to access finalPrice outside of the for loop becase it was defined with var. 
4. The function returns [50, 100, 150] since inside the for loop each price in prices is reduced by 50% and then each reduced price is then pushed into the discounted array. We are able to access the updated values of the discounted array outside the for loop since the variable discounted was defined with var. 
5. The code causes an error because i is declared within the for loop and you are trying to access the variable from outside of its scope.
6. The code causes an error because discountedPrice is declared within the for loop and you are trying to access the variable from outside of its scope.
7. The code will print 150 because finalPrice is declared with let at the function level, so you are able to access it anywhere in the function.
8. The code will print [50, 100, 150] because discounted was declared at the function level and so it can be accessed from within the for loop and therefore be updated with the discounted prices.
9. The code causes an error because i is declared within the for loop and you are trying to access the variable from outside of its scope.
10. The code will print 3 since that's the value length was assigned on line 4.
11. The function returns [50, 100, 150] since inside the for loop each price in prices is reduced by 50% and then each reduced price is then pushed into the discounted array. Discounted can be accessed within the for loop since its defined in the outer loop of the nested block. We are able to access the updated values of the discounted array outside the for loop since the variable discounted was defined with const. 
12. 
    A. student.name
       student['name']
    B. student['Grad Year']
    C. student.greeting()
       student['greeting']()
    D. student['Favorite Teacher']['name']
    E. student.courseLoad[0]
       student['courseLoad'][0]
13. 
    A. '32' --> The + operator sees a string, so it converts 2 to a string and add concatentates the two strings together.
    B. 1 --> The - operator has no string behavior, so it converts '3' to an integer and subtracts the two integers to get 1
    C. 3 --> null is 0 numerical so you add 3 + 0 = 3
    D. '3null' --> null is converted to a string since + has a string behavior so you concatenate the two strings
    E. 4 --> true is 1 so you get 1 + 3 = 4
    F. 0 --> false is 0 and null is also 0 so you get 0 + 0 = 0
    G. '3undefined' --> undefined is converted to a string and then the 2 strings are concatenated 
    H. NaN --> the - operator converts both valuees to numbers '3' = 3 and underfined = NaN and then you subtract the two values to get NaN
14. A. true --> '2' converts to 2 and 2 > 1
    B. false --> Both values are strings so they are compared alphabetical. '2' is compared against the '1' in '12' and '2' is greater than '1' so it returns false
    C. true --> '2' converts to 2, since == converts before comparing. 2 == 2 so true
    D. false --> === does not do any type conversions, so a number a string can never be equal
    E. false --> true is converted to 1 and 1==2 which is false
    F. true --> Boolean(2) converts 2 to true, so true === true is true
15. == means loose equality and converts both values to the same type before comparing. === means strict equality and compares both value and type with no conversion. 
17. The result is [2, 4, 6]. The array passed to the function modifyArray if iterated through and is doubled by calling the function doSomething. The double valued is returned to modifyArray and is pushed into newArr. 
19. 1
    4
    3
    2
    
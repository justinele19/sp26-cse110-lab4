1. values added: 20
2. final result: 20
3. You shouldn't use var because it causes naming conflicts and scoping issues since var variables have no block scope and therefore is scoped to the current function or global, if delcared outside the function.
4. values added: 20
5. There is an error since result is defined using let and you are are trying to access result outside of the if-else block, which is out of scope of which result is declared in. 
6. values added: 0
7. final result: 0

Description
-------
Modify the PHP code of 24 Point Poker Game Calculator,  
Converted to JavaScript module form.

The output will be a JSON form,   
which will be in form with solution list (array), number of solutions.

installation
-------
```bash
npm install 24_game_resolver
```

Example
-------
```bash
var solver=require('24_game_resolver')  
solver.calculator(1,2,3,4)

//output will be:  
{  
    input: [ 1, 2, 3, 4 ], //array of input  
    errorCode: 0,  
    count: 84, //count of solutions  
    result: [...] //solution list  
}    
```



Open source authorization information.
-------
The MIT License (MIT)

Copyright (c) 2020 Yu Shao-Hung

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

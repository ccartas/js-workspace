/*
    Step1: Memory allocation for variables a and b and
        functions func1, func2;
    Step2: Creation of Global Execution Context in the
        Call Stack

    //EXECUTION CONTEXT OF FUNC4
    Parse until: var a = 'can i modify too?'; => Initialization of variable 'a'
                in the EC of func4
    Parse until: b = 'stop modifying me!' => I don't find any variable 'b'
                inside of func4 so I move below on the call stack.
                Moving to EC of func3 => I don't find any variable 'b' so I move on
                Moving to EC of func2 => I don't find any variable 'b' so I move on
                Moving to GLOBAL EC => I find variable 'b' with value 'modify again'
                and I change it to 'stop modifying me!' 
    Nothing else to execute => Remove EC of FUNC4 from Call Stack
                            Pass the execution back to EC of FUNC3
    
    //EXECUTION CONTEXT OF FUNC3
    Parse until:  a = 'hello modified'; => I don't see a declared in func3 so I look below in the 
                        Call stack for a variable called 'a'.
                        Moving to EC of func2 => Found a and 
                        override its value to 'hello modified'
    Parse until: b = 'modify again'; => I don't see 'b' declared in func3,
                    so I look below in EC of func2. I don't find any variable
                    'b' declared in func2 so I move below on the call stack.
                    Moving to Global EC => Found 'b' and override its value
                    to 'modify again';
    Parse until: func4() => Create new Execution Context
    Parse until: console.log(a) => Display 'hello modified'
    Parse until: console.log(b) => Found b in GLOBAL EC,
                                 Display 'stop modifying me!'
    
    Nothing else to execute => Remove EC of func3 from Call stack
                        and pass the execution to EC of FUNC2


    //EXECUTION CONTEXT OF FUNC2
    Parse until: var a = 'hello again' => Initialization of variable a in the
                                    EC of func2
    Parse until: func3() => Create new execution context
    Parse until: console.log(a) => Found a in EC of func2, so 
                        display 'hello modified'
    Nothing else to execute => Remove EC of func2 from Call Stack
                       and pass the execution to GLOBAL EC


    //EXECUTION CONTEXT OF FUNC1
    Parse until: console.log(a) => Displays undefined because
                        syntax parser allocated memory for a
                        but we use a before initialization with a value
    
    Parse until: var a = 'hello' => Initialization of a with a value
    Parse until: b = 'world' => I don't see any variable b in
                        the execution context of func1 so I'm using
                        the outer environment mechanism in order
                        to move below the call stack. I move to the 
                        global execution context and I find variable b,
                        so I override the value from b with 'world';
    Nothing else to execute: Remove execution context from call stack
                        and pass the execution to global execution context.





    //GLOBAL EXECUTION
    Parse until: console.log(a) => Displays 'global'
    Parse until: console.log(b) => Displays 'global too'
    Parse until: func1() => Create new execution context
    Parse until: func2() => Create new execution context
    Parse until: console.log(a) => Displays 'global'
    Parse until: console.log(b) => Displays 'stop modifying me'
    Nothing else to execute => Remove GLOBAL EC from Call Stack
*/
var a = 'global';
var b = 'global too';

function func1(){
    console.log(a);
    var a = 'hello';
    b = 'world';
}

function func2(){
    var a = 'hello again';
    function func3(){
        a = 'hello modified';
        b = 'modify again';
        function func4(){
            var a = 'can i modify too?';
            b = 'stop modfying me';
        }
        func4();
        console.log(a);
        console.log(b);
    }
    func3();
    console.log(a);
}

console.log(a);
console.log(b);

func1();
func2();
console.log(a);
console.log(b);
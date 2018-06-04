//bind() method creates a new function that, when called, 
//has its this keyword set to the provided value, with a given sequence of arguments 
//preceding any provided when the new function is called.
//The bind() function creates a new bound function (BF). BF is an exotic function object that wraps the
//original function object. Calling a BF results in the execution of its wrapped function.

//BF has following internal properties
//[[BoundTargetFunction]] - the wrapped function objct.
//[[BoundThis]] -- the value that is always passed as "this" value when calling the wrapped function.
//[[BoundArguments]] -- a list of values whose elements are used as the first arguments to any call to
                     // the wrapped function.
//[[call]] -- executes code associated with this object. Invoked via a function call expression.

//whenever BF is called; it calls [[call]] on [[BoundTargetFunction]] with args of [[BoundThis]] && 
// [[BoundArguments]]

//bind() is useful in cases where we want to create a shortcut to a function

//apply() method calls a function with a given this value and args provided as an array
//difference between call and apply is that call() accepts an argument list whereas apply() accepts
// a single array of arguments
//by using apply() we have a risk of exceeding the javascript engine's argument length limit.

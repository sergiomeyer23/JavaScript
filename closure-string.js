function outer(){
    let message = "Hello";
    
    function inner(){
        console.log(message);
    }

    inner();
}

message = "Goodbye"; //This line is not consider.

outer();
///// start


// EX: 
function outer(a) {
    return function(b) {
        return a + b;
    }
}
outer(5)(5); // 10

// EX: 
function counter() {
    var count = 0 ;

    return function() {
        count++;
        return count;
    }
}

var counter1 = counter();
counter1(); //1
counter1(); //2

var counter2 = counter();
counter2(); //1
counter2(); //2

//////////////////////////////////// Check out My Budget Project it is for closure and more!!!!!!!!!
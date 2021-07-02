function udp2(done) {
    setTimeout(() => {
        done();
    }, 3000);
}

//声明一个函数，它的形参不是一个参数，是一个函数，也就是回调函数
//functionA ( functionB() )


udp2(
    function () {

        console.log("load success!");
    }

)

console.log("you have another app load");


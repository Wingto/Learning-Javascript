process.stdin.resume();
process.stdout.on('data', function (chunk) {

    process.stdout.write('data:' + chunk);
});
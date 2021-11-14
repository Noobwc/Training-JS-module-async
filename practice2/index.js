function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

function light(cb, timer) {
    return new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, timer);
    })
}

function step() {
    Promise.resolve().then(() => {
        return light(red, 1000);
    }).then(() => {
        return light(green, 1000);
    }).then(() => {
        return light(yellow, 1000);
    }).finally(() => {
        return step();
    })
}

step();

function init(orientation) {
    var mainColorElement, rightColorElement, leftColorElement;
    mainColorElement = document.querySelector('.mainColor');
    leftColorElement = document.querySelector('.colorLeft');
    rightColorElement = document.querySelector('.colorRight');

    mainColorElement.style.backgroundImage = "url('./BLUE/BLUE.jpg')";
    mainColorElement.style.backgroundRepeat = "no-repeat";

    leftColorElement.style.backgroundImage = `url('./BLUE/portrait/LEFT-GREEN.jpg')`;
    leftColorElement.style.backgroundRepeat = "no-repeat";

    rightColorElement.style.backgroundImage = "url('./BLUE/portrait/RIGHT-YELLOW.jpg')";
    rightColorElement.style.backgroundRepeat = "no-repeat";

    if (orientation === "portrait") {
        mainColorElement.style.backgroundSize = "320px 568px";
        leftColorElement.style.backgroundSize = "160px 160px";
        rightColorElement.style.backgroundSize = "160px 160px";
    } else {
        mainColorElement.style.backgroundSize = "320px 320px";
        leftColorElement.style.backgroundSize = "248px 160px";
        rightColorElement.style.backgroundSize = "248px 160px";
    }


    var y, x, angle, neutralPosition = true;

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", function (event) {


            var nextLeftGreen = leftColorElement.classList.contains('green');
            var nextLeftRed = leftColorElement.classList.contains('red');
            var nextLeftYellow = leftColorElement.classList.contains('yellow');
            var nextLeftBlue = leftColorElement.classList.contains('blue');

            var nextRightGreen = rightColorElement.classList.contains('green');
            var nextRightRed = rightColorElement.classList.contains('red');
            var nextRightYellow = rightColorElement.classList.contains('yellow');
            var nextRightBlue = rightColorElement.classList.contains('blue');

            y = Math.round(event.beta);
            x = Math.round(event.gamma);
            angle = Math.round(event.alpha);

            if (angle < -10 && neutralPosition && nextLeftGreen) {

                mainColorElement.classList.remove('blue');
                mainColorElement.classList.remove('yellow');
                mainColorElement.classList.add('green');

                leftColorElement.classList.remove('green');
                leftColorElement.classList.remove('blue');
                leftColorElement.classList.add('red');

                rightColorElement.classList.remove('yellow');
                rightColorElement.classList.remove('red');
                rightColorElement.classList.add('blue');

                neutralPosition = false;

                console.log('next red', nextLeftRed);

            } else if (angle < -10 && neutralPosition && nextLeftRed) {

                mainColorElement.classList.remove('blue');
                mainColorElement.classList.remove('green');
                mainColorElement.classList.add('red');

                leftColorElement.classList.remove('green');
                leftColorElement.classList.remove('red');
                leftColorElement.classList.add('yellow');

                rightColorElement.classList.remove('yellow');
                rightColorElement.classList.remove('blue');
                rightColorElement.classList.add('green');

                neutralPosition = false;

            } else if (angle < -10 && neutralPosition && nextLeftYellow) {

                mainColorElement.classList.remove('blue');
                mainColorElement.classList.remove('green');
                mainColorElement.classList.remove('red');
                mainColorElement.classList.add('yellow');

                leftColorElement.classList.remove('green');
                leftColorElement.classList.remove('red');
                leftColorElement.classList.remove('yellow');
                leftColorElement.classList.add('blue');

                rightColorElement.classList.remove('yellow');
                rightColorElement.classList.remove('blue');
                rightColorElement.classList.remove('green');
                rightColorElement.classList.add('red');

                neutralPosition = false;
            }
            else if (angle < -10 && neutralPosition && nextLeftBlue) {

                mainColorElement.classList.remove('blue');
                mainColorElement.classList.remove('green');
                mainColorElement.classList.add('blue');

                leftColorElement.classList.remove('green');
                leftColorElement.classList.remove('blue');
                leftColorElement.classList.add('green');

                rightColorElement.classList.remove('yellow');
                rightColorElement.classList.remove('red');
                rightColorElement.classList.add('yellow');

                neutralPosition = false;
            }
            else if (angle > 10 && neutralPosition && nextRightYellow) {
                mainColorElement.classList.remove('blue');
                mainColorElement.classList.remove('green');
                mainColorElement.classList.add('yellow');


                leftColorElement.classList.remove('green');
                leftColorElement.classList.remove('red');
                leftColorElement.classList.add('blue');

                rightColorElement.classList.remove('yellow');
                rightColorElement.classList.remove('blue');
                rightColorElement.classList.add('red');

                neutralPosition = false

            } else if (angle > 10 && neutralPosition && nextRightRed) {
                mainColorElement.classList.remove('blue');
                mainColorElement.classList.remove('green');
                mainColorElement.classList.remove('yellow');
                mainColorElement.classList.add('red');

                leftColorElement.classList.remove('green');
                leftColorElement.classList.remove('red');
                leftColorElement.classList.remove('blue');
                leftColorElement.classList.add('yellow');

                rightColorElement.classList.remove('yellow');
                rightColorElement.classList.remove('blue');
                rightColorElement.classList.remove('red');
                rightColorElement.classList.add('green');

                neutralPosition = false

            }
            else if (angle > 10 && neutralPosition && nextRightGreen) {
                mainColorElement.classList.remove('blue');
                mainColorElement.classList.remove('red');
                mainColorElement.classList.remove('yellow');
                mainColorElement.classList.add('green');

                leftColorElement.classList.remove('green');
                leftColorElement.classList.remove('yellow');
                leftColorElement.classList.remove('blue');
                leftColorElement.classList.add('red');

                rightColorElement.classList.remove('yellow');
                rightColorElement.classList.remove('green');
                rightColorElement.classList.remove('red');
                rightColorElement.classList.add('blue');

                neutralPosition = false

            } else if (angle > 10 && neutralPosition && nextRightBlue) {
                mainColorElement.classList.remove('green');
                mainColorElement.classList.remove('red');
                mainColorElement.classList.remove('yellow');
                mainColorElement.classList.add('blue');

                leftColorElement.classList.remove('red');
                leftColorElement.classList.remove('yellow');
                leftColorElement.classList.remove('blue');
                leftColorElement.classList.add('green');

                rightColorElement.classList.remove('blue');
                rightColorElement.classList.remove('green');
                rightColorElement.classList.remove('red');
                rightColorElement.classList.add('yellow');

                neutralPosition = false

            }

            else if (angle === 0) {
                neutralPosition = true;
            }


            if (mainColorElement.classList.contains('blue')) {
                mainColorElement.style.backgroundImage = "url('./BLUE/BLUE.jpg')";
            } else if (mainColorElement.classList.contains('green')) {
                mainColorElement.style.backgroundImage = "url('./GREEN/GREEN.jpg')";

            } else if (mainColorElement.classList.contains('yellow')) {
                mainColorElement.style.backgroundImage = "url('./YELLOW/YELLOW.jpg')";
            }
            else if (mainColorElement.classList.contains('red')) {
                mainColorElement.style.backgroundImage = "url('./RED/RED.jpg')";
            }


            if (leftColorElement.classList.contains('green')) {
                leftColorElement.style.backgroundImage = "url('./BLUE/portrait/LEFT-GREEN.jpg')"

            } else if (leftColorElement.classList.contains('red')) {
                leftColorElement.style.backgroundImage = "url('./GREEN/portrait/LEFT-RED.jpg')"

            } else if (leftColorElement.classList.contains('blue')) {
                leftColorElement.style.backgroundImage = "url('./YELLOW/portrait/LEFT-BLUE.jpg')"
            }
            else if (leftColorElement.classList.contains('yellow')) {
                leftColorElement.style.backgroundImage = "url('./RED/portrait/LEFT-YELLOW.jpg')"
            }


            if (rightColorElement.classList.contains('yellow')) {
                rightColorElement.style.backgroundImage = "url('./BLUE/portrait/RIGHT-YELLOW.jpg')"

            } else if (rightColorElement.classList.contains('blue')) {
                rightColorElement.style.backgroundImage = "url('./GREEN/portrait/RIGHT-BLUE.jpg')"
            }
            else if (rightColorElement.classList.contains('red')) {
                rightColorElement.style.backgroundImage = "url('./YELLOW/portrait/RIGHT-RED.jpg')"
            }
            else if (rightColorElement.classList.contains('green')) {
                rightColorElement.style.backgroundImage = "url('./RED/portrait/RIGHT-GREEN.jpg')"
            }

            // document.getElementById("y").innerHTML = "scaleY(" + (Math.round(event.beta)) + ")";
            // document.getElementById("x").innerHTML = "scaleX(" + (Math.round(event.gamma)) + ")";
            // document.getElementById("angle").innerHTML = "rotateZ(" + (Math.round(event.alpha)) + "deg)";
        }, true);

    } else {
        alert("Sorry, your browser doesn't support Device Orientation");
    }
}


var orientationHandler = function () {
    if (window.screen.orientation.type === "landscape-primary") {
        console.log('landscape');
        init('landscape');
    }
    else if (window.screen.orientation.type === "portrait-primary") {
        console.log('portrait');
        init('portrait');
    }
    else if (window.orientation === undefined) {
    }
};

// get notified when orientation changes
window.addEventListener('orientationchange', orientationHandler);

// detect current orientation
orientationHandler();

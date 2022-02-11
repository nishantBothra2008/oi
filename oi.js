status = "";
function preload() {
    img = loadImage("dog&cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded() {
    console.log('Model is loaded');
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("red");
    noFill();
    stroke("red");
    rect(100, 150, 450, 250);
    text("dog", 120, 170);

    fill("red");
    noFill();
    stroke("red");
    rect(250, 50, 150, 100);
    text("cat", 270, 70);
}
































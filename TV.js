status = "";
TV_image = "";

function preload(){
    TV_image = loadImage("TV.jpg");
}

function setup(){
    canvas = createCanvas(640,360);
    canvas.position(315,200);
    object_detector = ml5.object_detector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    object_detector.detect(Bottle_image, gotResults);
}

function gotResults(results,error) {
    if (error){
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(TV_image ,0,0,640,350);
}
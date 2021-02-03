leftwristX = 0;
rightwristX = 0;
difference = 0;
noseX = 0;
noseY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);
    canvas.position(600,170);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("Posenet Is Initialised.");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("leftWristX  = " + leftwristX  + " rightWristX = "+ rightwristX + " difference = " + difference);
    }
}

function draw() {
    background('#eb8c34');
    document.getElementById("dif").innerHTML = difference;
    textSize(difference);
    fill('#2658b6');
    text('Realtime Drawing', noseX, noseY);
}
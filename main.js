function setup()
{
    video=createCapture(VIDEO);
    video.size(900,700);
    video.position(200,150)
    canvas=createCanvas(900,700);
    canvas.position(1200,150); 
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log(nose_x,nose_y)
        left_wristX=results[0].pose.leftWrist.x;
        right_wristX=results[0].pose.rightWrist.x;
        difference=floor(left_wristX-right_wristX)
    }
    
}

Webcam.set({
    width:400,
    height:300,
    image_format:'png',
    png_quality:1000
});

camera= document.getElementById("camera");

Webcam.attach("#camera");

function takesnapshot(){
 Webcam.snap(function(snapz){
    document.getElementById("result").innerHTML= '<img id="CI" src="'+snapz+'" />';
 });
}

classify = ml5.imageClassifier("https://storage.googleapis.com/tm-model/cI7XpE4h9/model.json", modelloaded);

function modelloaded(){
    console.log("modelloaded!");
}

function percentage(){
    img = document.getElementById("CI");
    classify.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }}
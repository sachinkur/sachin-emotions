Webcam.set({
	width:350,
	height:300,
	image_format: 'jpeg',
	jpeg_quality:100,
    crop_width: 300,
    crop_height: 250

});
camera = document.getElementById("camera");
// Webcam.attach('#camera')
// we can attach the webcam with either the id or the variable, output will still be the same
Webcam.attach(camera)
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'/>;"
    })
}
console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9S0YGQxFx/model.json", model_loaded)
function model_loaded(){
    console.log("model is loaded")
}
function identify()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, result){
    if (error) {
        console.error(error);
    } else {
        console.log(result)
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);

    }
}

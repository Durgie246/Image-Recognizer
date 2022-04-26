camera = document.getElementById("camera");
Webcam.attach( '#camera');

Webcam.set(
{
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 100
}
);

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id = "capture" src = "' + data_uri + '"/>';

    })
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qBDf0358y/model.json',modelLoaded);

function modelLoaded()
{
    console.log("THE MODEL IS LOADED OMG!!!!!")
}

function check()
{
    img = document.getElementById("capture");
    classifier.classify(img, getResult);
}
function getResult(error, result)
{
if (error)
{
    console.error(error);
}
else 
{
    console.log(result);
    document.getElementById("result_name").innerHTML = result[0].label;
    document.getElementById("result_accuracy").innerHTML= Math.round(result[0].confidence * 100) + "%";
}
}
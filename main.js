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
classifier = ml5.imageClassifier('',modelLoaded);

function modelLoaded()
{
    console.log("THE MODEL IS LOADED OMG!!!!!")
}
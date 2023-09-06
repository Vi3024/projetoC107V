function startClassification() 
{
     navigator.mediaDevices.getUserMedia({ audio: true, video: false }); 
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mm0HSDO6-/model.json', { probabilityThreshold: 0.7 }, modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);

}

function gotResults(error, results)
{
    if (error) {
        console.error(error);
    }
}
var featureextractor;
var classifier;
var video;
var happyDataCount=0;
var sadDataCount=0;
function setup(){
    createCanvas(600,600);
    video=createCapture(VIDEO);
    video.hide();
    featureextractor=ml5.featureExtractor('MobileNet',modelReady)
    classifier=featureextractor.classification(video,classifierReady)
}
function modelReady(){
    console.log("Model Ready");
}
function classifierReady(){
    console.log("Classifier Ready");
}
function addHappyData(){
    happyDataCount++;
    classifier.addImage('Happy');
    document.getElementById('happyDataCount').innerHTML="Happy count= "+happyDataCount;
}
function saveModel(){
    classifier.save();
}
function train(){
    classifier.train(function(lossvalue){
        if(lossvalue){

        }
        else{
            console.log("Trainning Completed !!! Ready to Rock!!!");
            predict();
        }
    })
}
function addSadData(){
    sadDataCount++;
    classifier.addImage('Sad');
    document.getElementById('sadDataCount').innerHTML="Sad count= "+sadDataCount;
}
function predict(){
    classifier.classify(function(error,result){
        document.getElementById("result").innerHTML=result;
        console.log(result);
        predict();
    });
}
function draw(){
    image(video,0,0,width,height);
}
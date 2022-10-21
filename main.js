function startRecognition(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gHIDAWRm5/model.json" , modelReady);
};

function modelReady(){
    classifier.classify(gotResults)
};

function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        rgb1 = Math.floor(Math.random()*255) + 1;
        rgb2 = Math.floor(Math.random()*255) + 1;
        rgb3 = Math.floor(Math.random()*255) + 1;
        rgb4 = Math.floor(Math.random()*255) + 1;

        document.getElementById("AnimalName").innerHTML="I can hear: " + results[0].label;
        document.getElementById("Accuracy").innerHTML="Accuracy: " + (results[0].confidence*100).toFixed(2) + " %";

        document.getElementById("AnimalName").style.color="rgb("+rgb1+" ,"+rgb2+" ,"+rgb3+" ,"+rgb4+")";
        document.getElementById("Accuracy").style.color="rgb("+rgb1+" ,"+rgb2+" ,"+rgb3+" ,"+rgb4+")";

        img1 = document.getElementById("imgResult");

        if(results[0].label == "Cat"){
            img1.src="cat.jpg";
        }
        else if(results[0].label == "Cow"){
            img1.src="cow.jpg";
        }
        else if(results[0].label == "Dog"){
            img1.src="dog.jpg";
        }
        else{
            img1.src="lion.jpg";
        }

    }
}
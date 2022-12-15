function iniciar(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mM_W_b-m7/model.json", modelLoaded)
}

function modelLoaded(){
    classifier.classify(gotResults)
}

function gotResults(error, results){
    if (error){
        console.error(error)
    }
    else {
        document.getElementById("result").innerHTML = "Som detectado" + results[0].label
        img = document.getElementById("image")
    }
    if (results[0].label == "Latido"){
        img.src = "cachorro.gif"
    }
    else if(results[0].label == "Miado"){
        img.src = "gato.webp"
    }
    else {
        img.src = "orelha-removebg-preview.png"
    }
}
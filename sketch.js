let classifier;
let img;
let imgA;
let label;
let confidence;
let imageModelURL = "https://teachablemachine.withgoogle.com/models/xqcNHgbBL/";


function preload() {
  classifier = ml5.imageClassifier(ImageModelURL + "model.json");
  img = loadImage("image/IMAGE1.png");
  imgA = loadImage("image/IMAGE2.png");
}

function setup() {
    createCanvas(800, 480);
    background(255, 0, 0);
    classifier.classify(img, gotResult);
    image(img,0,0);

  }
  
  function draw() {
    if (keyIsPressed === true) {
      if (key === 'w') {
        classifier.classify(img, gotResult);
        image(img,0,0);
      } else if (key === 's') {
        classifier.classify(imgA, gotResult);
        image(imgA,0,0);
      } else if (key === 'a') {
        print("etiqueta c");
      } else if (key === 'd') {
        print("etiqueta d");
      }
    }
  }

// Callback function for when classification has finished
function gotResult(results) {
    // The results are in an array ordered by confidence
    console.log(results);
    // Display the results on the canvas
    fill(255,0,0);
    stroke(0);
    textSize(12);

    label = "Label: " + results[0].label;
    confidence = "Confidence: " + nf(results[0].confidence, 0, 2);
    text(label, 10, 360);
    text(confidence, 10, 380);

  }  

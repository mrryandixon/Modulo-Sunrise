let x = 200;
let yStart = 450;
let yDiff = 0;
let h = 209;
let s = 100;
let b = 0;

function setup()
{
    createCanvas(400, 400);
    colorMode(HSB);
}

function draw()
{
    background(h, s, b);
    
    // Increases yDiff by 1 every frame
    yDiff = yDiff + 1;
    // Resets yDiff back to zero after increasing 500 times
    yDiff = yDiff % 500;
    // Increases the background brightness by .2 every frame
    b = b + 0.2;
    // Resets the background brightness after it reaches 100
    b = b % 100;
    // No stroke on the sun
    noStroke();
    fill(58, 100, 100);
    ellipse(x, yStart - yDiff, 100, 100);
}
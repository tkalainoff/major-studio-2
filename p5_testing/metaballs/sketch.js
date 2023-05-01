// starter code : https://editor.p5js.org/meij_who/sketches/VJxVfE2vH
// additional resources: https://editor.p5js.org/codingtrain/sketches/ISPozOLXW

var PX_SIZE = 1;
var SUM_THRESHOLD = 7;
var NUM_CIRCLES_PLUM = 3;
var NUM_CIRCLES_TEAL = 3;
var NUM_CIRCLES_NAVY = 2;
var NUM_CIRCLES_GRAY = 1;

var circles = [];


function setup() {
    createCanvas(600, 600);
    
    for (var i = 0; i < NUM_CIRCLES_PLUM; i++) {
        circles.push({
            x: random(0, width),
            y: random(0, height),
            r: random(50, 100)*1.75,
            vx: random(-20, 20),
            vy: random(-20, 20),
            red: (236),
            green: (157),
            blue: (237)
        });
    }
      
    for (var j = 0; j < NUM_CIRCLES_TEAL; j++) {
        circles.push({
            x: random(0, width),
            y: random(0, height),
            r: random(20, 80)*1.5,
            vx: random(-20, 20),
            vy: random(-20, 20),
            red: (32),
            green: (178),
            blue: (170)
        });
    }

    for (var j = 0; j < NUM_CIRCLES_NAVY; j++) {
        circles.push({
            x: random(0, width),
            y: random(0, height),
            r: random(20, 60)*1.5,
            vx: random(-20, 20),
            vy: random(-20, 20),
            red: (25),
            green: (25),
            blue: (112)
        });
    }

    for (var j = 0; j < NUM_CIRCLES_GRAY; j++) {
        circles.push({
            x: random(0, width),
            y: random(0, height),
            r: 40,
            vx: random(-20, 20),
            vy: random(-20, 20),
            red: (65),
            green: (74),
            blue: (76)
        });
    }
    
  }

function draw() {
background(255, 255, 255);
stroke(51);
strokeWeight(2);
noFill();
circle(300, 300, 600);

    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];

        c.x += c.vx;
        c.y += c.vy;
        
        if (c.x - c.r < 0) {
            c.vx = +abs(c.vx)*0.8;
        }
        if (c.x + c.r > width) {
            c.vx = -abs(c.vx)*0.8;
        }
        if (c.y - c.r < 0) {
            c.vy = +abs(c.vy)*0.8;
        }
        if (c.y + c.r > height) {
            c.vy = -abs(c.vy)*0.8;
        }
    }

    for (var x = 0; x < width; x += PX_SIZE) {
        for (var y = 0; y < width; y += PX_SIZE) {
            var sum = 0;
            var closestD2 = Infinity;
            var closestColor = null;
            var closestI = 0;
            var secondcloseD2 = Infinity;
            var i2 = null;
            for (var i = 0; i < circles.length; i++) {
                var c = circles[i];
                var dx = x - c.x;
                var dy = y - c.y;
                var d2 = dx * dx + dy * dy;
                sum += c.r * c.r / d2;
                
                if (d2 < closestD2) {
                    secondcloseD2 = closestD2;
                    i2 = closestI;
                    closestD2 = d2;
                    closestI = i;
                    closestColor = [c.red,c.green,c.blue];
                    //closestColor = [lerp(circles[i].red, circles[i2].red,0.33), lerp(circles[i].green, circles[i2].green,0.33), lerp(circles[i].blue, circles[i2].blue,0.33)];
                }
            }
            if (sum > SUM_THRESHOLD) {
                noStroke();
                fill(closestColor[0], closestColor[1], closestColor[2]);
                rect(x, y, PX_SIZE, PX_SIZE);
            }
        }
    }
    // circle(300, 300, 600);
    // noFill();
    // strokeWeight(4);
}

let matrix = [];
let side = 20;
let grassArr = []; // 80
let grassEaterArr = []; // 50
let gishatichArr = [];
let andrevArr = [];
let mardArr=[];

function setup() {
    matrixGenerator(40, 30, 20,1,30,1);
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            } 
             if (matrix[y][x] == 3) {
                let gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }
            if (matrix[y][x] == 4) {
                let andrev = new Andrev(x, y);
                andrevArr.push(andrev);
            }
            if (matrix[y][x] == 5) {
                let andrev1 = new Mard(x, y);
                mardArr.push(andrev1);
            }
        }
    }
    function matrixGenerator(matrixSize, grass, grassEater,gishatich,andrev,mard) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let customX = Math.floor(random(0, matrixSize)); // 0 - 29
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 2;
        }
        for (let i = 0; i < gishatich; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 3;
        }
        for (let i = 0; i < andrev; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 4;
        }
        for (let i = 0; i < mard; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 5;
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("lightblue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            rect(x * side, y * side, side, side);
        }
    }


    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (var i in andrevArr) {
         andrevArr[i].move();
    }
    for (var i in mardArr) {
        mardArr[i].keyPressed();
   }
   

}

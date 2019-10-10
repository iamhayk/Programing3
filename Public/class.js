class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 5;
        this.directions = [];
    }
    getDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;

        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.multiply >= 10) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 1;

            let grass = new Grass(x, y);
            grassArr.push(grass);

            this.multiply = 5;
        }
    }
}
class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 37;

        this.directions = [
           
        ];

    }

   
        getDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 2;

            let grassEater = new GrassEater(x, y);
            grassEaterArr.push(grassEater);

            this.life = 37;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCells);

        if (newCell) {
            this.life++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice (i, 1);
                }
            }

            this.x = x;
            this.y = y;

            if (this.life >= 43) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.life--;

        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in grassEaterArr) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1)
            }
        }
    }
}
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 44;
        this.directions = [
            
        ];
    }

    getDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    
    chooseCell(character) {
         this.getDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
    

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;

            let gishatich1 = new Gishatich(x, y);
            gishatichArr.push(gishatich1);

            this.energy = 44;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);

        if (newCell) {
            this.energy++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);

                }
            }
            if (this.energy >= 57) {
                this.mul();
            }

            this.x = x;
            this.y = y;


        }
        else {
            this.move()
        }
    }
    move() {
        this.energy--;

        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);

        let newCell = random(emptyCells.concat(emptyCells1));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.energy < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in gishatichArr) {
            if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                gishatichArr.splice(i, 1)
            }
        }
    }
}
class Andrev {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 40;
        this.directions = [
            

        ];
    }
    getDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    move() {
        this.energy = this.energy - 1;

        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);
        let emptyCells2 = this.chooseCell(2);
        let emptyCells3 = this.chooseCell(2);
        let full = emptyCells.concat(emptyCells1);
        let full1 = emptyCells2.concat(emptyCells3);
        let full3 = full.concat(full1);
        let newCell = random(full3);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 4;

            let grass = new Grass(x, y);
            grassArr.push(grass);
            matrix[this.y][this.x] = 0;




            this.y = y;
            this.x = x;
        }

        if (this.energy < 0) {
            this.die();
        }

    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in andrevArr) {
            if (andrevArr[i].x == this.x && andrevArr[i].y == this.y) {
                andrevArr.splice(i, 1)
            }
        }
    }
}

class Mard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    keyPressed() {
        if (keyCode == 65) {
            let lastX = this.x;
            let lastY = this.y;
            this.x = this.x - 1;
            matrix[this.y][this.x] = 5;
            matrix[lastY][lastX] = 0;
        }
        if (keyCode == 87) {
            let lastX = this.x;
            let lastY = this.y;
            this.y = this.y - 1;
            matrix[this.y][this.x] = 5;
            matrix[lastY][lastX] = 0;
        }
        if (keyCode == 68) {
            let lastX = this.x;
            let lastY = this.y;
            this.x = this.x + 1;
            matrix[this.y][this.x] = 5;
            matrix[lastY][lastX] = 0;
        }
        if (keyCode == 83) {
            let lastX = this.x;
            let lastY = this.y;
            this.y = this.y + 1;
            matrix[this.y][this.x] = 5;
            matrix[lastY][lastX] = 0;
        }
        keyCode = 0;
    }
}

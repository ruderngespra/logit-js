function buildBoard(x, y) {
    var xCounter = 0;
    var yCounter = 0;
    var board = [];
    for (var i = 0; i < x * y; i += 1) {
        if (xCounter == x) {
            xCounter = 0;
            yCounter += 1;
        }
        board.push([xCounter, yCounter]);
        xCounter += 1;
    }
    board.map(function(position) {
        position.push(null);
    });
    return board;
}

function connectFour(x = 8, y = 8, board, turn = 'O') {
    this.board = board ? board : buildBoard(x, y);
    this.x = x;
    this.y = y;
    this.turn = turn;
    this.winner = false;
}

connectFour.prototype.toString = function() {
    var x = this.x;
    return this.board
        .reduce(function(total, position, index) {
            var returnValue =
                total + '|' + (position[2] == null ? '_' : position[2]) + '|';
            index = index += 1;
            if (index % x == 0) {
                returnValue += '\n';
            }
            return returnValue;
        }, '')
        .split('\n')
        .reverse()
        .join('\n');
};

connectFour.prototype.nextMove = function(x) {
    var position = this.board.find(function(position) {
        return position[0] == x && position[2] == null;
    });
    var newValueAtPosition = position.slice();
    newValueAtPosition[2] = this.turn;
    var nextBoard = new connectFour(
        this.x,
        this.y,
        this.board.slice().map(function(internPosition) {
            return position == internPosition
                ? newValueAtPosition
                : internPosition;
        }),
        this.turn == 'X' ? 'O' : 'X'
    );
    if (nextBoard.checkAll(this.turn)) {
        nextBoard.winner = this.turn;
    }
    return nextBoard;
};

function check([x, y], color, array, direction, counter = 0) {
    var newColor = array.find(function(position) {
        return position[0] == x && position[1] == y;
    })
        ? array.find(function(position) {
              return position[0] == x && position[1] == y;
          })[2]
        : null;
    if (newColor == color) {
        counter += 1;
        if (counter == 4) {
            // console.log(color + ' won.');
            return true;
        }
        if (direction == 'up') {
            y += 1;
        } else if (direction == 'right') {
            x += 1;
        } else if (direction == 'upRight') {
            x += 1;
            y += 1;
        } else if (direction == 'downRight') {
            x += 1;
            y -= 1;
        }
        return check([x, y], color, array, direction, counter);
    }
}
// This will loop through the board-array:
// TODO: Refactor.

connectFour.prototype.checkAll = function(color) {
    return this.board.find(function(position, index, array) {
        return (
            check([position[0], position[1]], color, array, 'up') ||
            check([position[0], position[1]], color, array, 'right') ||
            check([position[0], position[1]], color, array, 'upRight') ||
            check([position[0], position[1]], color, array, 'downRight')
        );
    });
};

connectFour.prototype.startTerminalInterface = function() {
    var standard_input = process.stdin;
    standard_input.setEncoding('utf-8');
    var clearMonitorString = '';
    for (var i = 0; i < 50; i += 1) {
        clearMonitorString += '\n';
    }
    console.log(this.toString());
    console.log(this.turn + 's turn. Enter a number:');
    var currentGame = this;
    standard_input.once('data', function(data) {
        console.log(clearMonitorString);
        var nextPosition = currentGame.nextMove(data);
        if (nextPosition.winner != false) {
            console.log(nextPosition.toString(), '\n');
            console.log(nextPosition.winner, ' won.');
            process.exit();
        } else {
            nextPosition.startTerminalInterface();
        }
    });
};

var game = new connectFour(6, 7);

game.startTerminalInterface();

// See: https://www.dev2qa.com/node-js-get-user-input-from-command-line-prompt-example/

// When user input data and click enter key.

// TODOS

// Handle all the wrong input errors!

// Customize win-connect-length
// implement into browser
// customize player amounts and symbols

// Make all the node input stuff an seperate function.
// Refactor all the spaghetti code. Clean up.

// Animations
// Let User use arrow keys to decide input

// (...)

//const chessmove = require('../knightchessmove.js');

describe('Test Knights Challenge - CalcNextMove', () => {
    let XPosition = 0;
    let YPosition = 0;
    let chess;
    let tempCurrLocationX = 0;
    let tempCurrLocationY = 0;
    let currentMove = 1;
    let reverseMove = 0;

    beforeAll(() => {
        chess = new KnightsMove.ChessBoard(XPosition, YPosition);
    });

    beforeEach(() => {
        tempCurrLocationX = 0;
        tempCurrLocationY = 0;
        currentMove = 1;
        reverseMove = 0;
    });

    it('Check next move x and y are set for move 1', () => {

        currentMove = 1;
        ({
            tempCurrLocationX,
            tempCurrLocationY,
            reverseMove
        } = chess.CalcNextMove(currentMove, tempCurrLocationX, tempCurrLocationY));
        expect(tempCurrLocationX).toBe(1);
        expect(tempCurrLocationY).toBe(-2);
        expect(reverseMove).toBe(5);
    });

    it('Check next move x and y are set for move 2', () => {
        currentMove = 2;

        ({
            tempCurrLocationX,
            tempCurrLocationY,
            reverseMove
        } = chess.CalcNextMove(currentMove, tempCurrLocationX, tempCurrLocationY));

        expect(tempCurrLocationX).toBe(2);
        expect(tempCurrLocationY).toBe(-1);
        expect(reverseMove).toBe(6);
    });

    it('Check next move x and y are set for move 3', () => {
        currentMove = 3;

        ({
            tempCurrLocationX,
            tempCurrLocationY,
            reverseMove
        } = chess.CalcNextMove(currentMove, tempCurrLocationX, tempCurrLocationY));

        expect(tempCurrLocationX).toBe(2);
        expect(tempCurrLocationY).toBe(1);
        expect(reverseMove).toBe(7);
    });

    it('Check next move x and y are set for move 4', () => {
        currentMove = 4;

        ({
            tempCurrLocationX,
            tempCurrLocationY,
            reverseMove
        } = chess.CalcNextMove(currentMove, tempCurrLocationX, tempCurrLocationY));

        expect(tempCurrLocationX).toBe(1);
        expect(tempCurrLocationY).toBe(2);
        expect(reverseMove).toBe(8);
    });

    it('Check next move x and y are set for move 5', () => {
        currentMove = 5;

        ({
            tempCurrLocationX,
            tempCurrLocationY,
            reverseMove
        } = chess.CalcNextMove(currentMove, tempCurrLocationX, tempCurrLocationY));

        expect(tempCurrLocationX).toBe(-1);
        expect(tempCurrLocationY).toBe(2);
        expect(reverseMove).toBe(1);
    });


    it('Check next move x and y are set for move 6', () => {
        currentMove = 6;

        ({
            tempCurrLocationX,
            tempCurrLocationY,
            reverseMove
        } = chess.CalcNextMove(currentMove, tempCurrLocationX, tempCurrLocationY));

        expect(tempCurrLocationX).toBe(-2);
        expect(tempCurrLocationY).toBe(1);
        expect(reverseMove).toBe(2);
    });


    it('Check next move x and y are set for move 7', () => {
        currentMove = 7;

        ({
            tempCurrLocationX,
            tempCurrLocationY,
            reverseMove
        } = chess.CalcNextMove(currentMove, tempCurrLocationX, tempCurrLocationY));

        expect(tempCurrLocationX).toBe(-2);
        expect(tempCurrLocationY).toBe(-1);
        expect(reverseMove).toBe(3);
    });

    it('Check next move x and y are set for move 8', () => {
        currentMove = 8;

        ({
            tempCurrLocationX,
            tempCurrLocationY,
            reverseMove
        } = chess.CalcNextMove(currentMove, tempCurrLocationX, tempCurrLocationY));

        expect(tempCurrLocationX).toBe(-1);
        expect(tempCurrLocationY).toBe(-2);
        expect(reverseMove).toBe(4);
    });

});

describe('Test Knights Challenge - CheckPositionMove', () => {
    let XPosition = 0;
    let YPosition = 0;
    let chess;
    let tempCurrLocationX = 0;
    let tempCurrLocationY = 0;
    let currentMove = 1;

    beforeAll(() => {
        chess = new KnightsMove.ChessBoard(XPosition, YPosition);
    });

    beforeEach(() => {
        tempCurrLocationX = 0;
        tempCurrLocationY = 0;
        currentMove = 1;
        reverseMove = 0;
    });

    it('Check next CurrentMove of 1 returns undefined', () => {
        tempCurrLocationX = 0;
        tempCurrLocationY = 0;
        currentMove = 1;
        nextPosition = chess.CheckPositionMove(currentMove, tempCurrLocationX, tempCurrLocationY);
        expect(nextPosition).toBe(undefined);
    });

    it('Check next CurrentMove of 3 returns valid position', () => {
        tempCurrLocationX = 0;
        tempCurrLocationY = 0;
        currentMove = 3;
        nextPosition = chess.CheckPositionMove(currentMove, tempCurrLocationX, tempCurrLocationY);
        expect(nextPosition).toEqual(Object({
            knightMove: 0,
            currentMove: 3,
            currLocationX: 2,
            currLocationY: 1,
            freeSquare: true,
            reverseMove: 7
        }));
    });


});

describe('Test Knights Challenge - SetStartingMove', () => {
    let XPosition = 0;
    let YPosition = 0;
    let chess;


    beforeAll(() => {
        chess = new KnightsMove.ChessBoard(XPosition, YPosition);
    });

    beforeEach(() => {
        tempCurrLocationX = 0;
        tempCurrLocationY = 0;
        currentMove = 1;
        reverseMove = 0;
    });

    it('Check next SetStartingMove return 1,1', () => {

        let currentPosition = {
            knightMove: 0,
            currentMove: 0,
            currLocationY: 0,
            currLocationX: 0,
            freeSquare: false,
            reverseMove: 0
        };

        ({
            currentMove,
            knightMove,
            currentPosition
        } = chess.SetStartingMove());


        expect(currentPosition).toEqual(Object({
            knightMove: 1,
            currentMove: 1,
            currLocationY: 0,
            currLocationX: 0,
            freeSquare: false,
            reverseMove: 0
        }));
    });
});

describe('Test Knights Challenge - CheckPositionNotOccupied', () => {
    let XPosition = 0;
    let YPosition = 0;
    let chess;


    beforeAll(() => {
        chess = new KnightsMove.ChessBoard(XPosition, YPosition);
    });

    beforeEach(() => {
        tempCurrLocationX = 0;
        tempCurrLocationY = 0;
        currentMove = 1;
        reverseMove = 0;
        let currentPosition = {
            knightMove: 0,
            currentMove: 0,
            currLocationY: 0,
            currLocationX: 0,
            freeSquare: false,
            reverseMove: 0
        };

        ({
            currentMove,
            knightMove,
            currentPosition
        } = chess.SetStartingMove());
    });

    it('Check space is not free for location 0,0 return false', () => {

        let isFree = chess.CheckPositionNotOccupied(0, 0);

        expect(isFree).toEqual(false);
    });

    it('Check space is free for location 1,1 and returns true', () => {

        let isFree = chess.CheckPositionNotOccupied(1, 1);

        expect(isFree).toEqual(true);
    });
});


describe('Test Knights Challenge - ReverseKnightPosition', () => {
    let XPosition = 0;
    let YPosition = 0;
    let chess;
    let knightMove = 1;
    let currentPosition = {
        knightMove: 0,
        currentMove: 0,
        currLocationY: 0,
        currLocationX: 0,
        freeSquare: false,
        reverseMove: 0
    };

    beforeAll(() => {
        chess = new KnightsMove.ChessBoard(XPosition, YPosition);
    });

    beforeEach(() => {
        tempCurrLocationX = 0;
        tempCurrLocationY = 0;
        currentMove = 1;
        reverseMove = 0;

        ({
            currentMove,
            knightMove,
            currentPosition
        } = chess.SetStartingMove());

        chess.chessboard[1][2] = Object({
            knightMove: 2,
            currentMove: 2,
            currLocationY: 1,
            currLocationX: 2,
            freeSquare: false,
            reverseMove: 7
        });
    });


    it('Check next ReverseKnightPosition from position 2 returns to position 1', () => {
        tempCurrLocationX = 0;
        tempCurrLocationY = 0;
        currentMove = 3;
        let reversePosition = chess.ReverseKnightPosition(Object({
            knightMove: 2,
            currentMove: 2,
            currLocationY: 1,
            currLocationX: 2,
            freeSquare: false,
            reverseMove: 7
        }));
        expect(reversePosition).toEqual(Object({
            knightMove: 1,
            currentMove: 1,
            currLocationY: 0,
            currLocationX: 0,
            freeSquare: false,
            reverseMove: 0
        }));
    });


});
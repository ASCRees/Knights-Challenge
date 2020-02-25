// This script performs the Knights Challenge in Chess.
// In this version the knight must visit all squares on the chess board only once.
namespace KnightsMove {
	interface IPositionCheck {
		knightMove: number;
		currentMove: number;
		currLocationX: number;
		currLocationY: number;
		freeSquare: boolean;
		reverseMove: number;
	}

	export class ChessBoard {
		private StartingPositionX: number = 0;
		private StartingPositionY: number = 0;
		private MaxReversals: number = 0;

		constructor(startingPositionX: number, startingPositionY: number, maxReversals: number) {
			this.StartingPositionX = startingPositionX;
			this.StartingPositionY = startingPositionY;
			this.MaxReversals = maxReversals;
		}

		private defaultobj: IPositionCheck = {
			knightMove: 0,
			currentMove: 0,
			currLocationY: 0,
			currLocationX: 0,
			freeSquare: true,
			reverseMove: 0
		};

		//Declare the chessBoard and initialise it
		public chessboard: IPositionCheck[][] = Array(8)
			.fill(this.defaultobj)
			.map(() => new Array(8).fill(this.defaultobj));

		private PrintBoard() {
			let square: number = 1;
			for (let YPosition: number = 7; YPosition >= 0; YPosition--) {
				console.log(this.chessboard[YPosition].map(a => (a.knightMove ? a.knightMove.toString().padStart(2, "0") : "__")).join(" "));
			}
		}

		private SetStartingMove() {
			let currentMove: number = 1;
			let knightMove: number = 1;
			let currentPosition: IPositionCheck = {
				knightMove: knightMove,
				currentMove: currentMove,
				currLocationY: this.StartingPositionY,
				currLocationX: this.StartingPositionX,
				freeSquare: false,
				reverseMove: 0
			};
			this.chessboard[currentPosition.currLocationY][currentPosition.currLocationX] = currentPosition;
			return { currentMove, knightMove, currentPosition };
		}

		private ReverseKnightPosition(currentSquare: IPositionCheck): IPositionCheck {
			let tempCurrLocationX: number = currentSquare.currLocationX;
			let tempCurrLocationY: number = currentSquare.currLocationY;
			let reverseMove: number = currentSquare.reverseMove;

			({ tempCurrLocationX, tempCurrLocationY, reverseMove } = this.CalcNextMove(reverseMove, tempCurrLocationX, tempCurrLocationY));
			currentSquare = this.chessboard[tempCurrLocationY][tempCurrLocationX];

			return currentSquare;
		}

		private CheckPositionNotOccupied(locationX: number, locationY: number): boolean {
			let boardcolumn: IPositionCheck = this.chessboard[locationY][locationX];
			return boardcolumn.freeSquare;
		}

		private CheckPositionMove(currentMove: number, currLocationX: number, currLocationY: number): IPositionCheck {
			let tempCurrLocationX: number = currLocationX;
			let tempCurrLocationY: number = currLocationY;
			let freeSquare: boolean = false;
			let reverseMove: number = 0;
			let returnVal: IPositionCheck;
			let knightMove: number = 0;

			({ tempCurrLocationX, tempCurrLocationY, reverseMove } = this.CalcNextMove(currentMove, tempCurrLocationX, tempCurrLocationY));

			if (tempCurrLocationX >= 0 && tempCurrLocationY >= 0 && tempCurrLocationX < 8 && tempCurrLocationY < 8) {
				freeSquare = this.CheckPositionNotOccupied(tempCurrLocationX, tempCurrLocationY);
				if (freeSquare) {
					currLocationX = tempCurrLocationX;
					currLocationY = tempCurrLocationY;
					knightMove = this.chessboard[currLocationY][currLocationX].knightMove;
					returnVal = {
						knightMove,
						currentMove,
						currLocationX,
						currLocationY,
						freeSquare,
						reverseMove
					};
				}
			}

			return returnVal;
		}

		private CalcNextMove(currentMove: number, tempCurrLocationX: number, tempCurrLocationY: number): { tempCurrLocationX: number; tempCurrLocationY: number; reverseMove: number } {
			let reverseMove: number = 0;
			switch (currentMove) {
				case 1:
					tempCurrLocationX = tempCurrLocationX + 1;
					tempCurrLocationY = tempCurrLocationY - 2;
					reverseMove = 5;
					break;
				case 2:
					tempCurrLocationX = tempCurrLocationX + 2;
					tempCurrLocationY = tempCurrLocationY - 1;
					reverseMove = 6;
					break;
				case 3:
					tempCurrLocationX = tempCurrLocationX + 2;
					tempCurrLocationY = tempCurrLocationY + 1;
					reverseMove = 7;
					break;
				case 4:
					tempCurrLocationX = tempCurrLocationX + 1;
					tempCurrLocationY = tempCurrLocationY + 2;
					reverseMove = 8;
					break;
				case 5:
					tempCurrLocationX = tempCurrLocationX - 1;
					tempCurrLocationY = tempCurrLocationY + 2;
					reverseMove = 1;
					break;
				case 6:
					tempCurrLocationX = tempCurrLocationX - 2;
					tempCurrLocationY = tempCurrLocationY + 1;
					reverseMove = 2;
					break;
				case 7:
					tempCurrLocationX = tempCurrLocationX - 2;
					tempCurrLocationY = tempCurrLocationY - 1;
					reverseMove = 3;
					break;
				case 8:
					tempCurrLocationX = tempCurrLocationX - 1;
					tempCurrLocationY = tempCurrLocationY - 2;
					reverseMove = 4;
					break;
			}
			return { tempCurrLocationX, tempCurrLocationY, reverseMove };
		}

		private MoveTheKnight(currentMove: number, knightMove: number, currentPosition: IPositionCheck): { startTime: number; totalMoves: number; reversingCount: number; error: string } {
			let startTime: number = new Date().getTime();
			let totalMoves: number = 1;
			let reversingCount: number = 0;
			let nextPosition: IPositionCheck;
			let error: string = "";

			try {
				currentMove = 0;

				while (knightMove < 64) {
					nextPosition = undefined;

					// Find the next vaialble position
					while (nextPosition == undefined && currentMove < 8) {
						currentMove++;
						nextPosition = this.CheckPositionMove(currentMove, currentPosition.currLocationX, currentPosition.currLocationY);
					}

					totalMoves++;

					// Determine if we have moved forward or need to move backwards.
					if (nextPosition != undefined) {
						// The piece has successfully moved so set the piece on the board.
						nextPosition.knightMove = ++knightMove;
						nextPosition.freeSquare = false;
						this.chessboard[nextPosition.currLocationY][nextPosition.currLocationX] = nextPosition;
						currentPosition = nextPosition;
						currentMove = 0;
					} else {
						// Havent moved so we need to reverse.
						this.chessboard[currentPosition.currLocationY][currentPosition.currLocationX] = this.defaultobj; // Blank out the current square as we are move back off it.
						currentPosition = this.ReverseKnightPosition(currentPosition); // Go back to the previous position.
						currentMove = currentPosition.currentMove = currentPosition.currentMove + 1; // Set the currentmove to one more than previous
						reversingCount++;
						knightMove--; // Decrement the number of knightmoves.

						// Break if we have reversed x times. This is a safety feature to stop going forever
						if (reversingCount === this.MaxReversals) {
							throw new Error("Breaking on move " + knightMove.toString() + " reversingCount -" + reversingCount.toString());
						}
					}
				}
			} catch (e) {
				error = e.message;
			}

			return { startTime, totalMoves, reversingCount, error };
		}

		public RunKnightMove() {
			console.log("");
			console.log("Starting Board");
			console.log("");

			// Set the Starting Position of the board.
			let {
				currentMove,
				knightMove,
				currentPosition
			}: {
				currentMove: number;
				knightMove: number;
				currentPosition: IPositionCheck;
			} = this.SetStartingMove();

			// Print the initial board with the piece on the initial starting point.
			this.PrintBoard();

			let {
				startTime,
				totalMoves,
				reversingCount,
				error
			}: {
				startTime: number;
				totalMoves: number;
				reversingCount: number;
				error: string;
			} = this.MoveTheKnight(currentMove, knightMove, currentPosition);

			if (error) {
				console.log("");
				console.log(error);
			}

			// Output the board as is.
			console.log("");
			console.log("Final Board");
			console.log("");

			this.PrintBoard();

			console.log("");
			console.log("Total Moves " + totalMoves.toString());
			console.log("Total Reversals " + reversingCount.toString());
			console.log("Calculation took " + (new Date().getTime() - startTime) / 1000 + " seconds");
			console.log("");
		}
	}
}

let XPosition: number = 0;
let YPosition: number = 0;
let maxReversals: number = 1000000000;

// Instantiate the ChessBoard class and pass in the starting position in the constructor using X and Y values indicating the position on the board
// to start from. The board is zero based and so the first position of X and Y are both 0. Which is the bottom left

let chess = new KnightsMove.ChessBoard(XPosition, YPosition, maxReversals);

// Move the knight starting at the starting position.
// The knight may move back on itself and retry an alternative route. The code has a safety break in so that if it reverses one billion times
// it will terminate.

chess.RunKnightMove();

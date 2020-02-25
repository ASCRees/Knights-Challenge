# README

### What is this repository for?

- This typescript script calculates the set of moves that would be required for a knight to move around the chess board visiting each square only once.
- Version 1.0
-

### How do I get set up?

- This can be run in the terminal window using node
-
- node knightschessmove.js
-
- The code assumes that the knight starts on square 0 and 0, bottom left of the board. Note. The chess board is zero based.
- The starting position can be altered by changing the values of the Xposition and YPosition variables in the code.
- maxReversals indicates the maximum times the code reverses looking for a valid path before terminating. This is a safety feature
- to prevent it from running forever. The default is 100000000 times.
- Knightmove.txt shows an example of the output.

### Testing

- This includes a number of tests that use the Jasmine framework. To run the Jasmine tests open the SpecRunner.html file in a browser.

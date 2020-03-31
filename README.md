# Knights Challenge

### What is this repository for?

This Typescript application calculates the set of moves that would be required for a Knight to move around a Chess board visiting each square only once.

Version 1.0

### How do I get set up?

This can be run in the terminal window using node

 node knightschessmove.js

The code assumes that the knight starts on square 0 and 0, bottom left of the board. Note. The chess board is zero based.
The starting position can be altered by changing the values of the Xposition and YPosition variables in the code.
maxReversals indicates the maximum times the code reverses looking for a valid path before terminating. 
This is a safety feature to prevent it from running forever. The default is 100000000 times.

![image](https://user-images.githubusercontent.com/28151071/77830217-eac5a380-711e-11ea-878b-8df2e338948d.png)

### Testing

This includes a number of tests that use the Jasmine framework. To run the Jasmine tests open the SpecRunner.html file in a browser.

![image](https://user-images.githubusercontent.com/28151071/78035311-d7a21600-7360-11ea-9cb7-650921dbde19.png)


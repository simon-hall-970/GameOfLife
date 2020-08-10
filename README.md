# The Game of Life

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

The game uses an evolving grid of cells that are either alive or dead.  The game begins with an initial grid state.  Each consecutive grid state, or generation, is determined according to three rules that determine which cells will die, which will survive, and which will come back to life.


## Rules
1. Any live cell with two or three live neighbours survives into the next generation.

2. Any dead cell with exactly three neighbours becomes a live cell in the next generation.

3. All other cells die in the next generation. (i.e. cells with <2 or >3 neighbours die.)

## Build

Built using test driven development. 

Using javascript, enzyme, jest, node.js, react, and redux.

# Intent

-The gameboard will be full screen with the exception of a header/toolbar.
-To create an initial state click the randomize button.
    -later iteration will have the user able to draw a custom initial state using their mouse.
    -possible further iterations could have various predefined initial states to choose from
    -An instruction will need to be provided to the user to let them know how to create an initial state befor estarting the game.
-Play button will begin the cycle of life and death according to the rules.
    -Toggle to a stop button when running to stop.
    -Will need to create a button to reset the board without having to refresh the page
-Will add a counter to count generations.

# How

Originally built in javascript with each function in it's own javascript file to run in the console as 0s and 1s.  This was an exercise in test development. Tests were written with jest.

Later I decided I would bring them into react to run on the front end with the intent outlined above.

The initial board is full screen. This is achieved by accessing the viewport dimensions dividing by the cell size (currently 10px square) and rounding down to the nearest whole number then creating a board.

The board is 2d array.  Initially filled with 0 to indicate a dead cell (giving a falsey value).

I decided a reasonable initial random state would have between 15-45% of the total cells seeded with life.  So the random state button will randomly select a percentage between 15-45% of total cells. It creates two arrays with randomly generated row and column indices respectively.  These are used to update a copy of the board that once updated is dispatched to state resulting in a re-render of those cells.

Similarly each generation uses the rules to update the cells that need updating on a copy of the current board. Once that board is updated it is dispatched to state triggering a re-render. Each generation is set to update every 300ms.


Obviously as the viewport size increases the gameboard array also increases and when things start getting too big the processing slows down.  I will need to look into some ways to optimize the process. Increasing the cell size, having a maximum board size, or a combination of both could work.  However, I tend to like the cell size and the full screen view of the gameboard.  I will have to explore other ways to get more speed first.  In the meantime a viewport width of around 1470x880 with 300ms cycle speed seems to have a pleasing effect.

Note on responsiveness: The header is responsive. However, due to the nature of the game it is not intended that the viewport is resized when the game is running. Currently the gameboard height and width is determined by the viewport height and width at the time of load. I do intend to look at some solutions in future though.  Perhaps shrinking-growing the cells and rows to a maximum / minimum height as the size decreases and then having an overflow. It's probably also a good idea that I set the randomize and refresh buttons to update the height and width.




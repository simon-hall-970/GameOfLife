# The Game of Life

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

The game uses an evolving grid of cells that are either alive or dead.  The game begins with an initial grid state.  Each consecutive grid state, or generation, is determined according to three rules that determine which cells will die, which will survive, and which will come back to life.


## Rules
1. Any live cell with two or three live neighbours survives into the next generation.

2. Any dead cell with exactly three neighbours becomes a live cell in the next generation.

3. All other cells die in the next generation. (i.e. cells with <2 or >3 neighbours die.)

## Build

Built using test driven development. 

Using javascript, jest, node.js, react

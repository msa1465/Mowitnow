class Mower {
    constructor(initPosition, perimeter) {
        this.position = initPosition;
        this.perimeter = perimeter;
    }

    /**
     * execute the received mower command in order to rotate or move
     * @param {string} command the mower command to execute
     */
    step(command) {
        switch (command) {
            case 'D':
                this.rotateRight();
                break;
            case 'G':
                this.rotateLeft();
                break;
            case 'A':
                this.nextPosition(this.perimeter);
                break;
            default:
                throw new Error('File structure issue : The Mower Instruction must be D, G, or A.');
        }
    }

    /**
     * Right rotate a mower 90°
     */
    rotateRight() {
        switch (this.position.orientation) {
            case 'N':
                this.position.orientation = 'E';
                break;
            case 'E':
                this.position.orientation = 'S';
                break;
            case 'S':
                this.position.orientation = 'W';
                break;
            case 'W':
                this.position.orientation = 'N';
        }
    }
    
    /**
     * Left rotate a mower 90°
     */
    rotateLeft() {
        switch (this.position.orientation) {
            case 'N':
                this.position.orientation = 'W';
                break;
            case 'E':
                this.position.orientation = 'N';
                break;
            case 'S':
                this.position.orientation = 'E';
                break;
            case 'W':
                this.position.orientation = 'S';
        }
    }

    /**
     * Move a mower to the next position 
     * @param {Perimeter} perimeter the land perimeter
     */
    nextPosition(perimeter) {
        switch (this.position.orientation) {
            case 'N':
                if (this.position.y < perimeter.height)
                    this.position.y++;
                break;
            case 'E':
                if (this.position.x < perimeter.width)
                    this.position.x++;
                break;
            case 'W':
                if (this.position.x > perimeter.center.x)
                    this.position.x--;
                break;
            case 'S':
                if (this.position.y > perimeter.center.y)
                    this.position.y--;
                break;
            default:
                throw new Error('File structure issue : the Mower orientation must be N, E, S, or W.');

        }
    }
}
module.exports = Mower;
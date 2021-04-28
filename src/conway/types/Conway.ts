class Conway {
   alive: boolean[][];
   width: number;
   height: number;

   constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
      this.alive = new Array(height)
         .fill(false)
         .map(() => new Array(width).fill(false));
   }

   /**
    * Sets cell at row, column to be alive
    * @param row
    * @param column
    */
   toggleAlive(row: number, column: number) {
      const newConway = new Conway(this.width, this.height);
      newConway.alive = this.alive.map((x) => x.slice());
      newConway.alive[row][column] = !this.alive[row][column];
      return newConway;
   }

   /**
    * Does a single round of the Game of Life
    */
   runRound() {
      const newConway = new Conway(this.width, this.height);
      newConway.alive = this.alive.map((x) => x.slice());
      for (var r = 0; r < this.height; r++) {
         for (var c = 0; c < this.width; c++) {
            var count = 0;
            if (r > 0 && this.alive[r - 1][c]) count += 1;
            if (r < this.height - 1 && this.alive[r + 1][c]) count += 1;
            if (c > 0 && this.alive[r][c - 1]) count += 1;
            if (c < this.width - 1 && this.alive[r][c + 1]) count += 1;
            if (r > 0 && c > 0 && this.alive[r - 1][c - 1]) count += 1;
            if (r > 0 && c < this.width - 1 && this.alive[r - 1][c + 1])
               count += 1;
            if (r < this.height - 1 && c > 0 && this.alive[r + 1][c - 1])
               count += 1;
            if (
               r < this.height - 1 &&
               c < this.width - 1 &&
               this.alive[r + 1][c + 1]
            )
               count += 1;
            if (count < 2 || count > 3) {
               newConway.alive[r][c] = false;
            } else if (!this.alive[r][c] && count === 3) {
               newConway.alive[r][c] = true; // otherwise it's already true
            }
         }
      }
      return newConway;
   }
}

export default Conway;

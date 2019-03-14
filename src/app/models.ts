
export class CellMove {
  cell: Cell = null;
  moveIdx = -1;
}

export class Cell {
  constructor(x, y, selected, canBeSelected, number) {
    this.selected = selected;
    this.canBeSelected = canBeSelected;
    this.number = number;
    this.x = x;
    this.y = y;
  }

  x = 0;
  y = 0;
  selected = false;
  canBeSelected = false;
  number = '';
}

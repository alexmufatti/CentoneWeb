import {ChangeDetectorRef, Component} from '@angular/core';
import {CellComponent} from './cell.component';
import {forEach} from '@angular/router/src/utils/collection';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Centone Web';
  cells: Array<Cell> = [];
  moves = [
    {dx: 2, dy: 2},
    {dx: 2, dy: -2},
    {dx: -2, dy: 2},
    {dx: -2, dy: -2},
    {dx: 3, dy: 0},
    {dx: 0, dy: 3},
    {dx: -3, dy: 0},
    {dx: 0, dy: -3}
  ];
  side = 5;
  numberOfSelected = 1;
  timeout = 1;
  suggest = false;
  running = false;

  constructor() {
    for (let x = 0; x < this.side; x++) {
      for (let y = 0; y < this.side; y++) {
        this.cells.push( new Cell(x, y, x === 0 && y === 0 ? true : false, false, x === 0 && y === 0 ? '1' : ''));
      }
    }
    this.calculatedPossibleMoves(this.cells[0]);
  }


  onSelect(cell: CellComponent): void {
    if (cell.canBeSelected) {
      cell.selected = true;
      this.numberOfSelected++;
      cell.number = this.numberOfSelected.toString();
      this.calculatedPossibleMoves(cell);
    }

  }

  calculatedPossibleMoves(cell): void {
    for (const c of this.cells) {
      c.canBeSelected = false;
    }
    for (const move of this.moves) {
      console.log('X: ' + (cell.x + move.dx) + ' Y:' + (cell.y + move.dy));
      if (cell.x + move.dx < this.side && cell.y + move.dy < this.side && cell.x + move.dx > -1 && cell.y + move.dy > -1 && this.cells[this.getPosition(cell.x + move.dx, cell.y + move.dy)] && !this.cells[this.getPosition(cell.x + move.dx, cell.y + move.dy)].selected) {
        this.cells[this.getPosition(cell.x + move.dx, cell.y + move.dy)].canBeSelected = true;
      }
    }

  }

  private getPosition(x: number, y: number): number {
    return x * this.side + y;
  }

  resolveAsync(): void {
    this.running = true;
    window.setTimeout(this.nextStep, 10, this.cells[0], 0, new Array<CellMove>(), this);
  }

  stop(): void {
    this.running = false;
  }

  reset(): void {
    this.numberOfSelected = 1;
    this.cells = new Array<Cell>();
    for (let x = 0; x < this.side; x++) {
      for (let y = 0; y < this.side; y++) {
        this.cells.push( new Cell(x, y, x === 0 && y === 0 ? true : false, false, x === 0 && y === 0 ? '1' : ''));
      }
    }
    this.calculatedPossibleMoves(this.cells[0]);
  }

  nextStep(cell, moveIdx, indexList: Array<CellMove>, me) {
    if (!me.running) {
      me.reset();
      return;
    }
    console.log('Cell:' + cell.x + ',' + cell.y + ' Move:' + moveIdx);
    if (moveIdx >= me.moves.length) {
      console.log(indexList.length);
      if (indexList.length === me.side * me.side) {
        console.log('END');
      } else {
        const LastCell = indexList.pop();
        LastCell.cell.selected = false;
        LastCell.cell.number = '';
        indexList[indexList.length - 1].moveIdx = indexList[indexList.length - 1].moveIdx + 1;
        window.setTimeout(me.nextStep, this.timeout, indexList[indexList.length - 1].cell, indexList[indexList.length - 1].moveIdx, indexList, me);
      }
    } else {
      const move = me.moves[moveIdx];
      console.log('X: ' + (cell.x + move.dx) + ' Y:' + (cell.y + move.dy));
      if (cell.x + move.dx < me.side && cell.y + move.dy < me.side && cell.x + move.dx > -1 &&
        cell.y + move.dy > -1 && me.cells[me.getPosition(cell.x + move.dx, cell.y + move.dy)] &&
        !me.cells[me.getPosition(cell.x + move.dx, cell.y + move.dy)].selected) {
        const nextCell = me.cells[me.getPosition(cell.x + move.dx, cell.y + move.dy)];
        nextCell.selected = true;

        indexList.push({ cell: nextCell, moveIdx: 0});
        nextCell.number = indexList.length + 1;
        window.setTimeout(me.nextStep, this.timeout, nextCell, 0, indexList, me);
      } else {
        const lastCell = indexList.pop();
        lastCell.moveIdx = moveIdx + 1;
        indexList.push(lastCell);
        window.setTimeout(me.nextStep, this.timeout, cell, moveIdx + 1, indexList, me);
      }
    }
  }
}

class CellMove {
  cell: Cell = null;
  moveIdx = -1;
}

class Cell {
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

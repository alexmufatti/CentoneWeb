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
  cells = [];
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

  constructor() {
    for (let x = 0; x < this.side; x++) {
      for (let y = 0; y < this.side; y++) {
        this.cells.push({x: x, y: y, selected: x === 0 && y === 0 ? true : false, canBeSelected: false, number: x === 0 && y === 0 ? '1' : ''});
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
    return x * 10 + y;
  }


  resolve(index: number): boolean {
    const cell = this.cells[index];
    for (const move of this.moves) {
      console.log('X: ' + (cell.x + move.dx) + ' Y:' + (cell.y + move.dy));
      if (cell.x + move.dx < this.side && cell.y + move.dy < this.side && cell.x + move.dx > -1 && cell.y + move.dy > -1 && this.cells[this.getPosition(cell.x + move.dx, cell.y + move.dy)] && !this.cells[this.getPosition(cell.x + move.dx, cell.y + move.dy)].selected) {
        this.cells[this.getPosition(cell.x + move.dx, cell.y + move.dy)].selected = true;
        const res = this.resolve(this.getPosition(cell.x + move.dx, cell.y + move.dy));
        if (res) {
          return res;
        } else {
          this.cells[this.getPosition(cell.x + move.dx, cell.y + move.dy)].selected = false;
        }
      }
    }
    return false;
  }

  resolveAsync(): void {
    window.setTimeout(this.nextStep, 10, this.cells[0], 0, new Array<CellMove>(), this);
  }

  nextStep(cell, moveIdx, indexList: Array<CellMove>, me) {
    console.log('Cell:' + cell.x + ',' + cell.y + ' Move:' + moveIdx);
    if (moveIdx >= me.moves.length) {
      console.log(indexList.length);
      if (indexList.length === me.side * me.side) {
        console.log('END');
      } else {
        const LastCell = indexList.pop();
        LastCell.cell.selected = false;
        LastCell.cell.number = '';
        window.setTimeout(me.nextStep, 10, indexList[indexList.length - 1].cell, indexList[indexList.length - 1].moveIdx + 1, indexList, me);
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
        window.setTimeout(me.nextStep, 10, nextCell, 0, indexList, me);
      } else {
        const lastCell = indexList.pop();
        lastCell.moveIdx = moveIdx + 1;
        indexList.push(lastCell);
        window.setTimeout(me.nextStep, 10, cell, moveIdx + 1, indexList, me);
      }
    }
  }
}

class CellMove {
  cell: Cell = null;
  moveIdx = -1;
}

class Cell {
  selected = false;
  canBeSelected = false;
  number = '';
}

import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent {
  @Input() x: number;
  @Input() y: number;
  @Input() selected: boolean;
  @Input() canBeSelected: boolean;
  @Input() side: number;
  @Input() number: string;

  constructor() {
    this.selected = false;
    this.side = 10;
    this.number = '';
  }

  get index(): number {
    return (this.x * this.side + this.y) + 1;
  }

}

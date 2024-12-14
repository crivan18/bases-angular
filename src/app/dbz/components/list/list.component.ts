import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  standalone: false,
})
export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  onDelete(index: number): void {
    this.onDeleteId.emit(index);
  }

  onDeleteCharacter(index: number): void {
    console.log(index);
  }
}

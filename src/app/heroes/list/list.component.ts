import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = [
    'Ironman',
    'Hulk',
    'Thor',
    'Shehulk',
    'Spiderman',
  ];
  public deletedHero?: string;


  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}

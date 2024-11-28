import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 40;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getDescription(): string {
    return `${this.capitalizedName} - ${this.age}`;
  }

  changeName(name: string): void {
    this.name = name;
  }

  changeAge(age: number): void {
    this.age = age;
  }

  resetHero(): void {
    this.name = 'ironman';
    this.age = 40;
  }
}

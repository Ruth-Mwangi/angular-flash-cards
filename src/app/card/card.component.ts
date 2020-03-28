import { Component, OnInit } from '@angular/core';
import { Cards } from '../cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards:Cards[]=[
    new Cards('ng new','command used when  creating angular applications'),
    new Cards('ng serve','command that runs applications on local development server'),
    new Cards('ng generate class','commands that creates classes'),
    new Cards('ng generate directive','commands that creates direcives. A directive is a function that execute whenever the  angular compiler finds it in a DOM'),
    new Cards('ng generate pipe','commands that creates pipes. A pipe takes in data as input and transforms it into desired output'),
    new Cards('ng generate component','commands that creates components'),
    new Cards('*ngFor','repeater directive that loops through element'),
    new Cards('*ngIf','conditional directive'),
  
  ];

  toggleDescription(index){
    this.cards[index].showDescription=!this.cards[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

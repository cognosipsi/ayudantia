import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public invitados: Person[] = [];

  constructor() { 
    this.invitados = [
      { nombre: 'Pato', rut: "17.594.813-1", rol: 1 },
      { nombre: 'Cata', rut: "21.621.213-k", rol: 4 },
      { nombre: 'Vale', rut: "22.831.123-9", rol: 3 },
      { nombre: 'Vale', rut: "22.831.123-9", rol: 3 },
    ];
  }

  ngOnInit(): void {
  }

}

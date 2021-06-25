import { Component, OnInit } from '@angular/core';
import * as Tped from 'typed.js';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const options = {
      stringsElement: '#typed-strings',
      strings: ['Traning banking juros amigo', 'Peça a portabilidade e venha ser Training banking hoje mesmo', 'Inovador digital e seguro'],
      typedSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
    }
  }

}

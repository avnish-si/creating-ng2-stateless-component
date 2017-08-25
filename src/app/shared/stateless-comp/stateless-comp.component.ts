import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stateless-comp',
  templateUrl: './stateless-comp.component.html',
  styleUrls: ['./stateless-comp.component.css']
})
export class StatelessCompComponent implements OnInit {
  @Output() addItem: EventEmitter<any> = new EventEmitter();
  private formModel: FormGroup;
  constructor() {
    let itemName:any = new FormControl();
    this.formModel = new FormGroup({'itemName': itemName});
  }

  ngOnInit(){
  }
}

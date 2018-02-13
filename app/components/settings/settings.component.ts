import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  @Output() text: EventEmitter<any> = new EventEmitter();
  @Output() column: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  rangeChange(type, e) {
    if(type === 'text') {
      this.text.emit(e.target.value);
    }
    else {
      this.column.emit(e.target.value);
    }
  }
}

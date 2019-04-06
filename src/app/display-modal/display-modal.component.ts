import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-modal',
  templateUrl: './display-modal.component.html',
  styleUrls: ['./display-modal.component.scss']
})
export class DisplayModalComponent  {

  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor() { }

}

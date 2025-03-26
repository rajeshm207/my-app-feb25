import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-textarea',
  templateUrl: './app-textarea.component.html',
  styleUrls: ['./app-textarea.component.css']
})
export class AppTextareaComponent {

  @Output() textareaEvent:EventEmitter<any>=new EventEmitter();
  area:any='';
  send(){
    this.textareaEvent.emit(this.area)
  }

}

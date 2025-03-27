import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-textarea',
  templateUrl: './app-textarea.component.html',
  styleUrls: ['./app-textarea.component.css']
})
export class AppTextareaComponent {

  @Output() textareaEvent:EventEmitter<any>=new EventEmitter();
  area:any='';
  textlength:number=0;
  send(){
    this.textareaEvent.emit(this.area);
    this.textlength=this.area.length;
    console.log(this.textlength);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isDisplay = true;
  logs = [];

  constructor() {
    this.log(this.getFormattedDate() + " Application started successfully!");
    this.log(this.getFormattedDate() + " Waiting for commands...");
  }

  ngOnInit() {
  }

  displayDetails() {
    this.isDisplay = !this.isDisplay;
    this.log(this.getFormattedDate() + " Button clicked. Display changed to: "+this.isDisplay);
  }

  getColor(){
    if(this.logs.length > 4){
      return 'blue';
    }
  }


  log(message){
    this.logs.push(message);
  }

  getDatetime() {
    return Date.now();
  }

  getFormattedDate() {
    var date = new Date();
    var str = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    str = "[" + str + "]";
    return str;
  }

}

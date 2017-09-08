import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  username = '';
  usernameIsEmpty = true;
  constructor() { }

  ngOnInit() {
  }

  checkUsername(event){
    if(event.target.value){
      this.usernameIsEmpty = false;
    }
    else{
      this.usernameIsEmpty = true;
    }
  }

  resetUsername(){
    this.username = '';
    this.usernameIsEmpty = true;
  }

}

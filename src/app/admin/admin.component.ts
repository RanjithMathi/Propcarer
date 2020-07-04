import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  userServices = [
    {
      username: "username 1",
      serviceDesc: ["Maintain the whole house for three months","second charge"]
    }
  ]

}

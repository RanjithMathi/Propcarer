import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userReg = [
    {
      email: "admin",
      password: "admin"
    },
    {
      email: "mranjith20161@gmail.com",
      password: "ranji"
    },
    {
      email: "mranjith20162@gmail.com",
      password: "ranji2"
    },
    {
      email: "mranjith20163@gmail.com",
      password: "ranji3"
    }
  ];
  @ViewChild('loginModal')
  private loginModalOpen: TemplateRef<any>;

  closeResult: string;
  public userType: string;
  userModel = new User();

  constructor(private modalService: NgbModal, private router: Router, private ajaxService: AjaxService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }


  search(nameKey,passwordKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].email === nameKey && myArray[i].password === passwordKey) {
        return myArray[i];
      }
    }
  }


  loginUser() {
    console.log("login usermodel : ", this.userModel);
   var result =  this.search(this.userModel.email,this.userModel.password,this.userReg);
    this.modalService.dismissAll();
    console.log("ressu;l ",result);

    if(result != undefined){

      if(result.email === "admin"){
        this.router.navigate(['/admin']);
      }else{
        this.router.navigate(['/paid-customer'])
      }
    }
  }

  open(content, loginUserType) {
    this.userType = loginUserType;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}


export class User {
  public id: number;
  public password: String;
  public email: String;
  public role: String;
}
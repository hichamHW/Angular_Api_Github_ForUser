import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  Data1: any [] = [];
  Data2: any [] = [];
  Search = '';

   constructor(private userservice: UserServiceService) { }

  ngOnInit() {
    this.getusers();
  }

  getusers() {
    this.userservice.GetAllUsers().subscribe(data => {
      this.Data2 = this.Data1 = data;
    });
  }

  search() {


          // tslint:disable-next-line: triple-equals
          if (this.Search == '') {

            this.getusers();
          // tslint:disable-next-line: one-line
          }else{


            // tslint:disable-next-line: max-line-length
            this.Data2 = this.Data1.filter(data => data.login.toLowerCase().includes(this.Search.toLowerCase()) );

          }

  }

}

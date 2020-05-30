import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {


  datauser : any;

  constructor(private route: ActivatedRoute, private Userservice: UserServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.getInfo(data.get('id'));
    }
    );
  }

  getInfo(username: string) {

    this.Userservice.GetUsers(username).subscribe(data=>{

      this.datauser = data;

    });

  }

}

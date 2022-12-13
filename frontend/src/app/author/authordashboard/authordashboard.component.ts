import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-authordashboard',
  templateUrl: './authordashboard.component.html',
  styleUrls: ['./authordashboard.component.scss']
})
export class AuthordashboardComponent implements OnInit {

  constructor(private route: Router,private service:SpreadnewsService,private jwtService : JwtService) { }
  user = {
    user_id: '',
    firstname:'',
    lastname:'',
    email:''

}
  ngOnInit(): void {

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];

    let id=this.user.user_id

  }


  onClick(){
    console.log('we are logging out')
    localStorage.removeItem("token");
    this.route.navigate(['/'])
  }

}

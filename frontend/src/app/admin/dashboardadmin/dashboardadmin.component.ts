import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.scss']
})
export class DashboardadminComponent implements OnInit {
  users:any;
  articles:any;

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

    this.service.countauthor().subscribe((data)=>{
      this.users= data;
      console.log(this.users)
   
      })
      //count pending booking
      this.service.countarticle().subscribe((data)=>{
        this.articles= data;
        console.log(this.articles)
     
        })

  }


  onClick(){
    console.log('we are logging out')
    localStorage.removeItem("token");
    this.route.navigate(['/'])
  }

}

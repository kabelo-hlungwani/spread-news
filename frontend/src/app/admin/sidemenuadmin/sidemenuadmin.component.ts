import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-sidemenuadmin',
  templateUrl: './sidemenuadmin.component.html',
  styleUrls: ['./sidemenuadmin.component.scss']
})
export class SidemenuadminComponent implements OnInit {

  constructor(private route: Router,private service:SpreadnewsService,private jwtService : JwtService) { }

  ngOnInit(): void {
  }


  onClick(){
    console.log('we are logging out')
    localStorage.removeItem("token");
    this.route.navigate(['/'])
  }

}

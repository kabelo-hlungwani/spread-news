import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-readstory',
  templateUrl: './readstory.component.html',
  styleUrls: ['./readstory.component.scss']
})
export class ReadstoryComponent implements OnInit {

  constructor(private route: Router,private spreadnews:SpreadnewsService,private jwtService : JwtService,private router:Router,private toast : NgToastService) { }
 
  info:any;
  inf=[];
  q:any;
  ngOnInit(): void {

    let id=localStorage.getItem('article_id');
    this.spreadnews.viewstory(id).subscribe((data)=>{
     this.info= data;

    
    
  
     })


  }

}

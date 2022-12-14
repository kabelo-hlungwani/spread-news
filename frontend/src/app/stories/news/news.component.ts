import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  constructor(private route: Router,private spreadnews:SpreadnewsService,private jwtService : JwtService,private router:Router,private toast : NgToastService) { }
 
  info:any;
  inf=[];
  q:any;

  ngOnInit(): void {

    this.spreadnews.allArticles().subscribe(res=>{
 
 
      this.info=res;
      this.inf=this.info.data;
     
     
     
 
 
     })





  }

  read(items:any){

    this.router.navigate(['/readstory']);
    localStorage.setItem('article_id',items.article_id);


  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-articlebin',
  templateUrl: './articlebin.component.html',
  styleUrls: ['./articlebin.component.scss']
})
export class ArticlebinComponent implements OnInit {

  constructor(private route: Router,private spreadnews:SpreadnewsService,private jwtService : JwtService,private router:Router,private toast : NgToastService) { }
 
  info:any;
  inf=[];
  q:any;
  user = {
    user_id: '',
    firstname:'',
    lastname:'',
    email:''

}
  ngOnInit(): void {

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];
    let id=this.user.user_id
    this.spreadnews.deladminstories(id).subscribe(res=>{
 
 
      this.info=res;
      this.inf=this.info.data;
      console.log(this.info);
     
     
 
 
     })
  
    }

    restore(items:any)
    {
    
     var id=items.article_id;
  
   
     this.spreadnews.restoreStory(id).subscribe(data => console.log(data))
   
 
 
     this.toast.success({detail:"Success",summary:'Article restored successfully', duration:2000})
     setTimeout(()=> this.router.navigate(['/myarticle']),1600)
  
 
 
 } 

  }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-myarticle',
  templateUrl: './myarticle.component.html',
  styleUrls: ['./myarticle.component.scss']
})
export class MyarticleComponent implements OnInit {

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
    this.spreadnews.adminstories(id).subscribe(res=>{
 
 
      this.info=res;
      this.inf=this.info.data;
      console.log(this.info);
     
     
 
 
     })
  
    }

    edit(items:any)
   {
 

    this.router.navigate(['/editarticle']);
    localStorage.setItem('article_id',items.article_id);
 
 
 
   }
   remove(items:any)
   {
   
    var id=items.article_id;
 
  
    this.spreadnews.archiveBooking(id).subscribe(data => console.log(data))
  


    this.toast.success({detail:"Success",summary:'Article removed successfully', duration:2000})
    setTimeout(()=> this.router.navigate(['/myarticle']),1600)
    setTimeout(()=>  window.location.reload(),1700)

    // this.spreadnews.adminstories(this.info).subscribe(res=>{
 
 
    //   this.info=res;
    //   this.inf=this.info.data;
    //   console.log(this.info);
     
      
 
    //  })

     


} 

  }

 


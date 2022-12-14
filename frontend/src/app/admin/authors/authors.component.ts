import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

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
    this.spreadnews.authors().subscribe(res=>{
 
 
      this.info=res;
      this.inf=this.info.data;
      console.log(this.info);
     
     
 
 
     })
  
    }


activate(item:any)
{

  var id=item.user_id;
 
  
  this.spreadnews.activate(id).subscribe(data => console.log(data))



  this.toast.success({detail:"Success",summary:'user account activated  successfully', duration:2000})
  
  setTimeout(()=>  window.location.reload(),1700)

}

suspend(item:any)
{

  var id=item.user_id;
 
  
  this.spreadnews.suspend(id).subscribe(data => console.log(data))



  this.toast.success({detail:"Success",summary:'user account suspended', duration:2000})
  
  setTimeout(()=>  window.location.reload(),1700)
  
}

}

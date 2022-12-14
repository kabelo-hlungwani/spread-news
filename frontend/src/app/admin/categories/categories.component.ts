import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

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
    this.spreadnews.category().subscribe(res=>{
 
 
      this.info=res;
      this.inf=this.info.data;
      console.log(this.info);
     
     
 
 
     })
  
    }

    edit(items:any)
    {
  
 
     this.router.navigate(['/admineditcat']);
     localStorage.setItem('category_id',items.category_id);
  
  
  
    }

    delete(items:any){

      var id=items.category_id;
      
        this.spreadnews.removecat(id).subscribe(data => console.log(data))
         
        this.toast.success({detail:"Success",summary:'category was successfully deleted.', duration:2000})
        setTimeout(()=> this.router.navigate(['/categories']),1600)

        setTimeout(()=>  window.location.reload(),1700)
       
       
        }

}




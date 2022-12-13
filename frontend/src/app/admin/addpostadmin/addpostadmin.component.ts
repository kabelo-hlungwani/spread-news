import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-addpostadmin',
  templateUrl: './addpostadmin.component.html',
  styleUrls: ['./addpostadmin.component.scss']
})
export class AddpostadminComponent implements OnInit {
 
  form: FormGroup = new FormGroup({
   
    title: new FormControl(''),
    category: new FormControl(''),
    img_url: new FormControl(''),
    content: new FormControl('')
  });



  article={
    user_id:'',
    category:'',
    img_url:'',
    content:''

    }
    submitted = false;

constructor(private jwtService:JwtService,private spreadnews:SpreadnewsService,private http:HttpClient,private router:Router,private formBuilder: FormBuilder, private toast : NgToastService) {}


  ngOnInit(): void {


  }

  onSubmit(data:any){
    this.submitted = true;

    this.article= this.jwtService.getDetails(localStorage.getItem('token')).data[0];
    let id=this.article.user_id

console.log(id)


    var details={
      "user_id":id,
      "title":data.title,
      "category":data.category,
      "img_url":data.img_url,
      "content":data.content

  
    }

 console.log(details)

    this.http.post('http://localhost:3000/addArticle',details,{responseType:'text'})
    .subscribe((results)=>{
  

  this.toast.success({detail:"Success",summary:'Article was successfully added.', duration:2000})
        setTimeout(()=> this.router.navigate(['/myarticle']),1600)

      })
    
    }
}

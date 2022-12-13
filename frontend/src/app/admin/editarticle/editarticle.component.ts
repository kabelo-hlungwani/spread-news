import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.scss']
})
export class EditarticleComponent implements OnInit {
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
  info:any;
    inf=[];
    story:any;
constructor(private jwtService:JwtService,private spreadnews:SpreadnewsService,private http:HttpClient,private router:Router,private formBuilder: FormBuilder, private toast : NgToastService) {}



  ngOnInit(): void {

    this.spreadnews.category().subscribe(res=>{
 
 
      this.info=res;
      this.inf=this.info.data;
      console.log(this.info);
     
     
 
 
     })

     let id=localStorage.getItem('article_id');
  
     this.spreadnews.viewstory(id).subscribe((data)=>{
      this.story= data;
      console.log(this.story)
   
      })
  }

  onSubmit(data:any){


  let id=localStorage.getItem('article_id');

 if(data.content!="" && data.title!="" && data.category!="" && data.img_url!="" ){

  this.http.put('http://localhost:3000/updateStory/'+id,data, {responseType:'text'})
  .subscribe((results)=>{

    this.toast.success({detail:"Success",summary:'Article updated successfully', duration:2000})
    setTimeout(()=> this.router.navigate(['/myarticle']),1600)

    })

 }

  
  }




}

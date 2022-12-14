import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-admineditcat',
  templateUrl: './admineditcat.component.html',
  styleUrls: ['./admineditcat.component.scss']
})
export class AdmineditcatComponent implements OnInit {
  form: FormGroup = new FormGroup({
   
    title: new FormControl('')
    
  });



  
  info:any;
    inf=[];
    story:any;
constructor(private jwtService:JwtService,private spreadnews:SpreadnewsService,private http:HttpClient,private router:Router,private formBuilder: FormBuilder, private toast : NgToastService) {}



  ngOnInit(): void {


     let id=localStorage.getItem('category_id');
  
     this.spreadnews.categoryId(id).subscribe((data)=>{
      this.story= data;
      console.log(this.story)
   
      })
  }

  onSubmit(data:any){
console.log(data)

  let id=localStorage.getItem('category_id');

 if(data.title!="" ){

  this.http.put('http://localhost:3000/updateCat/'+id,data, {responseType:'text'})
  .subscribe((results)=>{

    this.toast.success({detail:"Success",summary:'Category updated successfully', duration:2000})
    setTimeout(()=> this.router.navigate(['/categories']),1600)

    })

 }

  
  }




}
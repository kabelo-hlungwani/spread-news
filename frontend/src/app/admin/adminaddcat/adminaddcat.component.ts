import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { SpreadnewsService } from 'src/app/service/spreadnews.service';

@Component({
  selector: 'app-adminaddcat',
  templateUrl: './adminaddcat.component.html',
  styleUrls: ['./adminaddcat.component.scss']
})
export class AdminaddcatComponent implements OnInit {
  form: FormGroup = new FormGroup({
   
    title: new FormControl('')
   
  });

    submitted = false;
    info:any;
    inf=[];
constructor(private jwtService:JwtService,private spreadnews:SpreadnewsService,private http:HttpClient,private router:Router,private formBuilder: FormBuilder, private toast : NgToastService) {}


  ngOnInit(): void {


   

  }

  onSubmit(data:any){
    this.submitted = true;



    var details={
 
      "title":data.title
    

  
    }

 console.log(details)

    this.http.post('http://localhost:3000/addCategory',details,{responseType:'text'})
    .subscribe((results)=>{
  

  this.toast.success({detail:"Success",summary:'category was successfully added.', duration:2000})
        setTimeout(()=> this.router.navigate(['/categories']),1600)

      })
    
    }
}

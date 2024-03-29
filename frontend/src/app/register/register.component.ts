import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from './validation';
import { NgToastService } from 'ng-angular-popup';
import { SpreadnewsService } from '../service/spreadnews.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  

})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted = false;
 
  public isVisible: boolean = false;
  constructor(private formBuilder: FormBuilder,private router:Router,private toast : NgToastService,private http:HttpClient,private spreadnews:SpreadnewsService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstname: ['', [Validators.required,
                    Validators.minLength(3),Validators.pattern("^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$")]
                  ],
        
        lastname: [
          '',
          [
            Validators.required,
           Validators.minLength(3)
           ,Validators.pattern("^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$")
           // Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  //submit

  onSubmit(data:any){

    this.submitted = true;

    //Add the User to the Database
    this.http.post('http://localhost:3000/register',data, {responseType:'text'}).subscribe((results)=>{

      if(results == 'Account created succesfully!')
      {
        this.openSucess();
        this.router.navigate(['/login'])
      }
      else
      {
        this.openWarning()
        this.router.navigate(['/register'])
      }
    
      if (this.isVisible) { 
     
        return;
      } 
   


      }
      ,(err)=>{
        this.openWarning();
      }
      )
      
    }
  
  
    openSucess(){
      this.toast.success({detail:"Warning", summary:"Succesfully Registered"})
    }

    openWarning(){
      this.toast.warning({detail:"Warning",summary:'Email already exist', duration:2000})
    }


}

import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { first } from 'rxjs/operators'; 
import { AlertService } from '../services/alert.service'; 
import { AuthenticationService } from '../services/authentication.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup; 
  loading = false; 
  submitted = false; 

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private authenticationService: AuthenticationService, 
    private alertService: AlertService
  ) { 
    if (this.authenticationService.currentUserValue) {
<<<<<<< HEAD
      this.router.navigate(['/signup']); 
=======
      this.router.navigate(['/splashPage']); 
>>>>>>> master
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true; 
    this.alertService.clear(); 
    if (this.registerForm.invalid) {
      return; 
    }

    this.loading = true; 
    console.log(this.registerForm.value)
    this.authenticationService.signup(this.registerForm.value)
    .pipe(first())
    .subscribe(
      data => {
        this.alertService.success('Registration successful', true); 
        console.log('Client registered!');
<<<<<<< HEAD
        this.router.navigate(['/splashPage']); 
=======
        this.router.navigate(['/spashPage']); 

>>>>>>> master
      }, 
      (error) => {
        this.alertService.error(error); 
        this.loading = false; 
      }); 
      
  }



}

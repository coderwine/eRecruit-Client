import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators'; 
import { AlertService } from '../services/alert.service'; 
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; 
  loading = false; 
  submitted = false; 
  returnUrl: string; 
  error = '';

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router, 
    private authenticationService: AuthenticationService, 
    private alertService: AlertService
  ) { 
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required]
    }); 

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; 
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true; 
    if (this.loginForm.invalid) {
      return; 
    }

    this.loading = true; 
    this.authenticationService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]); 
      },
      error => {
        this.alertService.error(error); 
        this.loading = false; 
      });
  }

}

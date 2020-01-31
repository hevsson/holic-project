import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Credential } from 'src/app/model/credential';
import { LoginService } from './service/login.service';
import { VideoService } from '../dashboard/service/video.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  credential: Credential = new Credential();
  API_URL = '/api/account';
  returnUrl: string;

  public form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private loginService: LoginService,
    public snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private videoservice: VideoService) {
    this.router = router;
    this.form = fb.group({
      login: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.activatedRoute.snapshot.queryParams['returnUrl'] || '';
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
      this.credential.username = this.form.value.login;
      this.credential.password = this.form.value.password;
      if (this.form.value.rememberMe === true) {
        this.credential.rememberMe = 'true';
      } else {
        this.credential.rememberMe = 'false';
      }

      this.loginService.login(this.credential).subscribe(
        p => {
          this.snackBar.open('Login successful', 'close', {
            verticalPosition: 'top',
            duration: 2000
          });
          this.router.navigate([this.returnUrl]);
        },
        err => {
          this.snackBar.open('Identifiants incorrects', 'close', {
            verticalPosition: 'top',
            duration: 2000
          });
        }
      );
    }
  }

  ngAfterViewInit() {
    document.getElementById('preloader').classList.add('hide');
  }
}

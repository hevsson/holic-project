import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { RegisterView } from 'src/app/model/principal';
import { UserProfileService } from '../login/service/userprofile.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
    public router: Router;
    public form:FormGroup;
    public name:AbstractControl;
    public email:AbstractControl;
    public password:AbstractControl;
    public confirmPassword:AbstractControl;
    
    constructor(router:Router, fb:FormBuilder, private userProfileService: UserProfileService, public snackBar: MatSnackBar,) {
        this.router = router;
        this.form = fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            email: ['', Validators.compose([Validators.required, emailValidator])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        },{validator: matchingPasswords('password', 'confirmPassword')});

        this.name = this.form.controls['name'];
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.confirmPassword = this.form.controls['confirmPassword'];
    }

     public onSubmit(values:Object):void {
        if (this.form.valid) {
            let register: RegisterView = new RegisterView();
            register.login = this.form.value.name;
            register.password = this.form.value.password;
            register.email = this.form.value.email;
            this.userProfileService.register(register).subscribe(p => {
                this.snackBar.open('Account created successfully', 'close', {
                    verticalPosition: 'top',
                    duration: 2000
                  });
                this.router.navigate(['/login']);
            });

        }
    }

    ngAfterViewInit(){
        document.getElementById('preloader').classList.add('hide');
    }
}

export function emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
        let password= group.controls[passwordKey];
        let passwordConfirmation= group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({mismatchedPasswords: true})
        }
    }
}

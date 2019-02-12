import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmPassword = AC.get('rePassword').value; // to get value in input tag
       console.log('phuong',password,confirmPassword);
        if(password != confirmPassword) {
            console.log('false');
            AC.get('rePassword').setErrors( {passwordError: true} )
        } else {
            console.log('true');
            return null
        }
    }
}
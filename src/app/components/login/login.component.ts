import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // isAuthenticated: boolean = false;
  constructor(private router: Router, private authService: AuthService){

  }
  onSubmit(loginForm: any){
    console.log('form submitted successfully!', loginForm.value);
    const retriveData = localStorage.getItem('registerForm');
    if(retriveData !== null){
      console.log('retrived data is:',  retriveData);
      const users = JSON.parse(retriveData);
      // debugger;
      const isUserFound = users.find((m: any)=> m.name  == loginForm.value.name && m.password == loginForm.value.password)
      if(isUserFound){
        alert('Succesfull Login!');
        this.router.navigate(['/dashboard'])
        this.authService.authState.next(true);
      }
      else{
        alert('Incorrect username or password')
        loginForm.reset()
      }
    }
    this.authService.authState.next(false);

    // loginForm.reset()
  }
}

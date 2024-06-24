import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {



  userNamesStorage: any[] = [];

  constructor(private authService: AuthService){

  }


  ngOnInit(){
    this.getRegisterFormValues()
  }
  onSubmit(registerForm: any){
   if(registerForm && registerForm.value){
    console.log('form submitted successfully!', registerForm.value);

    const registerObj = {
      name: registerForm.value.name,
      email: registerForm.value.email,
      password: registerForm.value.password
    }
    this.userNamesStorage.push(registerObj);
    debugger;
    localStorage.setItem('registerForm', JSON.stringify(this.userNamesStorage));
    registerForm.reset();
   }
   else{
    console.error('Form submission failed: Invalid form data', registerForm);
   }
   this.authService.authState.next(false);

  }
  getRegisterFormValues(){
  const storedItem = localStorage.getItem('registerForm');
  if(storedItem){
    let parsedItems = JSON.parse(storedItem)
    console.log('items are stored is:', parsedItems)
  }
  }
}

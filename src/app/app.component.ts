import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticketing-tool';
  authStatus: any;
  constructor(private router: Router, private authService: AuthService,private cdr: ChangeDetectorRef){}

ngOnInit(){
  this.authService.authState.subscribe((status) =>{
    console.log('auth staus is:', status)
    this.authStatus =  status;
    this.cdr.detectChanges();
  })
}

  navigateTo(path: string){
    this.router.navigateByUrl(path)
  }
  logout(){
    this.router.navigate(['/login'])
    this.authService.logout()
  }
}

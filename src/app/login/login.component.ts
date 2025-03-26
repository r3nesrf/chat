import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { User } from 'firebase/auth'; 
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login().subscribe({
      next: (result) => {
        console.log('Usuario autenticado', result.user);
        console.log('Token de acceso', result.token);
      },
      error: (error) => {
        console.error('Error de autenticación', error);
        
      }
    });
  }


}



 


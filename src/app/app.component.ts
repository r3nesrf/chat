import { Component } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {}
}



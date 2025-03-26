import { Injectable } from '@angular/core'; 
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { Observable, from } from 'rxjs';
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'; 
import { map } from 'rxjs';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { authState } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(): Observable<any> {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

   
    
    return from(signInWithPopup(auth, provider)).pipe(
      map((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        const user = result.user;
        return { user, token };
      })
    );
  }
}

const app = initializeApp(environment);
const auth = getAuth(app);


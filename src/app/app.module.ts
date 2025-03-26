import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, LoginComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({ projectId: "chat2-4e8b3", appId: "1:469299294078:web:685c81667fdb2dcf6dcd2f", storageBucket: "chat2-4e8b3.firebasestorage.app", apiKey: "AIzaSyAeq10qy9qdkK8ThcdVGlxMCKIU22vEhqg", authDomain: "chat2-4e8b3.firebaseapp.com", messagingSenderId: "469299294078", measurementId: "G-6SLZHYDTFK" })), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideAppCheck(() => {
  const provider = new ReCaptchaEnterpriseProvider('AIzaSyAeq10qy9qdkK8ThcdVGlxMCKIU22vEhqg');
  return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
}), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), providePerformance(() => getPerformance()), provideStorage(() => getStorage()), provideRemoteConfig(() => getRemoteConfig()), provideVertexAI(() => getVertexAI())],
  bootstrap: [AppComponent],
})


export class AppModule {}

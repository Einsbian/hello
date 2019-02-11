import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Capacitor } from '@capacitor/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
    const isAvailable = Capacitor.isPluginAvailable('Camera');

    if (!isAvailable) {
      // Have the user upload a file instead
    } else {
      // Otherwise, make the call:
      // Camera.getPhoto()
    }
    // if ('serviceWorker' in navigator) {
    //   console.log(11111111111)
    //   // Use the window load event to keep the page load performant
    //   window.addEventListener('load', () => {
    //     console.log('22222222222222222')
    //     navigator.serviceWorker.register('./sw.js');
    //   });
    // }
  }
}

import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { Plugins, AppState } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(
    private http: Http
  ){}
  login(){
    
    // console.log(App.canOpenUrl({ url: 'com.getcapacitor.myapp' }))
    this.test()
  }

  ngOnInit(){
    // this.test()
    console.log(App)
  }  

  async test(){
    var ret = await App.canOpenUrl({ url: 'com.getcapacitor.myapp' })
    console.log(ret.value)
  }

  async hello(){
    console.log(App)
    let ret = await App.openUrl({ url: 'com.getcapacitor.myapp://page?id=ionicframework' });
    console.log('Open url response: ', ret);
  }
}

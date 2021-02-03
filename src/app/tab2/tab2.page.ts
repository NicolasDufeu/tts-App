import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    
    
    locale = "fr-FR";
    rate = 1;

  constructor(private storage: Storage) {}

    
    saveLocale(event){
        //console.log(event.target.value);
        this.storage.set('locale', this.locale);
    }
    
    saveRate(event){
        //console.log('event : ', event.target.value);
        //console.log('rate : ',this.rate);
        this.storage.set('rate', event.target.value);
    }
    
    ionViewWillEnter(){
        this.storage.get('locale').then((val) => {
            console.log('Recup du réglage locale:', val);
            this.locale = val ?? val;
        });
        
        this.storage.get('rate').then((val) => {
            console.log('Recup du réglage locale:', val);
            this.rate = val ?? val;
        });
    }
}

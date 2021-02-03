import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    locale = "fr-FR";
    rate = 1;

  constructor(private tts: TextToSpeech,
              private clipboard: Clipboard,
              private storage: Storage) {}
    
    text2Speech: string;

    speak(){
        
        this.tts.speak({
            text: this.text2Speech,
            locale : this.locale,
            rate: this.rate
        })
        .then(() => console.log('Sucess'))
        .catch((reason: any) => console.log('TTS ERROR',reason));  
    }
    
    stop(){
        this.tts.speak('')
        .then(() => console.log('Sucess'))
        .catch((reason: any) => console.log('TTS ERROR',reason));
    }
    
    paste(){
        this.clipboard.paste().then(
   (text: string) => {
      this.text2Speech = this.text2Speech ? this.text2Speech + '\n' + text : text;
    },
    (reject: string) => {
      console.log('Clipboard Error: ' + reject);
    }
  );
}
    
    clear(){
        this.text2Speech = "";
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

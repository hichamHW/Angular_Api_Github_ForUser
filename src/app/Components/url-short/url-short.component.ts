import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-url-short',
  templateUrl: './url-short.component.html',
  styleUrls: ['./url-short.component.css']
})
export class UrlShortComponent implements OnInit {


  originUrl = '';
  shortUrl = '';
  ShorObject: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {


    /// for Redirect to  origin

     this.route.paramMap.subscribe(data => {
       if(data.get('Key')!=null) {

        alert(data.get('Key'));
       }

     }
     );
  }


addOb() {

  // tslint:disable-next-line: triple-equals
  if(this.originUrl != ''  )  {
    let res = 'localhost:4200/url/';
    const words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const wordslenght = words.length;
    for ( let i = 0; i < 4; i++ ) {
       res += words.charAt(Math.floor(Math.random() * wordslenght));
    }

    this.shortUrl = res;
  }
}

copyMessage(val: string) {
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = val;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);
}


/// save in data base/////
CreateObjectshor(){

      if(this.originUrl != '' && this.shortUrl != '') {

        this.ShorObject.push({originUrl: this.originUrl, shorurl: this.shortUrl});
      }

}

////find by shorurl and redirect to orogin
FindbyShorUrl(urlShor: string) {



}


}

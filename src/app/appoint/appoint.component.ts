import { Component, OnInit } from '@angular/core';
declare var liff:any
@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.component.html',
  styleUrls: ['./appoint.component.scss']
})
export class AppointComponent implements OnInit {

  constructor() { }
  src:string="xx";
  userId:string="yy";
  displayName:string="zz";
  statusMessage:string="rr";
  email:string="qq";
  runApp() {
    liff.getProfile().then((profile: { pictureUrl: string; userId: string; displayName: string; statusMessage: string; }) => {
      this.src = profile.pictureUrl;
      this.userId = '<b>UserId:</b> ' + profile.userId;
      this.displayName = '<b>DisplayName:</b> ' + profile.displayName;
     this.statusMessage='</b> ' + profile.statusMessage;
     this.email= '<b>Email:</b> ' + liff.getDecodedIDToken().email;
    }).catch((err: any) => console.error(err));
  }
  ngOnInit(): void {
    const   myLiffId ='1656123815-odWXQDQL'; 
    liff.init({ liffId: myLiffId }, () => {
      if (liff.isLoggedIn()) {
        this.runApp()
      } else {
        liff.login();
      }
    }, (err: { code: any; }) => console.error(err.code));
        // this.setSvg();
       }
  }



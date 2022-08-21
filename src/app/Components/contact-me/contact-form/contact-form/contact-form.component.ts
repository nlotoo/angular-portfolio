import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  public sendEmail(e: Event) {
    
    e.preventDefault();
    emailjs.sendForm('service_hnrbu7e', 'template_67bv6wt', e.target as HTMLFormElement, 'iOJVDuyDZk3gqt1zo')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }
  

  ngOnInit(): void {
  }

}

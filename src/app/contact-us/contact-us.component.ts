import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  emailData = {
    name: '',
    email: '',
    content: ''
  };
//TODO: conectar el formulario con el html
  ngOnInit(): void {

  }

}

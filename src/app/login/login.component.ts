import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public profileForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.profileForm = new FormGroup({
      lastName: new FormControl(''),
      firstName: new FormControl('',[Validators.required]),
      middleName: new FormControl(''),
      object: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.pattern('^[0-9]')]) ,
      city: new FormControl('Аренда / Продажа'),
      admin:  new FormControl('Менеджер'),
      comments: new FormControl(''),
    });
  }

  public getValue(val) {
    console.log(val.controls);
    val.reset();
    this.router.navigateByUrl('/edit');
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public profileForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.profileForm = new FormGroup({
      lastName: new FormControl('Фамильев'),
      firstName: new FormControl('Дмитрий',[Validators.required]),
      middleName: new FormControl(''),
      object: new FormControl('3452'),
      phoneNumber: new FormControl('(435) 342-12-34') ,
      city: new FormControl('Аренда'),
      admin:  new FormControl('Кочура'),
      comments: new FormControl(''),
    });
  }

  public getValue(val) {
    console.log(val.controls);
    val.reset();
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      alternateEmails: this.fb.array([])
    })
  }

  get alternateEmails() {
    return this.myForm.get('alternateEmails') as FormArray;
  }

  addEmail(): void {
    this.alternateEmails.push(this.fb.control(''))
  }

  public deleteAltEmail(index: number): void {
    this.alternateEmails.removeAt(index);
  }
}

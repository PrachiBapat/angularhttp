import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  fn1:string = '';
  mn:string = '';
  ln:string = '';
  age:string = '';
  staddr:string = '';
  city:string = '';
  country:string = '';
  postalcode:string = '';


  constructor() { }

  displayForm(){
    let newUser = {
      firstName: this.fn1,
      middleName: this.mn,
      lastName: this.ln,
      age: this.age,
      staddr: this.staddr,
      city: this.city,
      country: this.country,
      postalcode: this.postalcode
    }
    console.log(newUser);
  }

  // displayForm(fn:string, mn:string, ln:string, age:string, staddr:string, city:string, country:string, postalcode:string){
  //   let newUser = {
  //     firstName: fn,
  //     middleName: mn,
  //     lastName: ln,
  //     age: age,
  //     staddr: staddr,
  //     city: city,
  //     country: country,
  //     postalcode: postalcode
  //   }

  //   console.log(newUser);
  // }

  ngOnInit(): void {
  }

}

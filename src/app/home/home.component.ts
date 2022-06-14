import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.interface'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  student = "Mary";
  users:User[] = [];
  compensation = 1000;
  dateJoined:Date = new Date('01/01/1970');

  url = "https://jsonplaceholder.typicode.com/users";
  constructor(private myhttp:HttpClient) { }

  ngOnInit(): void {
    console.log("ngOnInit method was executed");
    console.log("DATA:", this.myhttp.get(this.url));
    this.myhttp.get<User[]>(this.url).subscribe( response =>{
        console.log('RESPONSE FROM ', this.url, ' is ', response);
        this.users = response;
    });
  }

}

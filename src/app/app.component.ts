import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {Gadget}from './models/gadget'

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id,
      name,
      username,
      password,
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  allUser:Gadget[]=[];

  constructor(private apollo:Apollo){}

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query:GET_ALL_USERS
    }).valueChanges.subscribe(({data,loading})=>{
      this.allUser=data.getAllUsers
    })
  }
  title = 'Con_ShesterApi';




}

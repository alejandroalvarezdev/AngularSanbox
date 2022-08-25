import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dato:any ='Alejandro';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  sendID(id:any){
    this.router.navigate(['next']);
  }

}

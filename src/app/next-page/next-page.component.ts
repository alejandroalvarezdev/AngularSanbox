import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router} from "@angular/router"
@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent implements OnInit {
  @Input() dato='';
  
  idUrl:any;
  constructor(private _activedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    
    

  }

}

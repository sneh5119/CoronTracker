import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data;
  constructor(private urlapi : ApiService,private router : Router) { }

  ngOnInit(): void {
    this.getApi();
  }

  stateNavigate(val){
    // post on url
    this.router.navigate(['/state'],{queryParams: {'state': val}});
  }

  getApi() {
  
    this.urlapi.getApi().subscribe(response=>{
      this.data=response;
    })

  }

}

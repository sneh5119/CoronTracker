import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  params;
  data;
  state;
  stateObj;
  post=['a','b','c'];
  constructor(private urlapi : ApiService, private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(geturlparam=>{
      this.params=geturlparam;
      this.state=this.params.state;
    });
    
    console.log("Params value",this.params.state);
   
    this.getApi();
  }

  districtNavigate(val){
    this.router.navigate(['/district'],{queryParams: {'state':this.state,'district': val}});
  }




  getApi() {
  
    this.urlapi.getApi().subscribe(response=>{
      this.data=response;
      for(let i in this.data){
        if(this.state===i){
          this.stateObj=this.data[i].districtData
          console.log('state obj',this.stateObj);
        }
      }
      
    })
  }



}

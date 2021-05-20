import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
   
  params;
  district;
  data;
  districtObj;
  state;
  districtname;
  active;
  confirmed;
  deceased;

  constructor(private urlapi : ApiService, private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(geturlparam=>{
      this.params=geturlparam;
      this.state=this.params.state;
      this.district=this.params.district;
    });
    
    console.log("Params value",this.params.district);
   
    this.getApi();
  }

  getApi() {
    this.urlapi.getApi().subscribe(response=>{
      this.data=response;
      for(let i in this.data){
        if(this.state===i){
          this.districtObj=this.data[i].districtData
          console.log('district obj',this.districtObj);
        }
      }

      for(let j in this.districtObj){
          // console.log('jjjj',j)
          if(this.district===j){
            console.log('district namammaamam',j);
            this.districtname=j;
            this.active=this.districtObj[j].active;
            this.confirmed = this.districtObj[j].confirmed;
            this.deceased = this.districtObj[j].deceased;
          }
      }
    })
  } 
}

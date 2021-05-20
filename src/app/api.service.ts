import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {  }

 getApi(): Observable<any>{
  return this.http.get<any>('https://api.covid19india.org/state_district_wise.json');
 }

}

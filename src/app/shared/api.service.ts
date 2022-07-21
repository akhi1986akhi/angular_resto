import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  // now here i will define the post, get , put , delete api

  postResto(data:any){
    return this._http.post("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getResto(){
    return this._http.get("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }
  updateResto(data:any,id:number){
    return this._http.put("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteResto(id:number){
    return this._http.delete("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  signup(data:any){
    return this._http.post("http://localhost:3000/signup",data).pipe(map((res:any)=>{
      return res;
    }))
  }

}

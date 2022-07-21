import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.model';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit {
  // formValue = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   contact: new FormControl(''),
  //   address: new FormControl(''),
  //   services: new FormControl('')
  // })
  restaurantModelObject:RestaurantData = new RestaurantData;
  formValue!: FormGroup;
  allRestaurantData:any;
  constructor(private formBuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      contact: [''],
      address: [''],
      services: ['']
    })
    console.log(this.formValue);
    this.getAllData();

  }

  
  addResto(){
    this.restaurantModelObject.name = this.formValue.value.name;
    this.restaurantModelObject.email = this.formValue.value.email;
    this.restaurantModelObject.contact = this.formValue.value.contact;
    this.restaurantModelObject.address = this.formValue.value.address;
    this.restaurantModelObject.services = this.formValue.value.services;
    console.log("outside subcribe",this.formValue);

    this.api.postResto(this.restaurantModelObject).subscribe(res=>{
      console.log("subcribe result",res);
      alert("Restaurant Records added successfully...!")
      this.formValue.reset();
      this.getAllData();
    },
    err =>{
      alert("Error!")
    }
    )
  }

  getAllData(){
    this.api.getResto().subscribe(res=>{
      this.allRestaurantData = res;
    })
  }

  deleteResto(da:any){
    this.api.deleteResto(da.id).subscribe(res=>{
      alert("Restaurant Records Deleted");
      this.getAllData();
    })
  }

  onEdit(data:any){
    this.restaurantModelObject.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['contact'].setValue(data.contact);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);

  }

  updateResto(){
    this.restaurantModelObject.name = this.formValue.value.name;
    this.restaurantModelObject.email = this.formValue.value.email;
    this.restaurantModelObject.contact = this.formValue.value.contact;
    this.restaurantModelObject.address = this.formValue.value.address;
    this.restaurantModelObject.services = this.formValue.value.services;

    this.api.updateResto(this.restaurantModelObject,this.restaurantModelObject.id).subscribe(res=>{
      alert("Restaurant Records Updated");
      this.formValue.reset();
      this.getAllData();
    })
  }

  resetForm(){
    this.formValue.reset();
  }

}

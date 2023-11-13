import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  housingLocation: HousingLocation | undefined;

person={
  firstName:'',
  lastName:'',
  age:null,
  email:''
}

  
  applyForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    age:new FormControl(null),
    email: new FormControl(''),
  });

  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    let housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  ngOnInit(): void {
    let staticTitle = this.titleService.getTitle();
    this.titleService.setTitle(
      `${staticTitle} - ${this.housingLocation?.name}`
    );
  }
}

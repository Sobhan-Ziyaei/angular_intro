import { Component } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private housingService: HousingService) {
    this.getList();
  }

  housingLocationList: HousingLocation[] = [];

  getList(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}

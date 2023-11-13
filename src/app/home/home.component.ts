import { Component } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  filteredLocationList: HousingLocation[] = [];
  housingLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {
    this.getList();
    this.filteredLocationList = this.housingLocationList;
  }

  getList() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  changeFirstFiltered(){
    //this.filteredLocationList[0].name+=" Test ";
    this.housingLocationList[1].name+=" Test ";
  }

}

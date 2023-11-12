import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  housingLocation: HousingLocation | undefined;

  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    let housingLocationId = Number(this.route.snapshot.params['h']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
   
  }
  ngOnInit(): void {
    let staticTitle = this.titleService.getTitle();
    this.titleService.setTitle(
      `${staticTitle} - ${this.housingLocation?.name}`
    );
  }



}

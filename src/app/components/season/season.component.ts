import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/models/season.interface';
import { RacesService } from 'src/app/services/races.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  seasons!: Season[];

  constructor(private racesService: RacesService) { }

  ngOnInit(): void {
    this.racesService.getAllSeasons().subscribe((data) => {
      this.seasons =  data.MRData.SeasonTable.Seasons;
    });
  }

}

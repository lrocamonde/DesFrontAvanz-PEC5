import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { Race } from 'src/app/models/races.interface';
import { Season } from 'src/app/models/season.interface';
import { RacesService } from 'src/app/services/races.service';


@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  season!: Season;
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  constructor(private racesService: RacesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id') || '';
    console.log(identifier);
    
    this.racesService.getSeason(identifier).subscribe((data) => {
      if(!data){
        return this.router.navigateByUrl('/');
      }
      
      this.season = data.MRData.RaceTable;
      console.log('Season ->', this.season);
      
      return;
    });
  }

  showDetails(id: string) {
    this.season.Races[+id-1].details = true;
  }

  hideDetails(id: string) {
    this.season.Races[+id-1].details = false;
  }
}

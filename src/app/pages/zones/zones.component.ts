import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZoneService } from '../../zone.service';

@Component({
  selector: 'app-zones',
  standalone: true,
  imports: [],
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss']
})
export class ZonesComponent implements OnInit {
  zones = [
    { id: 1, name: 'โซน A', availableBooths: 5 },
    { id: 2, name: 'โซน B', availableBooths: 3 },
    { id: 3, name: 'โซน C', availableBooths: 8 }];

  constructor(private zoneService: ZoneService, private router: Router) {}

  ngOnInit(): void {
    this.zones = this.zoneService.getZones();
  }

  goToBooths(zone: string) {
    this.router.navigate(['/booths'], { queryParams: { zone } });
  }
}

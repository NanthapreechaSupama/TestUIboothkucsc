import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  private zones = [
    { id: 1, name: 'โซน A', availableBooths: 5 },
    { id: 2, name: 'โซน B', availableBooths: 3 },
    { id: 3, name: 'โซน C', availableBooths: 8 }
  ];

  getZones() {
    return this.zones;
  }
}

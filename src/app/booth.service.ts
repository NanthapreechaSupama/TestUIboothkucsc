import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoothService {
  private booths: { [key: string]: { id: number; number: number; isSold: boolean; }[] } = {
    1: [
      { id: 1, number: 1, isSold: false },
      { id: 2, number: 2, isSold: true },
      { id: 3, number: 3, isSold: false }
    ],
    2: [
      { id: 4, number: 1, isSold: false },
      { id: 5, number: 2, isSold: true },
      { id: 6, number: 3, isSold: false }
    ],
    3: [
      { id: 7, number: 1, isSold: true },
      { id: 8, number: 2, isSold: false },
      { id: 9, number: 3, isSold: false }
    ]
  };
  
  getBooths(zoneId: number) {
    return this.booths[zoneId.toString()]; // แปลง zoneId เป็น string ก่อนเข้าถึง
  }  
}

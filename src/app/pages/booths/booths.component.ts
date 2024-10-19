import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Booth {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-booths',
  templateUrl: './booths.component.html',
  styleUrls: ['./booths.component.scss']
})
export class BoothsComponent implements OnInit {
  selectedZone: string | null = null;
  booths: Booth[] = []; // Array to hold booth data
  selectedBooth: Booth | null = null; // To hold selected booth data

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the selected zone from the query parameters
    this.route.queryParams.subscribe(params => {
      this.selectedZone = params['zone'];
      this.loadBooths(); // Load booths when a zone is selected
    });
  }

  loadBooths() {
    // Mock data for booths (replace with actual data as needed)
    this.booths = [
      { id: 1, name: 'บูธ A', description: 'รายละเอียดของบูธ A', imageUrl: 'assets/food.png' },
      { id: 2, name: 'บูธ B', description: 'รายละเอียดของบูธ B', imageUrl: 'assets/food.png' },
      { id: 3, name: 'บูธ C', description: 'รายละเอียดของบูธ C', imageUrl: 'assets/food.png' },
      { id: 4, name: 'บูธ D', description: 'รายละเอียดของบูธ D', imageUrl: 'assets/food.png' },
    ];
  }

  onSelectBooth(booth: Booth) {
    this.selectedBooth = booth; // Set the selected booth
    // You can navigate to a different page or perform any action you want here
    console.log(`Selected Booth: ${booth.name}`); // For example, log the selected booth name
  }
}

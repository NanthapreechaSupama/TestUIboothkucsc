import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  boothId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.boothId = +this.route.snapshot.paramMap.get('boothId')!;
  }
}

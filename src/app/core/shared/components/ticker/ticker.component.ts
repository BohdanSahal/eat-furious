import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent {
  @HostBinding('class.ticker-container') containerClass = true;

  ngAfterViewInit() {
  }
}
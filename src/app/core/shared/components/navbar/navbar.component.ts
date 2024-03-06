import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  lastScrollTop = 0;
  delta = 5;
  navbarHeight = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const headerElement = document.querySelector('header');
    if (headerElement) {
      this.navbarHeight = headerElement.offsetHeight;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.hasScrolled();
  }

  hasScrolled() {

    console.log("Has scrolled");
    const st = window.pageYOffset;

    if (Math.abs(this.lastScrollTop - st) <= this.delta) {
      return;
    }

    const headerElement = document.querySelector('header');
    if (!headerElement) {
      return;
    }

    const rendererHeader = this.renderer.addClass.bind(this.renderer, headerElement);
    const rendererRemoveHeader = this.renderer.removeClass.bind(this.renderer, headerElement);

    if (st > this.lastScrollTop && st > this.navbarHeight) {
      rendererRemoveHeader('nav-down');
      rendererHeader('nav-up');
    } else {
      if (st + window.innerHeight < document.body.scrollHeight) {
        rendererRemoveHeader('nav-up');
        rendererHeader('nav-down');
      }
    }

    this.lastScrollTop = st;
  }

}

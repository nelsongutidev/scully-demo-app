import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styles: [],
})
export class NavComponent {
  links = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'Projects', path: '/projects' },
  ];
  menuClosed = true;
  constructor() {}

  ngOnInit(): void {}
  toggleMobileMenu() {
    this.menuClosed = !this.menuClosed;
  }
}

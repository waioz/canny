import { Component, HostListener, Inject } from '@angular/core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faTwitter = faTwitter
  faInstagram = faInstagram
  faFacebook = faFacebook
  selectedLanguage = "EN";
  languages = ['EN', 'GR']
  title = 'user-app';
  is_menu:Boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  showMenu() {
    this.is_menu = !this.is_menu
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      document.getElementById('header').classList.add('bg-white');
    }
    else {
      document.getElementById('header').classList.remove('bg-white');
    }
  }
}

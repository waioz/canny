import { Component } from '@angular/core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
  showMenu() {
    this.is_menu = !this.is_menu
  }
}

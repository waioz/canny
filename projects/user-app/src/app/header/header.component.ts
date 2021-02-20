import { Component, OnInit } from '@angular/core';
import { faSearch, faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: Boolean = true;
  faSearch = faSearch
  faGlobe = faGlobe
  faBars = faBars
  selectedLanguage="EN";
  languages=['EN', 'GR']
  constructor() { }

  ngOnInit(): void {
  }

}

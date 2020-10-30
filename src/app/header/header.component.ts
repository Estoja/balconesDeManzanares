import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    const el = document.getElementById(id);
    const offset = -110;
    const position = el.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({top: position, behavior: 'smooth'});
    // el.scrollIntoView(true);
    // el.scrollTop -= 100;
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HighlightLoader} from "ngx-highlightjs";

@Component({
  selector: 'app-navigation[isDark]',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() isDark: boolean = false;
  @Output() isDarkChange = new EventEmitter<boolean>();

  chosen_theme!: string;

  is_open = false;
  themes = [
    "rainbow.css",
    "agate.css",
    "an-old-hope.css",
    "arta.css",
    "devibeans.css",
    "felipec.css",
    "gradient-dark.css",
    "grayscale.css",
    "hybrid.css",
    "kimbie-dark.css",
    "kimbie-light.css",
    "magula.css",
    "monokai.css",
    "panda-syntax-dark.css",
    "paraiso-dark.css",
    "pojoaque.css",
    "routeros.css",
    "school-book.css",
    "shades-of-purple.css"
  ]

  constructor(private hljsLoader: HighlightLoader) { }

  ngOnInit(): void {
    this.chosen_theme = localStorage.getItem('theme') || 'rainbow.css';
   // this.setTheme();
  }

  toggle() {
    localStorage.setItem('dark', (!this.isDark).toString());
    this.isDarkChange.emit(!this.isDark);
  }

  setTheme() {
    console.log('updating', this.chosen_theme)
    this.hljsLoader.setTheme('./assets/styles/themes/' + this.chosen_theme);
    localStorage.setItem('theme', this.chosen_theme);
  }

}

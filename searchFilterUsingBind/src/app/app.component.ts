import { Component } from '@angular/core';
import { us_cities } from './cities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'searchFilterUsingBind';

  inputText!: string;
  searchResults: string[] = [];

  search(): void {
    if (this.inputText.trim().length > 0) {
      this.searchResults = us_cities.filter(
        (city) =>
          city.toLowerCase().indexOf(this.inputText.toLowerCase()) !== -1
      );
    } else this.searchResults = [];
  }

  selectResult(selectedCity: any): void {
    this.inputText = selectedCity.target.innerText;
  }
}

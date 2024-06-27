import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
} from 'rxjs/operators';
import { Book } from '../interface/bookInterface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  filteredBooks: Book[] = [];
  private books: Book[] = [];

  constructor(private http: HttpClient) {
    this.fetchAllBooks();
  }

  private fetchAllBooks() {
    this.http
      .get<any>('https://www.googleapis.com/books/v1/volumes?q=bookname')
      .pipe(
        map((response) =>
          response.items.map((item: any) => ({
            id: item.id,
            title: item.volumeInfo.title,
            picture: item.volumeInfo.imageLinks?.thumbnail || '',
            publisher: item.volumeInfo.publisher,
            publish_date: item.volumeInfo.publishedDate || '',
            description: item.volumeInfo.description || '',
          }))
        )
      )
      .subscribe((books) => {
        this.books = books;
        this.filteredBooks = books;
      });
  }

  ngOnInit() {
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.search(term))
      )
      .subscribe((books) => (this.filteredBooks = books));
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerms.next(inputElement.value);
  }

  search(term: string): Observable<Book[]> {
    return new Observable<Book[]>((observer) => {
      const filtered = this.books.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase())
      );
      observer.next(filtered);
      observer.complete();
    });
  }
}

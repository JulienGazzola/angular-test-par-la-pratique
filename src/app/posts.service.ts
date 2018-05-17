import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }

  recupererTousLesPosts(): Observable<any> {
    return this._http.get("https://jsonplaceholder.typicode.com/posts");
  }
}

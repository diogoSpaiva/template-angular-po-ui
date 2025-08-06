import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {
  constructor(private http: HttpClient) {}

  // --- USERS ---
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${API}/users`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${API}/users/${id}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${API}/users`, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${API}/users/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${API}/users/${id}`);
  }

  // --- POSTS ---
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${API}/posts`);
  }

  getPost(id: number): Observable<any> {
    return this.http.get<any>(`${API}/posts/${id}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(`${API}/posts`, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${API}/posts/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${API}/posts/${id}`);
  }
}

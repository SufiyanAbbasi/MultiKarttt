import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendListService {
  private _friendListVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggleFriendList(): void {
    this._friendListVisible.next(!this._friendListVisible.value);
  }

  getFriendListVisibility(): Observable<boolean> {
    return this._friendListVisible.asObservable();
  }
}

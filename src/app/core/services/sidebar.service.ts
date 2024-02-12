import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isVisible = new BehaviorSubject<boolean>(true);

  constructor() {}

  toggleVisibility(): void {
    this.isVisible.next(!this.isVisible.value);
  }

  getVisibility(): BehaviorSubject<boolean> {
    return this.isVisible;
  }
}


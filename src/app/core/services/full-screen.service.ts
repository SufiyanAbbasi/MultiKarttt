// full-screen.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullScreenService {
  private isFullScreen = false;

  constructor() { }

  toggleFullScreen() {
    if (!this.isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;
  }

  getFullScreenState(): boolean {
    return this.isFullScreen;
  }
}

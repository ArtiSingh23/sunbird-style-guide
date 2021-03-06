import { Component, OnInit, Renderer2, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-offline-menu',
  templateUrl: './offline-menu.component.html',
  styleUrls: ['./offline-menu.component.scss']
})
export class OfflineMenuComponent implements OnInit, OnDestroy {
multiSelect1: { name: string; }[];
showLargeModal: boolean;

constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  this.multiSelect1 = [{name: 'Example'}, {name: 'Test'}, {name: 'that'}];
  this.showLargeModal = true;
}


ngOnInit() {
  this.renderer.addClass(this.document.body, 'hideLeftTopBars');
}

ngOnDestroy(): void {
  this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
}
}

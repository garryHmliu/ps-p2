import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gy-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <button mat-raised-button class="text-3xl text-red-500">
      <ng-content></ng-content>
    </button>
  `,
  styles: `
    ::ng-deep .mdc-button__label {
      @apply text-3xl text-red-500;
    }
  `,
})
export class GyButtonComponent {}

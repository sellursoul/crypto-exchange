import {animate, state, style, transition, trigger} from "@angular/animations";

export const menuAnimation = trigger('menuAnimation', [
  state('open', style({
    transform: 'rotate(180deg)'
  })),
  state('closed', style({
    transform: 'rotate(0deg)'
  })),
  transition('closed <=> open', animate('0.4s ease-in-out')),
]);

export const dropdownAnimation = trigger('dropdownAnimation', [
  state('open', style({
    height: 'auto'
  })),
  state('closed', style({
    height: '0',
    overflow: 'hidden'
  })),
  transition('closed <=> open', animate('0.2s ease-in-out'))
])

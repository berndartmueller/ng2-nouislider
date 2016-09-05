import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare function toValue(value: string[]): number | number[];
export declare class Nouislider implements ControlValueAccessor, OnInit {
    private el;
    private behaviour;
    private connect;
    private limit;
    private min;
    private max;
    private step;
    private config;
    private ngModel;
    private ngModelChange;
    private change;
    private slider;
    private value;
    private onChange;
    private onTouched;
    constructor(el: ElementRef);
    ngOnInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => {}): void;
}
import { ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare function toValue(value: string[]): number | number[];
export interface NouiFormatter {
    to(value: number): string;
    from(value: string): number;
}
export declare class DefaultFormatter implements NouiFormatter {
    to(value: number): string;
    from(value: string): number;
}
export declare class NouisliderComponent implements ControlValueAccessor, OnInit, OnChanges {
    private el;
    slider: any;
    handles: any[];
    private disabled;
    private behaviour;
    private connect;
    private limit;
    private min;
    private max;
    private step;
    private format;
    private pageSteps;
    private config;
    private ngModel;
    private keyboard;
    private onKeydown;
    private formControl;
    private tooltips;
    private change;
    private update;
    private slide;
    private set;
    private start;
    private end;
    private value;
    private onChange;
    private onTouched;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    init(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => {}): void;
    private defaultKeyHandler;
}
export declare class NouisliderModule {
}

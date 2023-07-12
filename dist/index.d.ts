import { DecorationSty } from "./BoxDecoration";
import { LayoutSty } from "./BoxLayout";
import { SizeSty } from "./BoxSize";
import { TextSty } from "./BoxText";
import { InteractionSty } from "./BoxInteraction";
export type _Sty = SizeSty & DecorationSty & LayoutSty & TextSty & InteractionSty;
export type Sty = Partial<_Sty>;
export declare class Miwi_Box extends HTMLElement {
    private _parentObserver;
    private _parentAxis;
    private _parentPadTop;
    private _parentPadRight;
    private _parentPadBottom;
    private _parentPadLeft;
    private _selfObserver;
    private _childrenObserver;
    private _childCount;
    private _anyChildIsABoxWithAGrowingWidth;
    private _anyChildIsABoxWithAGrowingHeight;
    static get observedAttributes(): string[];
    private _sty;
    get sty(): Partial<_Sty>;
    set sty(value: Partial<_Sty>);
    private get _axis();
    computeParentStyle(): void;
    updateChildSizeGrows(): void;
    updateChildList(): void;
    updateStyle(): void;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
}
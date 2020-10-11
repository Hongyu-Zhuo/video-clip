import { Component, OnInit, OnDestroy, Directive } from '@angular/core';
import { ShortcutKey, ShortcutCombination, NgxShortcutService } from './ngx-shortcut.service';

@Component({
  selector: 'lib-ngx-shortcut',
  template: `
    <p>
      ngx-shortcut works!
    </p>
  `,
  styles: [
  ]
})
export class NgxShortcut implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/**
 * combination : [ [], [] ]
 */
export const shortcutDecorators = new WeakMap<any, {funcName: string | symbol, combination: ShortcutCombination[] }[]>();

export function Shortcut(...keys: ShortcutKey[]): MethodDecorator {
  return (target: any, propertyName: string | symbol, descriptor: PropertyDescriptor) => {
    let decoratorArr = shortcutDecorators.get(target.constructor);
    if (!decoratorArr) {
      decoratorArr = [];
      shortcutDecorators.set(target.constructor, decoratorArr)
    }
    decoratorArr.push({
      funcName: propertyName,
      combination: keys.map( key => {
        if (typeof key === 'string') {
          return [key]
        }
        return key;
      })
    });

    // target[propertyName]();
  }
}

@Directive()
export class ShortcutBaseDirective implements OnDestroy {
  private readonly shortcutCallbacks: Array<() => void> = [];
  constructor(
    protected shortcutService: NgxShortcutService
    ) {
    const childConstructor = Object.getPrototypeOf(this).constructor;
    const decorators = shortcutDecorators.get(childConstructor);
    if (decorators) {
      for ( const decorator of decorators ) {
        const callBack = (this as any)[decorator.funcName].bind(this);
        this.shortcutCallbacks.push(callBack);
        this.shortcutService.add(decorator.combination, callBack);
      }
    }
  }

  ngOnDestroy(): void {
    for (const callback of this.shortcutCallbacks) {
      this.shortcutService.remove(callback);
  }
  }
}
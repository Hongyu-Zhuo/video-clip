import { Injectable } from '@angular/core';


export type ShortcutKey = string;

export type ShortcutCombination = ShortcutKey[];

export type ShortcutEvent = (combination: ShortcutCombination) => void;

interface Shortcut {
  combinations: ShortcutCombination[];
  events: ShortcutEvent[];
}

interface ShortcutPair {
  shortcut: Shortcut;
  combination: ShortcutCombination;
}

@Injectable({
  providedIn: 'any'
})
export class NgxShortcutService {

  shortcuts: Shortcut[] = [];
  activeKeys: ShortcutKey[] = [];
  activeCombinations: ShortcutPair[] = [];
  constructor() {
    window.document.addEventListener('keydown', event => this.triggerKeydown(event));
    window.document.addEventListener('keyup', event => this.triggerKeyup(event));
  }
  filterEvent(e: KeyboardEvent) {
    return !!(
      e.target instanceof HTMLInputElement
      || e.target instanceof HTMLTextAreaElement);
  }
  triggerKeydown(e: KeyboardEvent) {
    if (this.filterEvent(e)) return;
    e.preventDefault();
    if (this.activeKeys.lastIndexOf(e.key) === -1) {
      this.activeKeys.push(e.key);
      this.activeCombinations = this.getCombinations();
    }

    for (const pair of this.activeCombinations) {
      for (const event of pair.shortcut.events) {
        event(pair.combination);
      }
    }
  }
  triggerKeyup(e: KeyboardEvent) {
    if (this.filterEvent(e)) return;
    const i = this.activeKeys.lastIndexOf(e.key);
    if (i !== -1) {
      this.activeKeys.splice(i, 1);
    }

  }

  remove(cb: ShortcutEvent): void {
    for (let shortcutIndex = 0; shortcutIndex < this.shortcuts.length; shortcutIndex++) {
      const shortcut = this.shortcuts[shortcutIndex];
      for (let eventIndex = 0; eventIndex < shortcut.events.length; eventIndex++) {
        if (shortcut.events[eventIndex] === cb) {
          shortcut.events.splice(eventIndex, 1);
          eventIndex--;
        }
      }

      if (!shortcut.events.length) {
        this.shortcuts.splice(shortcutIndex, 1);
        shortcutIndex--;
      }
    }
  }
  add(combinations: ShortcutCombination[], callback: ShortcutEvent) {
    this.shortcuts.push({ combinations, events: [callback] })
  }
  getCombinations(): ShortcutPair[] {
    const result: ShortcutPair[] = [];
    for (const shortcut of this.shortcuts) {
      // for (const combination of shortcut.combinations) {

        if (this.queueEndsWith(shortcut.combinations, shortcut.combinations.length)) {
          const combination = shortcut.combinations.toString();
          result.push({ shortcut, combination: [combination]  });
        }
      // }
    }
    return result;
  }

  private queueEndsWith(combinations: ShortcutCombination[], checkLength: number, ): boolean {

    if (this.activeKeys.length < checkLength) {
      return false;
    }
    /**
     * 从末尾开始匹配
     */
    const matchStart = this.activeKeys.length - checkLength;
    for (let i = 0; i < checkLength; i++) {
      if (this.activeKeys[matchStart + i] !== combinations[i].toString()) {
        return false;
      }
    }
    return true;
  }
}


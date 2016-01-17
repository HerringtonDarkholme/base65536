import {
  Component, Input, Output, EventEmitter,
  ElementRef, ViewQuery, QueryList
} from 'angular2/core'

@Component({
  selector: 'copy-button',
  template: `
  <div class="ui fluid button" (click)="copy()">
    {{buttonStatus}}
  </div>
  `
})
class CopyButton {
  @Input() textElem: Element
  buttonStatus = 'Copy!'

  copy() {
    let range = document.createRange()
    range.selectNode(this.textElem)
    window.getSelection().addRange(range)
    let success = document.execCommand('copy')
    this.buttonStatus = success ? 'Copied!' : 'Oh no...'
    window.getSelection().removeAllRanges()
    setTimeout(() => this.buttonStatus = 'Copy!', 1000)
  }

}

@Component({
  selector: 'copy-textarea',
  template: `
  <textarea [(ngModel)]="_text" [placeholder]="placeholder"></textarea>
  <copy-button [textElem]="toCopy"></copy-button>
  `,
  directives: [CopyButton]
})
export class CopyTextarea {
  @Input() text: string
  @Input() placeholder: string
  @Output() changed = new EventEmitter<string>()
  toCopy: Element

  constructor(eleRef: ElementRef) {
    this.toCopy = eleRef.nativeElement.querySelector('textarea')
  }

  get _text() {
    return this.text
  }

  set _text(str: string) {
    this.text = str
    this.changed.next(str)
  }
}

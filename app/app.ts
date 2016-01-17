import {Component, OnChanges} from 'angular2/core'
import {EncoderService} from './service'
import {CopyTextarea} from './copy-textarea'

@Component({
  selector: 'base65536',
  styles: [
    'copy-textarea {display: block;margin-bottom:3em}'
  ],
  template: `
  <div class="ui form">
    <copy-textarea
      [placeholder]="'Original Text Here!'"
      [text]="decoded"
      (changed)="setDecoded($event)">
    </copy-textarea>
    <copy-textarea
      [placeholder]="'Encoded Text Here!'"
      [text]="encoded"
      (changed)="setEncoded($event)">
    </copy-textarea>
    <h2 class="ui message error visible" *ngIf="error">
      <header class="header">{{error}}</header>
    </h2>
  </div>
  `,
  directives: [CopyTextarea]
})
export class Base65536 {
  encoded = ''
  decoded = ''
  error = ''
  constructor(private encoder: EncoderService) {}

  setEncoded(src: string) {
    try {
      this.encoded = this.encoder.cleanse(src)
      this.decoded = this.encoder.decode(this.encoded)
      this.error = ''
    } catch (e) {
      console.log(e)
      this.error = 'An Error occurred :('
    }
  }

  setDecoded(dest: string) {
    try {
      this.decoded = this.encoder.cleanse(dest)
      this.encoded = this.encoder.encode(this.decoded)
      this.error = ''
    } catch (e) {
      console.log(e)
      this.error = 'An Error occurred :('
    }
  }
}

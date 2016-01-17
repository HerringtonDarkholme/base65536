import {Injectable} from 'angular2/core'
import * as base65536 from 'base65536'
import * as buffer from 'buffer'

let Buffer = (<any>buffer).Buffer

@Injectable()
export class EncoderService {
  encode(source: string) {
    let sourceBuffer = new Buffer(source)
    return base65536.encode(sourceBuffer)
  }
  decode(dest: string) {
    return base65536.decode(dest).toString()
  }
  cleanse(str: string) {
    return str.trim().replace(/[\u200B-\u200D\uFEFF]/g, '')
  }
}

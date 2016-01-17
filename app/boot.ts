import {bootstrap} from 'angular2/platform/browser'

import {Base65536} from './app'
import {EncoderService} from './service'

bootstrap(Base65536, [EncoderService])

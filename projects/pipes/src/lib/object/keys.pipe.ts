import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isObject } from '../core/utils/utils';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(input: any): any {
    if (!isObject(input)) {
      return input;
    }

    return Object.keys(input);
  }
}

@NgModule({
  declarations: [KeysPipe],
  exports: [KeysPipe],
})
export class KeysPipeModule {}

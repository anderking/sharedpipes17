import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../core/utils/utils';

@Pipe({
  name: 'map',
})
export class MapPipe implements PipeTransform {
  transform(input: any, fn: Function): any {
    if (!isArray(input) || !fn) {
      return input;
    }

    return input.map(fn);
  }
}

@NgModule({
  declarations: [MapPipe],
  exports: [MapPipe],
})
export class MapPipeModule {}

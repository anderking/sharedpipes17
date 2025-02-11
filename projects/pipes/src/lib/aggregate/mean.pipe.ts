import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray, sum } from '../core/utils/utils';

@Pipe({
  name: 'mean',
})
export class MeanPipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }

    const count = input.length;

    if (count === 0) {
      return undefined;
    }

    return sum(input) / count;
  }
}

@NgModule({
  declarations: [MeanPipe],
  exports: [MeanPipe],
})
export class MeanPipeModule {}

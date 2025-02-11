import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray, takeWhile, CollectionPredicate, isNil } from '../core/utils/utils';

@Pipe({
  name: 'takeWhile',
})
export class TakeWhilePipe implements PipeTransform {
  transform(input: any, predicate?: CollectionPredicate): any {
    if (!isArray(input) || isNil(predicate)) {
      return input;
    }

    return takeWhile(input, predicate);
  }
}

@NgModule({
  declarations: [TakeWhilePipe],
  exports: [TakeWhilePipe],
})
export class TakeWhilePipeModule {}

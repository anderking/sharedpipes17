import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isDeepObject, isArray, unwrapDeep, deepIndexOf } from '../core/utils/utils';

@Pipe({
  name: 'intersection',
})
export class IntersectionPipe implements PipeTransform {
  transform(a?: any, b?: any): any {
    if ((!isArray(a) && !isDeepObject(a)) || !isArray(b)) {
      return [];
    }

    if (isDeepObject(a)) {
      const unwrapped = unwrapDeep(a);
      if (!isArray(unwrapped)) {
        return [];
      }

      return unwrapped.reduce(
        (intersection: any[], value: any) =>
          intersection.concat(deepIndexOf(b, value) !== -1 && deepIndexOf(intersection, value) === -1 ? value : []),
        []
      );
    }

    return a.reduce(
      (intersection: any[], value: any) =>
        intersection.concat(b.indexOf(value) !== -1 && intersection.indexOf(value) === -1 ? value : []),
      []
    );
  }
}

@NgModule({
  declarations: [IntersectionPipe],
  exports: [IntersectionPipe],
})
export class IntersectionPipeModule {}

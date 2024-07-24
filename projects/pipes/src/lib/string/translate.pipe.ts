import { Pipe, PipeTransform, NgModule, Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractTranslateService } from "../core/abstracts/translate-service.abstract";

@Pipe({
  name: "translate"
})
export class TranslatePipe implements PipeTransform {
  // anywhere in the library where the service is needed
  constructor(private _ts: AbstractTranslateService) {
  }
  
  transform(value: string): Observable<string> {
    return this._ts.getLangLibrary$().pipe(
      map((template: any) => template[value] ? template[value] : value)
    )
  }
}

@NgModule({
  declarations: [TranslatePipe],
  exports: [TranslatePipe],
})
export class TranslatePipeModule {}
import { Observable } from 'rxjs';
import { LangType } from '../types/lang.type';

export abstract class AbstractTranslateService {
    abstract getLangLibrary$(): Observable<object>;
    abstract setLang(lang: LangType): void;
}

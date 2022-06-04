import { I18nSelectPipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform{


  transform(value:boolean):string {
    return ( value )
      ? 'sí'
      : 'no';
  }

}

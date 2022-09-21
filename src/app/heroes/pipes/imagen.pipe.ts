import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroeinterfaces';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(value: Heroes): string {
    if (!value.id) {
      return '../../../../assets/no-image.png';
    }

    const url: string = '../../../../assets/heroes/' + value.id + '.jpg';
    return url;
  }
}

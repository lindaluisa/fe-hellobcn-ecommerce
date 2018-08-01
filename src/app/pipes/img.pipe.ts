import { Pipe, PipeTransform } from '@angular/core';

import { SERVICE_URL } from '../config/config';

@Pipe({
  name: 'img'
})

export class ImgPipe implements PipeTransform {

  transform(img: string, type: string = 'user'): any {

    let url = SERVICE_URL + '/img';

    if ( !img ) {
      return url + '/user/xxx';
    }

    switch ( type ) {

      case 'user':
        url += '/users/' + img;
      break;

      case 'item':
        url += '/items/' + img;
      break;

      case 'vendor':
        url += '/vendors/' + img;
      break;

      default:
       console.log('This type of image does not exist: users, vendors or items');
       url += '/users/xxx';
    }

    return url;
  }
}

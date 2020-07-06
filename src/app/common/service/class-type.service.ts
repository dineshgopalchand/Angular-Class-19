import { Injectable } from '@angular/core';

@Injectable()
export class ClassTypeService {
    classTypeList = [
        { id: 1, name: 'Module' },
        { id: 2, name: 'Component' },
        { id: 3, name: 'Directive' },
        { id: 4, name: 'Pipe' },
        { id: 5, name: 'Service' },
        { id: 6, name: 'Authenication' },
        { id: 7, name: 'Gaurd' }
      ];

}

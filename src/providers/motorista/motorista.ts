import { MotoristaModel } from './../../app/models/motoristaModel';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpProvider } from '../http/http';

@Injectable()
export class MotoristaProvider extends ProviderBase<MotoristaModel> {

    url: string = `${ConfigHelper.Url}motorista`;

    constructor(public http: HttpProvider) {
      super (`${ConfigHelper.Url}motorista`, http);
    }

}

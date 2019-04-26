import { HttpProvider } from './../http/http';
import { ViagemModel } from './../../app/models/viagemModel';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { ConfigHelper } from '../../app/helpers/configHelper';

@Injectable()
export class ViagemProvider extends ProviderBase<ViagemModel> {

  url: string = `${ConfigHelper.Url}viagem`;

  constructor(public http: HttpProvider) {
    super (`${ConfigHelper.Url}viagem`, http);
  }

}

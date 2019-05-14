import { CaminhaoModel } from './../../app/models/caminhaoModel';
import { HttpProvider } from './../http/http';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { ConfigHelper } from '../../app/helpers/configHelper';

@Injectable()
export class CaminhaoProvider extends ProviderBase<CaminhaoModel> {

  url: string = `${ConfigHelper.Url}caminhao`;

  constructor(public http: HttpProvider) {
    super (`${ConfigHelper.Url}caminhao`, http);
  }

}
 
// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {HttpParams} from '@angular/common/http';
import {Component, Input} from '@angular/core';
import {StateService} from '@uirouter/core';
import {Observable} from 'rxjs/Observable';
import {Endpoint, Ingress, IngressList} from '../../../../typings/backendapi';

import {ResourceListBase} from '../../../resources/list';
import {EndpointManager, Resource} from '../../../services/resource/endpoint';
import {NamespacedResourceService} from '../../../services/resource/resource';
import {ListGroupIdentifiers, ListIdentifiers} from '../groupids';

@Component({selector: 'kd-ingress-list', templateUrl: './template.html'})
export class IngressListComponent extends ResourceListBase<IngressList, Ingress> {
  @Input() endpoint = EndpointManager.resource(Resource.ingress, true).list();

  constructor(
      state: StateService, private readonly ingress_: NamespacedResourceService<IngressList>) {
    super('node', state);
    this.id = ListIdentifiers.ingress;
    this.groupId = ListGroupIdentifiers.discovery;
  }

  getResourceObservable(params?: HttpParams): Observable<IngressList> {
    return this.ingress_.get(this.endpoint, undefined, params);
  }

  map(ingressList: IngressList): Ingress[] {
    return ingressList.items;
  }

  getDisplayColumns(): string[] {
    return ['name', 'labels', 'endpoints', 'age'];
  }
}

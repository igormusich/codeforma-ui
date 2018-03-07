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

import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';

import {ActionbarComponent} from './actionbar/component';
import {BreadcrumbsComponent} from './breadcrumbs/component';
import {CardComponent} from './card/component';
import {ChipsComponent} from './chips/component';
import {LastAppliedConfigDialog} from './chips/lastappliedconfigdialog/dialog';
import {ExternalEndpointComponent} from './endpoint/external/component';
import {InternalEndpointComponent} from './endpoint/internal/component';
import {ColumnComponent} from './list/column/component';
import {LogsButtonComponent} from './list/column/logsbutton/component';
import {MenuComponent} from './list/column/menu/component';
import {CardListFilterComponent} from './list/filter/component';
import {RowDetailComponent} from './list/rowdetail/component';
import {LoadingSpinner} from './list/spinner/component';
import {ListZeroStateComponent} from './list/zerostate/component';
import {HiddenPropertyComponent} from './hiddenproperty/component';
import {ObjectMetaComponent} from './objectmeta/component';
import {PropertyComponent} from './property/component';
import {ProxyComponent} from './proxy/component';
import {DeploymentListComponent} from './resourcelist/deployment/component';
import {IngressListComponent} from './resourcelist/ingress/component';
import {JobListComponent} from './resourcelist/job/component';
import {NamespaceListComponent} from './resourcelist/namespace/component';
import {PersistentVolumeListComponent} from './resourcelist/persistentvolume/component';
import {PersistentVolumeClaimListComponent} from './resourcelist/persistentvolumeclaim/component';
import {ReplicaSetListComponent} from './resourcelist/replicaset/component';
import {ReplicationControllerListComponent} from './resourcelist/replicationcontroller/component';
import {SecretListComponent} from './resourcelist/secret/component';
import {ServiceListComponent} from './resourcelist/service/component';
import {StatefulSetListComponent} from './resourcelist/statefulset/component';
import {StorageClassListComponent} from './resourcelist/storageclass/component';
import {TextInputComponent} from './textinput/component';
import {ZeroStateComponent} from './zerostate/component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    CardComponent,
    ActionbarComponent,
    BreadcrumbsComponent,
    PropertyComponent,
    ObjectMetaComponent,
    ChipsComponent,
    LoadingSpinner,
    CardListFilterComponent,
    ProxyComponent,
    ReplicaSetListComponent,
    NamespaceListComponent,
    PersistentVolumeListComponent,
    ListZeroStateComponent,
    ZeroStateComponent,
    StorageClassListComponent,
    DeploymentListComponent,
    JobListComponent,
    ReplicationControllerListComponent,
    StatefulSetListComponent,
    SecretListComponent,
    PersistentVolumeClaimListComponent,
    IngressListComponent,
    ServiceListComponent,
    ExternalEndpointComponent,
    InternalEndpointComponent,
    LastAppliedConfigDialog,
    TextInputComponent,
    RowDetailComponent,
    ColumnComponent,
    LogsButtonComponent,
    MenuComponent,
    HiddenPropertyComponent,
  ],
  exports: [
    CardComponent,
    ActionbarComponent,
    BreadcrumbsComponent,
    PropertyComponent,
    ObjectMetaComponent,
    ChipsComponent,
    LoadingSpinner,
    CardListFilterComponent,
    ProxyComponent,
    ReplicaSetListComponent,
    NamespaceListComponent,
    PersistentVolumeListComponent,
    ZeroStateComponent,
    StorageClassListComponent,
    DeploymentListComponent,
    JobListComponent,
    ReplicationControllerListComponent,
    StatefulSetListComponent,
    SecretListComponent,
    PersistentVolumeClaimListComponent,
    IngressListComponent,
    ServiceListComponent,
    ExternalEndpointComponent,
    InternalEndpointComponent,
    TextInputComponent,
    HiddenPropertyComponent,
  ],
  entryComponents: [
    LastAppliedConfigDialog,
    RowDetailComponent,
    LogsButtonComponent,
    MenuComponent,
  ]
})
export class ComponentsModule {}

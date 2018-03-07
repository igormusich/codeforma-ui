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

import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';

import {NavService} from '../../common/services/nav/service';
import {overviewState} from '../../overview/state';
import {persistentVolumeClaimListState} from '../../resource/config/persistentvolumeclaim/list/state';
import {secretListState} from '../../resource/config/secret/list/state';
import {configState} from '../../resource/config/state';

@Component({
  selector: 'kd-nav',
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
})
export class NavComponent implements AfterContentInit, OnInit {
  @ViewChild(MatDrawer) private readonly nav_: MatDrawer;
  states = {

    overview: overviewState.name,



    config: configState.name,
    persistentVolumeClaim: persistentVolumeClaimListState.name,
    secret: secretListState.name,
  };

  constructor(private readonly navService_: NavService) {}

  ngOnInit(): void {
    this.navService_.setNav(this.nav_);
  }

  ngAfterContentInit(): void {
    this.nav_.open();
  }
}

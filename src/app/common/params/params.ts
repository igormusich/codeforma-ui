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

import {K8sError} from '../../typings/backendapi';
import {KdError} from '../../typings/frontendapi';
import {StateParams} from '@uirouter/core';

/**
 * Parameter name of the namespace selection param. Mostly for internal use.
 */
export const NAMESPACE_STATE_PARAM = 'namespace';

/**
 * Paramterer name of the search query.
 */
export const SEARCH_QUERY_STATE_PARAM = 'q';

export class ChromeStateParams extends StateParams {
  constructor(public namespace: string) {
    super();
  }
}

export class ResourceStateParams extends StateParams {
  constructor(public resourceName: string) {
    super();
  }
}

export class NamespacedResourceStateParams extends ChromeStateParams {
  constructor(namespace: string, public resourceName: string) {
    super(namespace);
  }
}

export class SearchStateParams extends StateParams {
  constructor(public q: string) {
    super();
  }
}

export class ErrorStateParams extends ChromeStateParams {
  constructor(public error: KdError|K8sError, namespace: string) {
    super(namespace);
  }
}

export function addResourceStateParamsToUrl(url: string): string {
  return `${url}/:resourceName`;
}

export function addNamespacedResourceStateParamsToUrl(url: string): string {
  return `${url}/:namespace/:resourceName`;
}

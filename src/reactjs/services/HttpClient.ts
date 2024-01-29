/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import { prepareHeaders } from '../shared/Utilities'

export const HttpClient = {
  async get (url: string, options = {}): Promise<any> {
    const jsonHeaders = prepareHeaders()
    return await HttpClient.fetch(url, {
      ...options,
      method: 'GET',
      headers: jsonHeaders
    })
  },

  async post (url: string, body = {}, options = {}): Promise<any> {
    const jsonHeaders = prepareHeaders()
    return await HttpClient.fetch(url, {
      ...options,
      method: 'POST',
      body,
      headers: jsonHeaders
    })
  },

  async delete (url: string, options = {}): Promise<any> {
    const jsonHeaders = prepareHeaders()
    return await HttpClient.fetch(url, {
      ...options,
      method: 'DELETE',
      headers: jsonHeaders
    })
  },

  async fetch (url: string, options = {}): Promise<any> {
    (options as any).mode = 'cors';
    (options as any).credentials = 'include';
    (options as any).withCredentials = true
    return await fetch(url, options).then(async result => await result.json())
  }
}

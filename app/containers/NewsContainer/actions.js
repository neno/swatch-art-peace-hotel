/*
 *
 * NewsContainer actions
 *
 */

import {
  REQUEST_NEWS,
  REQUEST_NEWS_SUCCEEDED,
  REQUEST_NEWS_FAILED,
} from './constants';

export function requestNews() {
  return {
    type: REQUEST_NEWS,
  };
}

export function requestNewsSucceeded(news) {
  return {
    type: REQUEST_NEWS_SUCCEEDED,
    news,
  };
}

export function requestNewsFailed(message) {
  return {
    type: REQUEST_NEWS_FAILED,
    message,
  };
}

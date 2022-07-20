/* eslint-disable import/prefer-default-export */
import { ApiFetch } from './api';

/** Declare an Http api repository */
export abstract class Repository {
  api: ApiFetch;

  constructor(api: ApiFetch) {
    this.api = api;
  }
}

// ====== Api parameters ====== //

type FilterKey = string;
type FilterValue = string | string[];

export type FiltersType = Array<Record<FilterKey, FilterValue>>;

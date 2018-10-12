import { InjectionToken } from "@angular/core";

export interface ApiConfig {
  rootEndpoint: string;
}

export const API_CONFIG = new InjectionToken<ApiConfig>('api.config');

export const ApiConfigValue: ApiConfig = {
  rootEndpoint: 'https://jsonplaceholder.typicode.com'
};

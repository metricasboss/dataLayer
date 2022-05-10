import { DataLayerObject } from './DataLayerObject';

declare global {
    interface Window {
        dataLayer?: DataLayerObject[];
    }
}
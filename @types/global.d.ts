
declare global {
    interface Window {
        dataLayer?: DataLayerObject[];
    }
}

export type CustomObjectProperties = {};

export interface DataLayerObject {
    event: string;
    data?: CustomObjectProperties
}
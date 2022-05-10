
declare global {
    interface Window {
        dataLayer?: Array[];
    }
}

export type CustomObjectProperties = {};

export interface DataLayerObject {
    event: string;
    data?: CustomObjectProperties
}
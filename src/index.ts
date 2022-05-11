import { DataLayerObject } from "./DataLayerObject";

const sendToDataLayer = (obj: DataLayerObject) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(obj);
};

const CustomEvent = (eventName: string, obj: object) => {
    const data = {
        'event': eventName,
        ...obj
    }

    sendToDataLayer(data)
}

export { DataLayerObject }

export default  {
    customEvent: CustomEvent
}
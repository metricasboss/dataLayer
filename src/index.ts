import { DataLayerObject } from "../@types/global";

const sendToDataLayer = (obj: DataLayerObject) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(obj);
};

const CustomEvent = (eventName: string, obj: object) => {
    const data = {
        'event': eventName,
        'data': obj
    }

    sendToDataLayer(data)
}

export default  {
    customEvent: CustomEvent
}
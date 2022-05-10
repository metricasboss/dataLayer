"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEvent = void 0;
const sendToDataLayer = (obj) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(obj);
};
const CustomEvent = (eventName, obj) => {
    const data = {
        'event': eventName,
        'data': obj
    };
    sendToDataLayer(data);
};
exports.CustomEvent = CustomEvent;

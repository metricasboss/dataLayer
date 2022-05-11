"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendToDataLayer = (obj) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(obj);
};
const CustomEvent = (eventName, obj) => {
    const data = Object.assign({ 'event': eventName }, obj);
    sendToDataLayer(data);
};
exports.default = {
    customEvent: CustomEvent
};

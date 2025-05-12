export const VERSION = "1.0.0";

export const ArrayProto = Array.prototype;
export const ObjProto = Object.prototype
export const SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

export const push = ArrayProto.push;
export const slice = ArrayProto.slice;
export const toString = ObjProto.toString;
export const hasOwnProperty = ObjProto.hasOwnProperty;
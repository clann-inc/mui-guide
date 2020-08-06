"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Guide = ({ children, disable = false }) => {
    // const classes = useStyle();
    return (react_1.default.createElement("div", null, children));
};
exports.default = Guide;

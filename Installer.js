"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_2 = require("photoncss/lib/react");
require("photoncss/dist/photon.css");
require("../style.less");
const lib_1 = require("photoncss/lib");
class Installer extends react_1.Component {
    constructor() {
        super(...arguments);
        this.id = (0, lib_1.guid)();
    }
    componentDidMount() {
        requestAnimationFrame(() => {
            if (localStorage.getItem("pwa-install-react--rejected") === "true")
                return;
            this.show();
        });
    }
    show() {
        document.getElementById(this.id)
            ?.classList
            .remove("hidden");
    }
    hide(rejected = false) {
        document.getElementById(this.id)
            ?.classList
            .add("hidden");
        if (rejected)
            localStorage.setItem("pwa-install-react--rejected", "true");
    }
    render() {
        return (react_1.default.createElement(react_2.Card, { className: "pwa-installer hidden", id: this.id },
            react_1.default.createElement("div", { className: "pwa-installer-body" },
                react_1.default.createElement("img", { src: "/icon.png", alt: "" }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", null, this.props.title || "Install app?"),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, this.props.name || document.title),
                        react_1.default.createElement("span", null, this.props.description || location.hostname)))),
            react_1.default.createElement(react_2.CardActions, { direction: "right" },
                react_1.default.createElement(react_2.Button, { variant: "flat", onClick: () => this.hide(true) }, "no thanks"),
                react_1.default.createElement(react_2.Button, { variant: "raised", color: "primary", onClick: () => this.props.installer() }, "install"))));
    }
}
exports.default = Installer;
//# sourceMappingURL=Installer.js.map
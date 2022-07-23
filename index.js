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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Installer_1 = __importDefault(require("./Installer"));
let installer = null;
window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    installer = event;
});
class PWAInstaller extends react_1.Component {
    constructor(props) {
        super(props);
        this._mounted = false;
        this.state = { ready: false };
        let _cache = null;
        const _this = this;
        (function listen() {
            requestAnimationFrame(listen);
            if (installer !== _cache && _this._mounted) {
                _cache = installer;
                _this.setState({ ready: installer !== null });
            }
        }());
    }
    componentDidMount() {
        this._mounted = true;
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    install() {
        if (installer === null)
            return;
        installer.userChoice.then(result => {
            if (result.outcome === "accepted")
                installer = null;
        });
        installer.prompt();
    }
    render() {
        if (this.state.ready === false)
            return null;
        return react_1.default.createElement(Installer_1.default, { ...this.props, installer: () => this.install() });
    }
}
exports.default = PWAInstaller;
//# sourceMappingURL=index.js.map
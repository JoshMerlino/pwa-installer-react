import { Component } from "react";
import "photoncss/dist/photon.css";
import "../style.less";
interface InstallerProps extends Props {
    installer: () => void;
}
export default class Installer extends Component<InstallerProps, any> {
    id: string;
    componentDidMount(): void;
    show(): void;
    hide(rejected?: boolean): void;
    render(): JSX.Element;
}
export {};

import { Component } from "react";
export default class PWAInstaller extends Component<Props, {
    ready: boolean;
}> {
    _mounted: boolean;
    state: {
        ready: boolean;
    };
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    install(): void;
    render(): JSX.Element | null;
}

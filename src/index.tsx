/* eslint consistent-this: off */
/* eslint @typescript-eslint/no-this-alias: off */
import React, { Component } from "react";
import Installer from "./Installer";

interface BeforeInstallPromptEvent extends Event {
  	readonly platforms: Array<string>;
  	readonly userChoice: Promise<{ outcome: "accepted" | "dismissed", platform: string }>;
  	prompt(): Promise<void>;
}

let installer: BeforeInstallPromptEvent | null = null;
window.addEventListener("beforeinstallprompt", event => {
	event.preventDefault();
	installer = event as BeforeInstallPromptEvent;
});

export default class PWAInstaller extends Component<Props, { ready: boolean }> {

	_mounted = false;

	state = { ready: false };

	constructor(props: Props) {
		super(props);
		let _cache = null;
		const _this = this;
		(function listen(){
			requestAnimationFrame(listen);
			if (installer !== _cache && _this._mounted) {
				_cache = installer;
				_this.setState({ ready: installer !== null });
			}
		}());
	}

	componentDidMount(): void {
		this._mounted = true;
	}

	componentWillUnmount(): void {
		this._mounted = false;
	}

	install(): void {
		if (installer === null) return
		installer.userChoice.then(result => {
			if (result.outcome === "accepted") installer = null;
		});
		installer.prompt();
	}

	render(): JSX.Element | null {
		if (this.state.ready === false) return null;
		return <Installer {...this.props} installer={() => this.install()}/>;
	}
}

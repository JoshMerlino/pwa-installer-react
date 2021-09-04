/* eslint @typescript-eslint/no-explicit-any: off */
import React, { Component } from "react";

export default class TSXComponent extends Component<any, any> {
	render(): JSX.Element {
		return <>TSX Component</>;
	}
}

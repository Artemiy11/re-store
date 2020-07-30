import React, { Component } from 'react';
import ErrorIndicator from '../errorIndicator';

export default class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            error: false
        };
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    render() {
        if(this.state.error) {
            return <ErrorIndicator/>;
        }

        return this.props.children;
    }
} 
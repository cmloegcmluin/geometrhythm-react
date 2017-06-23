import React from 'react'
import {fetch} from './fetchHelper'

export default class HeaderComponent extends React.Component {
    componentWillMount() {
        fetch()
    }

    render() {
        return (
            <div>
                <div data-id="title"/>
            </div>
        )
    }
}
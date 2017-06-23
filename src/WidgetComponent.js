import React from 'react'
import {fetch} from './fetchHelper'
import config from './config'

export default class WidgetComponent extends React.Component {
    componentWillMount() {
        const fetchData = {
            url: config.geometrhythmApiBaseUrl,
            method: 'GET',
            params: {
                rhythm: 'x--x--x---x-x---'
            }
        }

        fetch(fetchData)
    }

    render() {
        return (
            <div>
                <div data-id="widget-message"/>
            </div>
        )
    }
}

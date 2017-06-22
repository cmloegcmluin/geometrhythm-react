import React from 'react'
import fetchHelper from './fetchHelper'

export default class WidgetComponent extends React.Component {
    componentWillMount() {
        fetchHelper.fetch()
    }

    render() {
        return (
            <div>
                <div data-id="widget-message"/>
            </div>
        )
    }
}

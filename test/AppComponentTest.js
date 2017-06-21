import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import AppComponent from '../src/AppComponent'

describe('Application', () => {
    it('renders a header, widget, and analysis', () => {
        const app = shallow(<AppComponent/>)

        expect(app.find('[data-id="header"]')).to.have.length(1)
        expect(app.find('[data-id="widget"]')).to.have.length(1)
        expect(app.find('[data-id="analysis"]')).to.have.length(1)
    })
})
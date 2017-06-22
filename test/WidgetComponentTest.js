import React from 'react'
import {shallow} from 'enzyme'
import {assert} from 'chai'
import WidgetComponent from '../src/WidgetComponent'
import sinon from 'sinon'
import fetchHelper from '../src/fetchHelper'

describe('WidgetComponent', () => {

    let sandbox

    beforeEach(() => {
        sandbox = sinon.sandbox.create()
    })

    afterEach(() => {
        sandbox.restore()
    })

    it('renders', () => {
        const wrapper = shallow(<WidgetComponent/>)

        assert.strictEqual(wrapper.find('[data-id="widget-message"]').length, 1)
    })

    it('fetches complexity data', () => {
        const stub = sandbox.stub(fetchHelper, 'fetch')

        shallow(<WidgetComponent/>)

        assert.isTrue(stub.called)
    })
})
const React = require('react')
const {shallow} = require('enzyme')
jest.mock('../src/fetchHelper')
const fetchHelper = require('../src/fetchHelper')
const HeaderComponent = require('../src/HeaderComponent').default

test('renders', () => {
    const wrapper = shallow(<HeaderComponent/>)

    expect(wrapper.find('[data-id="title"]').length).toEqual(1)
})

test('calls api', () => {
    fetchHelper.fetch.mockReset()

    shallow(<HeaderComponent/>)

    expect(fetchHelper.fetch.mock.calls.length).toBe(1)
})
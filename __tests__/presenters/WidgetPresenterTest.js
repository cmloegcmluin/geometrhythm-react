test("", () => {
})

// beforeEach(() => jest.resetModules());
//
// const React = require('react');
// const { mount } = require('enzyme');
// const WidgetPresenter = require('../../src/presenters/WidgetPresenter').default;
// const InsertZone = require('../../src/components/InsertZone').default;
// const Cell = require('../../src/components/Cell').default;
//
// describe('render', () => {
//   describe('cells', () => {
//     test('renders the correct number of cells', () => {
//       const widgetProps = {
//         rhythm: 'x----x--',
//         reactKeys: [1, 3, 4, 9, 0, 2, 7, 8],
//       };
//
//       const wrapper = mount(<WidgetPresenter {...widgetProps} />);
//
//       const cells = wrapper.find(Cell);
//       expect(cells.length).toBe(8);
//     });
//
//     test('passes the right props on to each cell', () => {
//       const widgetProps = {
//         rhythm: 'x----x--',
//         reactKeys: [1, 3, 4, 9, 0, 2, 7, 8],
//         flipCell: jest.fn(),
//       };
//
//       const wrapper = mount(<WidgetPresenter {...widgetProps} />);
//
//       const onsetCell = wrapper.find(Cell).at(0);
//       expect(onsetCell.prop('flipCell')).toBe(widgetProps.flipCell);
//       expect(onsetCell.prop('rhythm')).toBe(widgetProps.rhythm);
//       expect(onsetCell.prop('isOnset')).toBe(true);
//       expect(onsetCell.prop('index')).toBe(0);
//       expect(Number(onsetCell.key())).toBe(widgetProps.reactKeys[0]);
//
//       const notOnsetCell = wrapper.find(Cell).at(1);
//       expect(notOnsetCell.prop('flipCell')).toBe(widgetProps.flipCell);
//       expect(notOnsetCell.prop('rhythm')).toBe(widgetProps.rhythm);
//       expect(notOnsetCell.prop('isOnset')).toBe(false);
//       expect(notOnsetCell.prop('index')).toBe(1);
//       expect(Number(notOnsetCell.key())).toBe(widgetProps.reactKeys[1]);
//     });
//   });
//
//   describe('insert zones', () => {
//     test('renders the correct number of insert zones', () => {
//       const widgetProps = {
//         rhythm: 'x----x--',
//         reactKeys: [1, 3, 4, 9, 0, 2, 7, 8],
//       };
//
//       const wrapper = mount(<WidgetPresenter {...widgetProps} />);
//
//       const insertZones = wrapper.find(InsertZone);
//       expect(insertZones.length).toBe(8);
//     });
//
//     test('passes the right props on to each insert zone', () => {
//       const widgetProps = {
//         rhythm: 'x----x--',
//         reactKeys: [1, 3, 4, 9, 0, 2, 7, 8],
//         insertCell: jest.fn(),
//       };
//
//       const wrapper = mount(<WidgetPresenter {...widgetProps} />);
//
//       const insertZone = wrapper.find(InsertZone).at(0);
//
//       expect(insertZone.prop('insertCell')).toBe(widgetProps.insertCell);
//       expect(insertZone.prop('rhythm')).toBe(widgetProps.rhythm);
//       expect(insertZone.prop('index')).toBe(0);
//       expect(insertZone.prop('reactKeys')).toBe(widgetProps.reactKeys);
//       expect(insertZone.key()).toBe(`insert-zone-${widgetProps.reactKeys[0]}`);
//     });
//   });
//
//   test('renders even with an undefined rhythm', () => {
//     const widgetProps = {};
//
//     const wrapper = mount(<WidgetPresenter {...widgetProps} />);
//
//     const cells = wrapper.find(Cell);
//     expect(cells.length).toBe(0);
//   });
// });

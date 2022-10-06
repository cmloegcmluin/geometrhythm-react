test("", () => {
})

// import { CELL_DIAMETER, CELL_ORIGIN_OFFSET, WIDGET_DIAMETER } from '../../src/constants';
//
// const enzyme = require('enzyme');
// const React = require('react');
// const InsertZone = require('../../src/components/InsertZone').default;
//
// describe('insert zone', () => {
//   const rhythm = 'x----x--';
//   const index = 4;
//   const reactKeys = [1, 3, 4, 9, 0, 2, 7, 8];
//
//   test('renders an invisible circular clickable zone', () => {
//     const wrapper = enzyme.shallow(<InsertZone {...{ rhythm, index, reactKeys }} />);
//
//     expect(wrapper.find('circle').prop('fill')).toEqual('none');
//   });
//
//   test('animates when position changes', () => {
//     const wrapper = enzyme.shallow(<InsertZone {...{ rhythm, index, reactKeys }} />);
//
//     expect(wrapper.find('div').prop('style')).toEqual(
//       expect.objectContaining({
//         transition: expect.stringContaining('transform'),
//       }),
//     );
//   });
//
//   test('inserts a new rhythm cell upon click', () => {
//     const insertCell = jest.fn();
//     const wrapper = enzyme.shallow(<InsertZone {...{ insertCell, rhythm, index, reactKeys }} />);
//
//     wrapper.simulate('click');
//     expect(insertCell).toHaveBeenCalledWith(rhythm, index, reactKeys);
//   });
//
//   test('only the visible circle is clickable (and apparently so)', () => {
//     const wrapper = enzyme.shallow(<InsertZone {...{ rhythm, index, reactKeys }} />);
//
//     expect(wrapper.find('div').prop('style')).toEqual(
//       expect.objectContaining({
//         pointerEvents: 'none',
//       }),
//     );
//     expect(wrapper.find('circle').prop('style')).toEqual(
//       expect.objectContaining({
//         pointerEvents: 'all',
//         cursor: 'pointer',
//       }),
//     );
//   });
//
//   test('calculates the correct rotation from the index and rhythm length', () => {
//     const wrapper = enzyme.shallow(<InsertZone {...{ rhythm, index, reactKeys }} />);
//
//     const expectedRotation = ((5 * Math.PI) / 4) + (Math.PI / 8);
//     expect(wrapper.find('div').prop('style')).toEqual(
//       expect.objectContaining({
//         transform: `rotate(${expectedRotation}rad)`,
//       }),
//     );
//   });
//
//   test('calculates the correct scale from the rhythm length', () => {
//     const wrapper = enzyme.shallow(<InsertZone {...{ rhythm, index, reactKeys }} />);
//
//     const angle = (2 * Math.PI) / rhythm.length;
//     const expectedScale = (2 * (WIDGET_DIAMETER / 2) * Math.sin(angle / 2)) - CELL_DIAMETER;
//
//     expect(wrapper.find('div').prop('style')).toEqual(
//       expect.objectContaining({
//         width: `${expectedScale}px`,
//         height: `${expectedScale}px`,
//       }),
//     );
//     expect(wrapper.find('svg').prop('viewBox')).toEqual(`0 0 ${expectedScale} ${expectedScale}`);
//     expect(wrapper.find('circle').prop('r')).toEqual(expectedScale / 2);
//   });
//
//   test('calculates the correct center of the rhythm ring and positions relative to it', () => {
//     const wrapper = enzyme.shallow(<InsertZone {...{ rhythm, index, reactKeys }} />);
//
//     expect(wrapper.find('div').prop('style')).toEqual(
//       expect.objectContaining({
//         transformOrigin: `${CELL_ORIGIN_OFFSET}px ${CELL_ORIGIN_OFFSET}px`,
//         position: 'absolute',
//       }),
//     );
//   });
//
//   test('positions the center of the insert zone on the rhythm ring it rotates along', () => {
//     const wrapper = enzyme.shallow(<InsertZone {...{ rhythm, index, reactKeys }} />);
//
//     const angle = (2 * Math.PI) / rhythm.length;
//     const expectedScale = (2 * (WIDGET_DIAMETER / 2) * Math.sin(angle / 2)) - CELL_DIAMETER;
//
//     expect(wrapper.find('svg').prop('style')).toEqual(
//       expect.objectContaining({
//         position: 'absolute',
//         right: `${expectedScale / 2}px`,
//         bottom: `${expectedScale / 2}px`,
//       }),
//     );
//     expect(wrapper.find('circle').prop('cx')).toEqual(expectedScale / 2);
//     expect(wrapper.find('circle').prop('cy')).toEqual(expectedScale / 2);
//   });
// });

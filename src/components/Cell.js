import React from 'react';

export default ({ rhythm, rhythmCell, index, flipRhythmCell }) => {
  const onClick = () => flipRhythmCell(rhythm, index);
  return (
    <li {...{ onClick }}>
      { rhythmCell }
    </li>
  );
};

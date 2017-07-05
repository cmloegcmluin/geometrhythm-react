import React from 'react';

export default ({ rhythm, isOnset, index, flipCell }) => {
  const onClick = () => flipCell(rhythm, index);
  return (
    <li {...{ onClick }}>
      { isOnset ? 'x' : '-' }
    </li>
  );
};

import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { colorOptions } from '../data/colorOptionData';

const Format = () => {
  const [selected, setSelected] = useState(colorOptions[0]);
  return (
    <div>
      <Dropdown
        label="Select a color"
        selected={selected}
        onSelectedChange={setSelected}
        options={colorOptions}
      />
      <h3 style={{ color: `${selected.value}` }}>
        The statement is {selected.value}.
      </h3>
    </div>
  );
};

export default Format;

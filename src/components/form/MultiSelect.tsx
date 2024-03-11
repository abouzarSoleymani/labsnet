import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import * as React from 'react';

interface MultiSelectProps {
  label: string;
  fieldLable: any;
  fieldValue: any;
  value: any[];
  handleChange: any;
  items: any;
}

export const MultiSelect = ({
  label,
  value,
  handleChange,
  fieldValue,
  fieldLable,
  items,
}: MultiSelectProps) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id='demo-multiple-checkbox-label'>{label}</InputLabel>
      <Select
        labelId='demo-multiple-checkbox-label'
        id='demo-multiple-checkbox'
        multiple
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label='Tag' />}
        renderValue={selected => {
          return selected.map(item => item[fieldLable]).join(', ');
        }}
      >
        {items?.map((item: any) => (
          <MenuItem key={item[fieldValue]} value={item}>
            <Checkbox />
            <ListItemText primary={item[fieldLable]} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

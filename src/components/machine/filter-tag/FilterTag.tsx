import * as React from 'react';

export const FilterTag = ({
  items,
  title,
  fieldName,
  fieldValue,
  onSelectItem,
  selectedItems,
}: any) => {
  const isSelectedItem = (item: any) => {
    if (selectedItems && selectedItems.length) {
      return selectedItems.find((f: any) => f[fieldValue] === item[fieldValue]);
    }
    return false;
  };
  return (
    <div>
      <div className='pb-2 text-lg font-bold'>{title}</div>
      <div className='flex flex-wrap'>
        {items?.map((tag: any) => {
          return (
            <div
              role='presentation'
              key={tag[fieldValue]}
              onClick={() => onSelectItem(tag)}
              className={`m-1 cursor-pointer rounded-3xl  p-2  text-xs  ${isSelectedItem(tag) ? 'bg-primary-green-400 text-white' : 'bg-gray-100 text-primary-green-800'}`}
            >
              {tag[fieldName]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

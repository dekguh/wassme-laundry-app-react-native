import React from 'react';
import { View } from 'react-native';
import { IndexPath, Select, SelectItem } from '@ui-kitten/components';

export const SelectInput = ({ listSelect, getValue, ...props }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

    return (
        <Select
            {...props}
            placeholder='all'
            value={listSelect[selectedIndex.row].title}
            selectedIndex={selectedIndex}
            onSelect={index => {
                setSelectedIndex(index)
                getValue(listSelect[index.row].title)
            }}>
            {listSelect && listSelect.map((data, i) => (
                <SelectItem title={data.title} key={i} />
            ))}
        </Select>
    );
};
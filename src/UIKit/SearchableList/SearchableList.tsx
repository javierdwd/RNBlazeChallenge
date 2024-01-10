import React, {useState, useDeferredValue, useMemo} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewProps,
} from 'react-native';

import {Input} from '../../UIKit';

import {localStyles} from './styles';

type Option = {
  value: string;
  label: string;
};

type Props = {
  style?: StyleProp<ViewProps>;
  placeholder: string;
  options: Option[];
  defaultSelected?: string;
  onChange: (selectedOption: Option) => void;
};

type ListItemProps = {
  onPress: () => void;
} & Option;

function ListItem(props: ListItemProps) {
  return (
    <View style={localStyles.itemContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={localStyles.itemText}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
}

export function SearchableList(props: Props) {
  const [innerValueKey, setInnerValueKey] = useState(
    props.defaultSelected || '',
  );

  const [innerValue, setInnerValue] = useState(() => {
    if (!props.defaultSelected) {
      return '';
    }

    return (
      props.options.find(el => el.value === props.defaultSelected)?.label || ''
    );
  });

  const deferredInnerValue = useDeferredValue(innerValue);

  const handleChangeText = (text: string) => {
    setInnerValue(text);
  };

  const handleUserPressSelection = (option: Option) => {
    setInnerValue(option.label);
    setInnerValueKey(option.value);

    props.onChange(option);
  };

  // Filter options by user input.
  const filteredOptions = useMemo(() => {
    const lowerValue = deferredInnerValue.toLocaleLowerCase();

    if (!lowerValue.trim()) {
      return props.options;
    }
    return props.options.filter(
      el =>
        innerValueKey &&
        el.value !== innerValueKey &&
        el.label.toLowerCase().includes(lowerValue),
    );
  }, [deferredInnerValue, innerValueKey, props.options]);

  const handleSubmit = () => {
    if (filteredOptions.length === 1) {
      handleUserPressSelection(filteredOptions[0]);
    }
  };

  return (
    <View style={[localStyles.container, props.style]}>
      <Input
        placeholder={props.placeholder}
        onChangeText={handleChangeText}
        defaultValue={String(props.defaultSelected || '')}
        autoCapitalize={'words'}
        blurOnSubmit={true}
        value={innerValue}
        onSubmitEditing={handleSubmit}
        selectTextOnFocus={true}
      />

      <View style={localStyles.listAnchor}>
        <FlatList
          style={[localStyles.list]}
          data={filteredOptions}
          renderItem={({item}) => (
            <ListItem
              value={item.value}
              label={item.label}
              onPress={() => handleUserPressSelection(item)}
            />
          )}
          initialNumToRender={6}
          keyExtractor={option => option.value}
        />
      </View>
    </View>
  );
}

export default SearchableList;

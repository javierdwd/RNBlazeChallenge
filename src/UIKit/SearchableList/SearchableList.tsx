import React, {useState, useDeferredValue, useMemo} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewProps,
} from 'react-native';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();

  const [defaultOption] = useState<Option | undefined>(() =>
    props.options.find(el => el.value === props.defaultSelected),
  );

  const [innerLabel, setInnerLabel] = useState(
    () => defaultOption?.label || '',
  );

  const deferredInnerLabel = useDeferredValue(innerLabel);

  const handleChangeText = (text: string) => {
    setInnerLabel(text);
  };

  const handleUserPressSelection = (option: Option) => {
    setInnerLabel(option.label);

    props.onChange(option);
  };

  // Filter options by user input.
  const filteredOptions = useMemo(() => {
    const lowerLabel = deferredInnerLabel.toLowerCase();

    if (!lowerLabel.trim()) {
      return props.options;
    }

    return props.options.filter(
      el =>
        !(!!lowerLabel && el.label.toLowerCase() === lowerLabel) &&
        el.label.toLowerCase().includes(lowerLabel),
    );
  }, [deferredInnerLabel, props.options]);

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
        value={innerLabel}
        onSubmitEditing={handleSubmit}
        selectTextOnFocus={true}
        clearButtonMode="while-editing"
      />

      <View style={localStyles.listAnchor}>
        {!filteredOptions.length &&
          !!defaultOption &&
          defaultOption?.label !== innerLabel && (
            <Text>{t('searchable_list.no_matches')}</Text>
          )}

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

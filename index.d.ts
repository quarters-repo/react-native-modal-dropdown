import React from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';

declare module 'react-native-modal-dropdown' {
  interface PositionStyle {
    top?: number;
    left?: number;
    right?: number;
    width?: number;
    height?: number;
  }

  interface ModalDropdownProps<T> extends ViewProps {
    defaultValue?: string;
    options?: T[];
    scrollEnabled?: boolean;
    dropdownStyle?: StyleProp<ViewStyle>;
    renderRow?: (
      option: T,
      index: string,
      isSelected: boolean,
    ) => React.ReactNode;
    onDropdownWillShow?: () => void | boolean;
    onDropdownWillHide?: () => void | boolean;
    onSelect?: (index: number, option?: T) => void | boolean;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  declare class ModalDropdown extends React.Component<ModalDropdownProps, {}> {}
}

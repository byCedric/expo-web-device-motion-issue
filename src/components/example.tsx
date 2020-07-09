import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { PermissionResponse } from 'expo-permissions';

export const Example: React.FC<ExampleProps> = (props) => (
  <View style={styles.container}>
    {!props.permission?.granted && (
      <Button title='Grant permission' onPress={props.askPermission} />
    )}
    {showPermission(props) && (
      <View>
        <Text>{JSON.stringify(props.permission, null, 2)}</Text>
      </View>
    )}
    <View>{props.children}</View>
  </View>
);

export interface ExampleProps {
  permission?: PermissionResponse;
  askPermission: () => any;
  showPermission?: boolean;
}

function showPermission(props: ExampleProps) {
  if (props.showPermission === false) return false;
  if (props.showPermission === true) return true;
  return !props.permission?.granted;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

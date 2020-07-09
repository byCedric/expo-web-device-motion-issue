import React from 'react';
import { Text } from 'react-native';
import * as Permissions from 'expo-permissions';
import { usePermissions } from '@use-expo/permissions';
import { useDeviceMotion } from '@use-expo/sensors';
import { Example } from '../components/example';

export function DeviceMotionExample() {
  const [permission, askPermission] = usePermissions(Permissions.MOTION);
  const [motion, motionAvailable] = useDeviceMotion();

  return (
    <Example
      permission={permission}
      askPermission={askPermission}
    >
      {!motionAvailable
        ? <Text>unavailable</Text>
        : <Text>{JSON.stringify(motion, null, 2)}</Text>
      }
    </Example>
  );
}

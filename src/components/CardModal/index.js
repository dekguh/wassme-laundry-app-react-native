import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';

export const CardModal = ({ visible, text }) => {
  return (
    <View style={styled.container}>
      <Modal
        visible={visible}
        backdropStyle={styled.backdrop}
        >
        <Card disabled={true}>
          <Text>{text}</Text>
        </Card>
      </Modal>
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
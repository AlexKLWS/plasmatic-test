import React, { useState } from 'react';

import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppLogo from '~/assets/icons/AppLogo';
import AnimatedLoginBackground from '~/components/animatedLoginBackground/AnimatedLoginBackground';
import PhoneInput from '~/shared/components/PhoneInput';
import { scale } from '~/helpers/scale';
import Button from '~/shared/components/Button';
import styleSystem from '~/shared/styles';

type Props = {
  validateInput: (input: string) => void;
  onLoginPress: (input: string) => Promise<void>;
};

const LoginScreenView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | undefined>();

  const updateInputValue = (value: string) => {
    setInputValue(value);
  };

  const onLoginPressWrapper = async () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: styleSystem.colors.secondary.white }}>
      <AnimatedLoginBackground />
      <View style={styles.contentContainer}>
        <View style={styles.titleRow}>
          <Text style={styleSystem.typography.H1}>Login</Text>
          <AppLogo />
        </View>
        <KeyboardAvoidingView style={styles.bottomContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.inputLabelContainer}>
              <Text style={styleSystem.typography.label}>Phone Number</Text>
            </View>
            <PhoneInput value={inputValue} onChangeText={updateInputValue} onSubmit={onLoginPressWrapper} />
          </View>
          <Button text={'Login'} onPress={onLoginPressWrapper} />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: scale(16),
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scale(108),
    paddingHorizontal: scale(16),
  },
  bottomContainer: {
    paddingBottom: scale(32),
  },
  inputLabelContainer: {
    paddingBottom: scale(8),
    paddingLeft: scale(24),
  },
  inputContainer: {
    paddingBottom: scale(24),
  },
});

export default LoginScreenView;

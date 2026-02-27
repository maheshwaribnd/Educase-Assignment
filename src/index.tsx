import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './navigation/StackNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(false);

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackNavigation />
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({})
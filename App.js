import { StyleSheet, Text, View } from 'react-native';
import Titulo from './SRC/Components/Titulo';
import Kaua from './src/components/Kaua';
import Kauan from './src/components/Kauan';
import Isabel from './src/components/Isabel';
import Enviar from './SRC/Components/Enviar';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Kaua/>
      <Kauan/>
      <Isabel/>
      <Enviar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

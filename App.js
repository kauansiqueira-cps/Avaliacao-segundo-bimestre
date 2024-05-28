import { View } from 'react-native';
import Titulo from './SRC/Components/Titulo';
import Kaua from './src/components/Kaua';
import Kauan from './src/components/Kauan';
import Isabel from './src/components/Isabel';
import Enviar from './SRC/Components/Enviar';
import styles from './SRC/Components/Styles';


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


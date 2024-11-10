import { store } from './src/app/store';
import { Provider } from 'react-redux';

import { createSessionsTable } from './src/db';



createSessionsTable()
  .then((result)=>console.log("Tabla creada o inicializada con éxito: ", result))
  .catch((error)=>console.log("Error al crear la tabla Sessions: ", error))

 

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [loaded, error] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Variable.ttf'),
    'PressStart2P': require('./assets/fonts/PressStart2P-Static.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
      <StatusBar style="light" />
    </Provider>
  );
}

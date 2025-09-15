import { AppRegistry, Text } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import persistedStore, { store } from './src/Redux/Store';
import { Provider } from 'react-redux'

Text.defaultProps = { maxFontSizeMultiplier: 1.2 };

const Root = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PersistGate persistor={persistedStore}>
                <Provider store={store}>
                    <App />
                </Provider>
            </PersistGate>
        </GestureHandlerRootView>
    )
}
export default Root
AppRegistry.registerComponent(appName, () => Root)
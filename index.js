import { AppRegistry, Text } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

Text.defaultProps = { maxFontSizeMultiplier: 1.2 };

const Root = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <App />
        </GestureHandlerRootView>
    )
}
export default Root
AppRegistry.registerComponent(appName, () => Root)
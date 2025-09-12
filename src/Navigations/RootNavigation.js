// Navigation/RootNavigation.js
import { createNavigationContainerRef, CommonActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function routeNavigation(index, screenName, params = {}) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index,
                routes: [{ name: screenName, params }],
            })
        );
    }
}

export function navigate(screenName, params = {}) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(screenName, params);
    }
}

export function resetToBottomTab(tabName) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'FlowNavigation',
                        state: {
                            routes: [
                                {
                                    name: 'DrawerNavigation',
                                    state: {
                                        routes: [
                                            {
                                                name: 'BottomNavigations',
                                                state: {
                                                    routes: [{ name: tabName }],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            })
        );
    }
}

export const BottomRouteNavigation = (stackName, screen, screen2) => {
    navigationRef.navigate(stackName, {
        screen: screen, params: {
            screen: screen2
        }
    })
}
import useSWR from 'swr';
import { useEffect } from 'react';
import GlassX, { PersistedState, useStore } from 'glassx';

import Router from './utils/router';

GlassX.store({
    state: {
        screen: 'Home',
    },
    plugins: [
        new PersistedState({
            key: 'leaf-devtools',
            exclude: ['screen'],
        }),
    ],
});

function App() {
    const [url, setUrl] = useStore('url');
    const [screen, setScreen] = useStore('screen');
    const [, setData] = useStore('data');

    const { data: appData, error } = useSWR(`${url}/leafDevToolsEventHook`);

    useEffect(() => {
        setScreen('Home');
        setUrl(window.location.origin);
    }, []);

    useEffect(() => {
        if (error) {
            setScreen('LeafNotFound');
        }

        if (appData) {
            setData(appData);
        }
    }, [appData, error]);

    return Router(screen);
}

export default App;

import HomeScreen from '../pages/HomeScreen';
import ConsoleScreen from '../pages/ConsoleScreen';
import DependenciesScreen from '../pages/DependenciesScreen';
import InsightsScreen from '../pages/InsightsScreen';
import LeafNotFound from '../pages/LeafNotFound';
import LoadingScreen from '../pages/LoadingScreen';
import RoutesScreen from '../pages/RoutesScreen';

const Router = (screen: string) => {
    switch (screen) {
        case 'Home':
            return <HomeScreen />;
        case 'Console':
            return <ConsoleScreen />;
        case 'Loading':
            return <LoadingScreen />;
        case 'Dependencies':
            return <DependenciesScreen />;
        case 'Routes':
            return <RoutesScreen />;
        case 'Insights':
            return <InsightsScreen />;
        case 'LeafNotFound':
            return <LeafNotFound />;
        default:
            return <HomeScreen />;
    }
};

export default Router;

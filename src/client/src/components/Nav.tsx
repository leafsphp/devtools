import { useStore } from 'glassx';
import { Home, Terminal, Package, Layers, PieChart } from 'react-feather';

const screens = [
    {
        name: 'Home',
        icon: Home,
    },
    {
        name: 'Insights',
        icon: PieChart,
    },
    {
        name: 'Dependencies',
        icon: Package,
    },
    {
        name: 'Console',
        icon: Terminal,
    },
    {
        name: 'Routes',
        icon: Layers,
    },
];

const Nav = () => {
    const [screen, setScreen] = useStore('screen');

    return (
        <nav className="h-full w-[100px] border-r border-blue-200/10 flex flex-col justify-start items-center fixed">
            <img
                src="https://leafphp.dev/logo-circle.png"
                className="w-12 h-12 mt-5"
                alt="logo"
            />
            <hr className="border-b border-blue-200/10 w-1/2 mt-6 mb-8" />
            <div className="main-nav flex flex-col gap-10">
                {screens.map(({ name, icon: Icon }) => (
                    <Icon
                        className="cursor-pointer"
                        onClick={() => setScreen(name)}
                        color={screen === name ? '#3eaf7c' : '#aaa'}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Nav;

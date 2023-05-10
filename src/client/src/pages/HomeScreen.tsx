import useSWR from 'swr';
import { useStore } from 'glassx';
import {
    DownloadCloud,
    DollarSign,
    PieChart,
    Package,
    Layers,
    Terminal,
    Star,
    BookOpen,
    GitHub,
} from 'react-feather';

import Card from '../components/Card';

const HomeScreen = () => {
    const [data] = useStore('data');
    const [, setScreen] = useStore('screen');

    const { data: versionData } = useSWR(
        'https://repo.packagist.org/p2/leafs/leaf.json'
    );

    const leafInfo = versionData?.packages['leafs/leaf'];

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="flex items-center mb-10">
                <img
                    src="https://leafphp.dev/logo-circle.png"
                    className="w-16 h-16 mr-4"
                    alt="logo"
                />
                <div>
                    <div className="flex items-center">
                        <h1 className="text-4xl font-bold">Leaf DevTools</h1>
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 mb-2 ml-1 px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                            Beta
                        </span>
                    </div>
                    <p className="text-gray-300">v0.0.0 - 21st April, 2023</p>
                </div>
            </div>

            {data && (
                <>
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 justify-center gap-3">
                        <Card>
                            <DownloadCloud />
                            <h6 className="mt-2 font-bold tracking-tight">
                                {data?.app?.leafVersion}
                            </h6>
                            {data?.app?.leafVersion !==
                                leafInfo?.[0]?.version &&
                            data?.app?.leafVersion !== 'dev-v3.x' ? (
                                <span className="bg-green-100/25 text-green-100 text-xs font-bold mr-2 mb-2 ml-1 px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                    Get {leafInfo?.[0]?.version}
                                </span>
                            ) : (
                                <p className="font-normal text-xs text-gray-500">
                                    Leaf Version
                                </p>
                            )}
                        </Card>
                        <Card className="md:hidden lg:flex">
                            <DollarSign />
                            <h6 className="mt-2 font-bold tracking-tight">
                                {data?.app?.phpVersion}
                            </h6>
                            <p className="font-normal text-xs text-gray-500">
                                PHP Version
                            </p>
                        </Card>
                        <Card onClick={() => setScreen('Insights')}>
                            <PieChart />
                            <h6 className="mt-2 font-bold tracking-tight">
                                Insights
                            </h6>
                            <p className="font-normal text-xs text-gray-500">
                                View All
                            </p>
                        </Card>
                        <Card onClick={() => setScreen('Dependencies')}>
                            <Package />
                            <h6 className="mt-2 font-bold tracking-tight">
                                {
                                    Object.keys(
                                        data?.app?.dependencies || {}
                                    )?.filter((i: string) =>
                                        i?.includes('leafs/')
                                    )?.length
                                }{' '}
                                Module
                                {Object.keys(
                                    data?.app?.dependencies || {}
                                )?.filter((i: string) => i?.includes('leafs/'))
                                    ?.length !== 1 && 's'}
                            </h6>
                            <p className="font-normal text-xs text-gray-500">
                                View all
                            </p>
                        </Card>
                        <Card onClick={() => setScreen('Console')}>
                            <Terminal />
                            <h6 className="mt-2 font-bold tracking-tight">
                                Console.logs
                            </h6>
                            <p className="font-normal text-xs text-gray-500">
                                from your app
                            </p>
                        </Card>
                        <Card onClick={() => setScreen('Routes')}>
                            <Layers />
                            <h6 className="mt-2 font-bold tracking-tight">
                                {data?.app?.routes?.length - 1} Route
                                {data?.app?.routes?.length - 1 !== 1 && 's'}
                            </h6>
                            <p className="font-normal text-xs text-gray-500">
                                View all
                            </p>
                        </Card>
                    </div>

                    <div className="flex gap-8 mt-16">
                        <a
                            href="https://github.com/leafsphp/chrome-devtools"
                            className="flex items-center text-gray-400 hover:text-gray-300 transition-all ease-in-out"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Star className="mr-1" size={15} /> Star on GitHub
                        </a>
                        <a
                            href="http://github.com/leafsphp"
                            className="flex items-center text-gray-400 hover:text-gray-300 transition-all ease-in-out"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHub className="mr-1" size={15} /> Leaf on GitHub
                        </a>
                        <a
                            href="http://leafphp.dev"
                            className="flex items-center text-gray-400 hover:text-gray-300 transition-all ease-in-out"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BookOpen className="mr-1" size={15} /> Leaf Docs
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomeScreen;

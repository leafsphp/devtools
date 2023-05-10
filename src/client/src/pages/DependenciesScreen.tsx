import { useStore } from 'glassx';
import { Info, Package, Link, User, Box } from 'react-feather';

import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const DependenciesScreen = () => {
    const [data] = useStore('data');

    const leafModules: any[] = [];
    const externalDependencies: any[] = [];

    if (!data?.app?.dependenciesLocal) {
        Object.keys(data?.app?.dependencies)?.map((i: string) => {
            if (i?.includes('leafs/')) {
                leafModules.push({ name: i, ...data.app.dependencies[i] });
                return;
            }

            if (!i?.includes('leafs/') && i !== '__root__') {
                externalDependencies.push({
                    name: i,
                    ...data.app.dependencies[i],
                });
                return;
            }
        });
    } else {
        const { packages } = JSON.parse(data.app.dependenciesLocal);

        packages?.map((i: any) => {
            if (i?.name?.includes('leafs/')) {
                leafModules.push({ ...i, pretty_version: i.version });
                return;
            }

            if (!i?.name?.includes('leafs/')) {
                externalDependencies.push({ ...i, pretty_version: i.version });
                return;
            }
        });
    }

    return (
        <PageLayout>
            <div className="pt-5">
                <div className="px-5">
                    <div className="flex items-center">
                        <Package size={32} className="mr-3" />
                        <div>
                            <h1 className="text-2xl font-bold">
                                Application Dependencies
                            </h1>
                            <div className="text-gray-400">
                                {leafModules?.length +
                                    externalDependencies?.length}{' '}
                                Package
                                {leafModules?.length +
                                    externalDependencies?.length !==
                                    1 && 's'}{' '}
                                installed
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-300 text-xs flex items-center mt-5 bg-green-900/50 py-2 px-3 rounded-md">
                        <Info size={12} className="mr-1" /> This screen provides
                        insights into your application dependencies.
                    </p>
                </div>

                <div className="console-section mt-6 border-t border-blue-200/10 p-5">
                    <h2 className="text-md font-bold uppercase">
                        Leaf Modules ({leafModules?.length})
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                        {leafModules?.map((item: any) => (
                            <Card className="max-w-full items-start">
                                <div className="grid grid-cols-[4fr,1fr] justify-between items-center capitalize w-full">
                                    <div>
                                        <h3 className="text-lg">
                                            {item?.name?.replace('leafs/', '')}
                                        </h3>
                                        <p className="text-gray-400 lowercase">
                                            {item?.description}
                                        </p>
                                    </div>

                                    <div className="ml-auto">
                                        <img
                                            src="https://leafphp.dev/logo-circle.png"
                                            className="w-8 h-8"
                                            alt="logo"
                                        />
                                    </div>
                                </div>

                                <div className="w-full mt-4">
                                    <div className="flex items-center">
                                        <Link
                                            color="#aaaaba"
                                            size={12}
                                            className="mr-2"
                                        />
                                        <a
                                            href={
                                                item?.homepage ||
                                                item?.source?.url
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:underline truncate"
                                        >
                                            {item?.homepage ||
                                                item?.source?.url}
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <User
                                            color="#aaaaba"
                                            size={12}
                                            className="mr-2"
                                        />
                                        <a
                                            href={item?.authors?.[0]?.homepage}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:underline truncate"
                                        >
                                            {item?.authors?.[0]?.name}
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <Box
                                            color="#aaaaba"
                                            size={12}
                                            className="mr-2"
                                        />
                                        <span className="text-gray-400">
                                            {item?.pretty_version}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <h2 className="text-md font-bold mt-7 uppercase">
                        External Dependencies ({externalDependencies?.length})
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                        {externalDependencies?.map((item: any) => (
                            <Card className="max-w-full items-start">
                                <div className="grid grid-cols-[4fr,1fr] justify-between items-center capitalize w-full">
                                    <div>
                                        <h3 className="text-lg">
                                            {item?.name}
                                        </h3>
                                        <p className="text-gray-400 lowercase">
                                            {item?.description}
                                        </p>
                                    </div>

                                    <div className="ml-auto">
                                        <Package />
                                    </div>
                                </div>

                                <div className="w-full mt-4">
                                    <div className="flex items-center">
                                        <Link
                                            color="#aaaaba"
                                            size={12}
                                            className="mr-2"
                                        />
                                        <a
                                            href={
                                                item?.homepage ||
                                                item?.source?.url
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:underline truncate"
                                        >
                                            {item?.homepage ||
                                                item?.source?.url}
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <User
                                            color="#aaaaba"
                                            size={12}
                                            className="mr-2"
                                        />
                                        <a
                                            href={item?.authors?.[0]?.homepage}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:underline truncate"
                                        >
                                            {item?.authors?.[0]?.name}
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <Box
                                            color="#aaaaba"
                                            size={12}
                                            className="mr-2"
                                        />
                                        <span className="text-gray-400">
                                            {item?.pretty_version}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default DependenciesScreen;

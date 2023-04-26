<?php

namespace Leaf;

/**
 * Server components for Leaf DevTools
 */
class DevTools
{
    protected static $logs = [];

    /**
     * Get the console logs
     */
    public static function getLogs()
    {
        $content = file_exists(__DIR__ . '/.leafdevtools.log') ? file_get_contents(__DIR__ . '/.leafdevtools.log') : '[]';
        $content = json_decode($content, true);

        return $content;
    }

    /**
     * Log a message to the console
     */
    public static function console($message, $type = 'log')
    {
        $content = file_exists(__DIR__ . '/.leafdevtools.log') ? file_get_contents(__DIR__ . '/.leafdevtools.log') : '[]';
        $content = json_decode($content, true);
        $content[] = [$type, $message];

        file_put_contents(__DIR__ . '/.leafdevtools.log', json_encode($content));
    }

    /**
     * Grant Leaf DevTools access to your Leaf application
     */
    public static function install()
    {
        /**@var \Leaf\App */
        $leafInstance = \Leaf\Config::get('app.instance') ?? app();

        $leafInstance->get('/leafDevToolsEventHook', function () use ($leafInstance) {
            $action = $leafInstance->request()->get('action');

            if ($action === 'clearLogs') {
                file_put_contents(__DIR__ . '/.leafdevtools.log', '[]');
            }

            $leafInstance
                ->response()
                ->withHeader([
                    'Cache-Control' => 'no-cache',
                ])
                ->json([
                    'app' => [
                        'name' => basename(getcwd()),
                        'phpVersion' => phpversion(),
                        'leafVersion' => \Composer\InstalledVersions::getPrettyVersion('leafs/leaf') ?? json_decode(file_get_contents(getcwd() . '/composer.json') ?? '{}', true)['require']['leafs/leaf'] ?? 'UNKNOWN',
                        'config' => \Leaf\Config::get(),
                        'dependencies' => \Composer\InstalledVersions::getAllRawData()[0]['versions'] ?? [],
                        'dependenciesLocal' => file_get_contents(getcwd() . '/vendor/composer/installed.json') ?? [],
                        'routes' => $leafInstance->routes(),
                    ],
                    'server' => $_SERVER,
                    'request' => (new \Leaf\Http\Request())->body(),
                    'session' => $_SESSION ?? null,
                    'cookies' => $_COOKIE,
                    'headers' => (new \Leaf\Http\Headers())->all(),
                    'env' => getenv(),
                    'console' => \Leaf\DevTools::getLogs(),
                ]);
        });
    }
}

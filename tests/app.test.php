<?php

use Leaf\DevTools;

test('installs on demand', function () {
    DevTools::install();

    expect(app()->routes())->toBeArray();
    expect(count(app()->routes()))->toBe(1);
    expect(app()->routes()[0]['pattern'])->toBe('/leafDevToolsEventHook');
});

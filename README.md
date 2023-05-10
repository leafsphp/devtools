<!-- markdownlint-disable no-inline-html -->
<p align="center">
  <br><br>
  <img src="https://leafphp.dev/logo-circle.png" height="100"/>
  <br>
</p>

<h1 align="center">Leaf DevTools</h1>

<p align="center">
	<a href="https://packagist.org/packages/leafs/devtools"
		><img
			src="https://poser.pugx.org/leafs/devtools/v/stable"
			alt="Latest Stable Version"
	/></a>
	<a href="https://packagist.org/packages/leafs/devtools"
		><img
			src="https://poser.pugx.org/leafs/devtools/downloads"
			alt="Total Downloads"
	/></a>
	<a href="https://packagist.org/packages/leafs/devtools"
		><img
			src="https://poser.pugx.org/leafs/devtools/license"
			alt="License"
	/></a>
</p>
<br />
<br />

Leaf DevTools provides a set of tools for debugging and understanding your Leaf applications. At the Core, the DevTools provides a visual tool with a clean and intuitive UI holding information about your Leaf application, and a light-weight library that you can use to interact with the devtools frontend.

## Basic Usage

```php
<?php

require __DIR__ . '/vendor/autoload.php';

\Leaf\DevTools::install();

app()->get('/', function () {
  response()->json([
    'message' => 'Welcome!'
  ]);
});

app()->run();
```

After this, you can access the devtools at `<app-url>/leafDevTools`. For your own convenience, you can add a route to the devtools like so:

```php
<?php

require __DIR__ . '/vendor/autoload.php';

\Leaf\DevTools::install('/customDevToolsRoute');

...
```

This will serve the devtools at `<app-url>/customDevToolsRoute`.

## Overview

![Leaf DevTools](https://user-images.githubusercontent.com/26604242/235434208-82ccdd87-6289-43fd-b93b-5fa09e6acd20.jpg)

## 💬 Stay In Touch

-   [Twitter](https://twitter.com/leafphp)
-   [Join the forum](https://github.com/leafsphp/leaf/discussions/37)
-   [Chat on discord](https://discord.com/invite/Pkrm9NJPE3)

## 📓 Learning Leaf 3

-   Leaf has a very easy to understand [documentation](https://leafphp.dev) which contains information on all operations in Leaf.
-   You can also check out our [youtube channel](https://www.youtube.com/channel/UCllE-GsYy10RkxBUK0HIffw) which has video tutorials on different topics
-   You can also learn from [codelabs](https://codelabs.leafphp.dev) and contribute as well.

## 😇 Contributing

We are glad to have you. All contributions are welcome! To get started, familiarize yourself with our [contribution guide](https://leafphp.dev/community/contributing.html) and you'll be ready to make your first pull request 🚀.

To report a security vulnerability, you can reach out to [@mychidarko](https://twitter.com/mychidarko) or [@leafphp](https://twitter.com/leafphp) on twitter. We will coordinate the fix and eventually commit the solution in this project.

## 🤩 Sponsoring Leaf

Your cash contributions go a long way to help us make Leaf even better for you. You can sponsor Leaf and any of our packages on [open collective](https://opencollective.com/leaf) or check the [contribution page](https://leafphp.dev/support/) for a list of ways to contribute.

And to all our [existing cash/code contributors](https://leafphp.dev#sponsors), we love you all ❤️

## 🤯 Links/Projects

-   [Leaf Docs](https://leafphp.dev)
-   [Leaf MVC](https://mvc.leafphp.dev)
-   [Leaf API](https://api.leafphp.dev)
-   [Leaf CLI](https://cli.leafphp.dev)
-   [Aloe CLI](https://leafphp.dev/aloe-cli/)

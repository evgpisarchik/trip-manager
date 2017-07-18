## Installation
1. clone the repository and go to its main directory
2. run the following console command to install dependencies (for testing) and generate autoloader via [Composer](https://getcomposer.org/)
```
composer install
```
3. make sure bin/console is executable
```
chmod +x bin/console
```
## Running
run the following console command
```
bin/console trip-sorter misc/boarding-cards.json
```

## Testing
run the following console commands

[PHPUnit](https://phpunit.de/) (Unit testing)
```
vendor/bin/phpunit -c tests/unit/phpunit.xml
```
[Behat](http://docs.behat.org/en/latest/) (BDD testing)
```
vendor/bin/behat -c tests/bdd/behat.yml
```

## Documentation
documentation generated via [Sami](https://github.com/FriendsOfPHP/Sami) can be found in directory **docs**
<?php

namespace App\Component\Console\Command;

/**
 * Class AbstractCommand.
 * Parent for console commands.
 * @package App\Component\Console
 */
abstract class AbstractCommand implements CommandInterface
{
    /**
     * Method used to perform operations of the command
     * @return mixed
     */
    abstract public function run();
}
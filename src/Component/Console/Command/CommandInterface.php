<?php

namespace App\Component\Console\Command;

/**
 * Interface CommandInterface
 * @package App\Component\Console
 */
interface CommandInterface
{
    /**
     * Method used to perform operations of the command.
     * @return mixed
     */
    public function run();
}
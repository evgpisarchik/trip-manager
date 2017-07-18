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

    /**
     * Return command name used in terminal.
     * @return string
     */
    public function getName(): string;

    /**
     * Arguments used to run the command.
     * @param array ...$args
     * @return mixed
     */
    public function setArgs(string...$args);

    /**
     * Returns output produced by the command.
     * @return string
     */
    public function getOutput(): string;
}
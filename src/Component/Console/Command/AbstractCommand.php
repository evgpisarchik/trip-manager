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
     * Command name used in terminal.
     * @var string
     */
    protected $name;

    /**
     * Output produced by the command.
     * @var string
     */
    protected $output;

    /**
     * @inheritdoc
     */
    abstract public function run();

    /**
     * @inheritdoc
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @inheritdoc
     */
    abstract public function setArgs(string...$args);

    /**
     * @inheritdoc
     */
    public function getOutput(): string
    {
        return $this->output;
    }
}
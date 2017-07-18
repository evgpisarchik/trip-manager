<?php

namespace App\Component\Console;

use App\Component\DependencyInjection\DependencyInjection as DI;
use App\Component\Console\Command\CommandInterface;

/**
 * Class Console.
 * Bridge between console client and commands.
 * @package App\Component\Console
 */
class Console
{
    /**
     * List of command listening console input.
     * @var CommandInterface[]
     */
    protected $registredCommands = [];

    /**
     * @param CommandInterface[] $registredCommands
     * @return Console
     */
    public function setRegistredCommands(array $registredCommands): Console
    {
        $this->registredCommands = $registredCommands;
        return $this;
    }

    /**
     * Perform operations on console input.
     * @param string[] List of arguments passed from command line.
     * @return $this
     */
    public function run(array $argv)
    {
        $commandName = array_shift($argv);
        try {
            /** @var  $command CommandInterface */
            $command = $this->getRegisteredCommandByName($commandName)
                ->setArgs(...$argv)
                ->run();
        } catch (\Exception $e) {
            throw new \RuntimeException(sprintf('Error happened on attempt to execute command "%s"', $commandName));
        }
        $this->output($command->getOutput());
        return $this;
    }

    /**
     * Writes given string to console output.
     * @param string $outputText String that should be written to console.
     * @return $this
     */
    private function output(string $outputText)
    {
        fwrite(STDOUT, $outputText);
        return $this;
    }

    /**
     * Gets command object by string representation of class name.
     * @param string $commandName Command name string representation.
     */
    private function getRegisteredCommandByName(string $commandName)
    {
        /** @var  $registredCommand CommandInterface */
        foreach ($this->registredCommands as $registredCommand) {
            if (strcasecmp($registredCommand->getName(), $commandName) == 0) {
                return $registredCommand;
            }
        }

        throw new \RuntimeException(sprintf('Console: Registred command "%s" not found', $commandName));
    }
}
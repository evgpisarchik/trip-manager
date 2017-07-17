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
     * Perform operations on console input.
     * @param string[] List of arguments passed from command line.
     * @return $this
     */
    public function run(array $argv)
    {
        $commandOutputText = $this->runCommand(array_shift($argv), $argv);
        $this->output($commandOutputText);

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
     * Add command to  console so that it becomes processed when invoked.
     * @param string $commandClassName Class name of registred command.
     * @return $this
     */
    public function registerCommand(string $commandClassName)
    {
        $this->registredCommands[] = [array_reverse(explode('\\', $commandClassName))[0] => $commandClassName];
        return $this;
    }

    /**
     * Gets command object by string representation of class name.
     * @param string $commandName Command name string representation.
     */
    private function getRegisteredCommandClass(string $commandName)
    {
        foreach ($this->registredCommands as $registredCommandClassName) {
            if (isset($registredCommandClassName[$commandName])) {
                return $registredCommandClassName[$commandName];
            }
        }

        throw new \RuntimeException(sprintf('Console: Registred command "%s" not found', $commandName));
    }

    /**
     * Run command by name using given array of arguments.
     * @param string $commandName String representation of registred command.
     * @param array $commandArgs Arguments that should be passed to the command.
     * @return mixed
     */
    private function runCommand(string $commandName, array $commandArgs)
    {
        try {
            /** @var  $command CommandInterface */
            $command = DI::getInstanceOf($this->getRegisteredCommandClass($commandName), $commandArgs);
            return $command->run();
        } catch (\Exception $e) {
            throw new \RuntimeException(sprintf('Error happened on attempt to execute command "%s"', $commandName));
        }
    }
}
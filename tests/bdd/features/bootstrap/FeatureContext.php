<?php
use Behat\Behat\Context\ContextInterface;
use Behat\Gherkin\Node\PyStringNode;

/**
 * Class FeatureContext
 */
class FeatureContext implements ContextInterface
{
    private $output;


    /** @When /^I run "([^"]*)"$/ */
    public function iRun($command)
    {
        exec('cd ' . dirname(__FILE__) . str_repeat('/..', 4) . ' && ' . $command, $output);
        $this->output = trim(implode("\n", $output));
    }

    /** @Then /^I should get:$/ */
    public function iShouldGet(PyStringNode $string)
    {
        if ((string)$string !== $this->output) {
            throw new Exception(
                "Actual output is:\n" . $this->output
            );
        }
    }
}

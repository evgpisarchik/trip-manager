<?php

namespace App\Tests\Unit\Entity\Transportation;

use App\Entity\Transportation\Train;
use PHPUnit\Framework\TestCase;

/**
 * Class TrainTest
 * @package App\Tests\Unit\Entity\Transportation
 */
class TrainTest extends TestCase
{
    /**
     * @var $train Train;
     */
    protected $train;

    public function setUp()
    {
        $this->train = (new Train())
            ->setDeparture('A')
            ->setArrival('B')
            ->setSeat('8C')
            ->setTransportationNumber('8C');
    }

    public function testGetMessage()
    {
        $message = $this->train->getMessage();
        $this->assertTrue(strlen($message) > 0);
        $this->assertContains($this->train->getSeat(), $message);
    }
}

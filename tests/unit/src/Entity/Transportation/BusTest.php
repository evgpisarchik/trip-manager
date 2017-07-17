<?php

namespace App\Tests\Unit\Entity\Transportation;

use App\Entity\Transportation\Bus;
use PHPUnit\Framework\TestCase;

/**
 * Class BusTest
 * @package App\Tests\Unit\Entity\Transportation
 */
class BusTest extends TestCase
{
    /**
     * @var $bus Bus;
     */
    protected $bus;

    public function setUp()
    {
        $this->bus = (new Bus())
            ->setDeparture('A')
            ->setArrival('B');
    }

    public function testGetMessage()
    {
        $message = $this->bus->getMessage();
        $this->assertTrue(strlen($message) > 0);
        $this->assertContains(Bus::MESSAGE_NO_SEAT, $message);

    }
}

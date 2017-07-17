<?php

namespace App\Tests\Unit\Entity\Transportation;

use App\Entity\Transportation\Plane;
use PHPUnit\Framework\TestCase;

/**
 * Class PlaneTest
 * @package App\Tests\Unit\Entity\Transportation
 */
class PlaneTest extends TestCase
{
    /**
     * @var $plane Plane;
     */
    protected $plane;

    public function setUp()
    {
        $this->plane = (new Plane())
            ->setDeparture('A')
            ->setArrival('B')
            ->setSeat('8A')
            ->setGate('8A')
            ->setTransportationNumber('8A');
    }

    public function testGetMessage()
    {
        $message = $this->plane->getMessage();
        $this->assertTrue(strlen($message) > 0);
        $this->assertContains(Plane::MESSAGE_NO_BAGGAGE_TICKET, $message);
    }

    public function testBaggadeMessage()
    {
        $this->plane->setBaggage("7C");
        $message = $this->plane->getMessage();
        $this->assertContains($this->plane->getBaggage(), $message);
    }
}

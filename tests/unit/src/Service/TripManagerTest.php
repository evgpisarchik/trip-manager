<?php

namespace App\Tests\Unit\Service;

use App\Entity\Transportation\Plane;
use App\Entity\Transportation\Bus;
use App\Entity\Transportation\TransportationInterface;
use App\Service\TripManager\TripManager;
use PHPUnit\Framework\TestCase;

/**
 * Class TripManagerTest
 * @package App\Tests\Unit\Service
 */
class TripManagerTest extends TestCase
{
    /**
     * @var $tripManager TripManager
     */
    protected $tripManager;

    protected $transportations;

    public function setUp()
    {
        $this->tripManager = new TripManager();
        $this->transportations = [
            (new Plane())
                ->setDeparture('C')
                ->setArrival('D')
                ->setSeat('8A')
                ->setGate('8A')
                ->setTransportationNumber('8A'),
            (new Bus())
                ->setDeparture('A')
                ->setArrival('B'),
            (new Bus())
                ->setDeparture('B')
                ->setArrival('C')
        ];
    }

    public function testSortTransportations()
    {
        /** @var  $previousTransportation TransportationInterface*/
        $previousTransportation = null;
        /** @var  $transportation TransportationInterface*/
        foreach($this->tripManager->sortTransportations($this->transportations) as $transportation){
            $this->assertInstanceOf(TransportationInterface::class, $transportation);
            if (isset($previousTransportation)) {
                $this->assertEquals($previousTransportation->getArrival(), $transportation->getDeparture());
            }
            $previousTransportation = $transportation;
        }
    }

    public function testGetTranspotationsMessage()
    {
        $sortedTransportations = $this->tripManager->sortTransportations($this->transportations);
        $transportationsMessage = $this->tripManager->getTranspotationsMessage($this->transportations);
        $this->assertContains(Plane::MESSAGE_FINAL_DESTINATION, $transportationsMessage);
        $this->assertContains(reset($sortedTransportations)->getMessage(), $transportationsMessage);
    }
}
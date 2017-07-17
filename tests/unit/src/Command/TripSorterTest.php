<?php

namespace App\Tests\Unit\Command;

use App\Command\TripSorter\TripSorter;
use App\Service\TripManager\TripManager;
use PHPUnit\Framework\TestCase;

/**
 * Class TripSorterTest
 * @package App\Tests\Unit\Command
 */
class TripSorterTest extends TestCase
{
    const DUMMY_FILENAME = 'dummy_filename.txt';

    /**
     * @var $tripSorter TripSorter
     */
    protected $tripSorter;

    public function setUp()
    {
        $this->tripSorter = new TripSorter(static::DUMMY_FILENAME);
    }

    public function testRun()
    {
        // create tripSorter mock
        $tripSorterMock = $this->getMockBuilder(TripSorter::class)
            ->disableOriginalConstructor()
            ->setMethods(['deserializeTransportations'])
            ->getMock();

        $tripSorterMock
            ->expects($this->any())
            ->method('deserializeTransportations')
            ->willReturn([]);


        // create tripSorter mock
        $tripManagerMock = $this->createMock(TripManager::class);
        $tripManagerMockDummyOutput = 'dummy transpotations message';
        $tripManagerMock
            ->method('getTranspotationsMessage')
            ->willReturn($tripManagerMockDummyOutput);

        $tripSorterMock->setTripManager($tripManagerMock);

        $this->assertEquals($tripManagerMockDummyOutput, $tripSorterMock->run());
    }
}

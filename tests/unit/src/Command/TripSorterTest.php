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
    const DUMMY_TRANSPOTATIONS_MESSAGE = 'dummy transpotations message';

    /**
     * @var $tripSorter TripSorter
     */
    protected $tripSorter;

    public function setUp()
    {
        $this->tripSorter = new TripSorter();
    }

    public function testRun()
    {
        /** @var  $tripSorterMock TripSorter */
        $tripSorterMock = $this->getMockBuilder(TripSorter::class)
            ->disableOriginalConstructor()
            ->setMethods(['deserializeTransportations'])
            ->getMock();

        $tripSorterMock
            ->expects($this->any())
            ->method('deserializeTransportations')
            ->willReturn([]);


        /** @var  $tripManagerMock TripManager */
        $tripManagerMock = $this->createMock(TripManager::class);
        $tripManagerMock
            ->method('getTranspotationsMessage')
            ->willReturn(static::DUMMY_TRANSPOTATIONS_MESSAGE);

        $tripSorterMock->setTripManager($tripManagerMock)
            ->setArgs(static::DUMMY_FILENAME)
            ->run();

        $this->assertEquals(static::DUMMY_TRANSPOTATIONS_MESSAGE, $tripSorterMock->getOutput());
    }
}

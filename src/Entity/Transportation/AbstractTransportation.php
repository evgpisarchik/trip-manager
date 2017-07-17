<?php

namespace App\Entity\Transportation;

use App\Component\Serializer\Discriminator\DiscriminableInterface;
use App\Component\Serializer\Discriminator\Discriminator;
use App\Component\Serializer\SerializerableInterface;
use App\Component\DependencyInjection\DependencyInjection as DI;

/**
 * Class AbstractTransportation.
 * Parent for all transportations.
 * @package App\Entity\Transportation
 */
abstract class AbstractTransportation
    implements TransportationInterface, SerializerableInterface, DiscriminableInterface
{
    /**
     * Message returned when final destination reached.
     */
    const MESSAGE_FINAL_DESTINATION = 'You have arrived at your final destination.';

    /**
     * Defines which field should be used as discriminator.
     */
    const DISCRIMINATOR_FIELD = 'Transportation';

    /**
     * Defines discriminator mapping.
     */
    const DISCRIMINATOR_MAP = [
        'train' => Train::class,
        'bus' => Bus::class,
        'plane' => Plane::class,
    ];

    /**
     * Point of departure.
     * @var string
     */
    protected $departure;

    /**
     * Point of arrival.
     * @var string
     */
    protected $arrival;

    /**
     * Number of transportation.
     * @var string
     */
    protected $transportationNumber;

    /**
     * Seat info
     * @var string
     */
    protected $seat;

    /**
     * @return Discriminator
     */
    public static function getDiscriminator()
    {
        return DI::getInstanceOf(Discriminator::class)
            ->setField(static::DISCRIMINATOR_FIELD)
            ->setMap(static::DISCRIMINATOR_MAP);
    }

    /**
     * Seat getter.
     * @return string
     */
    public function getSeat(): string
    {
        return $this->seat;
    }

    /**
     * Seat setter.
     * @param string $seat
     * @return $this
     */
    public function setSeat(string $seat)
    {
        $this->seat = $seat;
        return $this;
    }

    /**
     * Point of arrival getter.
     * @return string
     */
    public function getArrival(): string
    {
        return $this->arrival;
    }

    /**
     * Point of arrival setter.
     * @param string $arrival Point of arrival name.
     * @return TransportationInterface
     */
    public function setArrival(string $arrival)
    {
        $this->arrival = $arrival;
        return $this;
    }

    /**
     * Point of departure getter.
     * @return string
     */
    public function getDeparture(): string
    {
        return $this->departure;
    }

    /**
     * Point of departure setter.
     * @param string $departure point of departure name.
     * @return TransportationInterface
     */
    public function setDeparture(string $departure)
    {
        $this->departure = $departure;
        return $this;
    }

    /**
     * Transportation number getter.
     * @return string
     */
    public function getTransportationNumber(): string
    {
        return $this->transportationNumber;
    }

    /**
     * Transportation number setter.
     * @param string $transportationNumber Transportation number info
     * @return $this
     */
    public function setTransportationNumber(string $transportationNumber)
    {
        $this->transportationNumber = $transportationNumber;
        return $this;
    }
}
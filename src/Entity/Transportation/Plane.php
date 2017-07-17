<?php

namespace App\Entity\Transportation;

/**
 * Class Plane.
 * @package App\Entity\Transportation
 */
class Plane extends AbstractTransportation
{
    /**
     * General message of the transportation.
     */
    const MESSAGE = 'From %s, take flight %s to %s. Gate %s, seat %s.';

    /**
     * Message reporting about baggage.
     */
    const MESSAGE_BAGGAGE_TICKET = 'Baggage drop at ticket counter %s.';

    /**
     * Message reporting that there is no baggage.
     */
    const MESSAGE_NO_BAGGAGE_TICKET = 'Baggage will be automatically transferred from your last leg.';

    /**
     * Number of gate.
     * @var string
     */
    protected $gate;

    /**
     * Baggage information.
     * @var string
     */
    protected $baggage;

    /**
     * Gate getter.
     * @return string
     */
    public function getGate(): string
    {
        return $this->gate;
    }

    /**
     * Gate setter.
     * @param string $gate Gate info.
     * @return Plane
     */
    public function setGate(string $gate): Plane
    {
        $this->gate = $gate;
        return $this;
    }

    /**
     * Baggage info getter.
     * @return string
     */
    public function getBaggage(): string
    {
        return $this->baggage;
    }

    /**
     * Baggage info setter.
     * @param string $baggage baggage info.
     * @return Plane
     */
    public function setBaggage(string $baggage): Plane
    {
        $this->baggage = $baggage;
        return $this;
    }

    /**
     * Return a message for the transportation.
     * @return string
     */
    public function getMessage(): string
    {
        $message = sprintf(
                static::MESSAGE,
                $this->departure,
                $this->transportationNumber,
                $this->arrival,
                $this->gate,
                $this->seat
            ) . PHP_EOL;

        // Add Baggage message
        $message .= !empty($this->baggage) ?
            sprintf(static::MESSAGE_BAGGAGE_TICKET, $this->baggage) : static::MESSAGE_NO_BAGGAGE_TICKET;

        return $message;
    }
}

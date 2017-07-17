<?php

namespace App\Entity\Transportation;

/**
 * Class Bus.
 * @package App\Entity\Transportation
 */
class Bus extends AbstractTransportation
{
    /**
     * General message of the transportation.
     */
    const MESSAGE = 'Take the airport bus';

    /**
     * Message reporting about direction.
     */
    const MESSAGE_FROM_TO = ' from %s to %s. ';

    /**
     * Message reporting about seat assignment.
     */
    const MESSAGE_NO_SEAT = 'No seat assignment.';

    /**
     * Generate and return message for the transportation.
     * @return string
     */
    public function getMessage(): string
    {
        return sprintf(
            static::MESSAGE . static::MESSAGE_FROM_TO . static::MESSAGE_NO_SEAT,
            $this->departure,
            $this->arrival
        );
    }
}
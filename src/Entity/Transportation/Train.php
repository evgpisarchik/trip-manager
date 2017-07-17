<?php

namespace App\Entity\Transportation;

/**
 * Class Train.
 * @package App\Entity\Transportation
 */
class Train extends AbstractTransportation
{
    /**
     * General message of the transportation.
     */
    const MESSAGE = 'Take train %s';

    /**
     * Message reporting about direction.
     */
    const MESSAGE_FROM_TO = ' from %s to %s. ';

    /**
     * Message reporting about seat assignment.
     */
    const MESSAGE_SEAT = 'Sit in seat %s.';

    /**
     * Return a message for the transportation.
     * @return string
     */
    public function getMessage(): string
    {
        return sprintf(
            static::MESSAGE . static::MESSAGE_FROM_TO . static::MESSAGE_SEAT,
            $this->transportationNumber, $this->departure, $this->arrival, $this->seat
        );
    }
}

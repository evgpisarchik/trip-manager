<?php

namespace App\Entity\Transportation;

/**
 * Interface TransportationInterface
 * @package App\Entity\Transportation
 */
interface TransportationInterface
{
    /**
     * Returns a departure point for the transportation.
     * @return string
     */
    public function getDeparture(): string;

    /**
     * Returns a arrival point for the transportation.
     * @return string
     */
    public function getArrival(): string;

    /**
     * Returns transportation number
     * @return string
     */
    public function getTransportationNumber(): string;

    /**
     * Returns seat number
     * @return string
     */
    public function getSeat(): string;

    /**
     * Returns a message for the transportation.
     * @return string
     */
    public function getMessage(): string;
}
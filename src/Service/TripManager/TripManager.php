<?php

namespace App\Service\TripManager;

use App\Entity\Transportation\AbstractTransportation;
use App\Entity\Transportation\TransportationInterface;

/**
 * Class TripManager.
 * Implements trip management related business logic.
 * @package App\Service
 */
class TripManager
{
    /**
     * Sorts given array of transportations in an appropriate order.
     * @param TransportationInterface[] $transportations Array of transportations.
     * @return array
     */
    public function sortTransportations(array $transportations): array
    {
        usort($transportations, function (TransportationInterface $a, TransportationInterface $b) {
            return strcasecmp($a->getArrival(), $b->getDeparture()) != 0;
        });

        return $transportations;
    }

    /**
     * Retrieves transportations message for given array of transportations after ordering them.
     * @param array $transportations Array of transportations.
     * @return string
     */
    public function getTranspotationsMessage(array $transportations): string
    {
        $messages = array_merge(array_map(function (TransportationInterface $transportation) {
            return $transportation->getMessage();
        }, $this->sortTransportations($transportations)), [AbstractTransportation::MESSAGE_FINAL_DESTINATION]);

        return array_reduce($messages, function (string $carry, string $message) {
            return $carry . $this->getTranspotationMessageLine($message);
        }, '');
    }

    /**
     * Formats single line of transportation message.
     * @param $index Number of line.
     * @param $message Text of message.
     * @return string
     */
    private function getTranspotationMessageLine(string $message)
    {
        static $lineNumber = 1;
        return sprintf("%d. %s", $lineNumber++, $message . PHP_EOL);
    }
}
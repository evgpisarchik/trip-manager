<?php

namespace App\Service\TripManager;

/**
 * Trait TripManagerAwareTrait
 * @package App\Service
 */
trait TripManagerAwareTrait
{
    /**
     * Dependency used to sort unordered transitions.
     * @var $tripManager TripManager
     */
    protected $tripManager;

    /**
     * tripManager dependency setter.
     * @param mixed $tripManager TripManager dependency performing sorting.
     * @return $this
     */
    public function setTripManager(TripManager $tripManager)
    {
        $this->tripManager = $tripManager;
        return $this;
    }

    /** TripManager dependency getter.
     * @return TripManager
     */
    public function getTripManager(): TripManager
    {
        return $this->tripManager;
    }
}
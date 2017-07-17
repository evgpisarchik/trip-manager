<?php

namespace App\Service\TripManager;

/**
 * Interface TripManagerDependentInterface
 * @package App\Service\TripManager
 */
interface TripManagerDependentInterface
{
    /**
     * tripManager dependency setter.
     * @param mixed $tripManager
     * @return $this
     */
    public function setTripManager(TripManager $tripManager);
}
<?php

namespace App\Component\Serializer;

/**
 * Interface SerializerDependentInterface
 * @package App\Component\Serializer
 */
interface SerializerDependentInterface
{
    /**
     * @param Serializer $serializer
     * @return mixed
     */
    public function setSerializer(Serializer $serializer);
}
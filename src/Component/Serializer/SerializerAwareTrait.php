<?php

namespace App\Component\Serializer;

/**
 * Trait SerializerAwareTrait
 * @package App\Service
 */
trait SerializerAwareTrait
{
    /**
     * Dependency used to convert json to list of Transportation objects.
     * @var $serializer \App\Component\Serializer\Serializer
     */
    protected $serializer;

    /**
     * Serializer dependency getter.
     * @return Serializer
     */
    public function getSerializer(): Serializer
    {
        return $this->serializer;
    }

    /**
     * Serializer dependency setter.
     * @param mixed $serializer
     * @return $this
     */
    public function setSerializer(Serializer $serializer)
    {
        $this->serializer = $serializer;
        return $this;
    }
}
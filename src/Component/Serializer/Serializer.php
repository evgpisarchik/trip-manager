<?php

namespace App\Component\Serializer;

use App\Helper\Reflection;

/**
 * Class Serializer
 * Performs data transformation between different formants.
 * E.g. json to specific object (deserialization) or object to json (serialization).
 * @package App\Component\Serializer
 */
class Serializer
{
    /**
     * Converts json containing array of items to array of php objects.
     * @param string $json string containing json
     * @return array
     */

    public function deserializeArray($data, string $className)
    {
        $array = [];
        try {
            foreach (json_decode($data, true) as $item) {
                $array[] = $this->deserialize($item, $className);
            }
        } catch (\Exception $e) {
            throw new \RuntimeException('Cannot deserialize json to array.');
        }

        return $array;
    }

    /**
     * @param $data
     * @param string $className
     * @return object
     */
    public function deserialize($data, string $className)
    {
        $reflectionClass = new \ReflectionClass($this->resolveClassName($data, $className));
        $object = $reflectionClass->newInstanceWithoutConstructor();

        if (is_object($object)) {
            foreach ($data as $propertyName => $propertyValue) {
                $propertyName = lcfirst($propertyName);
                if ($reflectionClass->hasProperty($propertyName)) {
                    Reflection::setPropertyValue($object, $propertyName, $propertyValue);
                }
            }
        }

        return $object;
    }

    /**
     * if descriminators settings are given
     * then class name used to convert items can be overridden
     * @param $item array item to be that is resolved
     * @return string
     */
    private function resolveClassName($data, string $className): string
    {
        $reflectionClass = new \ReflectionClass($className);
        if ($reflectionClass->implementsInterface(Discriminator\DiscriminableInterface::class)) {
            $className = $reflectionClass
                ->getMethod('getDiscriminator')
                ->invoke(null)
                ->resolveClass($data);
        }
        return $className;
    }
}
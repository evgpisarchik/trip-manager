<?php
namespace App\Helper;

/**
 * Class Reflection
 * @package App\Helper
 */
class Reflection
{
    /**
     * @param $object
     * @param $propertyName
     * @param $propertyValue
     */
    public static function setPropertyValue($object, $propertyName, $propertyValue)
    {
        $reflectionProperty = new \ReflectionProperty(get_class($object), $propertyName);
        $reflectionProperty->setAccessible(true);
        $reflectionProperty->setValue($object, $propertyValue);
    }
}
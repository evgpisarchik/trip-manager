<?php

namespace App\Component\DependencyInjection;

use App\Helper\Reflection;

/**
 * Class DependencyInjection.
 * Manages class dependencies using "intefrace injection" approach.
 * @package App\Component\DependencyInjection
 */
class DependencyInjection
{
    /**
     * Creates object and injects dependencies into it.
     * @param string $className Class name used to create object
     * @param array $arguments Parameters that should be passed to created object
     * @return object Created object
     */
    public static function getInstanceOf(string $className, array $arguments = [])
    {
        // checking if the class exists
        if (!class_exists($className)) {
            throw new \Exception(sprintf("DependencyInjection: missing class %s", $className));
        }

        // initialized the ReflectionClass
        $reflectionClass = new \ReflectionClass($className);

        // creating an instance of the class
        $object = count($arguments) ?
            $reflectionClass->newInstanceArgs($arguments) : $reflectionClass->newInstanceWithoutConstructor();

        // injecting dependencies
        self::injectDependencies($object, $reflectionClass);

        // return the created instance
        return $object;
    }

    /**
     * Injects dependencies (defined via class annotation "@Inject [className]") into given object.
     * @param \ReflectionClass $reflectionClass Object class information.
     * @param object $object Object to inject dependencies.
     * @return null
     */
    private function injectDependencies($object, \ReflectionClass $reflectionClass)
    {
        foreach($reflectionClass->getInterfaces() as $interface){
            $injectedClassName = preg_replace('/DependentInterface$/', '', $interface->getName(),-1, $matchesCount);
            if ($matchesCount){
                self::injectDependency($object, $injectedClassName);
            }
        }
    }

    /**
     * Inject single dependency.
     * @param \ReflectionClass $reflectionClass Object class information.
     * @param $object
     */
    private function injectDependency($object, string $injectedClassName)
    {
        $propertyName = lcfirst(array_reverse(explode('\\', $injectedClassName))[0]);
        Reflection::setPropertyValue($object, $propertyName, self::getInstanceOf($injectedClassName));
    }
}
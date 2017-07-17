<?php

namespace App\Component\Serializer\Discriminator;

/**
 * Class Discriminator
 * @package App\Component\Serializer
 */
class Discriminator
{
    /**
     * Defines field that is used to resolve to which class current element belongs.
     * @var string
     */
    protected $field;

    /**
     * Defines class resolution mapping depending of element's value.
     * @var array
     */
    protected $map;

    /**
     * @return string
     */
    public function getField(): string
    {
        return $this->field;
    }

    /**
     * @param string $field
     * @return Discriminator
     */
    public function setField(string $field): Discriminator
    {
        $this->field = $field;
        return $this;
    }

    /**
     * @return array
     */
    public function getMap(): array
    {
        return $this->map;
    }

    /**
     * @param array $map
     * @return Discriminator
     */
    public function setMap(array $map): Discriminator
    {
        $this->map = $map;
        return $this;
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function resolveClass(array $data)
    {
        if (!empty($this->field) && !empty($this->map)) {
            return $this->map[strtolower($data[$this->field])];
        }
    }
}
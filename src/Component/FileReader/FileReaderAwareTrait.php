<?php

namespace App\Component\FileReader;

/**
 * Trait FileReaderAwareTrait
 * @package App\Component\FileReader
 */
trait FileReaderAwareTrait
{
    /**
     * Dependency used to read information from file passed as argument to the command.
     * @var $fileReader \App\Component\FileReader\FileReader
     */
    protected $fileReader;

    /**
     * FileReader dependency getter.
     * @return FileReader
     */
    public function getFileReader(): FileReader
    {
        return $this->fileReader;
    }

    /**
     * FileReader dependency getter.
     * @param FileReader $fileReader
     * @return $this
     */
    public function setFileReader(FileReader $fileReader)
    {
        $this->fileReader = $fileReader;
        return $this;
    }
}
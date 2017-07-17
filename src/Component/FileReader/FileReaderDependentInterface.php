<?php

namespace App\Component\FileReader;

/**
 * Interface FileReaderDependentInterface
 * @package App\Component\FileReader
 */
interface FileReaderDependentInterface
{
    /**
     * File reader setter.
     * @param FileReader $fileReader
     * @return mixed
     */
    public function setFileReader(FileReader $fileReader);
}
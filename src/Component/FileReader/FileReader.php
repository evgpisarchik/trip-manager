<?php

namespace App\Component\FileReader;

/**
 * Class FileReader.
 * Reads contents from file.
 * @package App\Component\FileReader
 */
class FileReader
{
    /**
     * @param string $fileName File name.
     * @return string Contents of the file.
     */
    public function read(string $fileName): string
    {
        if (!is_file($fileName) || !is_readable($fileName)) {
            throw new \RuntimeException(sprintf('File %s is not readable', $fileName));
        }

        return file_get_contents($fileName);
    }
}
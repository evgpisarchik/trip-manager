<?php

namespace App\Command\TripSorter;

use App\Component\Console\Command\AbstractCommand;
use App\Component\FileReader\FileReaderDependentInterface;
use App\Component\Serializer\SerializerAwareTrait;
use App\Component\FileReader\FileReaderAwareTrait;
use App\Component\Serializer\SerializerDependentInterface;
use App\Entity\Transportation\AbstractTransportation;
use App\Entity\Transportation\TransportationInterface;
use App\Service\TripManager\TripManagerAwareTrait;
use App\Service\TripManager\TripManagerDependentInterface;

/**
 * Class TripSorter
 * @package App\Command
 */
class TripSorter extends AbstractCommand
    implements SerializerDependentInterface, TripManagerDependentInterface, FileReaderDependentInterface
{
    use TripManagerAwareTrait;
    use FileReaderAwareTrait;
    use SerializerAwareTrait;

    /**
     * @inheritdoc
     */
    protected $name = 'trip-sorter';

    /**
     * Filename from which json is retrieved.
     * @var string
     */
    protected $fileName;

    /**
     * @inheritdoc
     * @param array ...$args Name of file that has cards information.
     * @return $this;
     */
    public function setArgs(string...$args)
    {
        list($this->fileName) = $args;
        return $this;
    }

    /**
     * Method used to perform operations of the command.
     * @return mixed
     */
    public function run()
    {
        $this->output = $this->tripManager->getTranspotationsMessage($this->deserializeTransportations());
        return $this;
    }

    /**
     * Converting json to array of Transporation objects.
     * @return TransportationInterface[]
     */
    protected function deserializeTransportations()
    {
        return $this->serializer->deserializeArray($this->getFileConents(), AbstractTransportation::class);
    }

    /**
     * @return string
     */
    protected function getFileConents(): string
    {
        return $this->fileReader->read($this->fileName);
    }
}
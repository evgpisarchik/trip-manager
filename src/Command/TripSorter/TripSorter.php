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
     * Filename from which json is retrieved.
     * @var string
     */
    protected $fileName;

    /**
     * TripSorter constructor.
     * @param $fileName string Filename from which json is retrieved.
     */
    public function __construct(string $fileName)
    {
        $this->fileName = $fileName;
    }

    /**
     * Method used to perform operations of the command.
     * @return mixed
     */
    public function run()
    {
        return $this->tripManager->getTranspotationsMessage($this->deserializeTransportations());
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

window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Command" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Command.html">Command</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Command_TripSorter" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Command/TripSorter.html">TripSorter</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Command_TripSorter_TripSorter" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Command/TripSorter/TripSorter.html">TripSorter</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Component" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Component.html">Component</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Component_Console" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Component/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Component_Console_Command" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Component/Console/Command.html">Command</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Component_Console_Command_AbstractCommand" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Component/Console/Command/AbstractCommand.html">AbstractCommand</a>                    </div>                </li>                            <li data-name="class:App_Component_Console_Command_CommandInterface" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Component/Console/Command/CommandInterface.html">CommandInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Component_Console_Console" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Component/Console/Console.html">Console</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Component_DependencyInjection" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Component/DependencyInjection.html">DependencyInjection</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Component_DependencyInjection_DependencyInjection" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Component/DependencyInjection/DependencyInjection.html">DependencyInjection</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Component_FileReader" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Component/FileReader.html">FileReader</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Component_FileReader_FileReader" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Component/FileReader/FileReader.html">FileReader</a>                    </div>                </li>                            <li data-name="class:App_Component_FileReader_FileReaderAwareTrait" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Component/FileReader/FileReaderAwareTrait.html">FileReaderAwareTrait</a>                    </div>                </li>                            <li data-name="class:App_Component_FileReader_FileReaderDependentInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Component/FileReader/FileReaderDependentInterface.html">FileReaderDependentInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Component_Serializer" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Component/Serializer.html">Serializer</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Component_Serializer_Discriminator" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Component/Serializer/Discriminator.html">Discriminator</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Component_Serializer_Discriminator_DiscriminableInterface" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Component/Serializer/Discriminator/DiscriminableInterface.html">DiscriminableInterface</a>                    </div>                </li>                            <li data-name="class:App_Component_Serializer_Discriminator_Discriminator" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Component/Serializer/Discriminator/Discriminator.html">Discriminator</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Component_Serializer_Serializer" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Component/Serializer/Serializer.html">Serializer</a>                    </div>                </li>                            <li data-name="class:App_Component_Serializer_SerializerAwareTrait" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Component/Serializer/SerializerAwareTrait.html">SerializerAwareTrait</a>                    </div>                </li>                            <li data-name="class:App_Component_Serializer_SerializerDependentInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Component/Serializer/SerializerDependentInterface.html">SerializerDependentInterface</a>                    </div>                </li>                            <li data-name="class:App_Component_Serializer_SerializerableInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Component/Serializer/SerializerableInterface.html">SerializerableInterface</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Entity" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Entity.html">Entity</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Entity_Transportation" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Entity/Transportation.html">Transportation</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Entity_Transportation_AbstractTransportation" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Entity/Transportation/AbstractTransportation.html">AbstractTransportation</a>                    </div>                </li>                            <li data-name="class:App_Entity_Transportation_Bus" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Entity/Transportation/Bus.html">Bus</a>                    </div>                </li>                            <li data-name="class:App_Entity_Transportation_Plane" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Entity/Transportation/Plane.html">Plane</a>                    </div>                </li>                            <li data-name="class:App_Entity_Transportation_Train" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Entity/Transportation/Train.html">Train</a>                    </div>                </li>                            <li data-name="class:App_Entity_Transportation_TransportationInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Entity/Transportation/TransportationInterface.html">TransportationInterface</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Helper" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Helper.html">Helper</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Helper_Reflection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Helper/Reflection.html">Reflection</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Service" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Service.html">Service</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Service_TripManager" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Service/TripManager.html">TripManager</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Service_TripManager_TripManager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Service/TripManager/TripManager.html">TripManager</a>                    </div>                </li>                            <li data-name="class:App_Service_TripManager_TripManagerAwareTrait" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Service/TripManager/TripManagerAwareTrait.html">TripManagerAwareTrait</a>                    </div>                </li>                            <li data-name="class:App_Service_TripManager_TripManagerDependentInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Service/TripManager/TripManagerDependentInterface.html">TripManagerDependentInterface</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Command.html", "name": "App\\Command", "doc": "Namespace App\\Command"},{"type": "Namespace", "link": "App/Command/TripSorter.html", "name": "App\\Command\\TripSorter", "doc": "Namespace App\\Command\\TripSorter"},{"type": "Namespace", "link": "App/Component.html", "name": "App\\Component", "doc": "Namespace App\\Component"},{"type": "Namespace", "link": "App/Component/Console.html", "name": "App\\Component\\Console", "doc": "Namespace App\\Component\\Console"},{"type": "Namespace", "link": "App/Component/Console/Command.html", "name": "App\\Component\\Console\\Command", "doc": "Namespace App\\Component\\Console\\Command"},{"type": "Namespace", "link": "App/Component/DependencyInjection.html", "name": "App\\Component\\DependencyInjection", "doc": "Namespace App\\Component\\DependencyInjection"},{"type": "Namespace", "link": "App/Component/FileReader.html", "name": "App\\Component\\FileReader", "doc": "Namespace App\\Component\\FileReader"},{"type": "Namespace", "link": "App/Component/Serializer.html", "name": "App\\Component\\Serializer", "doc": "Namespace App\\Component\\Serializer"},{"type": "Namespace", "link": "App/Component/Serializer/Discriminator.html", "name": "App\\Component\\Serializer\\Discriminator", "doc": "Namespace App\\Component\\Serializer\\Discriminator"},{"type": "Namespace", "link": "App/Entity.html", "name": "App\\Entity", "doc": "Namespace App\\Entity"},{"type": "Namespace", "link": "App/Entity/Transportation.html", "name": "App\\Entity\\Transportation", "doc": "Namespace App\\Entity\\Transportation"},{"type": "Namespace", "link": "App/Helper.html", "name": "App\\Helper", "doc": "Namespace App\\Helper"},{"type": "Namespace", "link": "App/Service.html", "name": "App\\Service", "doc": "Namespace App\\Service"},{"type": "Namespace", "link": "App/Service/TripManager.html", "name": "App\\Service\\TripManager", "doc": "Namespace App\\Service\\TripManager"},
            {"type": "Interface", "fromName": "App\\Component\\Console\\Command", "fromLink": "App/Component/Console/Command.html", "link": "App/Component/Console/Command/CommandInterface.html", "name": "App\\Component\\Console\\Command\\CommandInterface", "doc": "&quot;Interface CommandInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Console\\Command\\CommandInterface", "fromLink": "App/Component/Console/Command/CommandInterface.html", "link": "App/Component/Console/Command/CommandInterface.html#method_run", "name": "App\\Component\\Console\\Command\\CommandInterface::run", "doc": "&quot;Method used to perform operations of the command.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Command\\CommandInterface", "fromLink": "App/Component/Console/Command/CommandInterface.html", "link": "App/Component/Console/Command/CommandInterface.html#method_getName", "name": "App\\Component\\Console\\Command\\CommandInterface::getName", "doc": "&quot;Return command name used in terminal.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Command\\CommandInterface", "fromLink": "App/Component/Console/Command/CommandInterface.html", "link": "App/Component/Console/Command/CommandInterface.html#method_setArgs", "name": "App\\Component\\Console\\Command\\CommandInterface::setArgs", "doc": "&quot;Arguments used to run the command.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Command\\CommandInterface", "fromLink": "App/Component/Console/Command/CommandInterface.html", "link": "App/Component/Console/Command/CommandInterface.html#method_getOutput", "name": "App\\Component\\Console\\Command\\CommandInterface::getOutput", "doc": "&quot;Returns output produced by the command.&quot;"},
            
            {"type": "Interface", "fromName": "App\\Component\\FileReader", "fromLink": "App/Component/FileReader.html", "link": "App/Component/FileReader/FileReaderDependentInterface.html", "name": "App\\Component\\FileReader\\FileReaderDependentInterface", "doc": "&quot;Interface FileReaderDependentInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\FileReader\\FileReaderDependentInterface", "fromLink": "App/Component/FileReader/FileReaderDependentInterface.html", "link": "App/Component/FileReader/FileReaderDependentInterface.html#method_setFileReader", "name": "App\\Component\\FileReader\\FileReaderDependentInterface::setFileReader", "doc": "&quot;File reader setter.&quot;"},
            
            {"type": "Interface", "fromName": "App\\Component\\Serializer\\Discriminator", "fromLink": "App/Component/Serializer/Discriminator.html", "link": "App/Component/Serializer/Discriminator/DiscriminableInterface.html", "name": "App\\Component\\Serializer\\Discriminator\\DiscriminableInterface", "doc": "&quot;Interface DiscriminableInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Serializer\\Discriminator\\DiscriminableInterface", "fromLink": "App/Component/Serializer/Discriminator/DiscriminableInterface.html", "link": "App/Component/Serializer/Discriminator/DiscriminableInterface.html#method_getDiscriminator", "name": "App\\Component\\Serializer\\Discriminator\\DiscriminableInterface::getDiscriminator", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "App\\Component\\Serializer", "fromLink": "App/Component/Serializer.html", "link": "App/Component/Serializer/SerializerDependentInterface.html", "name": "App\\Component\\Serializer\\SerializerDependentInterface", "doc": "&quot;Interface SerializerDependentInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Serializer\\SerializerDependentInterface", "fromLink": "App/Component/Serializer/SerializerDependentInterface.html", "link": "App/Component/Serializer/SerializerDependentInterface.html#method_setSerializer", "name": "App\\Component\\Serializer\\SerializerDependentInterface::setSerializer", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "App\\Component\\Serializer", "fromLink": "App/Component/Serializer.html", "link": "App/Component/Serializer/SerializerableInterface.html", "name": "App\\Component\\Serializer\\SerializerableInterface", "doc": "&quot;Interface SerializerableInterface&quot;"},
                    
            {"type": "Interface", "fromName": "App\\Entity\\Transportation", "fromLink": "App/Entity/Transportation.html", "link": "App/Entity/Transportation/TransportationInterface.html", "name": "App\\Entity\\Transportation\\TransportationInterface", "doc": "&quot;Interface TransportationInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Entity\\Transportation\\TransportationInterface", "fromLink": "App/Entity/Transportation/TransportationInterface.html", "link": "App/Entity/Transportation/TransportationInterface.html#method_getDeparture", "name": "App\\Entity\\Transportation\\TransportationInterface::getDeparture", "doc": "&quot;Returns a departure point for the transportation.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\TransportationInterface", "fromLink": "App/Entity/Transportation/TransportationInterface.html", "link": "App/Entity/Transportation/TransportationInterface.html#method_getArrival", "name": "App\\Entity\\Transportation\\TransportationInterface::getArrival", "doc": "&quot;Returns a arrival point for the transportation.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\TransportationInterface", "fromLink": "App/Entity/Transportation/TransportationInterface.html", "link": "App/Entity/Transportation/TransportationInterface.html#method_getTransportationNumber", "name": "App\\Entity\\Transportation\\TransportationInterface::getTransportationNumber", "doc": "&quot;Returns transportation number&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\TransportationInterface", "fromLink": "App/Entity/Transportation/TransportationInterface.html", "link": "App/Entity/Transportation/TransportationInterface.html#method_getSeat", "name": "App\\Entity\\Transportation\\TransportationInterface::getSeat", "doc": "&quot;Returns seat number&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\TransportationInterface", "fromLink": "App/Entity/Transportation/TransportationInterface.html", "link": "App/Entity/Transportation/TransportationInterface.html#method_getMessage", "name": "App\\Entity\\Transportation\\TransportationInterface::getMessage", "doc": "&quot;Returns a message for the transportation.&quot;"},
            
            {"type": "Interface", "fromName": "App\\Service\\TripManager", "fromLink": "App/Service/TripManager.html", "link": "App/Service/TripManager/TripManagerDependentInterface.html", "name": "App\\Service\\TripManager\\TripManagerDependentInterface", "doc": "&quot;Interface TripManagerDependentInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Service\\TripManager\\TripManagerDependentInterface", "fromLink": "App/Service/TripManager/TripManagerDependentInterface.html", "link": "App/Service/TripManager/TripManagerDependentInterface.html#method_setTripManager", "name": "App\\Service\\TripManager\\TripManagerDependentInterface::setTripManager", "doc": "&quot;tripManager dependency setter.&quot;"},
            
            
            {"type": "Class", "fromName": "App\\Command\\TripSorter", "fromLink": "App/Command/TripSorter.html", "link": "App/Command/TripSorter/TripSorter.html", "name": "App\\Command\\TripSorter\\TripSorter", "doc": "&quot;Class TripSorter&quot;"},
                                                        {"type": "Method", "fromName": "App\\Command\\TripSorter\\TripSorter", "fromLink": "App/Command/TripSorter/TripSorter.html", "link": "App/Command/TripSorter/TripSorter.html#method_setArgs", "name": "App\\Command\\TripSorter\\TripSorter::setArgs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Command\\TripSorter\\TripSorter", "fromLink": "App/Command/TripSorter/TripSorter.html", "link": "App/Command/TripSorter/TripSorter.html#method_run", "name": "App\\Command\\TripSorter\\TripSorter::run", "doc": "&quot;Method used to perform operations of the command.&quot;"},
                    {"type": "Method", "fromName": "App\\Command\\TripSorter\\TripSorter", "fromLink": "App/Command/TripSorter/TripSorter.html", "link": "App/Command/TripSorter/TripSorter.html#method_deserializeTransportations", "name": "App\\Command\\TripSorter\\TripSorter::deserializeTransportations", "doc": "&quot;Converting json to array of Transporation objects.&quot;"},
                    {"type": "Method", "fromName": "App\\Command\\TripSorter\\TripSorter", "fromLink": "App/Command/TripSorter/TripSorter.html", "link": "App/Command/TripSorter/TripSorter.html#method_getFileConents", "name": "App\\Command\\TripSorter\\TripSorter::getFileConents", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\Console\\Command", "fromLink": "App/Component/Console/Command.html", "link": "App/Component/Console/Command/AbstractCommand.html", "name": "App\\Component\\Console\\Command\\AbstractCommand", "doc": "&quot;Class AbstractCommand.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Console\\Command\\AbstractCommand", "fromLink": "App/Component/Console/Command/AbstractCommand.html", "link": "App/Component/Console/Command/AbstractCommand.html#method_run", "name": "App\\Component\\Console\\Command\\AbstractCommand::run", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Command\\AbstractCommand", "fromLink": "App/Component/Console/Command/AbstractCommand.html", "link": "App/Component/Console/Command/AbstractCommand.html#method_getName", "name": "App\\Component\\Console\\Command\\AbstractCommand::getName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Command\\AbstractCommand", "fromLink": "App/Component/Console/Command/AbstractCommand.html", "link": "App/Component/Console/Command/AbstractCommand.html#method_setArgs", "name": "App\\Component\\Console\\Command\\AbstractCommand::setArgs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Command\\AbstractCommand", "fromLink": "App/Component/Console/Command/AbstractCommand.html", "link": "App/Component/Console/Command/AbstractCommand.html#method_getOutput", "name": "App\\Component\\Console\\Command\\AbstractCommand::getOutput", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\Console\\Command", "fromLink": "App/Component/Console/Command.html", "link": "App/Component/Console/Command/CommandInterface.html", "name": "App\\Component\\Console\\Command\\CommandInterface", "doc": "&quot;Interface CommandInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Console\\Command\\CommandInterface", "fromLink": "App/Component/Console/Command/CommandInterface.html", "link": "App/Component/Console/Command/CommandInterface.html#method_run", "name": "App\\Component\\Console\\Command\\CommandInterface::run", "doc": "&quot;Method used to perform operations of the command.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Command\\CommandInterface", "fromLink": "App/Component/Console/Command/CommandInterface.html", "link": "App/Component/Console/Command/CommandInterface.html#method_getName", "name": "App\\Component\\Console\\Command\\CommandInterface::getName", "doc": "&quot;Return command name used in terminal.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Command\\CommandInterface", "fromLink": "App/Component/Console/Command/CommandInterface.html", "link": "App/Component/Console/Command/CommandInterface.html#method_setArgs", "name": "App\\Component\\Console\\Command\\CommandInterface::setArgs", "doc": "&quot;Arguments used to run the command.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Command\\CommandInterface", "fromLink": "App/Component/Console/Command/CommandInterface.html", "link": "App/Component/Console/Command/CommandInterface.html#method_getOutput", "name": "App\\Component\\Console\\Command\\CommandInterface::getOutput", "doc": "&quot;Returns output produced by the command.&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\Console", "fromLink": "App/Component/Console.html", "link": "App/Component/Console/Console.html", "name": "App\\Component\\Console\\Console", "doc": "&quot;Class Console.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Console\\Console", "fromLink": "App/Component/Console/Console.html", "link": "App/Component/Console/Console.html#method_setRegistredCommands", "name": "App\\Component\\Console\\Console::setRegistredCommands", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Console", "fromLink": "App/Component/Console/Console.html", "link": "App/Component/Console/Console.html#method_run", "name": "App\\Component\\Console\\Console::run", "doc": "&quot;Perform operations on console input.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Console", "fromLink": "App/Component/Console/Console.html", "link": "App/Component/Console/Console.html#method_output", "name": "App\\Component\\Console\\Console::output", "doc": "&quot;Writes given string to console output.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Console\\Console", "fromLink": "App/Component/Console/Console.html", "link": "App/Component/Console/Console.html#method_getRegisteredCommandByName", "name": "App\\Component\\Console\\Console::getRegisteredCommandByName", "doc": "&quot;Gets command object by string representation of class name.&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\DependencyInjection", "fromLink": "App/Component/DependencyInjection.html", "link": "App/Component/DependencyInjection/DependencyInjection.html", "name": "App\\Component\\DependencyInjection\\DependencyInjection", "doc": "&quot;Class DependencyInjection.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\DependencyInjection\\DependencyInjection", "fromLink": "App/Component/DependencyInjection/DependencyInjection.html", "link": "App/Component/DependencyInjection/DependencyInjection.html#method_getInstanceOf", "name": "App\\Component\\DependencyInjection\\DependencyInjection::getInstanceOf", "doc": "&quot;Creates object and injects dependencies into it.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\DependencyInjection\\DependencyInjection", "fromLink": "App/Component/DependencyInjection/DependencyInjection.html", "link": "App/Component/DependencyInjection/DependencyInjection.html#method_injectDependencies", "name": "App\\Component\\DependencyInjection\\DependencyInjection::injectDependencies", "doc": "&quot;Injects dependencies (defined via class annotation \&quot;@Inject [className]\&quot;) into given object.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\DependencyInjection\\DependencyInjection", "fromLink": "App/Component/DependencyInjection/DependencyInjection.html", "link": "App/Component/DependencyInjection/DependencyInjection.html#method_injectDependency", "name": "App\\Component\\DependencyInjection\\DependencyInjection::injectDependency", "doc": "&quot;Inject single dependency.&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\FileReader", "fromLink": "App/Component/FileReader.html", "link": "App/Component/FileReader/FileReader.html", "name": "App\\Component\\FileReader\\FileReader", "doc": "&quot;Class FileReader.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\FileReader\\FileReader", "fromLink": "App/Component/FileReader/FileReader.html", "link": "App/Component/FileReader/FileReader.html#method_read", "name": "App\\Component\\FileReader\\FileReader::read", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "App\\Component\\FileReader", "fromLink": "App/Component/FileReader.html", "link": "App/Component/FileReader/FileReaderAwareTrait.html", "name": "App\\Component\\FileReader\\FileReaderAwareTrait", "doc": "&quot;Trait FileReaderAwareTrait&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\FileReader\\FileReaderAwareTrait", "fromLink": "App/Component/FileReader/FileReaderAwareTrait.html", "link": "App/Component/FileReader/FileReaderAwareTrait.html#method_getFileReader", "name": "App\\Component\\FileReader\\FileReaderAwareTrait::getFileReader", "doc": "&quot;FileReader dependency getter.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\FileReader\\FileReaderAwareTrait", "fromLink": "App/Component/FileReader/FileReaderAwareTrait.html", "link": "App/Component/FileReader/FileReaderAwareTrait.html#method_setFileReader", "name": "App\\Component\\FileReader\\FileReaderAwareTrait::setFileReader", "doc": "&quot;FileReader dependency getter.&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\FileReader", "fromLink": "App/Component/FileReader.html", "link": "App/Component/FileReader/FileReaderDependentInterface.html", "name": "App\\Component\\FileReader\\FileReaderDependentInterface", "doc": "&quot;Interface FileReaderDependentInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\FileReader\\FileReaderDependentInterface", "fromLink": "App/Component/FileReader/FileReaderDependentInterface.html", "link": "App/Component/FileReader/FileReaderDependentInterface.html#method_setFileReader", "name": "App\\Component\\FileReader\\FileReaderDependentInterface::setFileReader", "doc": "&quot;File reader setter.&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\Serializer\\Discriminator", "fromLink": "App/Component/Serializer/Discriminator.html", "link": "App/Component/Serializer/Discriminator/DiscriminableInterface.html", "name": "App\\Component\\Serializer\\Discriminator\\DiscriminableInterface", "doc": "&quot;Interface DiscriminableInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Serializer\\Discriminator\\DiscriminableInterface", "fromLink": "App/Component/Serializer/Discriminator/DiscriminableInterface.html", "link": "App/Component/Serializer/Discriminator/DiscriminableInterface.html#method_getDiscriminator", "name": "App\\Component\\Serializer\\Discriminator\\DiscriminableInterface::getDiscriminator", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\Serializer\\Discriminator", "fromLink": "App/Component/Serializer/Discriminator.html", "link": "App/Component/Serializer/Discriminator/Discriminator.html", "name": "App\\Component\\Serializer\\Discriminator\\Discriminator", "doc": "&quot;Class Discriminator&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Serializer\\Discriminator\\Discriminator", "fromLink": "App/Component/Serializer/Discriminator/Discriminator.html", "link": "App/Component/Serializer/Discriminator/Discriminator.html#method_getField", "name": "App\\Component\\Serializer\\Discriminator\\Discriminator::getField", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Serializer\\Discriminator\\Discriminator", "fromLink": "App/Component/Serializer/Discriminator/Discriminator.html", "link": "App/Component/Serializer/Discriminator/Discriminator.html#method_setField", "name": "App\\Component\\Serializer\\Discriminator\\Discriminator::setField", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Serializer\\Discriminator\\Discriminator", "fromLink": "App/Component/Serializer/Discriminator/Discriminator.html", "link": "App/Component/Serializer/Discriminator/Discriminator.html#method_getMap", "name": "App\\Component\\Serializer\\Discriminator\\Discriminator::getMap", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Serializer\\Discriminator\\Discriminator", "fromLink": "App/Component/Serializer/Discriminator/Discriminator.html", "link": "App/Component/Serializer/Discriminator/Discriminator.html#method_setMap", "name": "App\\Component\\Serializer\\Discriminator\\Discriminator::setMap", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Serializer\\Discriminator\\Discriminator", "fromLink": "App/Component/Serializer/Discriminator/Discriminator.html", "link": "App/Component/Serializer/Discriminator/Discriminator.html#method_resolveClass", "name": "App\\Component\\Serializer\\Discriminator\\Discriminator::resolveClass", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\Serializer", "fromLink": "App/Component/Serializer.html", "link": "App/Component/Serializer/Serializer.html", "name": "App\\Component\\Serializer\\Serializer", "doc": "&quot;Class Serializer\nPerforms data transformation between different formants.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Serializer\\Serializer", "fromLink": "App/Component/Serializer/Serializer.html", "link": "App/Component/Serializer/Serializer.html#method_deserializeArray", "name": "App\\Component\\Serializer\\Serializer::deserializeArray", "doc": "&quot;Converts json containing array of items to array of php objects.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Serializer\\Serializer", "fromLink": "App/Component/Serializer/Serializer.html", "link": "App/Component/Serializer/Serializer.html#method_deserialize", "name": "App\\Component\\Serializer\\Serializer::deserialize", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Serializer\\Serializer", "fromLink": "App/Component/Serializer/Serializer.html", "link": "App/Component/Serializer/Serializer.html#method_resolveClassName", "name": "App\\Component\\Serializer\\Serializer::resolveClassName", "doc": "&quot;if descriminators settings are given\nthen class name used to convert items can be overridden&quot;"},
            
            {"type": "Trait", "fromName": "App\\Component\\Serializer", "fromLink": "App/Component/Serializer.html", "link": "App/Component/Serializer/SerializerAwareTrait.html", "name": "App\\Component\\Serializer\\SerializerAwareTrait", "doc": "&quot;Trait SerializerAwareTrait&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Serializer\\SerializerAwareTrait", "fromLink": "App/Component/Serializer/SerializerAwareTrait.html", "link": "App/Component/Serializer/SerializerAwareTrait.html#method_getSerializer", "name": "App\\Component\\Serializer\\SerializerAwareTrait::getSerializer", "doc": "&quot;Serializer dependency getter.&quot;"},
                    {"type": "Method", "fromName": "App\\Component\\Serializer\\SerializerAwareTrait", "fromLink": "App/Component/Serializer/SerializerAwareTrait.html", "link": "App/Component/Serializer/SerializerAwareTrait.html#method_setSerializer", "name": "App\\Component\\Serializer\\SerializerAwareTrait::setSerializer", "doc": "&quot;Serializer dependency setter.&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\Serializer", "fromLink": "App/Component/Serializer.html", "link": "App/Component/Serializer/SerializerDependentInterface.html", "name": "App\\Component\\Serializer\\SerializerDependentInterface", "doc": "&quot;Interface SerializerDependentInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Component\\Serializer\\SerializerDependentInterface", "fromLink": "App/Component/Serializer/SerializerDependentInterface.html", "link": "App/Component/Serializer/SerializerDependentInterface.html#method_setSerializer", "name": "App\\Component\\Serializer\\SerializerDependentInterface::setSerializer", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Component\\Serializer", "fromLink": "App/Component/Serializer.html", "link": "App/Component/Serializer/SerializerableInterface.html", "name": "App\\Component\\Serializer\\SerializerableInterface", "doc": "&quot;Interface SerializerableInterface&quot;"},
                    
            {"type": "Class", "fromName": "App\\Entity\\Transportation", "fromLink": "App/Entity/Transportation.html", "link": "App/Entity/Transportation/AbstractTransportation.html", "name": "App\\Entity\\Transportation\\AbstractTransportation", "doc": "&quot;Class AbstractTransportation.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Entity\\Transportation\\AbstractTransportation", "fromLink": "App/Entity/Transportation/AbstractTransportation.html", "link": "App/Entity/Transportation/AbstractTransportation.html#method_getDiscriminator", "name": "App\\Entity\\Transportation\\AbstractTransportation::getDiscriminator", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\AbstractTransportation", "fromLink": "App/Entity/Transportation/AbstractTransportation.html", "link": "App/Entity/Transportation/AbstractTransportation.html#method_getSeat", "name": "App\\Entity\\Transportation\\AbstractTransportation::getSeat", "doc": "&quot;Seat getter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\AbstractTransportation", "fromLink": "App/Entity/Transportation/AbstractTransportation.html", "link": "App/Entity/Transportation/AbstractTransportation.html#method_setSeat", "name": "App\\Entity\\Transportation\\AbstractTransportation::setSeat", "doc": "&quot;Seat setter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\AbstractTransportation", "fromLink": "App/Entity/Transportation/AbstractTransportation.html", "link": "App/Entity/Transportation/AbstractTransportation.html#method_getArrival", "name": "App\\Entity\\Transportation\\AbstractTransportation::getArrival", "doc": "&quot;Point of arrival getter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\AbstractTransportation", "fromLink": "App/Entity/Transportation/AbstractTransportation.html", "link": "App/Entity/Transportation/AbstractTransportation.html#method_setArrival", "name": "App\\Entity\\Transportation\\AbstractTransportation::setArrival", "doc": "&quot;Point of arrival setter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\AbstractTransportation", "fromLink": "App/Entity/Transportation/AbstractTransportation.html", "link": "App/Entity/Transportation/AbstractTransportation.html#method_getDeparture", "name": "App\\Entity\\Transportation\\AbstractTransportation::getDeparture", "doc": "&quot;Point of departure getter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\AbstractTransportation", "fromLink": "App/Entity/Transportation/AbstractTransportation.html", "link": "App/Entity/Transportation/AbstractTransportation.html#method_setDeparture", "name": "App\\Entity\\Transportation\\AbstractTransportation::setDeparture", "doc": "&quot;Point of departure setter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\AbstractTransportation", "fromLink": "App/Entity/Transportation/AbstractTransportation.html", "link": "App/Entity/Transportation/AbstractTransportation.html#method_getTransportationNumber", "name": "App\\Entity\\Transportation\\AbstractTransportation::getTransportationNumber", "doc": "&quot;Transportation number getter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\AbstractTransportation", "fromLink": "App/Entity/Transportation/AbstractTransportation.html", "link": "App/Entity/Transportation/AbstractTransportation.html#method_setTransportationNumber", "name": "App\\Entity\\Transportation\\AbstractTransportation::setTransportationNumber", "doc": "&quot;Transportation number setter.&quot;"},
            
            {"type": "Class", "fromName": "App\\Entity\\Transportation", "fromLink": "App/Entity/Transportation.html", "link": "App/Entity/Transportation/Bus.html", "name": "App\\Entity\\Transportation\\Bus", "doc": "&quot;Class Bus.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Entity\\Transportation\\Bus", "fromLink": "App/Entity/Transportation/Bus.html", "link": "App/Entity/Transportation/Bus.html#method_getMessage", "name": "App\\Entity\\Transportation\\Bus::getMessage", "doc": "&quot;Generate and return message for the transportation.&quot;"},
            
            {"type": "Class", "fromName": "App\\Entity\\Transportation", "fromLink": "App/Entity/Transportation.html", "link": "App/Entity/Transportation/Plane.html", "name": "App\\Entity\\Transportation\\Plane", "doc": "&quot;Class Plane.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Entity\\Transportation\\Plane", "fromLink": "App/Entity/Transportation/Plane.html", "link": "App/Entity/Transportation/Plane.html#method_getGate", "name": "App\\Entity\\Transportation\\Plane::getGate", "doc": "&quot;Gate getter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\Plane", "fromLink": "App/Entity/Transportation/Plane.html", "link": "App/Entity/Transportation/Plane.html#method_setGate", "name": "App\\Entity\\Transportation\\Plane::setGate", "doc": "&quot;Gate setter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\Plane", "fromLink": "App/Entity/Transportation/Plane.html", "link": "App/Entity/Transportation/Plane.html#method_getBaggage", "name": "App\\Entity\\Transportation\\Plane::getBaggage", "doc": "&quot;Baggage info getter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\Plane", "fromLink": "App/Entity/Transportation/Plane.html", "link": "App/Entity/Transportation/Plane.html#method_setBaggage", "name": "App\\Entity\\Transportation\\Plane::setBaggage", "doc": "&quot;Baggage info setter.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\Plane", "fromLink": "App/Entity/Transportation/Plane.html", "link": "App/Entity/Transportation/Plane.html#method_getMessage", "name": "App\\Entity\\Transportation\\Plane::getMessage", "doc": "&quot;Return a message for the transportation.&quot;"},
            
            {"type": "Class", "fromName": "App\\Entity\\Transportation", "fromLink": "App/Entity/Transportation.html", "link": "App/Entity/Transportation/Train.html", "name": "App\\Entity\\Transportation\\Train", "doc": "&quot;Class Train.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Entity\\Transportation\\Train", "fromLink": "App/Entity/Transportation/Train.html", "link": "App/Entity/Transportation/Train.html#method_getMessage", "name": "App\\Entity\\Transportation\\Train::getMessage", "doc": "&quot;Return a message for the transportation.&quot;"},
            
            {"type": "Class", "fromName": "App\\Entity\\Transportation", "fromLink": "App/Entity/Transportation.html", "link": "App/Entity/Transportation/TransportationInterface.html", "name": "App\\Entity\\Transportation\\TransportationInterface", "doc": "&quot;Interface TransportationInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Entity\\Transportation\\TransportationInterface", "fromLink": "App/Entity/Transportation/TransportationInterface.html", "link": "App/Entity/Transportation/TransportationInterface.html#method_getDeparture", "name": "App\\Entity\\Transportation\\TransportationInterface::getDeparture", "doc": "&quot;Returns a departure point for the transportation.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\TransportationInterface", "fromLink": "App/Entity/Transportation/TransportationInterface.html", "link": "App/Entity/Transportation/TransportationInterface.html#method_getArrival", "name": "App\\Entity\\Transportation\\TransportationInterface::getArrival", "doc": "&quot;Returns a arrival point for the transportation.&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\TransportationInterface", "fromLink": "App/Entity/Transportation/TransportationInterface.html", "link": "App/Entity/Transportation/TransportationInterface.html#method_getTransportationNumber", "name": "App\\Entity\\Transportation\\TransportationInterface::getTransportationNumber", "doc": "&quot;Returns transportation number&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\TransportationInterface", "fromLink": "App/Entity/Transportation/TransportationInterface.html", "link": "App/Entity/Transportation/TransportationInterface.html#method_getSeat", "name": "App\\Entity\\Transportation\\TransportationInterface::getSeat", "doc": "&quot;Returns seat number&quot;"},
                    {"type": "Method", "fromName": "App\\Entity\\Transportation\\TransportationInterface", "fromLink": "App/Entity/Transportation/TransportationInterface.html", "link": "App/Entity/Transportation/TransportationInterface.html#method_getMessage", "name": "App\\Entity\\Transportation\\TransportationInterface::getMessage", "doc": "&quot;Returns a message for the transportation.&quot;"},
            
            {"type": "Class", "fromName": "App\\Helper", "fromLink": "App/Helper.html", "link": "App/Helper/Reflection.html", "name": "App\\Helper\\Reflection", "doc": "&quot;Class Reflection&quot;"},
                                                        {"type": "Method", "fromName": "App\\Helper\\Reflection", "fromLink": "App/Helper/Reflection.html", "link": "App/Helper/Reflection.html#method_setPropertyValue", "name": "App\\Helper\\Reflection::setPropertyValue", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Service\\TripManager", "fromLink": "App/Service/TripManager.html", "link": "App/Service/TripManager/TripManager.html", "name": "App\\Service\\TripManager\\TripManager", "doc": "&quot;Class TripManager.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Service\\TripManager\\TripManager", "fromLink": "App/Service/TripManager/TripManager.html", "link": "App/Service/TripManager/TripManager.html#method_sortTransportations", "name": "App\\Service\\TripManager\\TripManager::sortTransportations", "doc": "&quot;Sorts given array of transportations in an appropriate order.&quot;"},
                    {"type": "Method", "fromName": "App\\Service\\TripManager\\TripManager", "fromLink": "App/Service/TripManager/TripManager.html", "link": "App/Service/TripManager/TripManager.html#method_getTranspotationsMessage", "name": "App\\Service\\TripManager\\TripManager::getTranspotationsMessage", "doc": "&quot;Retrieves transportations message for given array of transportations after ordering them.&quot;"},
                    {"type": "Method", "fromName": "App\\Service\\TripManager\\TripManager", "fromLink": "App/Service/TripManager/TripManager.html", "link": "App/Service/TripManager/TripManager.html#method_getTransportationMessageLine", "name": "App\\Service\\TripManager\\TripManager::getTransportationMessageLine", "doc": "&quot;Formats single line of transportation message.&quot;"},
            
            {"type": "Trait", "fromName": "App\\Service\\TripManager", "fromLink": "App/Service/TripManager.html", "link": "App/Service/TripManager/TripManagerAwareTrait.html", "name": "App\\Service\\TripManager\\TripManagerAwareTrait", "doc": "&quot;Trait TripManagerAwareTrait&quot;"},
                                                        {"type": "Method", "fromName": "App\\Service\\TripManager\\TripManagerAwareTrait", "fromLink": "App/Service/TripManager/TripManagerAwareTrait.html", "link": "App/Service/TripManager/TripManagerAwareTrait.html#method_setTripManager", "name": "App\\Service\\TripManager\\TripManagerAwareTrait::setTripManager", "doc": "&quot;tripManager dependency setter.&quot;"},
                    {"type": "Method", "fromName": "App\\Service\\TripManager\\TripManagerAwareTrait", "fromLink": "App/Service/TripManager/TripManagerAwareTrait.html", "link": "App/Service/TripManager/TripManagerAwareTrait.html#method_getTripManager", "name": "App\\Service\\TripManager\\TripManagerAwareTrait::getTripManager", "doc": "&quot;TripManager dependency getter.&quot;"},
            
            {"type": "Class", "fromName": "App\\Service\\TripManager", "fromLink": "App/Service/TripManager.html", "link": "App/Service/TripManager/TripManagerDependentInterface.html", "name": "App\\Service\\TripManager\\TripManagerDependentInterface", "doc": "&quot;Interface TripManagerDependentInterface&quot;"},
                                                        {"type": "Method", "fromName": "App\\Service\\TripManager\\TripManagerDependentInterface", "fromLink": "App/Service/TripManager/TripManagerDependentInterface.html", "link": "App/Service/TripManager/TripManagerDependentInterface.html#method_setTripManager", "name": "App\\Service\\TripManager\\TripManagerDependentInterface::setTripManager", "doc": "&quot;tripManager dependency setter.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});



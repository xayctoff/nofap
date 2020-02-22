<?php

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class BaseControllerTest extends WebTestCase
{
    public function testWorking()
    {
        $client = static::createClient();

        $client->request('GET', '/');

        $jsonExpected = $client->getResponse()->getContent();

        $actual = [
            'name'=>[
                'Dmitry',
                'Petr',
                'Alex',
                'Slavik',
            ],
            'action'=>'nofap',
        ];

        $jsonActual = json_encode($actual);

        $this->assertJsonStringEqualsJsonString($jsonExpected, $jsonActual);
    }
}
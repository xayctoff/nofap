<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class BaseController extends AbstractController
{
    /**
     * Test controller
     *
     * @return Response
     */
    public function index() : Response
    {
        return $this->json(
            [
                'name' => [
                    'Dmitry',
                    'Petr',
                    'Alex',
                    'Slavik',
                ],
                'action' => 'nofap',
            ]
        );
    }
}
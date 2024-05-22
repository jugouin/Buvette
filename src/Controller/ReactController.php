<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
class ReactController extends AbstractController
{
    #[Route('/', name: 'app_react', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('react/index.html.twig');
    }

    #[Route('/reservation', name: 'reservation', methods:['GET'])]
    public function reservation(): Response
    {
        return $this->render('react/reservation.html.twig');
    }

    #[Route('/admin', name: 'admin', methods:['GET'])]
    public function admin(): Response
    {
        return $this->render('react/admin.html.twig');
    }

}

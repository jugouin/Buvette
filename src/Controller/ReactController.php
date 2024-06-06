<?php

namespace App\Controller;

use App\Repository\EveningRepository;
use App\Repository\ReservationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;
use Symfony\Component\Serializer\SerializerInterface;

class ReactController extends AbstractController
{
    #[Route('/', name: 'app_react', methods: ['GET'])]
    public function home(): Response
    {
        return $this->render('react/home.html.twig');
    }

    #[Route('/reservation', name: 'reservation', methods:['GET'])]
    public function formReservation(EveningRepository $eveningRepository, SerializerInterface $serializer): Response
    {
        $evening_data = $eveningRepository->findAll();

        $context = (new ObjectNormalizerContextBuilder())
            ->withGroups('evening')
            ->toArray();

        $evening_json = $serializer->serialize($evening_data, 'json', $context);

        return $this->render('react/reservation.html.twig', [
            'evening_json' => $evening_json,
        ]);
    }

    #[Route('/admin', name: 'admin', methods:['GET'])]
    public function admin(ReservationRepository $reservationRepository, SerializerInterface $serializer): Response
    {
        $reservation_data = $reservationRepository->findAll();

        $context = (new ObjectNormalizerContextBuilder())
            ->withGroups('reservation')
            ->toArray();

        $reservations_json = $serializer->serialize($reservation_data, 'json', $context);
        return $this->render('react/admin.html.twig', [
            'reservations_json' => $reservations_json,
        ]);
    }

}

<?php

namespace App\Controller;

use App\Entity\Reservation;
use App\Form\ReservationType;
use App\Repository\ReservationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;
use Symfony\Component\Serializer\SerializerInterface;



#[Route('/reservation')]
class ReservationController extends AbstractController
{
    #[Route('/', name: 'app_reservation_index', methods: ['GET'])]
    public function index(ReservationRepository $reservationRepository, SerializerInterface $serializer): Response
    {
      
        $reservations_data = $reservationRepository->findAll();

        $context = (new ObjectNormalizerContextBuilder())
            ->withGroups('reservation')
            ->toArray();

        $reservations_json = $serializer->serialize($reservations_data, 'json', $context);

        return $this->render('reservation/index.html.twig', [
            'reservations_json' => $reservations_json,
        ]);
    }

    #[Route('/add', name: 'app_reservation_new', methods: ['POST'])]
    public function add(Request $request, EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
    {
        $data = $request->getContent();
        echo($data);
        $newReservation = $serializer->deserialize($data, Reservation::class, 'json');
        
        $entityManager->persist($newReservation);
        $entityManager->flush();

        return new Response();
    }

    #[Route('/{id}', name: 'app_reservation_show', methods: ['GET'])]
    public function show(Reservation $reservation): Response
    {
        return $this->render('reservation/show.html.twig', [
            'reservation' => $reservation,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_reservation_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Reservation $reservation, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ReservationType::class, $reservation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_reservation_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('reservation/edit.html.twig', [
            'reservation' => $reservation,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_reservation_delete', methods: ['DELETE'])]
    public function delete(Reservation $reservation, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($reservation);
        $entityManager->flush();

        return new Response(null, Response::HTTP_NO_CONTENT);
    }
}

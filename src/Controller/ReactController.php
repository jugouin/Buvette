<?php

namespace App\Controller;

use App\Entity\Reservation;
use App\Repository\EveningRepository;
use App\Repository\ReservationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Snappy\Pdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;
use Symfony\Component\Serializer\SerializerInterface;

class ReactController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

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

    #[Route('/download/{date}', name:'download', methods:['GET'])]
    public function download($date): Response
    {
        $reservations = $this->entityManager->getRepository(Reservation::class)
            ->findBy(['date' => new \DateTime($date)]);

            $dataToCsv = [];

            foreach($reservations as $reservation){
                $dataToCsv[] = [     
                    $reservation->getFirstName(),
                    $reservation->getLastName(),
                    $reservation->getPhone(),
                    $reservation->getAdults(),
                    $reservation->getChildren(),
                    $reservation->getMenu(),
                    $reservation->getRemarks(),
                ];
            }
    
            $lines = [];
            foreach ($dataToCsv as $row) {
                $lines[] = implode(',', $row);
            }
    
            $data = implode(PHP_EOL, $lines);
            $data = "Prénom, Nom, Téléphone, Adults, Enfants, Menus, Remarques".PHP_EOL.$data;
          
            return new Response(
                $data,
                200,
                [
                    'Content-Type' => 'text/csv',
                    "Content-disposition" => "attachment; filename=reservation.csv"
                ]
            );
    }

}

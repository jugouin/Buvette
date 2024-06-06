<?php

namespace App\Controller;

use App\Entity\Evening;
use App\Form\EveningType;
use App\Repository\EveningRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Context\Normalizer\ObjectNormalizerContextBuilder;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/evening')]
class EveningController extends AbstractController
{
    #[Route('/', name: 'app_evening_index', methods: ['GET'])]
    public function index(EveningRepository $eveningRepository): Response
    {
        $evenings = $eveningRepository->findAll();

        return $this->render('evening/index.html.twig', [
            'evenings' => $evenings,
        ]);
    }

    #[Route('/new', name: 'app_evening_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $evening = new Evening();
        $form = $this->createForm(EveningType::class, $evening);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($evening);
            $entityManager->flush();

            return $this->redirectToRoute('app_home', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('evening/new.html.twig', [
            'evening' => $evening,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_evening_show', methods: ['GET'])]
    public function show(Evening $evening): Response
    {
        return $this->render('evening/show.html.twig', [
            'evening' => $evening,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_evening_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Evening $evening, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(EveningType::class, $evening);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_evening_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('evening/edit.html.twig', [
            'evening' => $evening,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_evening_delete', methods: ['POST'])]
    public function delete(Request $request, Evening $evening, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$evening->getId(), $request->getPayload()->get('_token'))) {
            $entityManager->remove($evening);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_evening_index', [], Response::HTTP_SEE_OTHER);
    }
}

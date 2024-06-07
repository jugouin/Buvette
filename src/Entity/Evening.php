<?php

namespace App\Entity;

use App\Repository\EveningRepository;
use Doctrine\DBAL\Types\BooleanType;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Table;
use Symfony\Component\Serializer\Annotation\Groups;
use Twig\Node\Expression\Test\NullTest;

#[Groups(['evening'])]
#[Table('evening')]
#[ORM\Entity(repositoryClass: EveningRepository::class)]
class Evening
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(length: 50)]
    private ?string $menu = null;

    #[ORM\Column(length: 50)]
    private ?string $music = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private ?bool $cancelled = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getMenu(): ?string
    {
        return $this->menu;
    }

    public function setMenu(string $menu): static
    {
        $this->menu = $menu;

        return $this;
    }

    public function getMusic(): ?string
    {
        return $this->music;
    }

    public function setMusic(string $music): static
    {
        $this->music = $music;

        return $this;
    }

    public function getCancelled(): ?bool
    {
        return $this->cancelled;
    }

    public function setCancelled(string $cancelled): static
    {
        $this->cancelled = $cancelled;
        return $this;
    }
}

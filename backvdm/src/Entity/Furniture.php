<?php

namespace App\Entity;

use App\Repository\FurnitureRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: FurnitureRepository::class)]
class Furniture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['api_furniture_get'])]
    private ?int $id = null;

    #[Groups(['api_furniture_get'])]
    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[Groups(['api_one_furniture'])]
    #[ORM\Column]
    private ?float $height = null;

    
    #[Groups(['api_one_furniture'])]
    #[ORM\Column]
    private ?float $width = null;

   
    #[Groups(['api_one_furniture'])]
    #[ORM\Column]
    private ?float $depth = null;

    #[Groups(['api_furniture_get'])]
    #[ORM\Column]
    private ?float $price = null;

    
    #[Groups(['api_one_furniture'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $color = null;

    #[Groups(['api_furniture_get'])]
    #[ORM\Column(length: 255)]
    private ?string $picture = null;

    
    #[Groups(['api_one_furniture'])]
    #[ORM\Column(length: 255)]
    private ?string $material = null;

    #[Groups(['api_furniture_get'])]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    
    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    
    #[ORM\Column]
    private ?\DateTimeImmutable $updatedAt = null;

    
    #[Groups(['api_one_furniture'])]
    #[ORM\ManyToOne(inversedBy: 'furniture', cascade: ['persist'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Categories $category = null;

   
    #[ORM\ManyToOne(inversedBy: 'furniture', cascade: ['persist'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Status $status = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getHeight(): ?float
    {
        return $this->height;
    }

    public function setHeight(float $height): static
    {
        $this->height = $height;

        return $this;
    }

    public function getWidth(): ?float
    {
        return $this->width;
    }

    public function setWidth(float $width): static
    {
        $this->width = $width;

        return $this;
    }

    public function getDepth(): ?float
    {
        return $this->depth;
    }

    public function setDepth(float $depth): static
    {
        $this->depth = $depth;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): static
    {
        $this->picture = $picture;

        return $this;
    }

    public function getMaterial(): ?string
    {
        return $this->material;
    }

    public function setMaterial(string $material): static
    {
        $this->material = $material;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getCategory(): ?Categories
    {
        return $this->category;
    }

    public function setCategory(?Categories $category): static
    {
        $this->category = $category;

        return $this;
    }

    public function getStatus(): ?Status
    {
        return $this->status;
    }

    public function setStatus(?Status $status): static
    {
        $this->status = $status;

        return $this;
    }
}

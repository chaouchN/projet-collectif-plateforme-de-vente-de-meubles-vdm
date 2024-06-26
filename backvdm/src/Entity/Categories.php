<?php

namespace App\Entity;

use App\Repository\CategoriesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoriesRepository::class)]
class Categories
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column]
    private ?bool $inside = null;

    /**
     * @var Collection<int, Furniture>
     */
    #[ORM\OneToMany(targetEntity: Furniture::class, mappedBy: 'category')]
    private Collection $furniture;

    public function __construct()
    {
        $this->furniture = new ArrayCollection();
    }

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function isInside(): ?bool
    {
        return $this->inside;
    }

    public function setInside(bool $inside): static
    {
        $this->inside = $inside;

        return $this;
    }

    /**
     * @return Collection<int, Furniture>
     */
    public function getFurniture(): Collection
    {
        return $this->furniture;
    }

    public function addFurniture(Furniture $furniture): static
    {
        if (!$this->furniture->contains($furniture)) {
            $this->furniture->add($furniture);
            $furniture->setCategory($this);
        }

        return $this;
    }

    public function removeFurniture(Furniture $furniture): static
    {
        if ($this->furniture->removeElement($furniture)) {
            // set the owning side to null (unless already changed)
            if ($furniture->getCategory() === $this) {
                $furniture->setCategory(null);
            }
        }

        return $this;
    }
}

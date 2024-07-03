<?php

namespace App\Controller;

use App\Entity\Furniture;
use App\Repository\FurnitureRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Requirement\Requirement;


class FurnitureController extends AbstractController
{
    #[Route('/furniture', methods: ['GET'])] // endpoint(appel à l'Api)
        public function getFurnitureList(FurnitureRepository $repository) 
    {
        $furniture = $repository -> findByAllwithRelations(); // requête à la base de données Voir FurnitureRepository
        return $this->json($furniture, 200, [], [   // Renvoie tous les meubles en Json
            'groups' => ['api_furniture_get']  // les champs avec ce tag Voir Furniture.php
        ]);
    }

    #[Route('/furniture/{id}',requirements: ['id'=> Requirement::DIGITS],  methods: ['GET'])]
        public function getOneFurniture(Furniture $furniture)  // requête à la base de données Voir FurnitureRepository
        {
        return $this->json($furniture,200,[],[  //  Renvoie un seul meuble en Json
            'groups' => ['api_furniture_get','api_one_furniture']  // les champs avec ces tags Voir Furniture.php ET Categories.php
        ]);


    }


}


   
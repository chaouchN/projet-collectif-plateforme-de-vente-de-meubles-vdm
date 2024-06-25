Install party
installer php8
installer composer => https://getcomposer.org/download/

installer symfony7 :
(a ne faire qu'une fois par une personne pour tout le projet, les autres feront un pull sur git)
composer create-project symfony/skeleton:"7.0.*" backvdm
composer require symfony/maker-bundle --dev
composer require symfony/orm-pack

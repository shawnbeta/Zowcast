<?php

namespace HC\Bundle\MediaBundle\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\ORM\Query;
use Symfony\Component\Validator\Constraints\Null;

/**
 * EpisodeRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class EpisodeRepository extends EntityRepository
{

    private $dqlStart = 'SELECT e, s FROM HCMediaBundle:Episode e JOIN e.subscription s ';

    public function fetchEpisodes($start = 0, $count = NULL, $subscriptionId =  NULL)
    {
        $dql = $this->dqlStart;

        if($subscriptionId !==NULL){
            $dql .= ' WHERE (e.subscription = :subscriptionId)';
        }
        $dql .= ' ORDER BY e.pubDate DESC';

        $query = $this->getEntityManager()->createQuery($dql)
            ->setFirstResult($start)
            ->setMaxResults($count);

        if($subscriptionId !== NULL){
            $query->setParameters(array(
                'subscriptionId' => $subscriptionId
            ));
        }

        $result = $query->getResult();
        return $result;
    }

    public function fetchByDate($field, $compareDate, $symbol)
    {
        $dql = $this->dqlStart;
        if($symbol == '>'){
            $dql .= ' WHERE (:field > :compareDate)';
        }else{
            $dql .= ' WHERE (:field < :compareDate)';
        }
        $dql .= ' ORDER BY e.pubDate DESC';

        $query = $this->getEntityManager()->createQuery($dql);
        $query->setParameters(array(
            'compareDate' => $compareDate,
            'field' => 'e.' . $field
        ));
        $result = $query->getResult();
        return $result;

    }






}

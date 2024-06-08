<?php

namespace App\Form;

use App\Entity\Evening;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EveningType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('date', null, [
                'widget' => 'single_text',
                'required' => true,
            ])
            ->add('menu')
            ->add('music', null, [
                'label' => 'Musique',
                'required' => true,
            ])
            ->add('cancelled', CheckboxType::class, [
                'label'    => 'Soirée annulée',
                'required' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Evening::class,
        ]);
    }
}

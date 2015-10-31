<?php

/* HCUtilityBundle:Default:index.html.twig */
class __TwigTemplate_ddc92ded683107972c6a22d31cc26a1ea62e6fb29b4d14a9225e230c238d76c3 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_56e8a17e0220705815eed686931b18d0519ec2da92b986253241a3feb77d8de5 = $this->env->getExtension("native_profiler");
        $__internal_56e8a17e0220705815eed686931b18d0519ec2da92b986253241a3feb77d8de5->enter($__internal_56e8a17e0220705815eed686931b18d0519ec2da92b986253241a3feb77d8de5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "HCUtilityBundle:Default:index.html.twig"));

        // line 1
        echo "Hello ";
        echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : $this->getContext($context, "name")), "html", null, true);
        echo "!
";
        
        $__internal_56e8a17e0220705815eed686931b18d0519ec2da92b986253241a3feb77d8de5->leave($__internal_56e8a17e0220705815eed686931b18d0519ec2da92b986253241a3feb77d8de5_prof);

    }

    public function getTemplateName()
    {
        return "HCUtilityBundle:Default:index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  22 => 1,);
    }
}
/* Hello {{ name }}!*/
/* */

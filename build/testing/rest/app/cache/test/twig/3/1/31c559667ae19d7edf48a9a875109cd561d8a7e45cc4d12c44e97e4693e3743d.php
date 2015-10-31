<?php

/* HCUtilityBundle:Default:index.html.twig */
class __TwigTemplate_633eee98211b4045ca77026aeb228f920c6d2a6b4121aa46b3bdcc3016dc9a15 extends Twig_Template
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
        $__internal_782004c73b7272a0d53a1266c8e0c5aec93e6af8a7d5e847b0e11a9fb9827893 = $this->env->getExtension("native_profiler");
        $__internal_782004c73b7272a0d53a1266c8e0c5aec93e6af8a7d5e847b0e11a9fb9827893->enter($__internal_782004c73b7272a0d53a1266c8e0c5aec93e6af8a7d5e847b0e11a9fb9827893_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "HCUtilityBundle:Default:index.html.twig"));

        // line 1
        echo "Hello ";
        echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : $this->getContext($context, "name")), "html", null, true);
        echo "!
";
        
        $__internal_782004c73b7272a0d53a1266c8e0c5aec93e6af8a7d5e847b0e11a9fb9827893->leave($__internal_782004c73b7272a0d53a1266c8e0c5aec93e6af8a7d5e847b0e11a9fb9827893_prof);

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

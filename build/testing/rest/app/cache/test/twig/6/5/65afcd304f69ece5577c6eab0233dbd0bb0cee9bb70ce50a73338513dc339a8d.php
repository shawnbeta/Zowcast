<?php

/* HCUtilityBundle:Default:index.html.twig */
class __TwigTemplate_c13aa2e87d284f87d5897d20eb5244fe9db1b083a60aeed9059e2e62c67a85c7 extends Twig_Template
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
        $__internal_2042ea62afbae0d442e7cde6bb26af169a3443dee1e516aa7f07547e21c694f5 = $this->env->getExtension("native_profiler");
        $__internal_2042ea62afbae0d442e7cde6bb26af169a3443dee1e516aa7f07547e21c694f5->enter($__internal_2042ea62afbae0d442e7cde6bb26af169a3443dee1e516aa7f07547e21c694f5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "HCUtilityBundle:Default:index.html.twig"));

        // line 1
        echo "Hello ";
        echo twig_escape_filter($this->env, (isset($context["name"]) ? $context["name"] : $this->getContext($context, "name")), "html", null, true);
        echo "!
";
        
        $__internal_2042ea62afbae0d442e7cde6bb26af169a3443dee1e516aa7f07547e21c694f5->leave($__internal_2042ea62afbae0d442e7cde6bb26af169a3443dee1e516aa7f07547e21c694f5_prof);

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

<?php

/* TwigBundle:Exception:traces.txt.twig */
class __TwigTemplate_f0b010d0963a7668ce748b9893bdfea4554139016d183c528729d4668b4fa859 extends Twig_Template
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
        $__internal_4375175ab505cee58380e8cf28e1d1d5ffc2c9b015cd7f07336cc4e2e79ff769 = $this->env->getExtension("native_profiler");
        $__internal_4375175ab505cee58380e8cf28e1d1d5ffc2c9b015cd7f07336cc4e2e79ff769->enter($__internal_4375175ab505cee58380e8cf28e1d1d5ffc2c9b015cd7f07336cc4e2e79ff769_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "TwigBundle:Exception:traces.txt.twig"));

        // line 1
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "trace", array()))) {
            // line 2
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "trace", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["trace"]) {
                // line 3
                $this->loadTemplate("TwigBundle:Exception:trace.txt.twig", "TwigBundle:Exception:traces.txt.twig", 3)->display(array("trace" => $context["trace"]));
                // line 4
                echo "
";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['trace'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        }
        
        $__internal_4375175ab505cee58380e8cf28e1d1d5ffc2c9b015cd7f07336cc4e2e79ff769->leave($__internal_4375175ab505cee58380e8cf28e1d1d5ffc2c9b015cd7f07336cc4e2e79ff769_prof);

    }

    public function getTemplateName()
    {
        return "TwigBundle:Exception:traces.txt.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  30 => 4,  28 => 3,  24 => 2,  22 => 1,);
    }
}
/* {% if exception.trace|length %}*/
/* {% for trace in exception.trace %}*/
/* {% include 'TwigBundle:Exception:trace.txt.twig' with { 'trace': trace } only %}*/
/* */
/* {% endfor %}*/
/* {% endif %}*/
/* */

<?php

/* TwigBundle:Exception:exception_full.html.twig */
class __TwigTemplate_a5b84431b5f2e9bc3181235ec8ee5988fa101760d8c1ce7d563a168d4a910019 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("TwigBundle::layout.html.twig", "TwigBundle:Exception:exception_full.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "TwigBundle::layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_ec18d4eeabcb65e0a75d20eabda383168f69b9d5dc98f4ff46dda7de7026963f = $this->env->getExtension("native_profiler");
        $__internal_ec18d4eeabcb65e0a75d20eabda383168f69b9d5dc98f4ff46dda7de7026963f->enter($__internal_ec18d4eeabcb65e0a75d20eabda383168f69b9d5dc98f4ff46dda7de7026963f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "TwigBundle:Exception:exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_ec18d4eeabcb65e0a75d20eabda383168f69b9d5dc98f4ff46dda7de7026963f->leave($__internal_ec18d4eeabcb65e0a75d20eabda383168f69b9d5dc98f4ff46dda7de7026963f_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_8ec33aa4e0f04d4e5a27b921ff7fe3817fcd7ead39f46fbf4ecce80a8b1112d4 = $this->env->getExtension("native_profiler");
        $__internal_8ec33aa4e0f04d4e5a27b921ff7fe3817fcd7ead39f46fbf4ecce80a8b1112d4->enter($__internal_8ec33aa4e0f04d4e5a27b921ff7fe3817fcd7ead39f46fbf4ecce80a8b1112d4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('request')->generateAbsoluteUrl($this->env->getExtension('asset')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_8ec33aa4e0f04d4e5a27b921ff7fe3817fcd7ead39f46fbf4ecce80a8b1112d4->leave($__internal_8ec33aa4e0f04d4e5a27b921ff7fe3817fcd7ead39f46fbf4ecce80a8b1112d4_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_db006125caa292995aa6c05691a08851c17ae821d55100b82af2d510cfc07ee4 = $this->env->getExtension("native_profiler");
        $__internal_db006125caa292995aa6c05691a08851c17ae821d55100b82af2d510cfc07ee4->enter($__internal_db006125caa292995aa6c05691a08851c17ae821d55100b82af2d510cfc07ee4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_db006125caa292995aa6c05691a08851c17ae821d55100b82af2d510cfc07ee4->leave($__internal_db006125caa292995aa6c05691a08851c17ae821d55100b82af2d510cfc07ee4_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_e698fbea37e4862ab4d5c8cf88d79bb662df33703fd79e0c4e9f631d04170414 = $this->env->getExtension("native_profiler");
        $__internal_e698fbea37e4862ab4d5c8cf88d79bb662df33703fd79e0c4e9f631d04170414->enter($__internal_e698fbea37e4862ab4d5c8cf88d79bb662df33703fd79e0c4e9f631d04170414_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("TwigBundle:Exception:exception.html.twig", "TwigBundle:Exception:exception_full.html.twig", 12)->display($context);
        
        $__internal_e698fbea37e4862ab4d5c8cf88d79bb662df33703fd79e0c4e9f631d04170414->leave($__internal_e698fbea37e4862ab4d5c8cf88d79bb662df33703fd79e0c4e9f631d04170414_prof);

    }

    public function getTemplateName()
    {
        return "TwigBundle:Exception:exception_full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 12,  72 => 11,  58 => 8,  52 => 7,  42 => 4,  36 => 3,  11 => 1,);
    }
}
/* {% extends 'TwigBundle::layout.html.twig' %}*/
/* */
/* {% block head %}*/
/*     <link href="{{ absolute_url(asset('bundles/framework/css/exception.css')) }}" rel="stylesheet" type="text/css" media="all" />*/
/* {% endblock %}*/
/* */
/* {% block title %}*/
/*     {{ exception.message }} ({{ status_code }} {{ status_text }})*/
/* {% endblock %}*/
/* */
/* {% block body %}*/
/*     {% include 'TwigBundle:Exception:exception.html.twig' %}*/
/* {% endblock %}*/
/* */

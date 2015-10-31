<?php

/* TwigBundle:Exception:exception_full.html.twig */
class __TwigTemplate_6b7ae193ff8190cab02a7930e52ac52d8b8e04f0eeef81736a5293bf3dd84987 extends Twig_Template
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
        $__internal_efe710d2a458013027e350c58ef5b8ca48f093b308c6386699ab69e400d6051c = $this->env->getExtension("native_profiler");
        $__internal_efe710d2a458013027e350c58ef5b8ca48f093b308c6386699ab69e400d6051c->enter($__internal_efe710d2a458013027e350c58ef5b8ca48f093b308c6386699ab69e400d6051c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "TwigBundle:Exception:exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_efe710d2a458013027e350c58ef5b8ca48f093b308c6386699ab69e400d6051c->leave($__internal_efe710d2a458013027e350c58ef5b8ca48f093b308c6386699ab69e400d6051c_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_4cfe69dbb6d116acbadbe9a0f6e1d4731d39e55c115fafc63325ad792f9282dc = $this->env->getExtension("native_profiler");
        $__internal_4cfe69dbb6d116acbadbe9a0f6e1d4731d39e55c115fafc63325ad792f9282dc->enter($__internal_4cfe69dbb6d116acbadbe9a0f6e1d4731d39e55c115fafc63325ad792f9282dc_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('request')->generateAbsoluteUrl($this->env->getExtension('asset')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_4cfe69dbb6d116acbadbe9a0f6e1d4731d39e55c115fafc63325ad792f9282dc->leave($__internal_4cfe69dbb6d116acbadbe9a0f6e1d4731d39e55c115fafc63325ad792f9282dc_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_e890812dc36011d82c0cc93c7e2b1238690963258c590b155b3d3a3e426feb1f = $this->env->getExtension("native_profiler");
        $__internal_e890812dc36011d82c0cc93c7e2b1238690963258c590b155b3d3a3e426feb1f->enter($__internal_e890812dc36011d82c0cc93c7e2b1238690963258c590b155b3d3a3e426feb1f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_e890812dc36011d82c0cc93c7e2b1238690963258c590b155b3d3a3e426feb1f->leave($__internal_e890812dc36011d82c0cc93c7e2b1238690963258c590b155b3d3a3e426feb1f_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_75189d85cc21c53f2090ce57320c77c993958dd2844afe13d5cd50e8f43281d4 = $this->env->getExtension("native_profiler");
        $__internal_75189d85cc21c53f2090ce57320c77c993958dd2844afe13d5cd50e8f43281d4->enter($__internal_75189d85cc21c53f2090ce57320c77c993958dd2844afe13d5cd50e8f43281d4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("TwigBundle:Exception:exception.html.twig", "TwigBundle:Exception:exception_full.html.twig", 12)->display($context);
        
        $__internal_75189d85cc21c53f2090ce57320c77c993958dd2844afe13d5cd50e8f43281d4->leave($__internal_75189d85cc21c53f2090ce57320c77c993958dd2844afe13d5cd50e8f43281d4_prof);

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

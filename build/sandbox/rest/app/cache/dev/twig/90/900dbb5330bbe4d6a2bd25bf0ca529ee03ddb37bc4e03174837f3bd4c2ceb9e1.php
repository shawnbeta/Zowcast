<?php

/* TwigBundle:Exception:exception_full.html.twig */
class __TwigTemplate_4a9f78d7a16fc469ace25b30040808331550613061c9d522860c161273e810f9 extends Twig_Template
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
        $__internal_8aba4d2885762eb17913e1363b23e51ecb5a0950ae6b031334a02a0c3d7519a0 = $this->env->getExtension("native_profiler");
        $__internal_8aba4d2885762eb17913e1363b23e51ecb5a0950ae6b031334a02a0c3d7519a0->enter($__internal_8aba4d2885762eb17913e1363b23e51ecb5a0950ae6b031334a02a0c3d7519a0_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "TwigBundle:Exception:exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_8aba4d2885762eb17913e1363b23e51ecb5a0950ae6b031334a02a0c3d7519a0->leave($__internal_8aba4d2885762eb17913e1363b23e51ecb5a0950ae6b031334a02a0c3d7519a0_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_3717bf940907f5d0538db4e5334b556e21d416f392928861c6599270b9910c15 = $this->env->getExtension("native_profiler");
        $__internal_3717bf940907f5d0538db4e5334b556e21d416f392928861c6599270b9910c15->enter($__internal_3717bf940907f5d0538db4e5334b556e21d416f392928861c6599270b9910c15_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('request')->generateAbsoluteUrl($this->env->getExtension('asset')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_3717bf940907f5d0538db4e5334b556e21d416f392928861c6599270b9910c15->leave($__internal_3717bf940907f5d0538db4e5334b556e21d416f392928861c6599270b9910c15_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_8db9bd7d4f6c8df7a31436a555ca248219e49747b8726e29b4856057910b6186 = $this->env->getExtension("native_profiler");
        $__internal_8db9bd7d4f6c8df7a31436a555ca248219e49747b8726e29b4856057910b6186->enter($__internal_8db9bd7d4f6c8df7a31436a555ca248219e49747b8726e29b4856057910b6186_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_8db9bd7d4f6c8df7a31436a555ca248219e49747b8726e29b4856057910b6186->leave($__internal_8db9bd7d4f6c8df7a31436a555ca248219e49747b8726e29b4856057910b6186_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_55828875314822f346542592aabb7c31a0ca3a26d7fd7c21c88012e9c2f69112 = $this->env->getExtension("native_profiler");
        $__internal_55828875314822f346542592aabb7c31a0ca3a26d7fd7c21c88012e9c2f69112->enter($__internal_55828875314822f346542592aabb7c31a0ca3a26d7fd7c21c88012e9c2f69112_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("TwigBundle:Exception:exception.html.twig", "TwigBundle:Exception:exception_full.html.twig", 12)->display($context);
        
        $__internal_55828875314822f346542592aabb7c31a0ca3a26d7fd7c21c88012e9c2f69112->leave($__internal_55828875314822f346542592aabb7c31a0ca3a26d7fd7c21c88012e9c2f69112_prof);

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

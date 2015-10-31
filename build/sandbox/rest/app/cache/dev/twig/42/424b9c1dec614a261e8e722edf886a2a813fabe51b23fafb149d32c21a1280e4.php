<?php

/* @WebProfiler/Collector/twig.html.twig */
class __TwigTemplate_3e4c7c405f5400e5d573920915b6a277aa421f7ba6fe886cf7393ff88280afb3 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/twig.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_e2aaf1108c82e531c86750526034025cef507b428e5b9bd85038dded774ca860 = $this->env->getExtension("native_profiler");
        $__internal_e2aaf1108c82e531c86750526034025cef507b428e5b9bd85038dded774ca860->enter($__internal_e2aaf1108c82e531c86750526034025cef507b428e5b9bd85038dded774ca860_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/twig.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_e2aaf1108c82e531c86750526034025cef507b428e5b9bd85038dded774ca860->leave($__internal_e2aaf1108c82e531c86750526034025cef507b428e5b9bd85038dded774ca860_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_27977e24d79082ed866b947b6a928ff99eb0f5ac29bb3e122a5db766e360afb5 = $this->env->getExtension("native_profiler");
        $__internal_27977e24d79082ed866b947b6a928ff99eb0f5ac29bb3e122a5db766e360afb5->enter($__internal_27977e24d79082ed866b947b6a928ff99eb0f5ac29bb3e122a5db766e360afb5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        // line 4
        echo "    ";
        $context["time"] = (($this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "templatecount", array())) ? (sprintf("%0.0f ms", $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "time", array()))) : ("n/a"));
        // line 5
        echo "    ";
        ob_start();
        // line 6
        echo "        <img height=\"28\" alt=\"Twig\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAcCAYAAACOGPReAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbElEQVRIx2NgGAXUBowMDAwMaWlp/6ll4KxZsxhZYJy0tDRqGMjAwMDAwEQL77OgCxSXlJBsSG9PDwqfJi6lj/fRvTJ4XYocUTBXE4q8oRtRRBnKwsw8RFw6fA0lKkd1dnYOIpfCCthRMIIAAI0IFu9Hxh7ZAAAAAElFTkSuQmCC\" />
        <span class=\"sf-toolbar-status\">";
        // line 7
        echo twig_escape_filter($this->env, (isset($context["time"]) ? $context["time"] : $this->getContext($context, "time")), "html", null, true);
        echo "</span>
    ";
        $context["icon"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 9
        echo "    ";
        ob_start();
        // line 10
        echo "        <div class=\"sf-toolbar-info-piece\">
            <b>Render Time</b>
            <span>";
        // line 12
        echo twig_escape_filter($this->env, (isset($context["time"]) ? $context["time"] : $this->getContext($context, "time")), "html", null, true);
        echo "</span>
        </div>
        <div class=\"sf-toolbar-info-piece\">
            <b>Template Calls</b>
            <span>";
        // line 16
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "templatecount", array()), "html", null, true);
        echo "</span>
        </div>
        <div class=\"sf-toolbar-info-piece\">
            <b>Block Calls</b>
            <span>";
        // line 20
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "blockcount", array()), "html", null, true);
        echo "</span>
        </div>
        <div class=\"sf-toolbar-info-piece\">
            <b>Macro Calls</b>
            <span>";
        // line 24
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "macrocount", array()), "html", null, true);
        echo "</span>
        </div>
    ";
        $context["text"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
        // line 27
        echo "    ";
        $this->loadTemplate("@WebProfiler/Profiler/toolbar_item.html.twig", "@WebProfiler/Collector/twig.html.twig", 27)->display(array_merge($context, array("link" => (isset($context["profiler_url"]) ? $context["profiler_url"] : $this->getContext($context, "profiler_url")))));
        
        $__internal_27977e24d79082ed866b947b6a928ff99eb0f5ac29bb3e122a5db766e360afb5->leave($__internal_27977e24d79082ed866b947b6a928ff99eb0f5ac29bb3e122a5db766e360afb5_prof);

    }

    // line 30
    public function block_menu($context, array $blocks = array())
    {
        $__internal_eb95b1e3ef56dc24ce7c0c8d224a1df6c5bc075314917a0741a7d3e8d91230e9 = $this->env->getExtension("native_profiler");
        $__internal_eb95b1e3ef56dc24ce7c0c8d224a1df6c5bc075314917a0741a7d3e8d91230e9->enter($__internal_eb95b1e3ef56dc24ce7c0c8d224a1df6c5bc075314917a0741a7d3e8d91230e9_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 31
        echo "<span class=\"label\">
    <span class=\"icon\"><img alt=\"Twig\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVRIx2NgGAVDHTDCGGlpaf9pZcmsWbPg9rAgS6SlpdHCMhQ+E72DlAWbYHFJCcUG9/b0YBWnuw9HLaRPosEV4cPHh9iyBczXxGaZ0WxBfBwwM4/mw1ELRy0c4MK7s7NzCPsQvYU1CkYBNgAAV5UW+fU+ZL4AAAAASUVORK5CYII=\"></span>
    <strong>Twig</strong>
    <span class=\"count\">
        <span>";
        // line 35
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "templatecount", array()), "html", null, true);
        echo "</span>
        <span>";
        // line 36
        echo twig_escape_filter($this->env, sprintf("%0.0f ms", $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "time", array())), "html", null, true);
        echo "</span>
    </span>
</span>
";
        
        $__internal_eb95b1e3ef56dc24ce7c0c8d224a1df6c5bc075314917a0741a7d3e8d91230e9->leave($__internal_eb95b1e3ef56dc24ce7c0c8d224a1df6c5bc075314917a0741a7d3e8d91230e9_prof);

    }

    // line 41
    public function block_panel($context, array $blocks = array())
    {
        $__internal_2329b76f9fee870486d5614845c5daf8984c28cec00a8280513e9c482dfd109a = $this->env->getExtension("native_profiler");
        $__internal_2329b76f9fee870486d5614845c5daf8984c28cec00a8280513e9c482dfd109a->enter($__internal_2329b76f9fee870486d5614845c5daf8984c28cec00a8280513e9c482dfd109a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 42
        echo "    ";
        if ($this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "templatecount", array())) {
            // line 43
            echo "        <h2>Twig Stats</h2>

        <table>
            <tr>
                <th>Total Render Time<br /><small>including sub-requests rendering time</small></th>
                <td><pre>";
            // line 48
            echo twig_escape_filter($this->env, sprintf("%0.0f ms", $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "time", array())), "html", null, true);
            echo "</pre></td>
            </tr>
            <tr>
                <th scope=\"col\" style=\"width: 30%\">Template Calls</th>
                <td scope=\"col\" style=\"width: 60%\"><pre>";
            // line 52
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "templatecount", array()), "html", null, true);
            echo "</pre></td>
            </tr>
            <tr>
                <th>Block Calls</th>
                <td><pre>";
            // line 56
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "blockcount", array()), "html", null, true);
            echo "</pre></td>
            </tr>
            <tr>
                <th>Macro Calls</th>
                <td><pre>";
            // line 60
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "macrocount", array()), "html", null, true);
            echo "</pre></td>
            </tr>
        </table>

        <h2>Rendered Templates</h2>

        <table>
            <tr>
                <th scope=\"col\">Template Name</th>
                <th scope=\"col\">Render Count</th>
            </tr>
            ";
            // line 71
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "templates", array()));
            foreach ($context['_seq'] as $context["template"] => $context["count"]) {
                // line 72
                echo "                <tr>
                    <td><code>";
                // line 73
                echo twig_escape_filter($this->env, $context["template"], "html", null, true);
                echo "</code></td>
                    <td><pre>";
                // line 74
                echo twig_escape_filter($this->env, $context["count"], "html", null, true);
                echo "</pre></td>
                </tr>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['template'], $context['count'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 77
            echo "        </table>

        <h2>Rendering Call Graph</h2>

        ";
            // line 81
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "htmlcallgraph", array()), "html", null, true);
            echo "
    ";
        } else {
            // line 83
            echo "        <p><em>No Twig templates were rendered for this request.</em></p>
    ";
        }
        
        $__internal_2329b76f9fee870486d5614845c5daf8984c28cec00a8280513e9c482dfd109a->leave($__internal_2329b76f9fee870486d5614845c5daf8984c28cec00a8280513e9c482dfd109a_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/twig.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  207 => 83,  202 => 81,  196 => 77,  187 => 74,  183 => 73,  180 => 72,  176 => 71,  162 => 60,  155 => 56,  148 => 52,  141 => 48,  134 => 43,  131 => 42,  125 => 41,  114 => 36,  110 => 35,  104 => 31,  98 => 30,  90 => 27,  84 => 24,  77 => 20,  70 => 16,  63 => 12,  59 => 10,  56 => 9,  51 => 7,  48 => 6,  45 => 5,  42 => 4,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@WebProfiler/Profiler/layout.html.twig' %}*/
/* */
/* {% block toolbar %}*/
/*     {% set time = collector.templatecount ? '%0.0f ms'|format(collector.time) : 'n/a' %}*/
/*     {% set icon %}*/
/*         <img height="28" alt="Twig" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAcCAYAAACOGPReAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbElEQVRIx2NgGAXUBowMDAwMaWlp/6ll4KxZsxhZYJy0tDRqGMjAwMDAwEQL77OgCxSXlJBsSG9PDwqfJi6lj/fRvTJ4XYocUTBXE4q8oRtRRBnKwsw8RFw6fA0lKkd1dnYOIpfCCthRMIIAAI0IFu9Hxh7ZAAAAAElFTkSuQmCC" />*/
/*         <span class="sf-toolbar-status">{{ time }}</span>*/
/*     {% endset %}*/
/*     {% set text %}*/
/*         <div class="sf-toolbar-info-piece">*/
/*             <b>Render Time</b>*/
/*             <span>{{ time }}</span>*/
/*         </div>*/
/*         <div class="sf-toolbar-info-piece">*/
/*             <b>Template Calls</b>*/
/*             <span>{{ collector.templatecount }}</span>*/
/*         </div>*/
/*         <div class="sf-toolbar-info-piece">*/
/*             <b>Block Calls</b>*/
/*             <span>{{ collector.blockcount }}</span>*/
/*         </div>*/
/*         <div class="sf-toolbar-info-piece">*/
/*             <b>Macro Calls</b>*/
/*             <span>{{ collector.macrocount }}</span>*/
/*         </div>*/
/*     {% endset %}*/
/*     {% include '@WebProfiler/Profiler/toolbar_item.html.twig' with { 'link': profiler_url } %}*/
/* {% endblock %}*/
/* */
/* {% block menu %}*/
/* <span class="label">*/
/*     <span class="icon"><img alt="Twig" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVRIx2NgGAVDHTDCGGlpaf9pZcmsWbPg9rAgS6SlpdHCMhQ+E72DlAWbYHFJCcUG9/b0YBWnuw9HLaRPosEV4cPHh9iyBczXxGaZ0WxBfBwwM4/mw1ELRy0c4MK7s7NzCPsQvYU1CkYBNgAAV5UW+fU+ZL4AAAAASUVORK5CYII="></span>*/
/*     <strong>Twig</strong>*/
/*     <span class="count">*/
/*         <span>{{ collector.templatecount }}</span>*/
/*         <span>{{ '%0.0f ms'|format(collector.time) }}</span>*/
/*     </span>*/
/* </span>*/
/* {% endblock %}*/
/* */
/* {% block panel %}*/
/*     {% if collector.templatecount %}*/
/*         <h2>Twig Stats</h2>*/
/* */
/*         <table>*/
/*             <tr>*/
/*                 <th>Total Render Time<br /><small>including sub-requests rendering time</small></th>*/
/*                 <td><pre>{{ '%0.0f ms'|format(collector.time) }}</pre></td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th scope="col" style="width: 30%">Template Calls</th>*/
/*                 <td scope="col" style="width: 60%"><pre>{{ collector.templatecount }}</pre></td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Block Calls</th>*/
/*                 <td><pre>{{ collector.blockcount }}</pre></td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Macro Calls</th>*/
/*                 <td><pre>{{ collector.macrocount }}</pre></td>*/
/*             </tr>*/
/*         </table>*/
/* */
/*         <h2>Rendered Templates</h2>*/
/* */
/*         <table>*/
/*             <tr>*/
/*                 <th scope="col">Template Name</th>*/
/*                 <th scope="col">Render Count</th>*/
/*             </tr>*/
/*             {% for template, count in collector.templates %}*/
/*                 <tr>*/
/*                     <td><code>{{ template }}</code></td>*/
/*                     <td><pre>{{ count }}</pre></td>*/
/*                 </tr>*/
/*             {% endfor %}*/
/*         </table>*/
/* */
/*         <h2>Rendering Call Graph</h2>*/
/* */
/*         {{ collector.htmlcallgraph }}*/
/*     {% else %}*/
/*         <p><em>No Twig templates were rendered for this request.</em></p>*/
/*     {% endif %}*/
/* {% endblock %}*/
/* */

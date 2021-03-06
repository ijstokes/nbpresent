define(["require"],
function(require){
  var ns = "nbpresent-",
    _here = [require.toUrl(".").split("?")[0]],
    here = function(frag){
      return _here.concat(frag).join("/");
    };

  requirejs.config({
    paths: {
      "nbpresent-deps": here(["nbpresent.deps.min"]),
      "nbpresent-notebook": here(["nbpresent.notebook.min"]),
      "nbpresent-standalone": here(["nbpresent.standalone.min"]),
    }
  });

  function init(env){
    requirejs(["require", "./nbpresent-deps"], function(require){
      requirejs(["require", "./" + ns + env], function(require, Mode){
        new Mode(_here[0]);
      });
    });
  }

  return {
    load_ipython_extension: function(){ init("notebook"); },
    load_presentation_standalone: function(){ init("standalone"); }
  };
});

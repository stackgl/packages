(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{"name":"hughsk","img":"https://avatars.githubusercontent.com/u/569817?v=3"},{"name":"mikolalysenko","img":"https://avatars.githubusercontent.com/u/231686?v=3"},{"name":"shama","img":"https://avatars.githubusercontent.com/u/99604?v=3"},{"name":"mdda","img":"https://avatars.githubusercontent.com/u/362532?v=3"},{"name":"dy-dx","img":"https://avatars.githubusercontent.com/u/1074881?v=3"},{"name":"yoshuawuyts","img":"https://avatars.githubusercontent.com/u/2467194?v=3"},{"name":"nickdesaulniers","img":"https://avatars.githubusercontent.com/u/1823839?v=3"},{"name":"chrisdickinson","img":"https://avatars.githubusercontent.com/u/37303?v=3"},{"name":"wblankenship","img":"https://avatars.githubusercontent.com/u/1081565?v=3"},{"name":"tmpvar","img":"https://avatars.githubusercontent.com/u/46673?v=3"},{"name":"hapticdata","img":"https://avatars.githubusercontent.com/u/330356?v=3"},{"name":"acerix","img":"https://avatars.githubusercontent.com/u/379534?v=3"},{"name":"geek","img":"https://avatars.githubusercontent.com/u/441346?v=3"},{"name":"hamoid","img":"https://avatars.githubusercontent.com/u/108264?v=3"},{"name":"maxogden","img":"https://avatars.githubusercontent.com/u/39759?v=3"},{"name":"dannyfritz","img":"https://avatars.githubusercontent.com/u/315788?v=3"},{"name":"TatumCreative","img":"https://avatars.githubusercontent.com/u/1588648?v=3"},{"name":"billautomata","img":"https://avatars.githubusercontent.com/u/432483?v=3"},{"name":"MikkoH","img":"https://avatars.githubusercontent.com/u/496903?v=3"},{"name":"mattdesl","img":"https://avatars.githubusercontent.com/u/1383811?v=3"},{"name":"deathcap","img":"https://avatars.githubusercontent.com/u/5897956?v=3"},{"name":"timoxley","img":"https://avatars.githubusercontent.com/u/43438?v=3"},{"name":"rasteiner","img":"https://avatars.githubusercontent.com/u/6684137?v=3"},{"name":"jb55","img":"https://avatars.githubusercontent.com/u/45598?v=3"},{"name":"rippedspine","img":"https://avatars.githubusercontent.com/u/3957704?v=3"},{"name":"robert-chiniquy","img":"https://avatars.githubusercontent.com/u/623808?v=3"},{"name":"mafintosh","img":"https://avatars.githubusercontent.com/u/376661?v=3"},{"name":"TehShrike","img":"https://avatars.githubusercontent.com/u/1141869?v=3"},{"name":"zeke","img":"https://avatars.githubusercontent.com/u/2289?v=3"},{"name":"substack","img":"https://avatars.githubusercontent.com/u/12631?v=3"},{"name":"jwerle","img":"https://avatars.githubusercontent.com/u/1462973?v=3"},{"name":"FellowMD","img":"https://avatars.githubusercontent.com/u/1588273?v=3"},{"name":"twolfson","img":"https://avatars.githubusercontent.com/u/902488?v=3"},{"name":"breedx2","img":"https://avatars.githubusercontent.com/u/1888255?v=3"},{"name":"lchenay","img":"https://avatars.githubusercontent.com/u/804687?v=3"},{"name":"arthurvr","img":"https://avatars.githubusercontent.com/u/6025224?v=3"},{"name":"sidorares","img":"https://avatars.githubusercontent.com/u/173025?v=3"},{"name":"kumavis","img":"https://avatars.githubusercontent.com/u/1474978?v=3"},{"name":"thibauts","img":"https://avatars.githubusercontent.com/u/2544184?v=3"},{"name":"olivierrr","img":"https://avatars.githubusercontent.com/u/8010834?v=3"}]
},{}],2:[function(require,module,exports){
module.exports={"content":"<h1 id=\"packages\">packages</h1>\n<p>A list of packages that fall under the <a href=\"http://stack.gl\">stack.gl</a> umbrella,\nall wrapped up in a single page for you to jump around in.</p>\n<h2 id=\"contributing\">Contributing</h2>\n<p>Simply add your repository to the\n<a href=\"https://github.com/stackgl/packages/wiki/Packages\">wiki list</a>, and it&apos;ll\nbe included next time the packages site is built. Soon, this will be automatic.</p>\n<p>Note that each category is marked up with a heading, and each list item\nis mapped to a package&apos;s username/reponame on GitHub. Don&apos;t hesitate to submit\na bunch of packages at once: the more the merrier!</p>\n<h3 id=\"inline-examples\">Inline Examples</h3>\n<p>If your repository has an <code>index.html</code> file hosted on its <code>gh-pages</code> branch,\nan iframe will be automatically inserted into the <code>README.md</code> file to display\nalongisde the documentation.</p>\n<p>If you&apos;d like to use a different URL, or more than one iframe, simply place an\nHTML comment in your <code>README.md</code> file similar to the following:</p>\n<pre><code class=\"lang-html\"><span class=\"c\">&lt;!-- iframe: http://my-neat-demo.com --&gt;</span>\n</code></pre>\n<p>When the site updates, an iframe will be used in its place.</p>\n<h2 id=\"development\">Development</h2>\n<p>To get the site running locally:</p>\n<pre><code class=\"lang-bash\">git clone git@github.com:stackgl/packages.git\n<span class=\"nb\">cd </span>packages\nnpm install\nnpm start\n</code></pre>\n<p>To update the package data:</p>\n<pre><code class=\"lang-bash\">npm run build\n</code></pre>\n"}
},{}],3:[function(require,module,exports){
module.exports={"Learning":[{"user":"stackgl","name":"shader-school","repo":"http://github.com/stackgl/shader-school","uri":null,"contrib":[1,0,3,4,5,6,7,8,9,10,11,12,13,14,15]},{"user":"stackgl","name":"webgl-workshop","repo":"http://github.com/stackgl/webgl-workshop","uri":null,"contrib":[0,1,2]},{"user":"stackgl","name":"learning-webgl-01","repo":"http://github.com/stackgl/learning-webgl-01","uri":"http://stack.gl/learning-webgl-01/","contrib":[0,1]},{"user":"stackgl","name":"learning-webgl-02","repo":"http://github.com/stackgl/learning-webgl-02","uri":"http://stack.gl/learning-webgl-02/","contrib":[0]},{"user":"stackgl","name":"learning-webgl-03","repo":"http://github.com/stackgl/learning-webgl-03","uri":"http://stack.gl/learning-webgl-03/","contrib":[0]}],"Core":[{"user":"stackgl","name":"gl-fbo","repo":"http://github.com/stackgl/gl-fbo","uri":"http://stack.gl/gl-fbo/","contrib":[1,7,0,18]},{"user":"stackgl","name":"gl-vao","repo":"http://github.com/stackgl/gl-vao","uri":"http://stack.gl/gl-vao/","contrib":[1,16,17,7]},{"user":"stackgl","name":"gl-buffer","repo":"http://github.com/stackgl/gl-buffer","uri":"http://stack.gl/gl-buffer/","contrib":[1,0,7]},{"user":"stackgl","name":"gl-texture2d","repo":"http://github.com/stackgl/gl-texture2d","uri":"http://stack.gl/gl-texture2d/","contrib":[1,16,20,0,21]},{"user":"stackgl","name":"gl-shader-core","repo":"http://github.com/stackgl/gl-shader-core","uri":null,"contrib":[1,0,19]},{"user":"stackgl","name":"gl-shader","repo":"http://github.com/stackgl/gl-shader","uri":"http://stack.gl/gl-shader/","contrib":[1,16]}],"Quickstarts":[{"user":"stackgl","name":"gl-now","repo":"http://github.com/stackgl/gl-now","uri":null,"contrib":[1,0]},{"user":"yoshuawuyts","name":"gl-toy","repo":"http://github.com/yoshuawuyts/gl-toy","uri":null,"contrib":[5]}],"WebGL API":[{"user":"stackgl","name":"gl-post","repo":"http://github.com/stackgl/gl-post","uri":"http://stack.gl/gl-post/","contrib":[0]},{"user":"stackgl","name":"gl-compare","repo":"http://github.com/stackgl/gl-compare","uri":"http://stack.gl/gl-compare/","contrib":[0]},{"user":"stackgl","name":"gl-state","repo":"http://github.com/stackgl/gl-state","uri":"http://stackgl.github.io/gl-state","contrib":[1]},{"user":"stackgl","name":"gl-reset","repo":"http://github.com/stackgl/gl-reset","uri":null,"contrib":[0]},{"user":"stackgl","name":"gl-clear","repo":"http://github.com/stackgl/gl-clear","uri":null,"contrib":[0,21,19]},{"user":"hughsk","name":"gl-geometry","repo":"http://github.com/hughsk/gl-geometry","uri":null,"contrib":[0,19,22]},{"user":"hughsk","name":"gl-texture2d-display","repo":"http://github.com/hughsk/gl-texture2d-display","uri":null,"contrib":[0]},{"user":"hughsk","name":"canvas-pixels","repo":"http://github.com/hughsk/canvas-pixels","uri":null,"contrib":[0]},{"user":"mattdesl","name":"gl-texture2d-pixels","repo":"http://github.com/mattdesl/gl-texture2d-pixels","uri":null,"contrib":[19]},{"user":"mattdesl","name":"webgl-context","repo":"http://github.com/mattdesl/webgl-context","uri":null,"contrib":[19]},{"user":"hughsk","name":"gl-context","repo":"http://github.com/hughsk/gl-context","uri":null,"contrib":[0]},{"user":"hughsk","name":"gl-fbo-matching","repo":"http://github.com/hughsk/gl-fbo-matching","uri":null,"contrib":[0]}],"WebVR API":[{"user":"jb55","name":"vrdevices","repo":"http://github.com/jb55/vrdevices","uri":null,"contrib":[23]}],"Tools/Development":[{"user":"stackgl","name":"glslify","repo":"http://github.com/stackgl/glslify","uri":null,"contrib":[0,7,19,1,24]},{"user":"hughsk","name":"glslify-live","repo":"http://github.com/hughsk/glslify-live","uri":null,"contrib":[0,25]},{"user":"hughsk","name":"glslify-optimize","repo":"http://github.com/hughsk/glslify-optimize","uri":null,"contrib":[0]},{"user":"stackgl","name":"glslify-api","repo":"http://github.com/stackgl/glslify-api","uri":null,"contrib":[0]},{"user":"maxogden","name":"wzrd","repo":"http://github.com/maxogden/wzrd","uri":null,"contrib":[14,26,27,19,28]},{"user":"mattdesl","name":"budo","repo":"http://github.com/mattdesl/budo","uri":null,"contrib":[19]},{"user":"hughsk","name":"glsl-testify","repo":"http://github.com/hughsk/glsl-testify","uri":null,"contrib":[0]},{"user":"Jam3","name":"gl-shader-output","repo":"http://github.com/Jam3/gl-shader-output","uri":null,"contrib":[19]},{"user":"hughsk","name":"glsl-editor","repo":"http://github.com/hughsk/glsl-editor","uri":"http://hughsk.io/glsl-editor/","contrib":[0]},{"user":"stackgl","name":"stackgl-generator","repo":"http://github.com/stackgl/stackgl-generator","uri":null,"contrib":[0,19]}],"Camera Controls":[{"user":"mikolalysenko","name":"3d-view","repo":"http://github.com/mikolalysenko/3d-view","uri":"http://mikolalysenko.github.io/3d-view/","contrib":[1]},{"user":"hughsk","name":"turntable-camera","repo":"http://github.com/hughsk/turntable-camera","uri":"http://hughsk.io/turntable-camera/","contrib":[0]},{"user":"mikolalysenko","name":"orbit-camera","repo":"http://github.com/mikolalysenko/orbit-camera","uri":null,"contrib":[1,20,29]},{"user":"mikolalysenko","name":"game-shell-orbit-camera","repo":"http://github.com/mikolalysenko/game-shell-orbit-camera","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"3d-camera-core","repo":"http://github.com/mikolalysenko/3d-camera-core","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"orbit-camera-controller","repo":"http://github.com/mikolalysenko/orbit-camera-controller","uri":"http://mikolalysenko.github.io/orbit-camera-controller/","contrib":[1]},{"user":"mikolalysenko","name":"free-camera-controller","repo":"http://github.com/mikolalysenko/free-camera-controller","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"perspective-camera-controller","repo":"http://github.com/mikolalysenko/perspective-camera-controller","uri":null,"contrib":[1]},{"user":"hughsk","name":"canvas-orbit-camera","repo":"http://github.com/hughsk/canvas-orbit-camera","uri":null,"contrib":[0,21]},{"user":"shama","name":"first-person-camera","repo":"http://github.com/shama/first-person-camera","uri":null,"contrib":[2]}],"Interaction":[{"user":"mikolalysenko","name":"mouse-change","repo":"http://github.com/mikolalysenko/mouse-change","uri":"http://mikolalysenko.github.io/mouse-change/","contrib":[1]},{"user":"mikolalysenko","name":"mouse-wheel","repo":"http://github.com/mikolalysenko/mouse-wheel","uri":"http://mikolalysenko.github.io/mouse-wheel/","contrib":[1]},{"user":"mikolalysenko","name":"mouse-event","repo":"http://github.com/mikolalysenko/mouse-event","uri":"http://mikolalysenko.github.io/mouse-event/","contrib":[1,30]},{"user":"hughsk","name":"key-pressed","repo":"http://github.com/hughsk/key-pressed","uri":null,"contrib":[0]},{"user":"hughsk","name":"mouse-pressed","repo":"http://github.com/hughsk/mouse-pressed","uri":null,"contrib":[0]},{"user":"hughsk","name":"mouse-position","repo":"http://github.com/hughsk/mouse-position","uri":null,"contrib":[0]},{"user":"mattdesl","name":"touch-position","repo":"http://github.com/mattdesl/touch-position","uri":null,"contrib":[19]},{"user":"Jam3","name":"touches","repo":"http://github.com/Jam3/touches","uri":"http://jam3.github.io/touches/","contrib":[19,18]},{"user":"hughsk","name":"scroll-speed","repo":"http://github.com/hughsk/scroll-speed","uri":null,"contrib":[0,19]},{"user":"chrisdickinson","name":"vkey","repo":"http://github.com/chrisdickinson/vkey","uri":"http://didact.us/vkey/","contrib":[7,31]}],"Test Assets":[{"user":"mikolalysenko","name":"bunny","repo":"http://github.com/mikolalysenko/bunny","uri":null,"contrib":[1]},{"user":"scijs","name":"baboon-image","repo":"http://github.com/scijs/baboon-image","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"teapot","repo":"http://github.com/mikolalysenko/teapot","uri":null,"contrib":[1]},{"user":"hughsk","name":"stanford-dragon","repo":"http://github.com/hughsk/stanford-dragon","uri":null,"contrib":[0,4]}],"Asset Handling":[{"user":"scijs","name":"get-pixels","repo":"http://github.com/scijs/get-pixels","uri":null,"contrib":[1,33,32,2,34,35]},{"user":"scijs","name":"save-pixels","repo":"http://github.com/scijs/save-pixels","uri":null,"contrib":[1,32,2]},{"user":"mikolalysenko","name":"ndpack-image","repo":"http://github.com/mikolalysenko/ndpack-image","uri":null,"contrib":[1,0]},{"user":"hughsk","name":"font-atlas","repo":"http://github.com/hughsk/font-atlas","uri":null,"contrib":[0]},{"user":"hughsk","name":"gl-gif","repo":"http://github.com/hughsk/gl-gif","uri":"http://hughsk.io/gl-gif/","contrib":[0]},{"user":"mattdesl","name":"image-sdf","repo":"http://github.com/mattdesl/image-sdf","uri":null,"contrib":[19]},{"user":"mattdesl","name":"gl-sprite-text","repo":"http://github.com/mattdesl/gl-sprite-text","uri":null,"contrib":[19]},{"user":"mattdesl","name":"gl-sprite-batch","repo":"http://github.com/mattdesl/gl-sprite-batch","uri":null,"contrib":[19]},{"user":"mattdesl","name":"gl-checker-background","repo":"http://github.com/mattdesl/gl-checker-background","uri":null,"contrib":[19]},{"user":"mattdesl","name":"gl-vignette-background","repo":"http://github.com/mattdesl/gl-vignette-background","uri":null,"contrib":[19]},{"user":"mattdesl","name":"gl-basic-shader","repo":"http://github.com/mattdesl/gl-basic-shader","uri":null,"contrib":[19]}],"Geometry":[{"user":"hughsk","name":"gl-wireframe","repo":"http://github.com/hughsk/gl-wireframe","uri":"http://hughsk.io/gl-wireframe/","contrib":[0]},{"user":"hughsk","name":"icosphere","repo":"http://github.com/hughsk/icosphere","uri":"http://hughsk.io/icosphere/","contrib":[0,37]},{"user":"mikolalysenko","name":"normals","repo":"http://github.com/mikolalysenko/normals","uri":null,"contrib":[1,36]},{"user":"mikolalysenko","name":"isosurface","repo":"http://github.com/mikolalysenko/isosurface","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"simplicial-complex","repo":"http://github.com/mikolalysenko/simplicial-complex","uri":null,"contrib":[1,2]},{"user":"mikolalysenko","name":"svg-3d-simplicial-complex","repo":"http://github.com/mikolalysenko/svg-3d-simplicial-complex","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"greedy-mesher","repo":"http://github.com/mikolalysenko/greedy-mesher","uri":null,"contrib":[1,0,9]},{"user":"mikolalysenko","name":"voxelize","repo":"http://github.com/mikolalysenko/voxelize","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"convex-hull","repo":"http://github.com/mikolalysenko/convex-hull","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"affine-hull","repo":"http://github.com/mikolalysenko/affine-hull","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"vectorize-text","repo":"http://github.com/mikolalysenko/vectorize-text","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"orthogami","repo":"http://github.com/mikolalysenko/orthogami","uri":null,"contrib":[1,2]},{"user":"mikolalysenko","name":"plane-to-polygon","repo":"http://github.com/mikolalysenko/plane-to-polygon","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"find-basis-3d","repo":"http://github.com/mikolalysenko/find-basis-3d","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"box-frustum","repo":"http://github.com/mikolalysenko/box-frustum","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"delaunay-triangulate","repo":"http://github.com/mikolalysenko/delaunay-triangulate","uri":null,"contrib":[1]},{"user":"mikolalysenko","name":"voronoi-diagram","repo":"http://github.com/mikolalysenko/voronoi-diagram","uri":null,"contrib":[1]},{"user":"hughsk","name":"surface-vectors","repo":"http://github.com/hughsk/surface-vectors","uri":"http://hughsk.io/surface-vectors/","contrib":[0]},{"user":"hughsk","name":"face-normals","repo":"http://github.com/hughsk/face-normals","uri":"http://hughsk.io/face-normals/","contrib":[0]},{"user":"hughsk","name":"mesh-reindex","repo":"http://github.com/hughsk/mesh-reindex","uri":null,"contrib":[0]},{"user":"hughsk","name":"mesh-combine","repo":"http://github.com/hughsk/mesh-combine","uri":null,"contrib":[0,18]},{"user":"hughsk","name":"unindex-mesh","repo":"http://github.com/hughsk/unindex-mesh","uri":null,"contrib":[0]},{"user":"hughsk","name":"unindex-mesh","repo":"http://github.com/hughsk/unindex-mesh","uri":null,"contrib":[0]},{"user":"hughsk","name":"from-3d-to-2d","repo":"http://github.com/hughsk/from-3d-to-2d","uri":null,"contrib":[0]},{"user":"thibauts","name":"merge-vertices","repo":"http://github.com/thibauts/merge-vertices","uri":null,"contrib":[38]},{"user":"thibauts","name":"merge-meshes","repo":"http://github.com/thibauts/merge-meshes","uri":null,"contrib":[38]},{"user":"thibauts","name":"remove-degenerate-cells","repo":"http://github.com/thibauts/remove-degenerate-cells","uri":null,"contrib":[38]},{"user":"thibauts","name":"remove-orphan-vertices","repo":"http://github.com/thibauts/remove-orphan-vertices","uri":null,"contrib":[38]},{"user":"thibauts","name":"vertices-bounding-box","repo":"http://github.com/thibauts/vertices-bounding-box","uri":null,"contrib":[38]},{"user":"thibauts","name":"rescale-vertices","repo":"http://github.com/thibauts/rescale-vertices","uri":null,"contrib":[38]},{"user":"thibauts","name":"quantize-vertices","repo":"http://github.com/thibauts/quantize-vertices","uri":null,"contrib":[38]}],"Math":[{"user":"stackgl","name":"gl-vec2","repo":"http://github.com/stackgl/gl-vec2","uri":null,"contrib":[19]},{"user":"stackgl","name":"gl-vec3","repo":"http://github.com/stackgl/gl-vec3","uri":null,"contrib":[19,0,29]},{"user":"stackgl","name":"gl-mat2","repo":"http://github.com/stackgl/gl-mat2","uri":null,"contrib":[0]},{"user":"stackgl","name":"gl-mat3","repo":"http://github.com/stackgl/gl-mat3","uri":null,"contrib":[0]},{"user":"stackgl","name":"gl-mat4","repo":"http://github.com/stackgl/gl-mat4","uri":null,"contrib":[19,39,1,20]},{"user":"mattdesl","name":"mat4-recompose","repo":"http://github.com/mattdesl/mat4-recompose","uri":null,"contrib":[19]},{"user":"mattdesl","name":"mat4-decompose","repo":"http://github.com/mattdesl/mat4-decompose","uri":null,"contrib":[19]},{"user":"mattdesl","name":"mat4-interpolate","repo":"http://github.com/mattdesl/mat4-interpolate","uri":null,"contrib":[19]},{"user":"mattdesl","name":"css-mat4","repo":"http://github.com/mattdesl/css-mat4","uri":null,"contrib":[19]},{"user":"mikolalysenko","name":"cubic-hermite","repo":"http://github.com/mikolalysenko/cubic-hermite","uri":null,"contrib":[1]},{"user":"thibauts","name":"cubic-hermite-spline","repo":"http://github.com/thibauts/cubic-hermite-spline","uri":null,"contrib":[38]},{"user":"mattdesl","name":"eases","repo":"http://github.com/mattdesl/eases","uri":null,"contrib":[19]}],"Shader Components":[{"user":"stackgl","name":"glsl-specular-beckmann","repo":"http://github.com/stackgl/glsl-specular-beckmann","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-specular-cook-torrance","repo":"http://github.com/stackgl/glsl-specular-cook-torrance","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-diffuse-oren-nayar","repo":"http://github.com/stackgl/glsl-diffuse-oren-nayar","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-diffuse-lambert","repo":"http://github.com/stackgl/glsl-diffuse-lambert","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-specular-ward","repo":"http://github.com/stackgl/glsl-specular-ward","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-specular-gaussian","repo":"http://github.com/stackgl/glsl-specular-gaussian","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-specular-phong","repo":"http://github.com/stackgl/glsl-specular-phong","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-specular-blinn-phong","repo":"http://github.com/stackgl/glsl-specular-blinn-phong","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-easings","repo":"http://github.com/stackgl/glsl-easings","uri":"http://stack.gl/glsl-easings/","contrib":[0]},{"user":"hughsk","name":"matcap","repo":"http://github.com/hughsk/matcap","uri":"http://hughsk.io/matcap/","contrib":[0]},{"user":"stackgl","name":"glsl-inverse","repo":"http://github.com/stackgl/glsl-inverse","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-determinant","repo":"http://github.com/stackgl/glsl-determinant","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-transpose","repo":"http://github.com/stackgl/glsl-transpose","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-frobenius","repo":"http://github.com/stackgl/glsl-frobenius","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-look-at","repo":"http://github.com/stackgl/glsl-look-at","uri":"http://stack.gl/glsl-look-at/","contrib":[0]},{"user":"stackgl","name":"glsl-camera-ray","repo":"http://github.com/stackgl/glsl-camera-ray","uri":"http://stack.gl/glsl-camera-ray/","contrib":[0]},{"user":"stackgl","name":"glsl-raytrace","repo":"http://github.com/stackgl/glsl-raytrace","uri":"http://stack.gl/glsl-raytrace/","contrib":[0]},{"user":"stackgl","name":"glsl-sdf-normal","repo":"http://github.com/stackgl/glsl-sdf-normal","uri":"http://stack.gl/glsl-sdf-normal/","contrib":[0]},{"user":"stackgl","name":"glsl-turntable-camera","repo":"http://github.com/stackgl/glsl-turntable-camera","uri":"http://stack.gl/glsl-turntable-camera/","contrib":[0]},{"user":"hughsk","name":"glsl-luma","repo":"http://github.com/hughsk/glsl-luma","uri":"http://hughsk.io/glsl-luma/","contrib":[0,20]},{"user":"hughsk","name":"glsl-dither","repo":"http://github.com/hughsk/glsl-dither","uri":"http://hughsk.io/glsl-dither/","contrib":[0]},{"user":"hughsk","name":"glsl-noise","repo":"http://github.com/hughsk/glsl-noise","uri":null,"contrib":[0]},{"user":"mattdesl","name":"glsl-random","repo":"http://github.com/mattdesl/glsl-random","uri":null,"contrib":[19]},{"user":"hughsk","name":"glsl-fog","repo":"http://github.com/hughsk/glsl-fog","uri":null,"contrib":[0]},{"user":"mattdesl","name":"glsl-fxaa","repo":"http://github.com/mattdesl/glsl-fxaa","uri":null,"contrib":[19]},{"user":"mattdesl","name":"glsl-lut","repo":"http://github.com/mattdesl/glsl-lut","uri":null,"contrib":[19]},{"user":"hughsk","name":"glsl-range","repo":"http://github.com/hughsk/glsl-range","uri":null,"contrib":[0]},{"user":"hughsk","name":"glsl-square-frame","repo":"http://github.com/hughsk/glsl-square-frame","uri":null,"contrib":[0,5]},{"user":"mikolalysenko","name":"glsl-read-float","repo":"http://github.com/mikolalysenko/glsl-read-float","uri":null,"contrib":[1]},{"user":"stackgl","name":"glsl-smooth-min","repo":"http://github.com/stackgl/glsl-smooth-min","uri":"http://stack.gl/glsl-smooth-min/","contrib":[0]},{"user":"mattdesl","name":"glsl-film-grain","repo":"http://github.com/mattdesl/glsl-film-grain","uri":"http://mattdesl.github.io/glsl-film-grain/","contrib":[19]},{"user":"hughsk","name":"glsl-hsv2rgb","repo":"http://github.com/hughsk/glsl-hsv2rgb","uri":null,"contrib":[0]},{"user":"Jam3","name":"glsl-hsl2rgb","repo":"http://github.com/Jam3/glsl-hsl2rgb","uri":null,"contrib":[19]},{"user":"Jam3","name":"glsl-blend-overlay","repo":"http://github.com/Jam3/glsl-blend-overlay","uri":"http://jam3.github.io/glsl-blend-overlay/","contrib":[19]},{"user":"mattdesl","name":"glsl-blend-soft-light","repo":"http://github.com/mattdesl/glsl-blend-soft-light","uri":"http://mattdesl.github.io/glsl-blend-soft-light/","contrib":[19]}],"Shader Transforms":[{"user":"hughsk","name":"glslify-hex","repo":"http://github.com/hughsk/glslify-hex","uri":null,"contrib":[0]},{"user":"hughsk","name":"glslify-import","repo":"http://github.com/hughsk/glslify-import","uri":null,"contrib":[0]}],"Visualisation":[{"user":"gl-vis","name":"gl-surface3d","repo":"http://github.com/gl-vis/gl-surface3d","uri":null,"contrib":[1]},{"user":"gl-vis","name":"gl-line3d","repo":"http://github.com/gl-vis/gl-line3d","uri":null,"contrib":[1]},{"user":"gl-vis","name":"gl-scatter3d","repo":"http://github.com/gl-vis/gl-scatter3d","uri":null,"contrib":[1]},{"user":"gl-vis","name":"gl-axes3d","repo":"http://github.com/gl-vis/gl-axes3d","uri":null,"contrib":[1]}],"Utilities":[{"user":"stackgl","name":"webglew","repo":"http://github.com/stackgl/webglew","uri":null,"contrib":[1,19,0]},{"user":"hughsk","name":"canvas-fit","repo":"http://github.com/hughsk/canvas-fit","uri":null,"contrib":[0]},{"user":"hughsk","name":"canvas-autoscale","repo":"http://github.com/hughsk/canvas-autoscale","uri":null,"contrib":[0]},{"user":"hughsk","name":"canvas-pixels","repo":"http://github.com/hughsk/canvas-pixels","uri":null,"contrib":[0]},{"user":"mattdesl","name":"raf-loop","repo":"http://github.com/mattdesl/raf-loop","uri":null,"contrib":[19]}],"Internals":[{"user":"stackgl","name":"glsl-parser","repo":"http://github.com/stackgl/glsl-parser","uri":null,"contrib":[7,0]},{"user":"stackgl","name":"glsl-tokenizer","repo":"http://github.com/stackgl/glsl-tokenizer","uri":null,"contrib":[7,0]},{"user":"stackgl","name":"glsl-deparser","repo":"http://github.com/stackgl/glsl-deparser","uri":null,"contrib":[7,0]},{"user":"stackgl","name":"glsl-extract","repo":"http://github.com/stackgl/glsl-extract","uri":null,"contrib":[7]},{"user":"hughsk","name":"glsl-resolve","repo":"http://github.com/hughsk/glsl-resolve","uri":null,"contrib":[0]}]}
},{}],4:[function(require,module,exports){
require('insert-css')(require('stackgl-readme-css'))

var findup    = require('findup-element')
var minstache = require('minstache')
var xhr       = require('xhr')
var template = minstache.compile("<a href=\"http://stack.gl\" target=\"_blank\">\n  <h1>#stack<span class=\"light\">gl</span></h1>\n</a>\n<div>\n  {{#categories}}\n    <h2>{{name}}</h2>\n    <ul>\n      {{#repos}}\n        <li data-user=\"{{user}}\"\n            data-name=\"{{name}}\"\n        >{{name}}</li>\n      {{/repos}}\n    </ul>\n  {{/categories}}\n</div>\n")
var contemp  = minstache.compile("<ul>\n  {{#contributors}}\n    <a href=\"http://github.com/{{name}}\">\n      <li><img src=\"{{img}}\" title=\"github.com/{{name}}\"></li>\n    </a>\n  {{/contributors}}\n</ul>\n")
var authors  = require('./build/contributors.json')
var main     = require('./build/main.json').content
var repos    = require('./build/repos.json')

var readme = document.getElementById('package-readme')
var list   = document.getElementById('package-list')
var title  = list.querySelector('h1')

var repoIndex  = {}
var categories = Object.keys(repos).map(function(k) {
  return { name: k, repos: repos[k] }
})

categories.forEach(function(category) {
  category.repos.forEach(function(repo) {
    repoIndex[repo.user] = repoIndex[repo.user] || {}
    repoIndex[repo.user][repo.name] = repo
    repo.contrib = repo.contrib.map(function(d) {
      return authors[d]
    })
  })
})

updateBody()
window.addEventListener('hashchange', updateBody, false)

list.innerHTML = template({ categories: categories })
list.addEventListener('click', function(e) {
  var el = findup(e.target, function(el) {
    return el.hasAttribute('data-user')
  })

  if (!el) return

  var user = el.getAttribute('data-user')
  var name = el.getAttribute('data-name')

  window.location = '#' + [user, name].join('/')

  e.preventDefault()
  e.stopPropagation()
  return false
}, false)

function updateBody() {
  var location = String(window.location.hash).replace('#', '')
  if (!location) return readme.innerHTML = main

  var arr = location.split('/')
  var user = arr[0]
  var name = arr[1]
  var uri = ['build', user, name].join('/') + '.html'
  var repo = repoIndex[user][name]

  xhr({ uri: uri }, function(err, res, body) {
    if (err) throw err

    [user, name].join('/')

    window.scrollTo(0, 0)
    readme.innerHTML = body
    addContributors(readme, repo.contrib)
  })
}

function addContributors(readme, contributors) {
  var h1 = readme.querySelector('h1, h2, h3, h4, h5, h6')
  h1.innerHTML = '<span class="title-inner">' + h1.innerHTML + '</span>'

  var credits = h1.appendChild(document.createElement('div'))

  credits.setAttribute('class', 'credits')
  contributors.sort(function(a, b) {
    return Math.random() - 0.5
  })

  contributors = contributors.slice(0, 20)
  contributors.forEach(function(contrib) {
    var uri = 'https://github.com/' + contrib.name
    var a   = document.createElement('a')

    a.setAttribute('style', 'background-image:url('+contrib.img+')')
    a.setAttribute('class', 'credit-image')
    a.setAttribute('target', '_blank')
    a.setAttribute('title', contrib.name)
    a.setAttribute('href', uri)

    credits.appendChild(a)
  })
}

},{"./build/contributors.json":1,"./build/main.json":2,"./build/repos.json":3,"findup-element":5,"insert-css":6,"minstache":7,"stackgl-readme-css":8,"xhr":9}],5:[function(require,module,exports){
module.exports = findup

function findup(child, check) {
  if (typeof check === 'string')   check = byName(check)
  if (typeof check !== 'function') check = byExact(check)

  while (
    child &&
   !check(child)
  ) child = child.parentNode


  return child || null
}

function byName(name) {
  name = String(name).toUpperCase()

  return function(element) {
    return name === element.nodeName
  }
}

function byExact(el) {
  return function(element) {
    return el === element
  }
}

},{}],6:[function(require,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],7:[function(require,module,exports){

/**
 * Expose `render()`.`
 */

exports = module.exports = render;

/**
 * Expose `compile()`.
 */

exports.compile = compile;

/**
 * Render the given mustache `str` with `obj`.
 *
 * @param {String} str
 * @param {Object} obj
 * @return {String}
 * @api public
 */

function render(str, obj) {
  obj = obj || {};
  var fn = compile(str);
  return fn(obj);
}

/**
 * Compile the given `str` to a `Function`.
 *
 * @param {String} str
 * @return {Function}
 * @api public
 */

function compile(str) {
  var js = [];
  var toks = parse(str);
  var tok;

  for (var i = 0; i < toks.length; ++i) {
    tok = toks[i];
    if (i % 2 == 0) {
      js.push('"' + tok.replace(/"/g, '\\"') + '"');
    } else {
      switch (tok[0]) {
        case '/':
          tok = tok.slice(1);
          js.push(' }) + ');
          break;
        case '^':
          tok = tok.slice(1);
          assertProperty(tok);
          js.push(' + section(obj, "' + tok + '", true, function(obj){ return ');
          break;
        case '#':
          tok = tok.slice(1);
          assertProperty(tok);
          js.push(' + section(obj, "' + tok + '", false, function(obj){ return ');
          break;
        case '!':
          tok = tok.slice(1);
          assertProperty(tok);
          js.push(' + obj.' + tok + ' + ');
          break;
        default:
          assertProperty(tok);
          js.push(' + escape(obj.' + tok + ') + ');
      }
    }
  }

  js = '\n'
    + indent(escape.toString()) + ';\n\n'
    + indent(section.toString()) + ';\n\n'
    + '  return ' + js.join('').replace(/\n/g, '\\n');

  return new Function('obj', js);
}

/**
 * Assert that `prop` is a valid property.
 *
 * @param {String} prop
 * @api private
 */

function assertProperty(prop) {
  if (!prop.match(/^[\w.]+$/)) throw new Error('invalid property "' + prop + '"');
}

/**
 * Parse `str`.
 *
 * @param {String} str
 * @return {Array}
 * @api private
 */

function parse(str) {
  return str.split(/\{\{|\}\}/);
}

/**
 * Indent `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function indent(str) {
  return str.replace(/^/gm, '  ');
}

/**
 * Section handler.
 *
 * @param {Object} context obj
 * @param {String} prop
 * @param {Function} thunk
 * @param {Boolean} negate
 * @api private
 */

function section(obj, prop, negate, thunk) {
  var val = obj[prop];
  if (Array.isArray(val)) return val.map(thunk).join('');
  if ('function' == typeof val) return val.call(obj, thunk(obj));
  if (negate) val = !val;
  if (val) return thunk(obj);
  return '';
}

/**
 * Escape the given `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

function escape(html) {
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

},{}],8:[function(require,module,exports){
module.exports = ".stackgl-readme {\n  color: #5B6173;\n  font-weight: 100;\n}\n\n/**\n * Typography\n */\n.stackgl-readme,\n.stackgl-readme pre,\n.stackgl-readme code {\n  font-family: 'Fantasque Sans Mono', 'Ubuntu Mono', 'Inconsolata', monospace;\n}\n\n.stackgl-readme ::selection {\n  background: #DEE7FF;\n}\n.stackgl-readme ::-moz-selection {\n  background: #DEE7FF;\n}\n\n/**\n * Headers\n */\n.stackgl-readme h1,\n.stackgl-readme h2,\n.stackgl-readme h3,\n.stackgl-readme h4,\n.stackgl-readme h5,\n.stackgl-readme h6 {\n  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 100;\n  line-height: 1.2em;\n  color: #34363B;\n  position: relative;\n}\n\n.stackgl-readme > h1:first-child,\n.stackgl-readme > hr + h1:not(:first-child) {\n  font-size: 2.5rem;\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n\n.stackgl-readme > h1:not(:first-child),\n.stackgl-readme > h2 {\n  font-size: 2rem;\n  margin-top: 3rem;\n  border-bottom: 1px dotted #DEE7FF;\n  padding-bottom: 0.4em;\n}\n\n.stackgl-readme h3 {\n  font-weight: 300;\n  margin-top: 2em;\n  color: #4A4F5E;\n}\n\n.stackgl-readme h3 + h3,\n.stackgl-readme h4 + h4 {\n  margin-top: -0.5em;\n}\n\n.stackgl-readme h2 + h3 {\n  margin-top: 0;\n}\n\n.stackgl-readme h1 code,\n.stackgl-readme h2 code,\n.stackgl-readme h3 code,\n.stackgl-readme h4 code,\n.stackgl-readme h5 code,\n.stackgl-readme h6 code {\n  background: transparent;\n  margin: 0;\n  padding: 0;\n}\n\n.stackgl-readme h1 img,\n.stackgl-readme h2 img,\n.stackgl-readme h3 img,\n.stackgl-readme h4 img,\n.stackgl-readme h5 img,\n.stackgl-readme h6 img {\n  display: none;\n}\n\n/**\n * Paragraphs\n */\n.stackgl-readme p,\n.stackgl-readme > ul,\n.stackgl-readme > ol {\n  font-size: 0.9rem;\n  line-height: 1.55em;\n}\n\n/**\n * Links\n */\n.stackgl-readme a {\n  color: #66C4FF;\n  text-decoration: none;\n  text-shadow: 1px 0 #fff, -1px 0 #fff;\n  background: linear-gradient(to bottom, transparent 0%, #66C4FF 1%) repeat-x;\n  padding-bottom: 0px;\n  margin-bottom: -0px;\n  background-size: 1px 1px;\n  background-position: left bottom;\n}\n\n.stackgl-readme a::selection {\n  background: #DEE7FF;\n  text-shadow: 1px 0 rgba(0,0,0,0);\n}\n.stackgl-readme a::-moz-selection {\n  background: #DEE7FF;\n  text-shadow: 1px 0 rgba(0,0,0,0);\n}\n\n/**\n * Horizontal Rules\n */\n.stackgl-readme hr {\n  width: 8px; height: 8px;\n  background: transparent;\n  border: 1px solid #A9B0C2;\n  border-radius: 17px;\n  margin: 4rem auto;\n  position: relative;\n}\n\n.stackgl-readme hr:before,\n.stackgl-readme hr:after {\n  position: absolute;\n  top: 1px;\n  left: -24px;\n  width: 4px; height: 4px;\n  background: transparent;\n  content: '';\n  border-radius: 9px;\n  border: 1px solid #A9B0C2;\n}\n\n.stackgl-readme hr:after {\n  left: auto;\n  right: -24px;\n}\n\n/**\n * Images\n */\n.stackgl-readme img {\n  max-width: 100%;\n  display: block;\n}\n.stackgl-readme a img {\n  /*border-bottom: 1px solid #f00;*/\n}\n\n/**\n * Lists\n */\n.stackgl-readme li {\n  margin-bottom: 0.2em;\n}\n\n.stackgl-readme ul,\n.stackgl-readme ol {\n  margin: 1rem;\n  padding-left: 2rem;\n}\n.stackgl-readme ul ul,\n.stackgl-readme ul ol,\n.stackgl-readme ol ol,\n.stackgl-readme ol ul {\n  margin: 0;\n}\n/**\n * Code/Syntax Highlighting\n */\n.stackgl-readme > pre {\n  background: #383C47;\n  color: #fff;\n  border-radius: 2px;\n  margin: 1rem 0;\n  padding: 1.5rem;\n  font-size: 0.85rem;\n  line-height: 1.2em;\n  overflow-x: auto;\n}\n\n.stackgl-readme code {\n  background: #F6F8FE;\n  padding: 0.125em 0.35em;\n}\n\n.stackgl-readme > pre code,\n.stackgl-readme > pre pre {\n  background: transparent;\n  overflow: visible;\n  padding: 0;\n}\n\n.stackgl-readme .k,\n.stackgl-readme .kd,\n.stackgl-readme .kr,\n.stackgl-readme .s1 { color: #FFE169; }\n.stackgl-readme .mf,\n.stackgl-readme .mi { color: #66C4FF; }\n.stackgl-readme .cm,\n.stackgl-readme .cp,\n.stackgl-readme .c1 { color: #A9B0C2; }\n.stackgl-readme .o,\n.stackgl-readme .p { color: #DEE7FF; }\n\n.stackgl-readme .lang-glsl .k,\n.stackgl-readme .lang-glsl .kd,\n.stackgl-readme .lang-glsl .s1 { color: #61FF90; }\n.stackgl-readme .lang-glsl .mf,\n.stackgl-readme .lang-glsl .mi { color: #FF6F5C; }\n\n.stackgl-readme ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.stackgl-readme ::-webkit-scrollbar-thumb {\n  background: #5B6173;\n  transition: background 0.2s;\n  -webkit-transition: background 0.2s;\n}\n\n.stackgl-readme ::-webkit-scrollbar-thumb:active {\n  background: #A9B0C2;\n}\n\n/**\n * iframes\n */\n.stackgl-readme iframe {\n  width: 100%;\n  height: 300px;\n  border: 0;\n}\n\n.stackgl-readme h1 + iframe {\n  margin-top: 2rem;\n}\n"

},{}],9:[function(require,module,exports){
var window = require("global/window")
var once = require("once")
var parseHeaders = require('parse-headers')

var messages = {
    "0": "Internal XMLHttpRequest Error",
    "4": "4xx Client Error",
    "5": "5xx Server Error"
}

var XHR = window.XMLHttpRequest || noop
var XDR = "withCredentials" in (new XHR()) ? XHR : window.XDomainRequest

module.exports = createXHR

function createXHR(options, callback) {
    if (typeof options === "string") {
        options = { uri: options }
    }

    options = options || {}
    callback = once(callback)

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new XDR()
        }else{
            xhr = new XHR()
        }
    }

    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var key
    var load = options.response ? loadResponse : loadXhr

    if ("json" in options) {
        isJson = true
        headers["Accept"] = "application/json"
        if (method !== "GET" && method !== "HEAD") {
            headers["Content-Type"] = "application/json"
            body = JSON.stringify(options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = load
    xhr.onerror = error
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    // hate IE
    xhr.ontimeout = noop
    xhr.open(method, uri, !sync)
                                    //backward compatibility
    if (options.withCredentials || (options.cors && options.withCredentials !== false)) {
        xhr.withCredentials = true
    }

    // Cannot set timeout with sync request
    if (!sync) {
        xhr.timeout = "timeout" in options ? options.timeout : 5000
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }
    
    if ("beforeSend" in options && 
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    xhr.send(body)

    return xhr

    function readystatechange() {
        if (xhr.readyState === 4) {
            load()
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = null

        if (xhr.response) {
            body = xhr.response
        } else if (xhr.responseType === 'text' || !xhr.responseType) {
            body = xhr.responseText || xhr.responseXML
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function getStatusCode() {
        return xhr.status === 1223 ? 204 : xhr.status
    }

    // if we're getting a none-ok statusCode, build & return an error
    function errorFromStatusCode(status) {
        var error = null
        if (status === 0 || (status >= 400 && status < 600)) {
            var message = (typeof body === "string" ? body : false) ||
                messages[String(status).charAt(0)]
            error = new Error(message)
            error.statusCode = status
        }

        return error
    }

    // will load the data & process the response in a special response object
    function loadResponse() {
        var status = getStatusCode()
        var error = errorFromStatusCode(status)
        var response = {
            body: getBody(),
            statusCode: status,
            statusText: xhr.statusText,
            raw: xhr
        }
        if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
            response.headers = parseHeaders(xhr.getAllResponseHeaders())
        } else {
            response.headers = {}
        }

        callback(error, response, response.body)
    }

    // will load the data and add some response properties to the source xhr
    // and then respond with that
    function loadXhr() {
        var status = getStatusCode()
        var error = errorFromStatusCode(status)

        xhr.status = xhr.statusCode = status
        xhr.body = getBody()
        xhr.headers = parseHeaders(xhr.getAllResponseHeaders())

        callback(error, xhr, xhr.body)
    }

    function error(evt) {
        callback(evt, xhr)
    }
}


function noop() {}

},{"global/window":10,"once":11,"parse-headers":15}],10:[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}

},{}],12:[function(require,module,exports){
var isFunction = require('is-function')

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}

},{"is-function":13}],13:[function(require,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],14:[function(require,module,exports){

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],15:[function(require,module,exports){
var trim = require('trim')
  , forEach = require('for-each')
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}
},{"for-each":12,"trim":14}]},{},[4]);

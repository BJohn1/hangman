// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
var y = document.querySelector(".myBtn");
var z = document.querySelector(".restart");
var word = prompt("Enter a word for someone else to guess! Feel free to give them hints").toUpperCase();
var wordsplit = word.split("");
var guessed = [];
var correct = [];
var right = 0;
var guessesLeft = 7;
var num = wordsplit.length;
var blanks = document.createElement("h4");
var used = document.createElement("h5");
var text = [];
document.querySelector("Header").appendChild(used);
document.querySelector("Header").appendChild(blanks);

function putBlanks() {
  for (i = 0; i < num; i++) {
    text.push("_");
  }

  blanks.innerText = text.join(' ');
}

function duplicates() {
  for (i = 0; i < wordsplit.length; i++) {
    if (wordsplit[i] === guessed[guessed.length - 1]) {
      text[i] = guessed[guessed.length - 1];
      correct.push(guessed[guessed.length - 1]);
    }
  }

  document.querySelector("h4").innerText = text.join(' '); //update blanks

  document.querySelector("h5").innerText = "Used Letters: " + guessed.join(',');
}

putBlanks();
y.addEventListener("click", function () {
  if (document.querySelector('input').value.toUpperCase().length == 1 && guessed.includes(document.querySelector('input').value.toUpperCase()) !== true) {
    guessed.push(document.querySelector('input').value.toUpperCase());

    if (wordsplit.includes(guessed[guessed.length - 1])) {
      //correct.push(guessed[guessed.length-1])
      duplicates();
      right += 1; //var a = wordsplit.indexOf(guessed[guessed.length-1])
      //text[a]= guessed[guessed.length-1]//update blanks
      //document.querySelector("h4").innerText=text.join(' ') //update blanks
      // document.querySelector("h5").innerText="Used Letters: "+guessed.join(',')

      if (text.includes('_') !== true) {
        alert('NICE. You beat the game! Answer: ' + word);
        location.reload();
      } else alert('NICE. Correct Letters: ' + correct);
    } else {
      guessesLeft -= 1;

      if (guessesLeft > 0) {
        changeImage();
        document.querySelector(".guesses").innerText = "Guesses Remaining: " + guessesLeft;
        document.querySelector("h5").innerText = "Used Letters: " + guessed.join(',');
        alert('WRONG. Guesses Left: ' + guessesLeft);
      } else if (guessesLeft === 0) {
        changeImage();
        alert('Game Over');
        location.reload();
      }
    }

    alert("You guessed " + document.querySelector('input').value.toUpperCase() + " USED LETTERS: " + guessed);
    document.getElementById('input').value = '';
  } else alert("TRY AGAIN");
}); // alerts and button and game play^^^^

z.addEventListener("click", function () {
  location.reload();
});
var image = document.createElement("img");
image.id = "id";
image.className = "class";
image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/0.jpg";
image.alt = "Body";
image.height = "500";
image.width = "500";
document.querySelector("body").appendChild(image);

function changeImage() {
  if (guessesLeft === 6) {
    image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/4.jpg";
  }

  if (guessesLeft === 5) {
    image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/5.jpg";
  }

  if (guessesLeft === 4) {
    image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/6.jpg";
  }

  if (guessesLeft === 3) {
    image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/7.jpg";
  }

  if (guessesLeft === 2) {
    image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/8.jpg";
  }

  if (guessesLeft === 1) {
    image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/9.jpg";
  }

  if (guessesLeft === 0) {
    image.src = "https://www.oligalma.com/downloads/images/hangman/hangman/10.jpg";
  }
} //changes hangman image^^^^
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61649" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map
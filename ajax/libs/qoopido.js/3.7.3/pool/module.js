/*! Qoopido.js library 3.7.3, 2015-08-05 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(o){window.qoopido.register("pool/module",o,["../pool","../function/unique/uuid"])}(function(o,u,t,n,e,i,r){"use strict";var l=o["function/unique/uuid"],d=o.pool.extend({_module:null,_destroy:null,_constructor:function(o,t,n){var e=this,i=o._puid||(o._puid=l()),r=n&&(u.pool||(u.pool={}))&&(u.pool.module||(u.pool.module={}));return n===!0&&r[i]?r[i]:(e=d._parent._constructor.call(this,t),e._module=o,"function"==typeof o._destroy&&(e._destroy=function(o){o._destroy()}),n===!0&&(r[i]=e),e)},_dispose:function(o){return o},_obtain:function(){return this._module.create.apply(this._module,arguments)}});return d});
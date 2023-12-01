function _c(t, o) {
  const s = /* @__PURE__ */ Object.create(null), u = t.split(",");
  for (let p = 0; p < u.length; p++)
    s[u[p]] = !0;
  return o ? (p) => !!s[p.toLowerCase()] : (p) => !!s[p];
}
const tt = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ec = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ia = () => {
}, Oc = /^on[^a-z]/, Sc = (t) => Oc.test(t), Fe = Object.assign, Pc = (t, o) => {
  const s = t.indexOf(o);
  s > -1 && t.splice(s, 1);
}, Tc = Object.prototype.hasOwnProperty, ge = (t, o) => Tc.call(t, o), ue = Array.isArray, on = (t) => Fr(t) === "[object Map]", Mc = (t) => Fr(t) === "[object Set]", Oe = (t) => typeof t == "function", qe = (t) => typeof t == "string", Br = (t) => typeof t == "symbol", Ie = (t) => t !== null && typeof t == "object", Dc = (t) => (Ie(t) || Oe(t)) && Oe(t.then) && Oe(t.catch), jc = Object.prototype.toString, Fr = (t) => jc.call(t), Ca = (t) => Fr(t).slice(8, -1), Rc = (t) => Fr(t) === "[object Object]", Li = (t) => qe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, ka = (t) => {
  const o = /* @__PURE__ */ Object.create(null);
  return (s) => o[s] || (o[s] = t(s));
}, zc = /-(\w)/g, zr = ka((t) => t.replace(zc, (o, s) => s ? s.toUpperCase() : "")), Ir = ka((t) => t.charAt(0).toUpperCase() + t.slice(1)), sn = (t, o) => !Object.is(t, o), Ic = (t, o, s) => {
  Object.defineProperty(t, o, {
    configurable: !0,
    enumerable: !1,
    value: s
  });
};
let ta;
const Mi = () => ta || (ta = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function An(t) {
  if (ue(t)) {
    const o = {};
    for (let s = 0; s < t.length; s++) {
      const u = t[s], p = qe(u) ? Nc(u) : An(u);
      if (p)
        for (const h in p)
          o[h] = p[h];
    }
    return o;
  } else if (qe(t) || Ie(t))
    return t;
}
const Cc = /;(?![^(]*\))/g, kc = /:([^]+)/, Ac = /\/\*[^]*?\*\//g;
function Nc(t) {
  const o = {};
  return t.replace(Ac, "").split(Cc).forEach((s) => {
    if (s) {
      const u = s.split(kc);
      u.length > 1 && (o[u[0].trim()] = u[1].trim());
    }
  }), o;
}
function In(t) {
  let o = "";
  if (qe(t))
    o = t;
  else if (ue(t))
    for (let s = 0; s < t.length; s++) {
      const u = In(t[s]);
      u && (o += u + " ");
    }
  else if (Ie(t))
    for (const s in t)
      t[s] && (o += s + " ");
  return o.trim();
}
function na(t, ...o) {
  console.warn(`[Vue warn] ${t}`, ...o);
}
let Aa;
function Hc(t, o = Aa) {
  o && o.active && o.effects.push(t);
}
function $c() {
  return Aa;
}
const Di = (t) => {
  const o = new Set(t);
  return o.w = 0, o.n = 0, o;
}, Na = (t) => (t.w & Ot) > 0, Ha = (t) => (t.n & Ot) > 0, Wc = ({ deps: t }) => {
  if (t.length)
    for (let o = 0; o < t.length; o++)
      t[o].w |= Ot;
}, Bc = (t) => {
  const { deps: o } = t;
  if (o.length) {
    let s = 0;
    for (let u = 0; u < o.length; u++) {
      const p = o[u];
      Na(p) && !Ha(p) ? p.delete(t) : o[s++] = p, p.w &= ~Ot, p.n &= ~Ot;
    }
    o.length = s;
  }
}, ji = /* @__PURE__ */ new WeakMap();
let Tn = 0, Ot = 1;
const Ri = 30;
let Re;
const $t = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), zi = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Fc {
  constructor(o, s = null, u) {
    this.fn = o, this.scheduler = s, this.active = !0, this.deps = [], this.parent = void 0, Hc(this, u);
  }
  run() {
    if (!this.active)
      return this.fn();
    let o = Re, s = Wt;
    for (; o; ) {
      if (o === this)
        return;
      o = o.parent;
    }
    try {
      return this.parent = Re, Re = this, Wt = !0, Ot = 1 << ++Tn, Tn <= Ri ? Wc(this) : ra(this), this.fn();
    } finally {
      Tn <= Ri && Bc(this), Ot = 1 << --Tn, Re = this.parent, Wt = s, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Re === this ? this.deferStop = !0 : this.active && (ra(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ra(t) {
  const { deps: o } = t;
  if (o.length) {
    for (let s = 0; s < o.length; s++)
      o[s].delete(t);
    o.length = 0;
  }
}
let Wt = !0;
const $a = [];
function Wa() {
  $a.push(Wt), Wt = !1;
}
function Ba() {
  const t = $a.pop();
  Wt = t === void 0 ? !0 : t;
}
function Ce(t, o, s) {
  if (Wt && Re) {
    let u = ji.get(t);
    u || ji.set(t, u = /* @__PURE__ */ new Map());
    let p = u.get(s);
    p || u.set(s, p = Di());
    const h = process.env.NODE_ENV !== "production" ? { effect: Re, target: t, type: o, key: s } : void 0;
    Lc(p, h);
  }
}
function Lc(t, o) {
  let s = !1;
  Tn <= Ri ? Ha(t) || (t.n |= Ot, s = !Na(t)) : s = !t.has(Re), s && (t.add(Re), Re.deps.push(t), process.env.NODE_ENV !== "production" && Re.onTrack && Re.onTrack(
    Fe(
      {
        effect: Re
      },
      o
    )
  ));
}
function Et(t, o, s, u, p, h) {
  const y = ji.get(t);
  if (!y)
    return;
  let v = [];
  if (o === "clear")
    v = [...y.values()];
  else if (s === "length" && ue(t)) {
    const O = Number(u);
    y.forEach((j, S) => {
      (S === "length" || !Br(S) && S >= O) && v.push(j);
    });
  } else
    switch (s !== void 0 && v.push(y.get(s)), o) {
      case "add":
        ue(t) ? Li(s) && v.push(y.get("length")) : (v.push(y.get($t)), on(t) && v.push(y.get(zi)));
        break;
      case "delete":
        ue(t) || (v.push(y.get($t)), on(t) && v.push(y.get(zi)));
        break;
      case "set":
        on(t) && v.push(y.get($t));
        break;
    }
  const M = process.env.NODE_ENV !== "production" ? { target: t, type: o, key: s, newValue: u, oldValue: p, oldTarget: h } : void 0;
  if (v.length === 1)
    v[0] && (process.env.NODE_ENV !== "production" ? _r(v[0], M) : _r(v[0]));
  else {
    const O = [];
    for (const j of v)
      j && O.push(...j);
    process.env.NODE_ENV !== "production" ? _r(Di(O), M) : _r(Di(O));
  }
}
function _r(t, o) {
  const s = ue(t) ? t : [...t];
  for (const u of s)
    u.computed && ia(u, o);
  for (const u of s)
    u.computed || ia(u, o);
}
function ia(t, o) {
  (t !== Re || t.allowRecurse) && (process.env.NODE_ENV !== "production" && t.onTrigger && t.onTrigger(Fe({ effect: t }, o)), t.scheduler ? t.scheduler() : t.run());
}
const Vc = /* @__PURE__ */ _c("__proto__,__v_isRef,__isVue"), Fa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Br)
), oa = /* @__PURE__ */ Yc();
function Yc() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((o) => {
    t[o] = function(...s) {
      const u = ne(this);
      for (let h = 0, y = this.length; h < y; h++)
        Ce(u, "get", h + "");
      const p = u[o](...s);
      return p === -1 || p === !1 ? u[o](...s.map(ne)) : p;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((o) => {
    t[o] = function(...s) {
      Wa();
      const u = ne(this)[o].apply(this, s);
      return Ba(), u;
    };
  }), t;
}
function Xc(t) {
  const o = ne(this);
  return Ce(o, "has", t), o.hasOwnProperty(t);
}
class La {
  constructor(o = !1, s = !1) {
    this._isReadonly = o, this._shallow = s;
  }
  get(o, s, u) {
    const p = this._isReadonly, h = this._shallow;
    if (s === "__v_isReactive")
      return !p;
    if (s === "__v_isReadonly")
      return p;
    if (s === "__v_isShallow")
      return h;
    if (s === "__v_raw" && u === (p ? h ? qa : Ua : h ? ou : Xa).get(o))
      return o;
    const y = ue(o);
    if (!p) {
      if (y && ge(oa, s))
        return Reflect.get(oa, s, u);
      if (s === "hasOwnProperty")
        return Xc;
    }
    const v = Reflect.get(o, s, u);
    return (Br(s) ? Fa.has(s) : Vc(s)) || (p || Ce(o, "get", s), h) ? v : ze(v) ? y && Li(s) ? v : v.value : Ie(v) ? p ? Ka(v) : Ga(v) : v;
  }
}
class Uc extends La {
  constructor(o = !1) {
    super(!1, o);
  }
  set(o, s, u, p) {
    let h = o[s];
    if (Vt(h) && ze(h) && !ze(u))
      return !1;
    if (!this._shallow && (!Ii(u) && !Vt(u) && (h = ne(h), u = ne(u)), !ue(o) && ze(h) && !ze(u)))
      return h.value = u, !0;
    const y = ue(o) && Li(s) ? Number(s) < o.length : ge(o, s), v = Reflect.set(o, s, u, p);
    return o === ne(p) && (y ? sn(u, h) && Et(o, "set", s, u, h) : Et(o, "add", s, u)), v;
  }
  deleteProperty(o, s) {
    const u = ge(o, s), p = o[s], h = Reflect.deleteProperty(o, s);
    return h && u && Et(o, "delete", s, void 0, p), h;
  }
  has(o, s) {
    const u = Reflect.has(o, s);
    return (!Br(s) || !Fa.has(s)) && Ce(o, "has", s), u;
  }
  ownKeys(o) {
    return Ce(
      o,
      "iterate",
      ue(o) ? "length" : $t
    ), Reflect.ownKeys(o);
  }
}
class Va extends La {
  constructor(o = !1) {
    super(!0, o);
  }
  set(o, s) {
    return process.env.NODE_ENV !== "production" && na(
      `Set operation on key "${String(s)}" failed: target is readonly.`,
      o
    ), !0;
  }
  deleteProperty(o, s) {
    return process.env.NODE_ENV !== "production" && na(
      `Delete operation on key "${String(s)}" failed: target is readonly.`,
      o
    ), !0;
  }
}
const qc = /* @__PURE__ */ new Uc(), Gc = /* @__PURE__ */ new Va(), Kc = /* @__PURE__ */ new Va(!0), Vi = (t) => t, Lr = (t) => Reflect.getPrototypeOf(t);
function Er(t, o, s = !1, u = !1) {
  t = t.__v_raw;
  const p = ne(t), h = ne(o);
  s || (sn(o, h) && Ce(p, "get", o), Ce(p, "get", h));
  const { has: y } = Lr(p), v = u ? Vi : s ? qi : Ui;
  if (y.call(p, o))
    return v(t.get(o));
  if (y.call(p, h))
    return v(t.get(h));
  t !== p && t.get(o);
}
function Or(t, o = !1) {
  const s = this.__v_raw, u = ne(s), p = ne(t);
  return o || (sn(t, p) && Ce(u, "has", t), Ce(u, "has", p)), t === p ? s.has(t) : s.has(t) || s.has(p);
}
function Sr(t, o = !1) {
  return t = t.__v_raw, !o && Ce(ne(t), "iterate", $t), Reflect.get(t, "size", t);
}
function aa(t) {
  t = ne(t);
  const o = ne(this);
  return Lr(o).has.call(o, t) || (o.add(t), Et(o, "add", t, t)), this;
}
function sa(t, o) {
  o = ne(o);
  const s = ne(this), { has: u, get: p } = Lr(s);
  let h = u.call(s, t);
  h ? process.env.NODE_ENV !== "production" && Ya(s, u, t) : (t = ne(t), h = u.call(s, t));
  const y = p.call(s, t);
  return s.set(t, o), h ? sn(o, y) && Et(s, "set", t, o, y) : Et(s, "add", t, o), this;
}
function la(t) {
  const o = ne(this), { has: s, get: u } = Lr(o);
  let p = s.call(o, t);
  p ? process.env.NODE_ENV !== "production" && Ya(o, s, t) : (t = ne(t), p = s.call(o, t));
  const h = u ? u.call(o, t) : void 0, y = o.delete(t);
  return p && Et(o, "delete", t, void 0, h), y;
}
function ca() {
  const t = ne(this), o = t.size !== 0, s = process.env.NODE_ENV !== "production" ? on(t) ? new Map(t) : new Set(t) : void 0, u = t.clear();
  return o && Et(t, "clear", void 0, void 0, s), u;
}
function Pr(t, o) {
  return function(u, p) {
    const h = this, y = h.__v_raw, v = ne(y), M = o ? Vi : t ? qi : Ui;
    return !t && Ce(v, "iterate", $t), y.forEach((O, j) => u.call(p, M(O), M(j), h));
  };
}
function Tr(t, o, s) {
  return function(...u) {
    const p = this.__v_raw, h = ne(p), y = on(h), v = t === "entries" || t === Symbol.iterator && y, M = t === "keys" && y, O = p[t](...u), j = s ? Vi : o ? qi : Ui;
    return !o && Ce(
      h,
      "iterate",
      M ? zi : $t
    ), {
      // iterator protocol
      next() {
        const { value: S, done: H } = O.next();
        return H ? { value: S, done: H } : {
          value: v ? [j(S[0]), j(S[1])] : j(S),
          done: H
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function yt(t) {
  return function(...o) {
    if (process.env.NODE_ENV !== "production") {
      const s = o[0] ? `on key "${o[0]}" ` : "";
      console.warn(
        `${Ir(t)} operation ${s}failed: target is readonly.`,
        ne(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Jc() {
  const t = {
    get(h) {
      return Er(this, h);
    },
    get size() {
      return Sr(this);
    },
    has: Or,
    add: aa,
    set: sa,
    delete: la,
    clear: ca,
    forEach: Pr(!1, !1)
  }, o = {
    get(h) {
      return Er(this, h, !1, !0);
    },
    get size() {
      return Sr(this);
    },
    has: Or,
    add: aa,
    set: sa,
    delete: la,
    clear: ca,
    forEach: Pr(!1, !0)
  }, s = {
    get(h) {
      return Er(this, h, !0);
    },
    get size() {
      return Sr(this, !0);
    },
    has(h) {
      return Or.call(this, h, !0);
    },
    add: yt("add"),
    set: yt("set"),
    delete: yt("delete"),
    clear: yt("clear"),
    forEach: Pr(!0, !1)
  }, u = {
    get(h) {
      return Er(this, h, !0, !0);
    },
    get size() {
      return Sr(this, !0);
    },
    has(h) {
      return Or.call(this, h, !0);
    },
    add: yt("add"),
    set: yt("set"),
    delete: yt("delete"),
    clear: yt("clear"),
    forEach: Pr(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((h) => {
    t[h] = Tr(
      h,
      !1,
      !1
    ), s[h] = Tr(
      h,
      !0,
      !1
    ), o[h] = Tr(
      h,
      !1,
      !0
    ), u[h] = Tr(
      h,
      !0,
      !0
    );
  }), [
    t,
    s,
    o,
    u
  ];
}
const [
  Zc,
  Qc,
  eu,
  tu
] = /* @__PURE__ */ Jc();
function Yi(t, o) {
  const s = o ? t ? tu : eu : t ? Qc : Zc;
  return (u, p, h) => p === "__v_isReactive" ? !t : p === "__v_isReadonly" ? t : p === "__v_raw" ? u : Reflect.get(
    ge(s, p) && p in u ? s : u,
    p,
    h
  );
}
const nu = {
  get: /* @__PURE__ */ Yi(!1, !1)
}, ru = {
  get: /* @__PURE__ */ Yi(!0, !1)
}, iu = {
  get: /* @__PURE__ */ Yi(!0, !0)
};
function Ya(t, o, s) {
  const u = ne(s);
  if (u !== s && o.call(t, u)) {
    const p = Ca(t);
    console.warn(
      `Reactive ${p} contains both the raw and reactive versions of the same object${p === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Xa = /* @__PURE__ */ new WeakMap(), ou = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap();
function au(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function su(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : au(Ca(t));
}
function Ga(t) {
  return Vt(t) ? t : Xi(
    t,
    !1,
    qc,
    nu,
    Xa
  );
}
function Ka(t) {
  return Xi(
    t,
    !0,
    Gc,
    ru,
    Ua
  );
}
function Mr(t) {
  return Xi(
    t,
    !0,
    Kc,
    iu,
    qa
  );
}
function Xi(t, o, s, u, p) {
  if (!Ie(t))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(o && t.__v_isReactive))
    return t;
  const h = p.get(t);
  if (h)
    return h;
  const y = su(t);
  if (y === 0)
    return t;
  const v = new Proxy(
    t,
    y === 2 ? u : s
  );
  return p.set(t, v), v;
}
function Bt(t) {
  return Vt(t) ? Bt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Vt(t) {
  return !!(t && t.__v_isReadonly);
}
function Ii(t) {
  return !!(t && t.__v_isShallow);
}
function Ci(t) {
  return Bt(t) || Vt(t);
}
function ne(t) {
  const o = t && t.__v_raw;
  return o ? ne(o) : t;
}
function lu(t) {
  return Ic(t, "__v_skip", !0), t;
}
const Ui = (t) => Ie(t) ? Ga(t) : t, qi = (t) => Ie(t) ? Ka(t) : t;
function ze(t) {
  return !!(t && t.__v_isRef === !0);
}
function cu(t) {
  return ze(t) ? t.value : t;
}
const uu = {
  get: (t, o, s) => cu(Reflect.get(t, o, s)),
  set: (t, o, s, u) => {
    const p = t[o];
    return ze(p) && !ze(s) ? (p.value = s, !0) : Reflect.set(t, o, s, u);
  }
};
function fu(t) {
  return Bt(t) ? t : new Proxy(t, uu);
}
const Ft = [];
function du(t) {
  Ft.push(t);
}
function pu() {
  Ft.pop();
}
function ye(t, ...o) {
  if (process.env.NODE_ENV === "production")
    return;
  Wa();
  const s = Ft.length ? Ft[Ft.length - 1].component : null, u = s && s.appContext.config.warnHandler, p = hu();
  if (u)
    Lt(
      u,
      s,
      11,
      [
        t + o.join(""),
        s && s.proxy,
        p.map(
          ({ vnode: h }) => `at <${vs(s, h.type)}>`
        ).join(`
`),
        p
      ]
    );
  else {
    const h = [`[Vue warn]: ${t}`, ...o];
    p.length && h.push(`
`, ...vu(p)), console.warn(...h);
  }
  Ba();
}
function hu() {
  let t = Ft[Ft.length - 1];
  if (!t)
    return [];
  const o = [];
  for (; t; ) {
    const s = o[0];
    s && s.vnode === t ? s.recurseCount++ : o.push({
      vnode: t,
      recurseCount: 0
    });
    const u = t.component && t.component.parent;
    t = u && u.vnode;
  }
  return o;
}
function vu(t) {
  const o = [];
  return t.forEach((s, u) => {
    o.push(...u === 0 ? [] : [`
`], ...gu(s));
  }), o;
}
function gu({ vnode: t, recurseCount: o }) {
  const s = o > 0 ? `... (${o} recursive calls)` : "", u = t.component ? t.component.parent == null : !1, p = ` at <${vs(
    t.component,
    t.type,
    u
  )}`, h = ">" + s;
  return t.props ? [p, ...mu(t.props), h] : [p + h];
}
function mu(t) {
  const o = [], s = Object.keys(t);
  return s.slice(0, 3).forEach((u) => {
    o.push(...Ja(u, t[u]));
  }), s.length > 3 && o.push(" ..."), o;
}
function Ja(t, o, s) {
  return qe(o) ? (o = JSON.stringify(o), s ? o : [`${t}=${o}`]) : typeof o == "number" || typeof o == "boolean" || o == null ? s ? o : [`${t}=${o}`] : ze(o) ? (o = Ja(t, ne(o.value), !0), s ? o : [`${t}=Ref<`, o, ">"]) : Oe(o) ? [`${t}=fn${o.name ? `<${o.name}>` : ""}`] : (o = ne(o), s ? o : [`${t}=`, o]);
}
const Za = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Lt(t, o, s, u) {
  let p;
  try {
    p = u ? t(...u) : t();
  } catch (h) {
    Qa(h, o, s);
  }
  return p;
}
function ki(t, o, s, u) {
  if (Oe(t)) {
    const h = Lt(t, o, s, u);
    return h && Dc(h) && h.catch((y) => {
      Qa(y, o, s);
    }), h;
  }
  const p = [];
  for (let h = 0; h < t.length; h++)
    p.push(ki(t[h], o, s, u));
  return p;
}
function Qa(t, o, s, u = !0) {
  const p = o ? o.vnode : null;
  if (o) {
    let h = o.parent;
    const y = o.proxy, v = process.env.NODE_ENV !== "production" ? Za[s] : s;
    for (; h; ) {
      const O = h.ec;
      if (O) {
        for (let j = 0; j < O.length; j++)
          if (O[j](t, y, v) === !1)
            return;
      }
      h = h.parent;
    }
    const M = o.appContext.config.errorHandler;
    if (M) {
      Lt(
        M,
        null,
        10,
        [t, y, v]
      );
      return;
    }
  }
  yu(t, s, p, u);
}
function yu(t, o, s, u = !0) {
  if (process.env.NODE_ENV !== "production") {
    const p = Za[o];
    if (s && du(s), ye(`Unhandled error${p ? ` during execution of ${p}` : ""}`), s && pu(), u)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let Cr = !1, Ai = !1;
const Xe = [];
let _t = 0;
const an = [];
let et = null, xt = 0;
const es = /* @__PURE__ */ Promise.resolve();
let Gi = null;
const bu = 100;
function wu(t) {
  const o = Gi || es;
  return t ? o.then(this ? t.bind(this) : t) : o;
}
function xu(t) {
  let o = _t + 1, s = Xe.length;
  for (; o < s; ) {
    const u = o + s >>> 1, p = Xe[u], h = Cn(p);
    h < t || h === t && p.pre ? o = u + 1 : s = u;
  }
  return o;
}
function Ki(t) {
  (!Xe.length || !Xe.includes(
    t,
    Cr && t.allowRecurse ? _t + 1 : _t
  )) && (t.id == null ? Xe.push(t) : Xe.splice(xu(t.id), 0, t), ts());
}
function ts() {
  !Cr && !Ai && (Ai = !0, Gi = es.then(rs));
}
function ns(t) {
  ue(t) ? an.push(...t) : (!et || !et.includes(
    t,
    t.allowRecurse ? xt + 1 : xt
  )) && an.push(t), ts();
}
function _u(t) {
  if (an.length) {
    const o = [...new Set(an)];
    if (an.length = 0, et) {
      et.push(...o);
      return;
    }
    for (et = o, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), et.sort((s, u) => Cn(s) - Cn(u)), xt = 0; xt < et.length; xt++)
      process.env.NODE_ENV !== "production" && is(t, et[xt]) || et[xt]();
    et = null, xt = 0;
  }
}
const Cn = (t) => t.id == null ? 1 / 0 : t.id, Eu = (t, o) => {
  const s = Cn(t) - Cn(o);
  if (s === 0) {
    if (t.pre && !o.pre)
      return -1;
    if (o.pre && !t.pre)
      return 1;
  }
  return s;
};
function rs(t) {
  Ai = !1, Cr = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Xe.sort(Eu);
  const o = process.env.NODE_ENV !== "production" ? (s) => is(t, s) : Ia;
  try {
    for (_t = 0; _t < Xe.length; _t++) {
      const s = Xe[_t];
      if (s && s.active !== !1) {
        if (process.env.NODE_ENV !== "production" && o(s))
          continue;
        Lt(s, null, 14);
      }
    }
  } finally {
    _t = 0, Xe.length = 0, _u(t), Cr = !1, Gi = null, (Xe.length || an.length) && rs(t);
  }
}
function is(t, o) {
  if (!t.has(o))
    t.set(o, 1);
  else {
    const s = t.get(o);
    if (s > bu) {
      const u = o.ownerInstance, p = u && Qi(u.type);
      return ye(
        `Maximum recursive updates exceeded${p ? ` in component <${p}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      t.set(o, s + 1);
  }
}
const On = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Mi().__VUE_HMR_RUNTIME__ = {
  createRecord: Si(Ou),
  rerender: Si(Su),
  reload: Si(Pu)
});
const kr = /* @__PURE__ */ new Map();
function Ou(t, o) {
  return kr.has(t) ? !1 : (kr.set(t, {
    initialDef: Rn(o),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Rn(t) {
  return gs(t) ? t.__vccOpts : t;
}
function Su(t, o) {
  const s = kr.get(t);
  s && (s.initialDef.render = o, [...s.instances].forEach((u) => {
    o && (u.render = o, Rn(u.type).render = o), u.renderCache = [], u.update();
  }));
}
function Pu(t, o) {
  const s = kr.get(t);
  if (!s)
    return;
  o = Rn(o), ua(s.initialDef, o);
  const u = [...s.instances];
  for (const p of u) {
    const h = Rn(p.type);
    On.has(h) || (h !== s.initialDef && ua(h, o), On.add(h)), p.appContext.propsCache.delete(p.type), p.appContext.emitsCache.delete(p.type), p.appContext.optionsCache.delete(p.type), p.ceReload ? (On.add(h), p.ceReload(o.styles), On.delete(h)) : p.parent ? Ki(p.parent.update) : p.appContext.reload ? p.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  ns(() => {
    for (const p of u)
      On.delete(
        Rn(p.type)
      );
  });
}
function ua(t, o) {
  Fe(t, o);
  for (const s in t)
    s !== "__file" && !(s in o) && delete t[s];
}
function Si(t) {
  return (o, s) => {
    try {
      return t(o, s);
    } catch (u) {
      console.error(u), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Be = null, Tu = null;
const Ni = "components";
function Mu(t, o) {
  return ju(Ni, t, !0, o) || t;
}
const Du = Symbol.for("v-ndc");
function ju(t, o, s = !0, u = !1) {
  const p = Yt;
  if (p) {
    const h = p.type;
    if (t === Ni) {
      const v = Qi(
        h,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (v && (v === o || v === zr(o) || v === Ir(zr(o))))
        return h;
    }
    const y = (
      // local registration
      // check instance[type] first which is resolved for options API
      fa(p[t] || h[t], o) || // global registration
      fa(p.appContext[t], o)
    );
    if (!y && u)
      return h;
    if (process.env.NODE_ENV !== "production" && s && !y) {
      const v = t === Ni ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      ye(`Failed to resolve ${t.slice(0, -1)}: ${o}${v}`);
    }
    return y;
  } else
    process.env.NODE_ENV !== "production" && ye(
      `resolve${Ir(t.slice(0, -1))} can only be used in render() or setup().`
    );
}
function fa(t, o) {
  return t && (t[o] || t[zr(o)] || t[Ir(zr(o))]);
}
const Ru = (t) => t.__isSuspense;
function zu(t, o) {
  o && o.pendingBranch ? ue(t) ? o.effects.push(...t) : o.effects.push(t) : ns(t);
}
const Dr = {};
function Iu(t, o, { immediate: s, deep: u, flush: p, onTrack: h, onTrigger: y } = tt) {
  var v;
  process.env.NODE_ENV !== "production" && !o && (s !== void 0 && ye(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), u !== void 0 && ye(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const M = (D) => {
    ye(
      "Invalid watch source: ",
      D,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, O = $c() === ((v = Yt) == null ? void 0 : v.scope) ? Yt : null;
  let j, S = !1, H = !1;
  if (ze(t) ? (j = () => t.value, S = Ii(t)) : Bt(t) ? (j = () => t, u = !0) : ue(t) ? (H = !0, S = t.some((D) => Bt(D) || Ii(D)), j = () => t.map((D) => {
    if (ze(D))
      return D.value;
    if (Bt(D))
      return rn(D);
    if (Oe(D))
      return Lt(D, O, 2);
    process.env.NODE_ENV !== "production" && M(D);
  })) : Oe(t) ? o ? j = () => Lt(t, O, 2) : j = () => {
    if (!(O && O.isUnmounted))
      return $ && $(), ki(
        t,
        O,
        3,
        [L]
      );
  } : (j = Ia, process.env.NODE_ENV !== "production" && M(t)), o && u) {
    const D = j;
    j = () => rn(D());
  }
  let $, L = (D) => {
    $ = B.onStop = () => {
      Lt(D, O, 4), $ = B.onStop = void 0;
    };
  }, Q = H ? new Array(t.length).fill(Dr) : Dr;
  const he = () => {
    if (B.active)
      if (o) {
        const D = B.run();
        (u || S || (H ? D.some((E, X) => sn(E, Q[X])) : sn(D, Q))) && ($ && $(), ki(o, O, 3, [
          D,
          // pass undefined as the old value when it's changed for the first time
          Q === Dr ? void 0 : H && Q[0] === Dr ? [] : Q,
          L
        ]), Q = D);
      } else
        B.run();
  };
  he.allowRecurse = !!o;
  let G;
  p === "sync" ? G = he : p === "post" ? G = () => ga(he, O && O.suspense) : (he.pre = !0, O && (he.id = O.uid), G = () => Ki(he));
  const B = new Fc(j, G);
  return process.env.NODE_ENV !== "production" && (B.onTrack = h, B.onTrigger = y), o ? s ? he() : Q = B.run() : p === "post" ? ga(
    B.run.bind(B),
    O && O.suspense
  ) : B.run(), () => {
    B.stop(), O && O.scope && Pc(O.scope.effects, B);
  };
}
function Cu(t, o, s) {
  const u = this.proxy, p = qe(t) ? t.includes(".") ? ku(u, t) : () => u[t] : t.bind(u, u);
  let h;
  Oe(o) ? h = o : (h = o.handler, s = o);
  const y = Yt;
  ya(this);
  const v = Iu(p, h.bind(u), s);
  return y ? ya(y) : Qu(), v;
}
function ku(t, o) {
  const s = o.split(".");
  return () => {
    let u = t;
    for (let p = 0; p < s.length && u; p++)
      u = u[s[p]];
    return u;
  };
}
function rn(t, o) {
  if (!Ie(t) || t.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(t)))
    return t;
  if (o.add(t), ze(t))
    rn(t.value, o);
  else if (ue(t))
    for (let s = 0; s < t.length; s++)
      rn(t[s], o);
  else if (Mc(t) || on(t))
    t.forEach((s) => {
      rn(s, o);
    });
  else if (Rc(t))
    for (const s in t)
      rn(t[s], o);
  return t;
}
function Au(t, o) {
  return process.env.NODE_ENV !== "production" && ye("withDirectives can only be used inside render functions."), t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Nu(t, o) {
  return Oe(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: t.name }, o, { setup: t })
  ) : t;
}
const Hu = (t) => !!t.type.__asyncLoader;
function os(t, o, s = {}, u, p) {
  if (Be.isCE || Be.parent && Hu(Be.parent) && Be.parent.isCE)
    return o !== "default" && (s.name = o), Nn("slot", s, u && u());
  let h = t[o];
  process.env.NODE_ENV !== "production" && h && h.length > 1 && (ye(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), h = () => []), h && h._c && (h._d = !1), kn();
  const y = h && as(h(s)), v = ls(
    Vr,
    {
      key: s.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      y && y.key || `_${o}`
    },
    y || (u ? u() : []),
    y && t._ === 1 ? 64 : -2
  );
  return !p && v.scopeId && (v.slotScopeIds = [v.scopeId + "-s"]), h && h._c && (h._d = !0), v;
}
function as(t) {
  return t.some((o) => cs(o) ? !(o.type === Nr || o.type === Vr && !as(o.children)) : !0) ? t : null;
}
const Hi = (t) => t ? ef(t) ? tf(t) || t.proxy : Hi(t.parent) : null, zn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fe(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => process.env.NODE_ENV !== "production" ? Mr(t.props) : t.props,
    $attrs: (t) => process.env.NODE_ENV !== "production" ? Mr(t.attrs) : t.attrs,
    $slots: (t) => process.env.NODE_ENV !== "production" ? Mr(t.slots) : t.slots,
    $refs: (t) => process.env.NODE_ENV !== "production" ? Mr(t.refs) : t.refs,
    $parent: (t) => Hi(t.parent),
    $root: (t) => Hi(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Bu(t),
    $forceUpdate: (t) => t.f || (t.f = () => Ki(t.update)),
    $nextTick: (t) => t.n || (t.n = wu.bind(t.proxy)),
    $watch: (t) => Cu.bind(t)
  })
), $u = (t) => t === "_" || t === "$", Pi = (t, o) => t !== tt && !t.__isScriptSetup && ge(t, o), Wu = {
  get({ _: t }, o) {
    const { ctx: s, setupState: u, data: p, props: h, accessCache: y, type: v, appContext: M } = t;
    if (process.env.NODE_ENV !== "production" && o === "__isVue")
      return !0;
    let O;
    if (o[0] !== "$") {
      const $ = y[o];
      if ($ !== void 0)
        switch ($) {
          case 1:
            return u[o];
          case 2:
            return p[o];
          case 4:
            return s[o];
          case 3:
            return h[o];
        }
      else {
        if (Pi(u, o))
          return y[o] = 1, u[o];
        if (p !== tt && ge(p, o))
          return y[o] = 2, p[o];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (O = t.propsOptions[0]) && ge(O, o)
        )
          return y[o] = 3, h[o];
        if (s !== tt && ge(s, o))
          return y[o] = 4, s[o];
        y[o] = 0;
      }
    }
    const j = zn[o];
    let S, H;
    if (j)
      return o === "$attrs" ? (Ce(t, "get", o), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && o === "$slots" && Ce(t, "get", o), j(t);
    if (
      // css module (injected by vue-loader)
      (S = v.__cssModules) && (S = S[o])
    )
      return S;
    if (s !== tt && ge(s, o))
      return y[o] = 4, s[o];
    if (
      // global properties
      H = M.config.globalProperties, ge(H, o)
    )
      return H[o];
    process.env.NODE_ENV !== "production" && Be && (!qe(o) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    o.indexOf("__v") !== 0) && (p !== tt && $u(o[0]) && ge(p, o) ? ye(
      `Property ${JSON.stringify(
        o
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === Be && ye(
      `Property ${JSON.stringify(o)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, o, s) {
    const { data: u, setupState: p, ctx: h } = t;
    return Pi(p, o) ? (p[o] = s, !0) : process.env.NODE_ENV !== "production" && p.__isScriptSetup && ge(p, o) ? (ye(`Cannot mutate <script setup> binding "${o}" from Options API.`), !1) : u !== tt && ge(u, o) ? (u[o] = s, !0) : ge(t.props, o) ? (process.env.NODE_ENV !== "production" && ye(`Attempting to mutate prop "${o}". Props are readonly.`), !1) : o[0] === "$" && o.slice(1) in t ? (process.env.NODE_ENV !== "production" && ye(
      `Attempting to mutate public property "${o}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && o in t.appContext.config.globalProperties ? Object.defineProperty(h, o, {
      enumerable: !0,
      configurable: !0,
      value: s
    }) : h[o] = s, !0);
  },
  has({
    _: { data: t, setupState: o, accessCache: s, ctx: u, appContext: p, propsOptions: h }
  }, y) {
    let v;
    return !!s[y] || t !== tt && ge(t, y) || Pi(o, y) || (v = h[0]) && ge(v, y) || ge(u, y) || ge(zn, y) || ge(p.config.globalProperties, y);
  },
  defineProperty(t, o, s) {
    return s.get != null ? t._.accessCache[o] = 0 : ge(s, "value") && this.set(t, o, s.value, null), Reflect.defineProperty(t, o, s);
  }
};
process.env.NODE_ENV !== "production" && (Wu.ownKeys = (t) => (ye(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function da(t) {
  return ue(t) ? t.reduce(
    (o, s) => (o[s] = null, o),
    {}
  ) : t;
}
function Bu(t) {
  const o = t.type, { mixins: s, extends: u } = o, {
    mixins: p,
    optionsCache: h,
    config: { optionMergeStrategies: y }
  } = t.appContext, v = h.get(o);
  let M;
  return v ? M = v : !p.length && !s && !u ? M = o : (M = {}, p.length && p.forEach(
    (O) => Ar(M, O, y, !0)
  ), Ar(M, o, y)), Ie(o) && h.set(o, M), M;
}
function Ar(t, o, s, u = !1) {
  const { mixins: p, extends: h } = o;
  h && Ar(t, h, s, !0), p && p.forEach(
    (y) => Ar(t, y, s, !0)
  );
  for (const y in o)
    if (u && y === "expose")
      process.env.NODE_ENV !== "production" && ye(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const v = Fu[y] || s && s[y];
      t[y] = v ? v(t[y], o[y]) : o[y];
    }
  return t;
}
const Fu = {
  data: pa,
  props: va,
  emits: va,
  // objects
  methods: Mn,
  computed: Mn,
  // lifecycle
  beforeCreate: De,
  created: De,
  beforeMount: De,
  mounted: De,
  beforeUpdate: De,
  updated: De,
  beforeDestroy: De,
  beforeUnmount: De,
  destroyed: De,
  unmounted: De,
  activated: De,
  deactivated: De,
  errorCaptured: De,
  serverPrefetch: De,
  // assets
  components: Mn,
  directives: Mn,
  // watch
  watch: Vu,
  // provide / inject
  provide: pa,
  inject: Lu
};
function pa(t, o) {
  return o ? t ? function() {
    return Fe(
      Oe(t) ? t.call(this, this) : t,
      Oe(o) ? o.call(this, this) : o
    );
  } : o : t;
}
function Lu(t, o) {
  return Mn(ha(t), ha(o));
}
function ha(t) {
  if (ue(t)) {
    const o = {};
    for (let s = 0; s < t.length; s++)
      o[t[s]] = t[s];
    return o;
  }
  return t;
}
function De(t, o) {
  return t ? [...new Set([].concat(t, o))] : o;
}
function Mn(t, o) {
  return t ? Fe(/* @__PURE__ */ Object.create(null), t, o) : o;
}
function va(t, o) {
  return t ? ue(t) && ue(o) ? [.../* @__PURE__ */ new Set([...t, ...o])] : Fe(
    /* @__PURE__ */ Object.create(null),
    da(t),
    da(o ?? {})
  ) : o;
}
function Vu(t, o) {
  if (!t)
    return o;
  if (!o)
    return t;
  const s = Fe(/* @__PURE__ */ Object.create(null), t);
  for (const u in o)
    s[u] = De(t[u], o[u]);
  return s;
}
const ga = zu, Yu = (t) => t.__isTeleport, Vr = Symbol.for("v-fgt"), Xu = Symbol.for("v-txt"), Nr = Symbol.for("v-cmt"), jr = [];
let Ue = null;
function kn(t = !1) {
  jr.push(Ue = t ? null : []);
}
function Uu() {
  jr.pop(), Ue = jr[jr.length - 1] || null;
}
function ss(t) {
  return t.dynamicChildren = Ue || Ec, Uu(), Ue && Ue.push(t), t;
}
function $i(t, o, s, u, p, h) {
  return ss(
    ds(
      t,
      o,
      s,
      u,
      p,
      h,
      !0
      /* isBlock */
    )
  );
}
function ls(t, o, s, u, p) {
  return ss(
    Nn(
      t,
      o,
      s,
      u,
      p,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function cs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const qu = (...t) => ps(
  ...t
), us = "__vInternal", fs = ({ key: t }) => t ?? null, Rr = ({
  ref: t,
  ref_key: o,
  ref_for: s
}) => (typeof t == "number" && (t = "" + t), t != null ? qe(t) || ze(t) || Oe(t) ? { i: Be, r: t, k: o, f: !!s } : t : null);
function ds(t, o = null, s = null, u = 0, p = null, h = t === Vr ? 0 : 1, y = !1, v = !1) {
  const M = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: o,
    key: o && fs(o),
    ref: o && Rr(o),
    scopeId: Tu,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: h,
    patchFlag: u,
    dynamicProps: p,
    dynamicChildren: null,
    appContext: null,
    ctx: Be
  };
  return v ? (Ji(M, s), h & 128 && t.normalize(M)) : s && (M.shapeFlag |= qe(s) ? 8 : 16), process.env.NODE_ENV !== "production" && M.key !== M.key && ye("VNode created with invalid key (NaN). VNode type:", M.type), // avoid a block node from tracking itself
  !y && // has current parent block
  Ue && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (M.patchFlag > 0 || h & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  M.patchFlag !== 32 && Ue.push(M), M;
}
const Nn = process.env.NODE_ENV !== "production" ? qu : ps;
function ps(t, o = null, s = null, u = 0, p = null, h = !1) {
  if ((!t || t === Du) && (process.env.NODE_ENV !== "production" && !t && ye(`Invalid vnode type when creating vnode: ${t}.`), t = Nr), cs(t)) {
    const v = Hr(
      t,
      o,
      !0
      /* mergeRef: true */
    );
    return s && Ji(v, s), !h && Ue && (v.shapeFlag & 6 ? Ue[Ue.indexOf(t)] = v : Ue.push(v)), v.patchFlag |= -2, v;
  }
  if (gs(t) && (t = t.__vccOpts), o) {
    o = Gu(o);
    let { class: v, style: M } = o;
    v && !qe(v) && (o.class = In(v)), Ie(M) && (Ci(M) && !ue(M) && (M = Fe({}, M)), o.style = An(M));
  }
  const y = qe(t) ? 1 : Ru(t) ? 128 : Yu(t) ? 64 : Ie(t) ? 4 : Oe(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && y & 4 && Ci(t) && (t = ne(t), ye(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), ds(
    t,
    o,
    s,
    u,
    p,
    y,
    h,
    !0
  );
}
function Gu(t) {
  return t ? Ci(t) || us in t ? Fe({}, t) : t : null;
}
function Hr(t, o, s = !1) {
  const { props: u, ref: p, patchFlag: h, children: y } = t, v = o ? Zu(u || {}, o) : u;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: v,
    key: v && fs(v),
    ref: o && o.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && p ? ue(p) ? p.concat(Rr(o)) : [p, Rr(o)] : Rr(o)
    ) : p,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && h === -1 && ue(y) ? y.map(hs) : y,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: o && t.type !== Vr ? h === -1 ? 16 : h | 16 : h,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Hr(t.ssContent),
    ssFallback: t.ssFallback && Hr(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function hs(t) {
  const o = Hr(t);
  return ue(t.children) && (o.children = t.children.map(hs)), o;
}
function Ku(t = " ", o = 0) {
  return Nn(Xu, null, t, o);
}
function Ju(t = "", o = !1) {
  return o ? (kn(), ls(Nr, null, t)) : Nn(Nr, null, t);
}
function Ji(t, o) {
  let s = 0;
  const { shapeFlag: u } = t;
  if (o == null)
    o = null;
  else if (ue(o))
    s = 16;
  else if (typeof o == "object")
    if (u & 65) {
      const p = o.default;
      p && (p._c && (p._d = !1), Ji(t, p()), p._c && (p._d = !0));
      return;
    } else {
      s = 32;
      const p = o._;
      !p && !(us in o) ? o._ctx = Be : p === 3 && Be && (Be.slots._ === 1 ? o._ = 1 : (o._ = 2, t.patchFlag |= 1024));
    }
  else
    Oe(o) ? (o = { default: o, _ctx: Be }, s = 32) : (o = String(o), u & 64 ? (s = 16, o = [Ku(o)]) : s = 8);
  t.children = o, t.shapeFlag |= s;
}
function Zu(...t) {
  const o = {};
  for (let s = 0; s < t.length; s++) {
    const u = t[s];
    for (const p in u)
      if (p === "class")
        o.class !== u.class && (o.class = In([o.class, u.class]));
      else if (p === "style")
        o.style = An([o.style, u.style]);
      else if (Sc(p)) {
        const h = o[p], y = u[p];
        y && h !== y && !(ue(h) && h.includes(y)) && (o[p] = h ? [].concat(h, y) : y);
      } else
        p !== "" && (o[p] = u[p]);
  }
  return o;
}
let Yt = null, Zi, nn, ma = "__VUE_INSTANCE_SETTERS__";
(nn = Mi()[ma]) || (nn = Mi()[ma] = []), nn.push((t) => Yt = t), Zi = (t) => {
  nn.length > 1 ? nn.forEach((o) => o(t)) : nn[0](t);
};
const ya = (t) => {
  Zi(t), t.scope.on();
}, Qu = () => {
  Yt && Yt.scope.off(), Zi(null);
};
function ef(t) {
  return t.vnode.shapeFlag & 4;
}
function tf(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(fu(lu(t.exposed)), {
      get(o, s) {
        if (s in o)
          return o[s];
        if (s in zn)
          return zn[s](t);
      },
      has(o, s) {
        return s in o || s in zn;
      }
    }));
}
const nf = /(?:^|[-_])(\w)/g, rf = (t) => t.replace(nf, (o) => o.toUpperCase()).replace(/[-_]/g, "");
function Qi(t, o = !0) {
  return Oe(t) ? t.displayName || t.name : t.name || o && t.__name;
}
function vs(t, o, s = !1) {
  let u = Qi(o);
  if (!u && o.__file) {
    const p = o.__file.match(/([^/\\]+)\.\w+$/);
    p && (u = p[1]);
  }
  if (!u && t && t.parent) {
    const p = (h) => {
      for (const y in h)
        if (h[y] === o)
          return y;
    };
    u = p(
      t.components || t.parent.type.components
    ) || p(t.appContext.components);
  }
  return u ? rf(u) : s ? "App" : "Anonymous";
}
function gs(t) {
  return Oe(t) && "__vccOpts" in t;
}
function Ti(t) {
  return !!(t && t.__v_isShallow);
}
function of() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, o = { style: "color:#0b1bc9" }, s = { style: "color:#b62e24" }, u = { style: "color:#9d288c" }, p = {
    header(S) {
      return Ie(S) ? S.__isVue ? ["div", t, "VueInstance"] : ze(S) ? [
        "div",
        {},
        ["span", t, j(S)],
        "<",
        v(S.value),
        ">"
      ] : Bt(S) ? [
        "div",
        {},
        ["span", t, Ti(S) ? "ShallowReactive" : "Reactive"],
        "<",
        v(S),
        `>${Vt(S) ? " (readonly)" : ""}`
      ] : Vt(S) ? [
        "div",
        {},
        ["span", t, Ti(S) ? "ShallowReadonly" : "Readonly"],
        "<",
        v(S),
        ">"
      ] : null : null;
    },
    hasBody(S) {
      return S && S.__isVue;
    },
    body(S) {
      if (S && S.__isVue)
        return [
          "div",
          {},
          ...h(S.$)
        ];
    }
  };
  function h(S) {
    const H = [];
    S.type.props && S.props && H.push(y("props", ne(S.props))), S.setupState !== tt && H.push(y("setup", S.setupState)), S.data !== tt && H.push(y("data", ne(S.data)));
    const $ = M(S, "computed");
    $ && H.push(y("computed", $));
    const L = M(S, "inject");
    return L && H.push(y("injected", L)), H.push([
      "div",
      {},
      [
        "span",
        {
          style: u.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: S }]
    ]), H;
  }
  function y(S, H) {
    return H = Fe({}, H), Object.keys(H).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        S
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(H).map(($) => [
          "div",
          {},
          ["span", u, $ + ": "],
          v(H[$], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function v(S, H = !0) {
    return typeof S == "number" ? ["span", o, S] : typeof S == "string" ? ["span", s, JSON.stringify(S)] : typeof S == "boolean" ? ["span", u, S] : Ie(S) ? ["object", { object: H ? ne(S) : S }] : ["span", s, String(S)];
  }
  function M(S, H) {
    const $ = S.type;
    if (Oe($))
      return;
    const L = {};
    for (const Q in S.ctx)
      O($, Q, H) && (L[Q] = S.ctx[Q]);
    return L;
  }
  function O(S, H, $) {
    const L = S[$];
    if (ue(L) && L.includes(H) || Ie(L) && H in L || S.extends && O(S.extends, H, $) || S.mixins && S.mixins.some((Q) => O(Q, H, $)))
      return !0;
  }
  function j(S) {
    return Ti(S) ? "ShallowRef" : S.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(p) : window.devtoolsFormatters = [p];
}
const ms = Symbol("_vod"), af = {
  beforeMount(t, { value: o }, { transition: s }) {
    t[ms] = t.style.display === "none" ? "" : t.style.display, s && o ? s.beforeEnter(t) : Sn(t, o);
  },
  mounted(t, { value: o }, { transition: s }) {
    s && o && s.enter(t);
  },
  updated(t, { value: o, oldValue: s }, { transition: u }) {
    !o != !s && (u ? o ? (u.beforeEnter(t), Sn(t, !0), u.enter(t)) : u.leave(t, () => {
      Sn(t, !1);
    }) : Sn(t, o));
  },
  beforeUnmount(t, { value: o }) {
    Sn(t, o);
  }
};
function Sn(t, o) {
  t.style.display = o ? t[ms] : "none";
}
function sf() {
  of();
}
process.env.NODE_ENV !== "production" && sf();
function ys(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var bs = { exports: {} };
(function(t, o) {
  (function(s) {
    t.exports = s();
  })(function() {
    var s = {};
    Object.defineProperty(s, "__esModule", { value: !0 }), s.default = void 0, s.default = function(e) {
      return !(!e || !e.Window) && e instanceof e.Window;
    };
    var u = {};
    Object.defineProperty(u, "__esModule", { value: !0 }), u.getWindow = function(e) {
      return (0, s.default)(e) ? e : (e.ownerDocument || e).defaultView || h.window;
    }, u.init = y, u.window = u.realWindow = void 0;
    var p = void 0;
    u.realWindow = p;
    var h = void 0;
    function y(e) {
      u.realWindow = p = e;
      var n = e.document.createTextNode("");
      n.ownerDocument !== e.document && typeof e.wrap == "function" && e.wrap(n) === n && (e = e.wrap(e)), u.window = h = e;
    }
    u.window = h, typeof window < "u" && window && y(window);
    var v = {};
    function M(e) {
      return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, M(e);
    }
    Object.defineProperty(v, "__esModule", { value: !0 }), v.default = void 0;
    var O = function(e) {
      return !!e && M(e) === "object";
    }, j = function(e) {
      return typeof e == "function";
    }, S = { window: function(e) {
      return e === u.window || (0, s.default)(e);
    }, docFrag: function(e) {
      return O(e) && e.nodeType === 11;
    }, object: O, func: j, number: function(e) {
      return typeof e == "number";
    }, bool: function(e) {
      return typeof e == "boolean";
    }, string: function(e) {
      return typeof e == "string";
    }, element: function(e) {
      if (!e || M(e) !== "object")
        return !1;
      var n = u.getWindow(e) || u.window;
      return /object|function/.test(typeof Element > "u" ? "undefined" : M(Element)) ? e instanceof Element || e instanceof n.Element : e.nodeType === 1 && typeof e.nodeName == "string";
    }, plainObject: function(e) {
      return O(e) && !!e.constructor && /function Object\b/.test(e.constructor.toString());
    }, array: function(e) {
      return O(e) && e.length !== void 0 && j(e.splice);
    } };
    v.default = S;
    var H = {};
    function $(e) {
      var n = e.interaction;
      if (n.prepared.name === "drag") {
        var r = n.prepared.axis;
        r === "x" ? (n.coords.cur.page.y = n.coords.start.page.y, n.coords.cur.client.y = n.coords.start.client.y, n.coords.velocity.client.y = 0, n.coords.velocity.page.y = 0) : r === "y" && (n.coords.cur.page.x = n.coords.start.page.x, n.coords.cur.client.x = n.coords.start.client.x, n.coords.velocity.client.x = 0, n.coords.velocity.page.x = 0);
      }
    }
    function L(e) {
      var n = e.iEvent, r = e.interaction;
      if (r.prepared.name === "drag") {
        var i = r.prepared.axis;
        if (i === "x" || i === "y") {
          var a = i === "x" ? "y" : "x";
          n.page[a] = r.coords.start.page[a], n.client[a] = r.coords.start.client[a], n.delta[a] = 0;
        }
      }
    }
    Object.defineProperty(H, "__esModule", { value: !0 }), H.default = void 0;
    var Q = { id: "actions/drag", install: function(e) {
      var n = e.actions, r = e.Interactable, i = e.defaults;
      r.prototype.draggable = Q.draggable, n.map.drag = Q, n.methodDict.drag = "draggable", i.actions.drag = Q.defaults;
    }, listeners: { "interactions:before-action-move": $, "interactions:action-resume": $, "interactions:action-move": L, "auto-start:check": function(e) {
      var n = e.interaction, r = e.interactable, i = e.buttons, a = r.options.drag;
      if (a && a.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || i & r.options.drag.mouseButtons))
        return e.action = { name: "drag", axis: a.lockAxis === "start" ? a.startAxis : a.lockAxis }, !1;
    } }, draggable: function(e) {
      return v.default.object(e) ? (this.options.drag.enabled = e.enabled !== !1, this.setPerAction("drag", e), this.setOnEvents("drag", e), /^(xy|x|y|start)$/.test(e.lockAxis) && (this.options.drag.lockAxis = e.lockAxis), /^(xy|x|y)$/.test(e.startAxis) && (this.options.drag.startAxis = e.startAxis), this) : v.default.bool(e) ? (this.options.drag.enabled = e, this) : this.options.drag;
    }, beforeMove: $, move: L, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    }, filterEventType: function(e) {
      return e.search("drag") === 0;
    } }, he = Q;
    H.default = he;
    var G = {};
    Object.defineProperty(G, "__esModule", { value: !0 }), G.default = void 0;
    var B = { init: function(e) {
      var n = e;
      B.document = n.document, B.DocumentFragment = n.DocumentFragment || ie, B.SVGElement = n.SVGElement || ie, B.SVGSVGElement = n.SVGSVGElement || ie, B.SVGElementInstance = n.SVGElementInstance || ie, B.Element = n.Element || ie, B.HTMLElement = n.HTMLElement || B.Element, B.Event = n.Event, B.Touch = n.Touch || ie, B.PointerEvent = n.PointerEvent || n.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function ie() {
    }
    var D = B;
    G.default = D;
    var E = {};
    Object.defineProperty(E, "__esModule", { value: !0 }), E.default = void 0;
    var X = { init: function(e) {
      var n = G.default.Element, r = e.navigator || {};
      X.supportsTouch = "ontouchstart" in e || v.default.func(e.DocumentTouch) && G.default.document instanceof e.DocumentTouch, X.supportsPointerEvent = r.pointerEnabled !== !1 && !!G.default.PointerEvent, X.isIOS = /iP(hone|od|ad)/.test(r.platform), X.isIOS7 = /iP(hone|od|ad)/.test(r.platform) && /OS 7[^\d]/.test(r.appVersion), X.isIe9 = /MSIE 9/.test(r.userAgent), X.isOperaMobile = r.appName === "Opera" && X.supportsTouch && /Presto/.test(r.userAgent), X.prefixedMatchesSelector = "matches" in n.prototype ? "matches" : "webkitMatchesSelector" in n.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in n.prototype ? "mozMatchesSelector" : "oMatchesSelector" in n.prototype ? "oMatchesSelector" : "msMatchesSelector", X.pEventTypes = X.supportsPointerEvent ? G.default.PointerEvent === e.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, X.wheelEvent = G.default.document && "onmousewheel" in G.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, C = X;
    E.default = C;
    var I = {};
    function me(e) {
      var n = e.parentNode;
      if (v.default.docFrag(n)) {
        for (; (n = n.host) && v.default.docFrag(n); )
          ;
        return n;
      }
      return n;
    }
    function ee(e, n) {
      return u.window !== u.realWindow && (n = n.replace(/\/deep\//g, " ")), e[E.default.prefixedMatchesSelector](n);
    }
    Object.defineProperty(I, "__esModule", { value: !0 }), I.closest = function(e, n) {
      for (; v.default.element(e); ) {
        if (ee(e, n))
          return e;
        e = me(e);
      }
      return null;
    }, I.getActualElement = function(e) {
      return e.correspondingUseElement || e;
    }, I.getElementClientRect = Se, I.getElementRect = function(e) {
      var n = Se(e);
      if (!E.default.isIOS7 && n) {
        var r = re(u.getWindow(e));
        n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y;
      }
      return n;
    }, I.getPath = function(e) {
      for (var n = []; e; )
        n.push(e), e = me(e);
      return n;
    }, I.getScrollXY = re, I.indexOfDeepestElement = function(e) {
      for (var n, r = [], i = 0; i < e.length; i++) {
        var a = e[i], l = e[n];
        if (a && i !== n)
          if (l) {
            var d = ve(a), c = ve(l);
            if (d !== a.ownerDocument)
              if (c !== a.ownerDocument)
                if (d !== c) {
                  r = r.length ? r : K(l);
                  var f = void 0;
                  if (l instanceof G.default.HTMLElement && a instanceof G.default.SVGElement && !(a instanceof G.default.SVGSVGElement)) {
                    if (a === c)
                      continue;
                    f = a.ownerSVGElement;
                  } else
                    f = a;
                  for (var g = K(f, l.ownerDocument), m = 0; g[m] && g[m] === r[m]; )
                    m++;
                  var b = [g[m - 1], g[m], r[m]];
                  if (b[0])
                    for (var x = b[0].lastChild; x; ) {
                      if (x === b[1]) {
                        n = i, r = g;
                        break;
                      }
                      if (x === b[2])
                        break;
                      x = x.previousSibling;
                    }
                } else
                  _ = a, w = l, (parseInt(u.getWindow(_).getComputedStyle(_).zIndex, 10) || 0) >= (parseInt(u.getWindow(w).getComputedStyle(w).zIndex, 10) || 0) && (n = i);
              else
                n = i;
          } else
            n = i;
      }
      var _, w;
      return n;
    }, I.matchesSelector = ee, I.matchesUpTo = function(e, n, r) {
      for (; v.default.element(e); ) {
        if (ee(e, n))
          return !0;
        if ((e = me(e)) === r)
          return ee(e, n);
      }
      return !1;
    }, I.nodeContains = function(e, n) {
      if (e.contains)
        return e.contains(n);
      for (; n; ) {
        if (n === e)
          return !0;
        n = n.parentNode;
      }
      return !1;
    }, I.parentNode = me, I.trySelector = function(e) {
      return !!v.default.string(e) && (G.default.document.querySelector(e), !0);
    };
    var ve = function(e) {
      return e.parentNode || e.host;
    };
    function K(e, n) {
      for (var r, i = [], a = e; (r = ve(a)) && a !== n && r !== a.ownerDocument; )
        i.unshift(a), a = r;
      return i;
    }
    function re(e) {
      return { x: (e = e || u.window).scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
    }
    function Se(e) {
      var n = e instanceof G.default.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];
      return n && { left: n.left, right: n.right, top: n.top, bottom: n.bottom, width: n.width || n.right - n.left, height: n.height || n.bottom - n.top };
    }
    var z = {};
    Object.defineProperty(z, "__esModule", { value: !0 }), z.default = function(e, n) {
      for (var r in n)
        e[r] = n[r];
      return e;
    };
    var J = {};
    function ut(e, n) {
      (n == null || n > e.length) && (n = e.length);
      for (var r = 0, i = Array(n); r < n; r++)
        i[r] = e[r];
      return i;
    }
    function St(e, n, r) {
      return e === "parent" ? (0, I.parentNode)(r) : e === "self" ? n.getRect(r) : (0, I.closest)(r, e);
    }
    Object.defineProperty(J, "__esModule", { value: !0 }), J.addEdges = function(e, n, r) {
      e.left && (n.left += r.x), e.right && (n.right += r.x), e.top && (n.top += r.y), e.bottom && (n.bottom += r.y), n.width = n.right - n.left, n.height = n.bottom - n.top;
    }, J.getStringOptionResult = St, J.rectToXY = function(e) {
      return e && { x: "x" in e ? e.x : e.left, y: "y" in e ? e.y : e.top };
    }, J.resolveRectLike = function(e, n, r, i) {
      var a, l = e;
      return v.default.string(l) ? l = St(l, n, r) : v.default.func(l) && (l = l.apply(void 0, function(d) {
        if (Array.isArray(d))
          return ut(d);
      }(a = i) || function(d) {
        if (typeof Symbol < "u" && d[Symbol.iterator] != null || d["@@iterator"] != null)
          return Array.from(d);
      }(a) || function(d, c) {
        if (d) {
          if (typeof d == "string")
            return ut(d, c);
          var f = Object.prototype.toString.call(d).slice(8, -1);
          return f === "Object" && d.constructor && (f = d.constructor.name), f === "Map" || f === "Set" ? Array.from(d) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? ut(d, c) : void 0;
        }
      }(a) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), v.default.element(l) && (l = (0, I.getElementRect)(l)), l;
    }, J.tlbrToXywh = function(e) {
      return !e || "x" in e && "y" in e || ((e = (0, z.default)({}, e)).x = e.left || 0, e.y = e.top || 0, e.width = e.width || (e.right || 0) - e.x, e.height = e.height || (e.bottom || 0) - e.y), e;
    }, J.toFullRect = function(e) {
      var n, r;
      return { top: e.top, left: e.left, bottom: e.bottom, right: e.right, width: (n = e.width) != null ? n : e.right - e.left, height: (r = e.height) != null ? r : e.bottom - e.top };
    }, J.xywhToTlbr = function(e) {
      return !e || "left" in e && "top" in e || ((e = (0, z.default)({}, e)).left = e.x || 0, e.top = e.y || 0, e.right = e.right || e.left + e.width, e.bottom = e.bottom || e.top + e.height), e;
    };
    var He = {};
    Object.defineProperty(He, "__esModule", { value: !0 }), He.default = function(e, n, r) {
      var i = r && e.options[r], a = i && i.origin || e.options.origin, l = (0, J.resolveRectLike)(a, e, n, [e && n]);
      return (0, J.rectToXY)(l) || { x: 0, y: 0 };
    };
    var ft = {};
    function Hn(e) {
      return e.trim().split(/ +/);
    }
    Object.defineProperty(ft, "__esModule", { value: !0 }), ft.default = function e(n, r) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(g) {
        return !0;
      }, a = arguments.length > 3 ? arguments[3] : void 0;
      if (a = a || {}, v.default.string(n) && n.search(" ") !== -1 && (n = Hn(n)), v.default.array(n))
        return n.forEach(function(g) {
          return e(g, r, i, a);
        }), a;
      if (v.default.object(n) && (r = n, n = ""), v.default.func(r) && i(n))
        a[n] = a[n] || [], a[n].push(r);
      else if (v.default.array(r))
        for (var l = 0; l < r.length; l++) {
          var d = r[l];
          e(n, d, i, a);
        }
      else if (v.default.object(r))
        for (var c in r) {
          var f = Hn(c).map(function(g) {
            return "".concat(n).concat(g);
          });
          e(f, r[c], i, a);
        }
      return a;
    };
    var Le = {};
    Object.defineProperty(Le, "__esModule", { value: !0 }), Le.default = void 0, Le.default = function(e, n) {
      return Math.sqrt(e * e + n * n);
    };
    var Pt = {};
    Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.default = function(e, n) {
      e.__set || (e.__set = {});
      var r = function(a) {
        if (Yr.some(function(l) {
          return a.indexOf(l) === 0;
        }))
          return "continue";
        typeof e[a] != "function" && a !== "__set" && Object.defineProperty(e, a, { get: function() {
          return a in e.__set ? e.__set[a] : e.__set[a] = n[a];
        }, set: function(l) {
          e.__set[a] = l;
        }, configurable: !0 });
      };
      for (var i in n)
        r(i);
      return e;
    };
    var Yr = ["webkit", "moz"], k = {};
    function ln(e) {
      return e instanceof G.default.Event || e instanceof G.default.Touch;
    }
    function Tt(e, n, r) {
      return e = e || "page", (r = r || {}).x = n[e + "X"], r.y = n[e + "Y"], r;
    }
    function cn(e, n) {
      return n = n || { x: 0, y: 0 }, E.default.isOperaMobile && ln(e) ? (Tt("screen", e, n), n.x += window.scrollX, n.y += window.scrollY) : Tt("page", e, n), n;
    }
    function A(e, n) {
      return n = n || {}, E.default.isOperaMobile && ln(e) ? Tt("screen", e, n) : Tt("client", e, n), n;
    }
    function U(e) {
      var n = [];
      return v.default.array(e) ? (n[0] = e[0], n[1] = e[1]) : e.type === "touchend" ? e.touches.length === 1 ? (n[0] = e.touches[0], n[1] = e.changedTouches[0]) : e.touches.length === 0 && (n[0] = e.changedTouches[0], n[1] = e.changedTouches[1]) : (n[0] = e.touches[0], n[1] = e.touches[1]), n;
    }
    function se(e) {
      for (var n = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, r = 0; r < e.length; r++) {
        var i = e[r];
        for (var a in n)
          n[a] += i[a];
      }
      for (var l in n)
        n[l] /= e.length;
      return n;
    }
    Object.defineProperty(k, "__esModule", { value: !0 }), k.coordsToEvent = function(e) {
      return { coords: e, get page() {
        return this.coords.page;
      }, get client() {
        return this.coords.client;
      }, get timeStamp() {
        return this.coords.timeStamp;
      }, get pageX() {
        return this.coords.page.x;
      }, get pageY() {
        return this.coords.page.y;
      }, get clientX() {
        return this.coords.client.x;
      }, get clientY() {
        return this.coords.client.y;
      }, get pointerId() {
        return this.coords.pointerId;
      }, get target() {
        return this.coords.target;
      }, get type() {
        return this.coords.type;
      }, get pointerType() {
        return this.coords.pointerType;
      }, get buttons() {
        return this.coords.buttons;
      }, preventDefault: function() {
      } };
    }, k.copyCoords = function(e, n) {
      e.page = e.page || {}, e.page.x = n.page.x, e.page.y = n.page.y, e.client = e.client || {}, e.client.x = n.client.x, e.client.y = n.client.y, e.timeStamp = n.timeStamp;
    }, k.getClientXY = A, k.getEventTargets = function(e) {
      var n = v.default.func(e.composedPath) ? e.composedPath() : e.path;
      return [I.getActualElement(n ? n[0] : e.target), I.getActualElement(e.currentTarget)];
    }, k.getPageXY = cn, k.getPointerId = function(e) {
      return v.default.number(e.pointerId) ? e.pointerId : e.identifier;
    }, k.getPointerType = function(e) {
      return v.default.string(e.pointerType) ? e.pointerType : v.default.number(e.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][e.pointerType] : /touch/.test(e.type || "") || e instanceof G.default.Touch ? "touch" : "mouse";
    }, k.getTouchPair = U, k.getXY = Tt, k.isNativePointer = ln, k.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, k.pointerAverage = se, Object.defineProperty(k, "pointerExtend", { enumerable: !0, get: function() {
      return Pt.default;
    } }), k.setCoordDeltas = function(e, n, r) {
      e.page.x = r.page.x - n.page.x, e.page.y = r.page.y - n.page.y, e.client.x = r.client.x - n.client.x, e.client.y = r.client.y - n.client.y, e.timeStamp = r.timeStamp - n.timeStamp;
    }, k.setCoordVelocity = function(e, n) {
      var r = Math.max(n.timeStamp / 1e3, 1e-3);
      e.page.x = n.page.x / r, e.page.y = n.page.y / r, e.client.x = n.client.x / r, e.client.y = n.client.y / r, e.timeStamp = r;
    }, k.setCoords = function(e, n, r) {
      var i = n.length > 1 ? se(n) : n[0];
      cn(i, e.page), A(i, e.client), e.timeStamp = r;
    }, k.setZeroCoords = function(e) {
      e.page.x = 0, e.page.y = 0, e.client.x = 0, e.client.y = 0;
    }, k.touchAngle = function(e, n) {
      var r = n + "X", i = n + "Y", a = U(e), l = a[1][r] - a[0][r], d = a[1][i] - a[0][i];
      return 180 * Math.atan2(d, l) / Math.PI;
    }, k.touchBBox = function(e) {
      if (!e.length)
        return null;
      var n = U(e), r = Math.min(n[0].pageX, n[1].pageX), i = Math.min(n[0].pageY, n[1].pageY), a = Math.max(n[0].pageX, n[1].pageX), l = Math.max(n[0].pageY, n[1].pageY);
      return { x: r, y: i, left: r, top: i, right: a, bottom: l, width: a - r, height: l - i };
    }, k.touchDistance = function(e, n) {
      var r = n + "X", i = n + "Y", a = U(e), l = a[0][r] - a[1][r], d = a[0][i] - a[1][i];
      return (0, Le.default)(l, d);
    };
    var we = {};
    function nt(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function rt(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(we, "__esModule", { value: !0 }), we.BaseEvent = void 0;
    var it = function() {
      function e(i) {
        (function(a, l) {
          if (!(a instanceof l))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), rt(this, "immediatePropagationStopped", !1), rt(this, "propagationStopped", !1), this._interaction = i;
      }
      var n, r;
      return n = e, (r = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }]) && nt(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), e;
    }();
    we.BaseEvent = it, Object.defineProperty(it.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var V = {};
    Object.defineProperty(V, "__esModule", { value: !0 }), V.remove = V.merge = V.from = V.findIndex = V.find = V.contains = void 0, V.contains = function(e, n) {
      return e.indexOf(n) !== -1;
    }, V.remove = function(e, n) {
      return e.splice(e.indexOf(n), 1);
    };
    var te = function(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        e.push(i);
      }
      return e;
    };
    V.merge = te, V.from = function(e) {
      return te([], e);
    };
    var Pe = function(e, n) {
      for (var r = 0; r < e.length; r++)
        if (n(e[r], r, e))
          return r;
      return -1;
    };
    V.findIndex = Pe, V.find = function(e, n) {
      return e[Pe(e, n)];
    };
    var xe = {};
    function ke(e) {
      return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, ke(e);
    }
    function Ve(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function Ge(e, n) {
      return Ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r;
      }, Ge(e, n);
    }
    function $n(e, n) {
      if (n && (ke(n) === "object" || typeof n == "function"))
        return n;
      if (n !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return $e(e);
    }
    function $e(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function Mt(e) {
      return Mt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      }, Mt(e);
    }
    function ot(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(xe, "__esModule", { value: !0 }), xe.DropEvent = void 0;
    var Wn = function(e) {
      (function(c, f) {
        if (typeof f != "function" && f !== null)
          throw new TypeError("Super expression must either be null or a function");
        c.prototype = Object.create(f && f.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), f && Ge(c, f);
      })(d, e);
      var n, r, i, a, l = (i = d, a = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }(), function() {
        var c, f = Mt(i);
        if (a) {
          var g = Mt(this).constructor;
          c = Reflect.construct(f, arguments, g);
        } else
          c = f.apply(this, arguments);
        return $n(this, c);
      });
      function d(c, f, g) {
        var m;
        (function(w, P) {
          if (!(w instanceof P))
            throw new TypeError("Cannot call a class as a function");
        })(this, d), ot($e(m = l.call(this, f._interaction)), "dropzone", void 0), ot($e(m), "dragEvent", void 0), ot($e(m), "relatedTarget", void 0), ot($e(m), "draggable", void 0), ot($e(m), "propagationStopped", !1), ot($e(m), "immediatePropagationStopped", !1);
        var b = g === "dragleave" ? c.prev : c.cur, x = b.element, _ = b.dropzone;
        return m.type = g, m.target = x, m.currentTarget = x, m.dropzone = _, m.dragEvent = f, m.relatedTarget = f.target, m.draggable = f.interactable, m.timeStamp = f.timeStamp, m;
      }
      return n = d, (r = [{ key: "reject", value: function() {
        var c = this, f = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && f.cur.dropzone === this.dropzone && f.cur.element === this.target)
          if (f.prev.dropzone = this.dropzone, f.prev.element = this.target, f.rejected = !0, f.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var g = f.activeDrops, m = V.findIndex(g, function(x) {
              var _ = x.dropzone, w = x.element;
              return _ === c.dropzone && w === c.target;
            });
            f.activeDrops.splice(m, 1);
            var b = new d(f, this.dragEvent, "dropdeactivate");
            b.dropzone = this.dropzone, b.target = this.target, this.dropzone.fire(b);
          } else
            this.dropzone.fire(new d(f, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }]) && Ve(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), d;
    }(we.BaseEvent);
    xe.DropEvent = Wn;
    var fe = {};
    function We(e, n) {
      for (var r = 0; r < e.slice().length; r++) {
        var i = e.slice()[r], a = i.dropzone, l = i.element;
        n.dropzone = a, n.target = l, a.fire(n), n.propagationStopped = n.immediatePropagationStopped = !1;
      }
    }
    function Ke(e, n) {
      for (var r = function(l, d) {
        for (var c = l.interactables, f = [], g = 0; g < c.list.length; g++) {
          var m = c.list[g];
          if (m.options.drop.enabled) {
            var b = m.options.drop.accept;
            if (!(v.default.element(b) && b !== d || v.default.string(b) && !I.matchesSelector(d, b) || v.default.func(b) && !b({ dropzone: m, draggableElement: d })))
              for (var x = 0; x < m.getAllElements().length; x++) {
                var _ = m.getAllElements()[x];
                _ !== d && f.push({ dropzone: m, element: _, rect: m.getRect(_) });
              }
          }
        }
        return f;
      }(e, n), i = 0; i < r.length; i++) {
        var a = r[i];
        a.rect = a.dropzone.getRect(a.element);
      }
      return r;
    }
    function Je(e, n, r) {
      for (var i = e.dropState, a = e.interactable, l = e.element, d = [], c = 0; c < i.activeDrops.length; c++) {
        var f = i.activeDrops[c], g = f.dropzone, m = f.element, b = f.rect, x = g.dropCheck(n, r, a, l, m, b);
        d.push(x ? m : null);
      }
      var _ = I.indexOfDeepestElement(d);
      return i.activeDrops[_] || null;
    }
    function un(e, n, r) {
      var i = e.dropState, a = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return r.type === "dragstart" && (a.activate = new xe.DropEvent(i, r, "dropactivate"), a.activate.target = null, a.activate.dropzone = null), r.type === "dragend" && (a.deactivate = new xe.DropEvent(i, r, "dropdeactivate"), a.deactivate.target = null, a.deactivate.dropzone = null), i.rejected || (i.cur.element !== i.prev.element && (i.prev.dropzone && (a.leave = new xe.DropEvent(i, r, "dragleave"), r.dragLeave = a.leave.target = i.prev.element, r.prevDropzone = a.leave.dropzone = i.prev.dropzone), i.cur.dropzone && (a.enter = new xe.DropEvent(i, r, "dragenter"), r.dragEnter = i.cur.element, r.dropzone = i.cur.dropzone)), r.type === "dragend" && i.cur.dropzone && (a.drop = new xe.DropEvent(i, r, "drop"), r.dropzone = i.cur.dropzone, r.relatedTarget = i.cur.element), r.type === "dragmove" && i.cur.dropzone && (a.move = new xe.DropEvent(i, r, "dropmove"), r.dropzone = i.cur.dropzone)), a;
    }
    function dt(e, n) {
      var r = e.dropState, i = r.activeDrops, a = r.cur, l = r.prev;
      n.leave && l.dropzone.fire(n.leave), n.enter && a.dropzone.fire(n.enter), n.move && a.dropzone.fire(n.move), n.drop && a.dropzone.fire(n.drop), n.deactivate && We(i, n.deactivate), r.prev.dropzone = a.dropzone, r.prev.element = a.element;
    }
    function Bn(e, n) {
      var r = e.interaction, i = e.iEvent, a = e.event;
      if (i.type === "dragmove" || i.type === "dragend") {
        var l = r.dropState;
        n.dynamicDrop && (l.activeDrops = Ke(n, r.element));
        var d = i, c = Je(r, d, a);
        l.rejected = l.rejected && !!c && c.dropzone === l.cur.dropzone && c.element === l.cur.element, l.cur.dropzone = c && c.dropzone, l.cur.element = c && c.element, l.events = un(r, 0, d);
      }
    }
    Object.defineProperty(fe, "__esModule", { value: !0 }), fe.default = void 0;
    var Xt = { id: "actions/drop", install: function(e) {
      var n = e.actions, r = e.interactStatic, i = e.Interactable, a = e.defaults;
      e.usePlugin(H.default), i.prototype.dropzone = function(l) {
        return function(d, c) {
          if (v.default.object(c)) {
            if (d.options.drop.enabled = c.enabled !== !1, c.listeners) {
              var f = (0, ft.default)(c.listeners), g = Object.keys(f).reduce(function(b, x) {
                return b[/^(enter|leave)/.test(x) ? "drag".concat(x) : /^(activate|deactivate|move)/.test(x) ? "drop".concat(x) : x] = f[x], b;
              }, {}), m = d.options.drop.listeners;
              m && d.off(m), d.on(g), d.options.drop.listeners = g;
            }
            return v.default.func(c.ondrop) && d.on("drop", c.ondrop), v.default.func(c.ondropactivate) && d.on("dropactivate", c.ondropactivate), v.default.func(c.ondropdeactivate) && d.on("dropdeactivate", c.ondropdeactivate), v.default.func(c.ondragenter) && d.on("dragenter", c.ondragenter), v.default.func(c.ondragleave) && d.on("dragleave", c.ondragleave), v.default.func(c.ondropmove) && d.on("dropmove", c.ondropmove), /^(pointer|center)$/.test(c.overlap) ? d.options.drop.overlap = c.overlap : v.default.number(c.overlap) && (d.options.drop.overlap = Math.max(Math.min(1, c.overlap), 0)), "accept" in c && (d.options.drop.accept = c.accept), "checker" in c && (d.options.drop.checker = c.checker), d;
          }
          return v.default.bool(c) ? (d.options.drop.enabled = c, d) : d.options.drop;
        }(this, l);
      }, i.prototype.dropCheck = function(l, d, c, f, g, m) {
        return function(b, x, _, w, P, R, T) {
          var N = !1;
          if (!(T = T || b.getRect(R)))
            return !!b.options.drop.checker && b.options.drop.checker(x, _, N, b, R, w, P);
          var W = b.options.drop.overlap;
          if (W === "pointer") {
            var Y = (0, He.default)(w, P, "drag"), Z = k.getPageXY(x);
            Z.x += Y.x, Z.y += Y.y;
            var oe = Z.x > T.left && Z.x < T.right, q = Z.y > T.top && Z.y < T.bottom;
            N = oe && q;
          }
          var le = w.getRect(P);
          if (le && W === "center") {
            var Qe = le.left + le.width / 2, pe = le.top + le.height / 2;
            N = Qe >= T.left && Qe <= T.right && pe >= T.top && pe <= T.bottom;
          }
          return le && v.default.number(W) && (N = Math.max(0, Math.min(T.right, le.right) - Math.max(T.left, le.left)) * Math.max(0, Math.min(T.bottom, le.bottom) - Math.max(T.top, le.top)) / (le.width * le.height) >= W), b.options.drop.checker && (N = b.options.drop.checker(x, _, N, b, R, w, P)), N;
        }(this, l, d, c, f, g, m);
      }, r.dynamicDrop = function(l) {
        return v.default.bool(l) ? (e.dynamicDrop = l, r) : e.dynamicDrop;
      }, (0, z.default)(n.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), n.methodDict.drop = "dropzone", e.dynamicDrop = !1, a.actions.drop = Xt.defaults;
    }, listeners: { "interactions:before-action-start": function(e) {
      var n = e.interaction;
      n.prepared.name === "drag" && (n.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(e, n) {
      var r = e.interaction, i = (e.event, e.iEvent);
      if (r.prepared.name === "drag") {
        var a = r.dropState;
        a.activeDrops = [], a.events = {}, a.activeDrops = Ke(n, r.element), a.events = un(r, 0, i), a.events.activate && (We(a.activeDrops, a.events.activate), n.fire("actions/drop:start", { interaction: r, dragEvent: i }));
      }
    }, "interactions:action-move": Bn, "interactions:after-action-move": function(e, n) {
      var r = e.interaction, i = e.iEvent;
      if (r.prepared.name === "drag") {
        var a = r.dropState;
        dt(r, a.events), n.fire("actions/drop:move", { interaction: r, dragEvent: i }), a.events = {};
      }
    }, "interactions:action-end": function(e, n) {
      if (e.interaction.prepared.name === "drag") {
        var r = e.interaction, i = e.iEvent;
        Bn(e, n), dt(r, r.dropState.events), n.fire("actions/drop:end", { interaction: r, dragEvent: i });
      }
    }, "interactions:stop": function(e) {
      var n = e.interaction;
      if (n.prepared.name === "drag") {
        var r = n.dropState;
        r && (r.activeDrops = null, r.events = null, r.cur.dropzone = null, r.cur.element = null, r.prev.dropzone = null, r.prev.element = null, r.rejected = !1);
      }
    } }, getActiveDrops: Ke, getDrop: Je, getDropEvents: un, fireDropEvents: dt, filterEventType: function(e) {
      return e.search("drag") === 0 || e.search("drop") === 0;
    }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, Xr = Xt;
    fe.default = Xr;
    var Fn = {};
    function Ur(e) {
      var n = e.interaction, r = e.iEvent, i = e.phase;
      if (n.prepared.name === "gesture") {
        var a = n.pointers.map(function(g) {
          return g.pointer;
        }), l = i === "start", d = i === "end", c = n.interactable.options.deltaSource;
        if (r.touches = [a[0], a[1]], l)
          r.distance = k.touchDistance(a, c), r.box = k.touchBBox(a), r.scale = 1, r.ds = 0, r.angle = k.touchAngle(a, c), r.da = 0, n.gesture.startDistance = r.distance, n.gesture.startAngle = r.angle;
        else if (d || n.pointers.length < 2) {
          var f = n.prevEvent;
          r.distance = f.distance, r.box = f.box, r.scale = f.scale, r.ds = 0, r.angle = f.angle, r.da = 0;
        } else
          r.distance = k.touchDistance(a, c), r.box = k.touchBBox(a), r.scale = r.distance / n.gesture.startDistance, r.angle = k.touchAngle(a, c), r.ds = r.scale - n.gesture.scale, r.da = r.angle - n.gesture.angle;
        n.gesture.distance = r.distance, n.gesture.angle = r.angle, v.default.number(r.scale) && r.scale !== 1 / 0 && !isNaN(r.scale) && (n.gesture.scale = r.scale);
      }
    }
    Object.defineProperty(Fn, "__esModule", { value: !0 }), Fn.default = void 0;
    var qr = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(e) {
      var n = e.actions, r = e.Interactable, i = e.defaults;
      r.prototype.gesturable = function(a) {
        return v.default.object(a) ? (this.options.gesture.enabled = a.enabled !== !1, this.setPerAction("gesture", a), this.setOnEvents("gesture", a), this) : v.default.bool(a) ? (this.options.gesture.enabled = a, this) : this.options.gesture;
      }, n.map.gesture = qr, n.methodDict.gesture = "gesturable", i.actions.gesture = qr.defaults;
    }, listeners: { "interactions:action-start": Ur, "interactions:action-move": Ur, "interactions:action-end": Ur, "interactions:new": function(e) {
      e.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(e) {
      if (!(e.interaction.pointers.length < 2)) {
        var n = e.interactable.options.gesture;
        if (n && n.enabled)
          return e.action = { name: "gesture" }, !1;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    }, filterEventType: function(e) {
      return e.search("gesture") === 0;
    } }, ks = qr;
    Fn.default = ks;
    var Ln = {};
    function As(e, n, r, i, a, l, d) {
      if (!n)
        return !1;
      if (n === !0) {
        var c = v.default.number(l.width) ? l.width : l.right - l.left, f = v.default.number(l.height) ? l.height : l.bottom - l.top;
        if (d = Math.min(d, Math.abs((e === "left" || e === "right" ? c : f) / 2)), c < 0 && (e === "left" ? e = "right" : e === "right" && (e = "left")), f < 0 && (e === "top" ? e = "bottom" : e === "bottom" && (e = "top")), e === "left") {
          var g = c >= 0 ? l.left : l.right;
          return r.x < g + d;
        }
        if (e === "top") {
          var m = f >= 0 ? l.top : l.bottom;
          return r.y < m + d;
        }
        if (e === "right")
          return r.x > (c >= 0 ? l.right : l.left) - d;
        if (e === "bottom")
          return r.y > (f >= 0 ? l.bottom : l.top) - d;
      }
      return !!v.default.element(i) && (v.default.element(n) ? n === i : I.matchesUpTo(i, n, a));
    }
    function to(e) {
      var n = e.iEvent, r = e.interaction;
      if (r.prepared.name === "resize" && r.resizeAxes) {
        var i = n;
        r.interactable.options.resize.square ? (r.resizeAxes === "y" ? i.delta.x = i.delta.y : i.delta.y = i.delta.x, i.axes = "xy") : (i.axes = r.resizeAxes, r.resizeAxes === "x" ? i.delta.y = 0 : r.resizeAxes === "y" && (i.delta.x = 0));
      }
    }
    Object.defineProperty(Ln, "__esModule", { value: !0 }), Ln.default = void 0;
    var at = { id: "actions/resize", before: ["actions/drag"], install: function(e) {
      var n = e.actions, r = e.browser, i = e.Interactable, a = e.defaults;
      at.cursors = function(l) {
        return l.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(r), at.defaultMargin = r.supportsTouch || r.supportsPointerEvent ? 20 : 10, i.prototype.resizable = function(l) {
        return function(d, c, f) {
          return v.default.object(c) ? (d.options.resize.enabled = c.enabled !== !1, d.setPerAction("resize", c), d.setOnEvents("resize", c), v.default.string(c.axis) && /^x$|^y$|^xy$/.test(c.axis) ? d.options.resize.axis = c.axis : c.axis === null && (d.options.resize.axis = f.defaults.actions.resize.axis), v.default.bool(c.preserveAspectRatio) ? d.options.resize.preserveAspectRatio = c.preserveAspectRatio : v.default.bool(c.square) && (d.options.resize.square = c.square), d) : v.default.bool(c) ? (d.options.resize.enabled = c, d) : d.options.resize;
        }(this, l, e);
      }, n.map.resize = at, n.methodDict.resize = "resizable", a.actions.resize = at.defaults;
    }, listeners: { "interactions:new": function(e) {
      e.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(e) {
      (function(n) {
        var r = n.iEvent, i = n.interaction;
        if (i.prepared.name === "resize" && i.prepared.edges) {
          var a = r, l = i.rect;
          i._rects = { start: (0, z.default)({}, l), corrected: (0, z.default)({}, l), previous: (0, z.default)({}, l), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, a.edges = i.prepared.edges, a.rect = i._rects.corrected, a.deltaRect = i._rects.delta;
        }
      })(e), to(e);
    }, "interactions:action-move": function(e) {
      (function(n) {
        var r = n.iEvent, i = n.interaction;
        if (i.prepared.name === "resize" && i.prepared.edges) {
          var a = r, l = i.interactable.options.resize.invert, d = l === "reposition" || l === "negate", c = i.rect, f = i._rects, g = f.start, m = f.corrected, b = f.delta, x = f.previous;
          if ((0, z.default)(x, m), d) {
            if ((0, z.default)(m, c), l === "reposition") {
              if (m.top > m.bottom) {
                var _ = m.top;
                m.top = m.bottom, m.bottom = _;
              }
              if (m.left > m.right) {
                var w = m.left;
                m.left = m.right, m.right = w;
              }
            }
          } else
            m.top = Math.min(c.top, g.bottom), m.bottom = Math.max(c.bottom, g.top), m.left = Math.min(c.left, g.right), m.right = Math.max(c.right, g.left);
          for (var P in m.width = m.right - m.left, m.height = m.bottom - m.top, m)
            b[P] = m[P] - x[P];
          a.edges = i.prepared.edges, a.rect = m, a.deltaRect = b;
        }
      })(e), to(e);
    }, "interactions:action-end": function(e) {
      var n = e.iEvent, r = e.interaction;
      if (r.prepared.name === "resize" && r.prepared.edges) {
        var i = n;
        i.edges = r.prepared.edges, i.rect = r._rects.corrected, i.deltaRect = r._rects.delta;
      }
    }, "auto-start:check": function(e) {
      var n = e.interaction, r = e.interactable, i = e.element, a = e.rect, l = e.buttons;
      if (a) {
        var d = (0, z.default)({}, n.coords.cur.page), c = r.options.resize;
        if (c && c.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || l & c.mouseButtons)) {
          if (v.default.object(c.edges)) {
            var f = { left: !1, right: !1, top: !1, bottom: !1 };
            for (var g in f)
              f[g] = As(g, c.edges[g], d, n._latestPointer.eventTarget, i, a, c.margin || at.defaultMargin);
            f.left = f.left && !f.right, f.top = f.top && !f.bottom, (f.left || f.right || f.top || f.bottom) && (e.action = { name: "resize", edges: f });
          } else {
            var m = c.axis !== "y" && d.x > a.right - at.defaultMargin, b = c.axis !== "x" && d.y > a.bottom - at.defaultMargin;
            (m || b) && (e.action = { name: "resize", axes: (m ? "x" : "") + (b ? "y" : "") });
          }
          return !e.action && void 0;
        }
      }
    } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(e) {
      var n = e.edges, r = e.axis, i = e.name, a = at.cursors, l = null;
      if (r)
        l = a[i + r];
      else if (n) {
        for (var d = "", c = ["top", "bottom", "left", "right"], f = 0; f < c.length; f++) {
          var g = c[f];
          n[g] && (d += g);
        }
        l = a[d];
      }
      return l;
    }, filterEventType: function(e) {
      return e.search("resize") === 0;
    }, defaultMargin: null }, Ns = at;
    Ln.default = Ns;
    var Vn = {};
    Object.defineProperty(Vn, "__esModule", { value: !0 }), Vn.default = void 0;
    var Hs = { id: "actions", install: function(e) {
      e.usePlugin(Fn.default), e.usePlugin(Ln.default), e.usePlugin(H.default), e.usePlugin(fe.default);
    } };
    Vn.default = Hs;
    var Ye = {};
    Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.default = void 0;
    var st, Dt, no = 0, $s = { request: function(e) {
      return st(e);
    }, cancel: function(e) {
      return Dt(e);
    }, init: function(e) {
      if (st = e.requestAnimationFrame, Dt = e.cancelAnimationFrame, !st)
        for (var n = ["ms", "moz", "webkit", "o"], r = 0; r < n.length; r++) {
          var i = n[r];
          st = e["".concat(i, "RequestAnimationFrame")], Dt = e["".concat(i, "CancelAnimationFrame")] || e["".concat(i, "CancelRequestAnimationFrame")];
        }
      st = st && st.bind(e), Dt = Dt && Dt.bind(e), st || (st = function(a) {
        var l = Date.now(), d = Math.max(0, 16 - (l - no)), c = e.setTimeout(function() {
          a(l + d);
        }, d);
        return no = l + d, c;
      }, Dt = function(a) {
        return clearTimeout(a);
      });
    } };
    Ye.default = $s;
    var pt = {};
    Object.defineProperty(pt, "__esModule", { value: !0 }), pt.default = void 0, pt.getContainer = Yn, pt.getScroll = fn, pt.getScrollSize = function(e) {
      return v.default.window(e) && (e = window.document.body), { x: e.scrollWidth, y: e.scrollHeight };
    }, pt.getScrollSizeDelta = function(e, n) {
      var r = e.interaction, i = e.element, a = r && r.interactable.options[r.prepared.name].autoScroll;
      if (!a || !a.enabled)
        return n(), { x: 0, y: 0 };
      var l = Yn(a.container, r.interactable, i), d = fn(l);
      n();
      var c = fn(l);
      return { x: c.x - d.x, y: c.y - d.y };
    };
    var F = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(e) {
      F.isScrolling = !0, Ye.default.cancel(F.i), e.autoScroll = F, F.interaction = e, F.prevTime = F.now(), F.i = Ye.default.request(F.scroll);
    }, stop: function() {
      F.isScrolling = !1, F.interaction && (F.interaction.autoScroll = null), Ye.default.cancel(F.i);
    }, scroll: function() {
      var e = F.interaction, n = e.interactable, r = e.element, i = e.prepared.name, a = n.options[i].autoScroll, l = Yn(a.container, n, r), d = F.now(), c = (d - F.prevTime) / 1e3, f = a.speed * c;
      if (f >= 1) {
        var g = { x: F.x * f, y: F.y * f };
        if (g.x || g.y) {
          var m = fn(l);
          v.default.window(l) ? l.scrollBy(g.x, g.y) : l && (l.scrollLeft += g.x, l.scrollTop += g.y);
          var b = fn(l), x = { x: b.x - m.x, y: b.y - m.y };
          (x.x || x.y) && n.fire({ type: "autoscroll", target: r, interactable: n, delta: x, interaction: e, container: l });
        }
        F.prevTime = d;
      }
      F.isScrolling && (Ye.default.cancel(F.i), F.i = Ye.default.request(F.scroll));
    }, check: function(e, n) {
      var r;
      return (r = e.options[n].autoScroll) == null ? void 0 : r.enabled;
    }, onInteractionMove: function(e) {
      var n = e.interaction, r = e.pointer;
      if (n.interacting() && F.check(n.interactable, n.prepared.name))
        if (n.simulation)
          F.x = F.y = 0;
        else {
          var i, a, l, d, c = n.interactable, f = n.element, g = n.prepared.name, m = c.options[g].autoScroll, b = Yn(m.container, c, f);
          if (v.default.window(b))
            d = r.clientX < F.margin, i = r.clientY < F.margin, a = r.clientX > b.innerWidth - F.margin, l = r.clientY > b.innerHeight - F.margin;
          else {
            var x = I.getElementClientRect(b);
            d = r.clientX < x.left + F.margin, i = r.clientY < x.top + F.margin, a = r.clientX > x.right - F.margin, l = r.clientY > x.bottom - F.margin;
          }
          F.x = a ? 1 : d ? -1 : 0, F.y = l ? 1 : i ? -1 : 0, F.isScrolling || (F.margin = m.margin, F.speed = m.speed, F.start(n));
        }
    } };
    function Yn(e, n, r) {
      return (v.default.string(e) ? (0, J.getStringOptionResult)(e, n, r) : e) || (0, u.getWindow)(r);
    }
    function fn(e) {
      return v.default.window(e) && (e = window.document.body), { x: e.scrollLeft, y: e.scrollTop };
    }
    var Ws = { id: "auto-scroll", install: function(e) {
      var n = e.defaults, r = e.actions;
      e.autoScroll = F, F.now = function() {
        return e.now();
      }, r.phaselessTypes.autoscroll = !0, n.perAction.autoScroll = F.defaults;
    }, listeners: { "interactions:new": function(e) {
      e.interaction.autoScroll = null;
    }, "interactions:destroy": function(e) {
      e.interaction.autoScroll = null, F.stop(), F.interaction && (F.interaction = null);
    }, "interactions:stop": F.stop, "interactions:action-move": function(e) {
      return F.onInteractionMove(e);
    } } }, Bs = Ws;
    pt.default = Bs;
    var Ae = {};
    Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.copyAction = function(e, n) {
      return e.name = n.name, e.axis = n.axis, e.edges = n.edges, e;
    }, Ae.sign = void 0, Ae.warnOnce = function(e, n) {
      var r = !1;
      return function() {
        return r || (u.window.console.warn(n), r = !0), e.apply(this, arguments);
      };
    }, Ae.sign = function(e) {
      return e >= 0 ? 1 : -1;
    };
    var Xn = {};
    function Fs(e) {
      return v.default.bool(e) ? (this.options.styleCursor = e, this) : e === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    function Ls(e) {
      return v.default.func(e) ? (this.options.actionChecker = e, this) : e === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    Object.defineProperty(Xn, "__esModule", { value: !0 }), Xn.default = void 0;
    var Vs = { id: "auto-start/interactableMethods", install: function(e) {
      var n = e.Interactable;
      n.prototype.getAction = function(r, i, a, l) {
        var d = function(c, f, g, m, b) {
          var x = c.getRect(m), _ = { action: null, interactable: c, interaction: g, element: m, rect: x, buttons: f.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[f.button] };
          return b.fire("auto-start:check", _), _.action;
        }(this, i, a, l, e);
        return this.options.actionChecker ? this.options.actionChecker(r, i, d, this, l, a) : d;
      }, n.prototype.ignoreFrom = (0, Ae.warnOnce)(function(r) {
        return this._backCompatOption("ignoreFrom", r);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), n.prototype.allowFrom = (0, Ae.warnOnce)(function(r) {
        return this._backCompatOption("allowFrom", r);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), n.prototype.actionChecker = Ls, n.prototype.styleCursor = Fs;
    } };
    Xn.default = Vs;
    var Ut = {};
    function ro(e, n, r, i, a) {
      return n.testIgnoreAllow(n.options[e.name], r, i) && n.options[e.name].enabled && Un(n, r, e, a) ? e : null;
    }
    function Ys(e, n, r, i, a, l, d) {
      for (var c = 0, f = i.length; c < f; c++) {
        var g = i[c], m = a[c], b = g.getAction(n, r, e, m);
        if (b) {
          var x = ro(b, g, m, l, d);
          if (x)
            return { action: x, interactable: g, element: m };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    function io(e, n, r, i, a) {
      var l = [], d = [], c = i;
      function f(m) {
        l.push(m), d.push(c);
      }
      for (; v.default.element(c); ) {
        l = [], d = [], a.interactables.forEachMatch(c, f);
        var g = Ys(e, n, r, l, d, i, a);
        if (g.action && !g.interactable.options[g.action.name].manualStart)
          return g;
        c = I.parentNode(c);
      }
      return { action: null, interactable: null, element: null };
    }
    function oo(e, n, r) {
      var i = n.action, a = n.interactable, l = n.element;
      i = i || { name: null }, e.interactable = a, e.element = l, (0, Ae.copyAction)(e.prepared, i), e.rect = a && i.name ? a.getRect(l) : null, so(e, r), r.fire("autoStart:prepared", { interaction: e });
    }
    function Un(e, n, r, i) {
      var a = e.options, l = a[r.name].max, d = a[r.name].maxPerElement, c = i.autoStart.maxInteractions, f = 0, g = 0, m = 0;
      if (!(l && d && c))
        return !1;
      for (var b = 0; b < i.interactions.list.length; b++) {
        var x = i.interactions.list[b], _ = x.prepared.name;
        if (x.interacting() && (++f >= c || x.interactable === e && ((g += _ === r.name ? 1 : 0) >= l || x.element === n && (m++, _ === r.name && m >= d))))
          return !1;
      }
      return c > 0;
    }
    function ao(e, n) {
      return v.default.number(e) ? (n.autoStart.maxInteractions = e, this) : n.autoStart.maxInteractions;
    }
    function Gr(e, n, r) {
      var i = r.autoStart.cursorElement;
      i && i !== e && (i.style.cursor = ""), e.ownerDocument.documentElement.style.cursor = n, e.style.cursor = n, r.autoStart.cursorElement = n ? e : null;
    }
    function so(e, n) {
      var r = e.interactable, i = e.element, a = e.prepared;
      if (e.pointerType === "mouse" && r && r.options.styleCursor) {
        var l = "";
        if (a.name) {
          var d = r.options[a.name].cursorChecker;
          l = v.default.func(d) ? d(a, r, i, e._interacting) : n.actions.map[a.name].getCursor(a);
        }
        Gr(e.element, l || "", n);
      } else
        n.autoStart.cursorElement && Gr(n.autoStart.cursorElement, "", n);
    }
    Object.defineProperty(Ut, "__esModule", { value: !0 }), Ut.default = void 0;
    var Xs = { id: "auto-start/base", before: ["actions"], install: function(e) {
      var n = e.interactStatic, r = e.defaults;
      e.usePlugin(Xn.default), r.base.actionChecker = null, r.base.styleCursor = !0, (0, z.default)(r.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), n.maxInteractions = function(i) {
        return ao(i, e);
      }, e.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Un, cursorElement: null };
    }, listeners: { "interactions:down": function(e, n) {
      var r = e.interaction, i = e.pointer, a = e.event, l = e.eventTarget;
      r.interacting() || oo(r, io(r, i, a, l, n), n);
    }, "interactions:move": function(e, n) {
      (function(r, i) {
        var a = r.interaction, l = r.pointer, d = r.event, c = r.eventTarget;
        a.pointerType !== "mouse" || a.pointerIsDown || a.interacting() || oo(a, io(a, l, d, c, i), i);
      })(e, n), function(r, i) {
        var a = r.interaction;
        if (a.pointerIsDown && !a.interacting() && a.pointerWasMoved && a.prepared.name) {
          i.fire("autoStart:before-start", r);
          var l = a.interactable, d = a.prepared.name;
          d && l && (l.options[d].manualStart || !Un(l, a.element, a.prepared, i) ? a.stop() : (a.start(a.prepared, l, a.element), so(a, i)));
        }
      }(e, n);
    }, "interactions:stop": function(e, n) {
      var r = e.interaction, i = r.interactable;
      i && i.options.styleCursor && Gr(r.element, "", n);
    } }, maxInteractions: ao, withinInteractionLimit: Un, validateAction: ro }, Us = Xs;
    Ut.default = Us;
    var qn = {};
    Object.defineProperty(qn, "__esModule", { value: !0 }), qn.default = void 0;
    var qs = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(e, n) {
      var r = e.interaction, i = e.eventTarget, a = e.dx, l = e.dy;
      if (r.prepared.name === "drag") {
        var d = Math.abs(a), c = Math.abs(l), f = r.interactable.options.drag, g = f.startAxis, m = d > c ? "x" : d < c ? "y" : "xy";
        if (r.prepared.axis = f.lockAxis === "start" ? m[0] : f.lockAxis, m !== "xy" && g !== "xy" && g !== m) {
          r.prepared.name = null;
          for (var b = i, x = function(w) {
            if (w !== r.interactable) {
              var P = r.interactable.options.drag;
              if (!P.manualStart && w.testIgnoreAllow(P, b, i)) {
                var R = w.getAction(r.downPointer, r.downEvent, r, b);
                if (R && R.name === "drag" && function(T, N) {
                  if (!N)
                    return !1;
                  var W = N.options.drag.startAxis;
                  return T === "xy" || W === "xy" || W === T;
                }(m, w) && Ut.default.validateAction(R, w, b, i, n))
                  return w;
              }
            }
          }; v.default.element(b); ) {
            var _ = n.interactables.forEachMatch(b, x);
            if (_) {
              r.prepared.name = "drag", r.interactable = _, r.element = b;
              break;
            }
            b = (0, I.parentNode)(b);
          }
        }
      }
    } } };
    qn.default = qs;
    var Gn = {};
    function Kr(e) {
      var n = e.prepared && e.prepared.name;
      if (!n)
        return null;
      var r = e.interactable.options;
      return r[n].hold || r[n].delay;
    }
    Object.defineProperty(Gn, "__esModule", { value: !0 }), Gn.default = void 0;
    var Gs = { id: "auto-start/hold", install: function(e) {
      var n = e.defaults;
      e.usePlugin(Ut.default), n.perAction.hold = 0, n.perAction.delay = 0;
    }, listeners: { "interactions:new": function(e) {
      e.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(e) {
      var n = e.interaction, r = Kr(n);
      r > 0 && (n.autoStartHoldTimer = setTimeout(function() {
        n.start(n.prepared, n.interactable, n.element);
      }, r));
    }, "interactions:move": function(e) {
      var n = e.interaction, r = e.duplicate;
      n.autoStartHoldTimer && n.pointerWasMoved && !r && (clearTimeout(n.autoStartHoldTimer), n.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(e) {
      var n = e.interaction;
      Kr(n) > 0 && (n.prepared.name = null);
    } }, getHoldDuration: Kr }, Ks = Gs;
    Gn.default = Ks;
    var Kn = {};
    Object.defineProperty(Kn, "__esModule", { value: !0 }), Kn.default = void 0;
    var Js = { id: "auto-start", install: function(e) {
      e.usePlugin(Ut.default), e.usePlugin(Gn.default), e.usePlugin(qn.default);
    } };
    Kn.default = Js;
    var qt = {};
    function Zs(e) {
      return /^(always|never|auto)$/.test(e) ? (this.options.preventDefault = e, this) : v.default.bool(e) ? (this.options.preventDefault = e ? "always" : "never", this) : this.options.preventDefault;
    }
    function Qs(e) {
      var n = e.interaction, r = e.event;
      n.interactable && n.interactable.checkAndPreventDefault(r);
    }
    function lo(e) {
      var n = e.Interactable;
      n.prototype.preventDefault = Zs, n.prototype.checkAndPreventDefault = function(r) {
        return function(i, a, l) {
          var d = i.options.preventDefault;
          if (d !== "never")
            if (d !== "always") {
              if (a.events.supportsPassive && /^touch(start|move)$/.test(l.type)) {
                var c = (0, u.getWindow)(l.target).document, f = a.getDocOptions(c);
                if (!f || !f.events || f.events.passive !== !1)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(l.type) || v.default.element(l.target) && (0, I.matchesSelector)(l.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || l.preventDefault();
            } else
              l.preventDefault();
        }(this, e, r);
      }, e.interactions.docEvents.push({ type: "dragstart", listener: function(r) {
        for (var i = 0; i < e.interactions.list.length; i++) {
          var a = e.interactions.list[i];
          if (a.element && (a.element === r.target || (0, I.nodeContains)(a.element, r.target)))
            return void a.interactable.checkAndPreventDefault(r);
        }
      } });
    }
    Object.defineProperty(qt, "__esModule", { value: !0 }), qt.default = void 0, qt.install = lo;
    var el = { id: "core/interactablePreventDefault", install: lo, listeners: ["down", "move", "up", "cancel"].reduce(function(e, n) {
      return e["interactions:".concat(n)] = Qs, e;
    }, {}) };
    qt.default = el;
    var Jr = {};
    Object.defineProperty(Jr, "__esModule", { value: !0 }), Jr.default = void 0, Jr.default = {};
    var Gt = {};
    Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.default = function(e, n) {
      if (n.phaselessTypes[e])
        return !0;
      for (var r in n.map)
        if (e.indexOf(r) === 0 && e.substr(r.length) in n.phases)
          return !0;
      return !1;
    };
    var dn, Zr = {};
    Object.defineProperty(Zr, "__esModule", { value: !0 }), Zr.default = void 0, function(e) {
      e.touchAction = "touchAction", e.boxSizing = "boxSizing", e.noListeners = "noListeners";
    }(dn || (dn = {})), dn.touchAction, dn.boxSizing, dn.noListeners;
    var tl = { id: "dev-tools", install: function() {
    } };
    Zr.default = tl;
    var jt = {};
    Object.defineProperty(jt, "__esModule", { value: !0 }), jt.default = function e(n) {
      var r = {};
      for (var i in n) {
        var a = n[i];
        v.default.plainObject(a) ? r[i] = e(a) : v.default.array(a) ? r[i] = V.from(a) : r[i] = a;
      }
      return r;
    };
    var Rt = {};
    function co(e, n) {
      return function(r) {
        if (Array.isArray(r))
          return r;
      }(e) || function(r, i) {
        var a = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
        if (a != null) {
          var l, d, c = [], f = !0, g = !1;
          try {
            for (a = a.call(r); !(f = (l = a.next()).done) && (c.push(l.value), !i || c.length !== i); f = !0)
              ;
          } catch (m) {
            g = !0, d = m;
          } finally {
            try {
              f || a.return == null || a.return();
            } finally {
              if (g)
                throw d;
            }
          }
          return c;
        }
      }(e, n) || function(r, i) {
        if (r) {
          if (typeof r == "string")
            return uo(r, i);
          var a = Object.prototype.toString.call(r).slice(8, -1);
          return a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set" ? Array.from(r) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? uo(r, i) : void 0;
        }
      }(e, n) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function uo(e, n) {
      (n == null || n > e.length) && (n = e.length);
      for (var r = 0, i = Array(n); r < n; r++)
        i[r] = e[r];
      return i;
    }
    function nl(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function ht(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.default = void 0, Rt.getRectOffset = fo;
    var rl = function() {
      function e(i) {
        (function(a, l) {
          if (!(a instanceof l))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), ht(this, "states", []), ht(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), ht(this, "startDelta", void 0), ht(this, "result", void 0), ht(this, "endResult", void 0), ht(this, "startEdges", void 0), ht(this, "edges", void 0), ht(this, "interaction", void 0), this.interaction = i, this.result = Jn(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
      }
      var n, r;
      return n = e, (r = [{ key: "start", value: function(i, a) {
        var l = i.phase, d = this.interaction, c = function(g) {
          var m = g.interactable.options[g.prepared.name], b = m.modifiers;
          return b && b.length ? b : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(x) {
            var _ = m[x];
            return _ && _.enabled && { options: _, methods: _._methods };
          }).filter(function(x) {
            return !!x;
          });
        }(d);
        this.prepareStates(c), this.startEdges = (0, z.default)({}, d.edges), this.edges = (0, z.default)({}, this.startEdges), this.startOffset = fo(d.rect, a), this.startDelta = { x: 0, y: 0 };
        var f = this.fillArg({ phase: l, pageCoords: a, preEnd: !1 });
        return this.result = Jn(), this.startAll(f), this.result = this.setAll(f);
      } }, { key: "fillArg", value: function(i) {
        var a = this.interaction;
        return i.interaction = a, i.interactable = a.interactable, i.element = a.element, i.rect || (i.rect = a.rect), i.edges || (i.edges = this.startEdges), i.startOffset = this.startOffset, i;
      } }, { key: "startAll", value: function(i) {
        for (var a = 0; a < this.states.length; a++) {
          var l = this.states[a];
          l.methods.start && (i.state = l, l.methods.start(i));
        }
      } }, { key: "setAll", value: function(i) {
        var a = i.phase, l = i.preEnd, d = i.skipModifiers, c = i.rect, f = i.edges;
        i.coords = (0, z.default)({}, i.pageCoords), i.rect = (0, z.default)({}, c), i.edges = (0, z.default)({}, f);
        for (var g = d ? this.states.slice(d) : this.states, m = Jn(i.coords, i.rect), b = 0; b < g.length; b++) {
          var x, _ = g[b], w = _.options, P = (0, z.default)({}, i.coords), R = null;
          (x = _.methods) != null && x.set && this.shouldDo(w, l, a) && (i.state = _, R = _.methods.set(i), J.addEdges(i.edges, i.rect, { x: i.coords.x - P.x, y: i.coords.y - P.y })), m.eventProps.push(R);
        }
        (0, z.default)(this.edges, i.edges), m.delta.x = i.coords.x - i.pageCoords.x, m.delta.y = i.coords.y - i.pageCoords.y, m.rectDelta.left = i.rect.left - c.left, m.rectDelta.right = i.rect.right - c.right, m.rectDelta.top = i.rect.top - c.top, m.rectDelta.bottom = i.rect.bottom - c.bottom;
        var T = this.result.coords, N = this.result.rect;
        if (T && N) {
          var W = m.rect.left !== N.left || m.rect.right !== N.right || m.rect.top !== N.top || m.rect.bottom !== N.bottom;
          m.changed = W || T.x !== m.coords.x || T.y !== m.coords.y;
        }
        return m;
      } }, { key: "applyToInteraction", value: function(i) {
        var a = this.interaction, l = i.phase, d = a.coords.cur, c = a.coords.start, f = this.result, g = this.startDelta, m = f.delta;
        l === "start" && (0, z.default)(this.startDelta, f.delta);
        for (var b = 0; b < [[c, g], [d, m]].length; b++) {
          var x = co([[c, g], [d, m]][b], 2), _ = x[0], w = x[1];
          _.page.x += w.x, _.page.y += w.y, _.client.x += w.x, _.client.y += w.y;
        }
        var P = this.result.rectDelta, R = i.rect || a.rect;
        R.left += P.left, R.right += P.right, R.top += P.top, R.bottom += P.bottom, R.width = R.right - R.left, R.height = R.bottom - R.top;
      } }, { key: "setAndApply", value: function(i) {
        var a = this.interaction, l = i.phase, d = i.preEnd, c = i.skipModifiers, f = this.setAll(this.fillArg({ preEnd: d, phase: l, pageCoords: i.modifiedCoords || a.coords.cur.page }));
        if (this.result = f, !f.changed && (!c || c < this.states.length) && a.interacting())
          return !1;
        if (i.modifiedCoords) {
          var g = a.coords.cur.page, m = { x: i.modifiedCoords.x - g.x, y: i.modifiedCoords.y - g.y };
          f.coords.x += m.x, f.coords.y += m.y, f.delta.x += m.x, f.delta.y += m.y;
        }
        this.applyToInteraction(i);
      } }, { key: "beforeEnd", value: function(i) {
        var a = i.interaction, l = i.event, d = this.states;
        if (d && d.length) {
          for (var c = !1, f = 0; f < d.length; f++) {
            var g = d[f];
            i.state = g;
            var m = g.options, b = g.methods, x = b.beforeEnd && b.beforeEnd(i);
            if (x)
              return this.endResult = x, !1;
            c = c || !c && this.shouldDo(m, !0, i.phase, !0);
          }
          c && a.move({ event: l, preEnd: !0 });
        }
      } }, { key: "stop", value: function(i) {
        var a = i.interaction;
        if (this.states && this.states.length) {
          var l = (0, z.default)({ states: this.states, interactable: a.interactable, element: a.element, rect: null }, i);
          this.fillArg(l);
          for (var d = 0; d < this.states.length; d++) {
            var c = this.states[d];
            l.state = c, c.methods.stop && c.methods.stop(l);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(i) {
        this.states = [];
        for (var a = 0; a < i.length; a++) {
          var l = i[a], d = l.options, c = l.methods, f = l.name;
          this.states.push({ options: d, methods: c, index: a, name: f });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(i) {
        var a = i.interaction, l = a.coords, d = a.rect, c = a.modification;
        if (c.result) {
          for (var f = c.startDelta, g = c.result, m = g.delta, b = g.rectDelta, x = [[l.start, f], [l.cur, m]], _ = 0; _ < x.length; _++) {
            var w = co(x[_], 2), P = w[0], R = w[1];
            P.page.x -= R.x, P.page.y -= R.y, P.client.x -= R.x, P.client.y -= R.y;
          }
          d.left -= b.left, d.right -= b.right, d.top -= b.top, d.bottom -= b.bottom;
        }
      } }, { key: "shouldDo", value: function(i, a, l, d) {
        return !(!i || i.enabled === !1 || d && !i.endOnly || i.endOnly && !a || l === "start" && !i.setStart);
      } }, { key: "copyFrom", value: function(i) {
        this.startOffset = i.startOffset, this.startDelta = i.startDelta, this.startEdges = i.startEdges, this.edges = i.edges, this.states = i.states.map(function(a) {
          return (0, jt.default)(a);
        }), this.result = Jn((0, z.default)({}, i.result.coords), (0, z.default)({}, i.result.rect));
      } }, { key: "destroy", value: function() {
        for (var i in this)
          this[i] = null;
      } }]) && nl(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), e;
    }();
    function Jn(e, n) {
      return { rect: n, coords: e, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
    }
    function fo(e, n) {
      return e ? { left: n.x - e.left, top: n.y - e.top, right: e.right - n.x, bottom: e.bottom - n.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    Rt.default = rl;
    var _e = {};
    function Zn(e) {
      var n = e.iEvent, r = e.interaction.modification.result;
      r && (n.modifiers = r.eventProps);
    }
    Object.defineProperty(_e, "__esModule", { value: !0 }), _e.addEventModifiers = Zn, _e.default = void 0, _e.makeModifier = function(e, n) {
      var r = e.defaults, i = { start: e.start, set: e.set, beforeEnd: e.beforeEnd, stop: e.stop }, a = function(l) {
        var d = l || {};
        for (var c in d.enabled = d.enabled !== !1, r)
          c in d || (d[c] = r[c]);
        var f = { options: d, methods: i, name: n, enable: function() {
          return d.enabled = !0, f;
        }, disable: function() {
          return d.enabled = !1, f;
        } };
        return f;
      };
      return n && typeof n == "string" && (a._defaults = r, a._methods = i), a;
    };
    var il = { id: "modifiers/base", before: ["actions"], install: function(e) {
      e.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(e) {
      var n = e.interaction;
      n.modification = new Rt.default(n);
    }, "interactions:before-action-start": function(e) {
      var n = e.interaction, r = e.interaction.modification;
      r.start(e, n.coords.start.page), n.edges = r.edges, r.applyToInteraction(e);
    }, "interactions:before-action-move": function(e) {
      var n = e.interaction, r = n.modification, i = r.setAndApply(e);
      return n.edges = r.edges, i;
    }, "interactions:before-action-end": function(e) {
      var n = e.interaction, r = n.modification, i = r.beforeEnd(e);
      return n.edges = r.startEdges, i;
    }, "interactions:action-start": Zn, "interactions:action-move": Zn, "interactions:action-end": Zn, "interactions:after-action-start": function(e) {
      return e.interaction.modification.restoreInteractionCoords(e);
    }, "interactions:after-action-move": function(e) {
      return e.interaction.modification.restoreInteractionCoords(e);
    }, "interactions:stop": function(e) {
      return e.interaction.modification.stop(e);
    } } }, ol = il;
    _e.default = ol;
    var pn = {};
    Object.defineProperty(pn, "__esModule", { value: !0 }), pn.defaults = void 0, pn.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} };
    var hn = {};
    function Qr(e) {
      return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, Qr(e);
    }
    function al(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function ei(e, n) {
      return ei = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r;
      }, ei(e, n);
    }
    function sl(e, n) {
      if (n && (Qr(n) === "object" || typeof n == "function"))
        return n;
      if (n !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return ae(e);
    }
    function ae(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function Qn(e) {
      return Qn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      }, Qn(e);
    }
    function ce(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(hn, "__esModule", { value: !0 }), hn.InteractEvent = void 0;
    var po = function(e) {
      (function(c, f) {
        if (typeof f != "function" && f !== null)
          throw new TypeError("Super expression must either be null or a function");
        c.prototype = Object.create(f && f.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), f && ei(c, f);
      })(d, e);
      var n, r, i, a, l = (i = d, a = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }(), function() {
        var c, f = Qn(i);
        if (a) {
          var g = Qn(this).constructor;
          c = Reflect.construct(f, arguments, g);
        } else
          c = f.apply(this, arguments);
        return sl(this, c);
      });
      function d(c, f, g, m, b, x, _) {
        var w;
        (function(oe, q) {
          if (!(oe instanceof q))
            throw new TypeError("Cannot call a class as a function");
        })(this, d), ce(ae(w = l.call(this, c)), "relatedTarget", null), ce(ae(w), "screenX", void 0), ce(ae(w), "screenY", void 0), ce(ae(w), "button", void 0), ce(ae(w), "buttons", void 0), ce(ae(w), "ctrlKey", void 0), ce(ae(w), "shiftKey", void 0), ce(ae(w), "altKey", void 0), ce(ae(w), "metaKey", void 0), ce(ae(w), "page", void 0), ce(ae(w), "client", void 0), ce(ae(w), "delta", void 0), ce(ae(w), "rect", void 0), ce(ae(w), "x0", void 0), ce(ae(w), "y0", void 0), ce(ae(w), "t0", void 0), ce(ae(w), "dt", void 0), ce(ae(w), "duration", void 0), ce(ae(w), "clientX0", void 0), ce(ae(w), "clientY0", void 0), ce(ae(w), "velocity", void 0), ce(ae(w), "speed", void 0), ce(ae(w), "swipe", void 0), ce(ae(w), "axes", void 0), ce(ae(w), "preEnd", void 0), b = b || c.element;
        var P = c.interactable, R = (P && P.options || pn.defaults).deltaSource, T = (0, He.default)(P, b, g), N = m === "start", W = m === "end", Y = N ? ae(w) : c.prevEvent, Z = N ? c.coords.start : W ? { page: Y.page, client: Y.client, timeStamp: c.coords.cur.timeStamp } : c.coords.cur;
        return w.page = (0, z.default)({}, Z.page), w.client = (0, z.default)({}, Z.client), w.rect = (0, z.default)({}, c.rect), w.timeStamp = Z.timeStamp, W || (w.page.x -= T.x, w.page.y -= T.y, w.client.x -= T.x, w.client.y -= T.y), w.ctrlKey = f.ctrlKey, w.altKey = f.altKey, w.shiftKey = f.shiftKey, w.metaKey = f.metaKey, w.button = f.button, w.buttons = f.buttons, w.target = b, w.currentTarget = b, w.preEnd = x, w.type = _ || g + (m || ""), w.interactable = P, w.t0 = N ? c.pointers[c.pointers.length - 1].downTime : Y.t0, w.x0 = c.coords.start.page.x - T.x, w.y0 = c.coords.start.page.y - T.y, w.clientX0 = c.coords.start.client.x - T.x, w.clientY0 = c.coords.start.client.y - T.y, w.delta = N || W ? { x: 0, y: 0 } : { x: w[R].x - Y[R].x, y: w[R].y - Y[R].y }, w.dt = c.coords.delta.timeStamp, w.duration = w.timeStamp - w.t0, w.velocity = (0, z.default)({}, c.coords.velocity[R]), w.speed = (0, Le.default)(w.velocity.x, w.velocity.y), w.swipe = W || m === "inertiastart" ? w.getSwipe() : null, w;
      }
      return n = d, (r = [{ key: "getSwipe", value: function() {
        var c = this._interaction;
        if (c.prevEvent.speed < 600 || this.timeStamp - c.prevEvent.timeStamp > 150)
          return null;
        var f = 180 * Math.atan2(c.prevEvent.velocityY, c.prevEvent.velocityX) / Math.PI;
        f < 0 && (f += 360);
        var g = 112.5 <= f && f < 247.5, m = 202.5 <= f && f < 337.5;
        return { up: m, down: !m && 22.5 <= f && f < 157.5, left: g, right: !g && (292.5 <= f || f < 67.5), angle: f, speed: c.prevEvent.speed, velocity: { x: c.prevEvent.velocityX, y: c.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = !0;
      } }]) && al(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), d;
    }(we.BaseEvent);
    hn.InteractEvent = po, Object.defineProperties(po.prototype, { pageX: { get: function() {
      return this.page.x;
    }, set: function(e) {
      this.page.x = e;
    } }, pageY: { get: function() {
      return this.page.y;
    }, set: function(e) {
      this.page.y = e;
    } }, clientX: { get: function() {
      return this.client.x;
    }, set: function(e) {
      this.client.x = e;
    } }, clientY: { get: function() {
      return this.client.y;
    }, set: function(e) {
      this.client.y = e;
    } }, dx: { get: function() {
      return this.delta.x;
    }, set: function(e) {
      this.delta.x = e;
    } }, dy: { get: function() {
      return this.delta.y;
    }, set: function(e) {
      this.delta.y = e;
    } }, velocityX: { get: function() {
      return this.velocity.x;
    }, set: function(e) {
      this.velocity.x = e;
    } }, velocityY: { get: function() {
      return this.velocity.y;
    }, set: function(e) {
      this.velocity.y = e;
    } } });
    var vn = {};
    function ho(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function ll(e, n, r) {
      return n && ho(e.prototype, n), r && ho(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
    }
    function gn(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(vn, "__esModule", { value: !0 }), vn.PointerInfo = void 0;
    var cl = ll(function e(n, r, i, a, l) {
      (function(d, c) {
        if (!(d instanceof c))
          throw new TypeError("Cannot call a class as a function");
      })(this, e), gn(this, "id", void 0), gn(this, "pointer", void 0), gn(this, "event", void 0), gn(this, "downTime", void 0), gn(this, "downTarget", void 0), this.id = n, this.pointer = r, this.event = i, this.downTime = a, this.downTarget = l;
    });
    vn.PointerInfo = cl;
    var er, tr, je = {};
    function ul(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function de(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(je, "__esModule", { value: !0 }), je.Interaction = void 0, Object.defineProperty(je, "PointerInfo", { enumerable: !0, get: function() {
      return vn.PointerInfo;
    } }), je.default = je._ProxyValues = je._ProxyMethods = void 0, je._ProxyValues = er, function(e) {
      e.interactable = "", e.element = "", e.prepared = "", e.pointerIsDown = "", e.pointerWasMoved = "", e._proxy = "";
    }(er || (je._ProxyValues = er = {})), je._ProxyMethods = tr, function(e) {
      e.start = "", e.move = "", e.end = "", e.stop = "", e.interacting = "";
    }(tr || (je._ProxyMethods = tr = {}));
    var fl = 0, vo = function() {
      function e(i) {
        var a = this, l = i.pointerType, d = i.scopeFire;
        (function(x, _) {
          if (!(x instanceof _))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), de(this, "interactable", null), de(this, "element", null), de(this, "rect", null), de(this, "_rects", void 0), de(this, "edges", null), de(this, "_scopeFire", void 0), de(this, "prepared", { name: null, axis: null, edges: null }), de(this, "pointerType", void 0), de(this, "pointers", []), de(this, "downEvent", null), de(this, "downPointer", {}), de(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), de(this, "prevEvent", null), de(this, "pointerIsDown", !1), de(this, "pointerWasMoved", !1), de(this, "_interacting", !1), de(this, "_ending", !1), de(this, "_stopped", !0), de(this, "_proxy", void 0), de(this, "simulation", null), de(this, "doMove", (0, Ae.warnOnce)(function(x) {
          this.move(x);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), de(this, "coords", { start: k.newCoords(), prev: k.newCoords(), cur: k.newCoords(), delta: k.newCoords(), velocity: k.newCoords() }), de(this, "_id", fl++), this._scopeFire = d, this.pointerType = l;
        var c = this;
        this._proxy = {};
        var f = function(x) {
          Object.defineProperty(a._proxy, x, { get: function() {
            return c[x];
          } });
        };
        for (var g in er)
          f(g);
        var m = function(x) {
          Object.defineProperty(a._proxy, x, { value: function() {
            return c[x].apply(c, arguments);
          } });
        };
        for (var b in tr)
          m(b);
        this._scopeFire("interactions:new", { interaction: this });
      }
      var n, r;
      return n = e, r = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(i, a, l) {
        var d = this.updatePointer(i, a, l, !0), c = this.pointers[d];
        this._scopeFire("interactions:down", { pointer: i, event: a, eventTarget: l, pointerIndex: d, pointerInfo: c, type: "down", interaction: this });
      } }, { key: "start", value: function(i, a, l) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (i.name === "gesture" ? 2 : 1) || !a.options[i.name].enabled) && ((0, Ae.copyAction)(this.prepared, i), this.interactable = a, this.element = l, this.rect = a.getRect(l), this.edges = this.prepared.edges ? (0, z.default)({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(i, a, l) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(i, a, l, !1);
        var d, c, f = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (d = this.coords.cur.client.x - this.coords.start.client.x, c = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Le.default)(d, c) > this.pointerMoveTolerance);
        var g = this.getPointerIndex(i), m = { pointer: i, pointerIndex: g, pointerInfo: this.pointers[g], event: a, type: "move", eventTarget: l, dx: d, dy: c, duplicate: f, interaction: this };
        f || k.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", m), f || this.simulation || (this.interacting() && (m.type = null, this.move(m)), this.pointerWasMoved && k.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(i) {
        i && i.event || k.setZeroCoords(this.coords.delta), (i = (0, z.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, i || {})).phase = "move", this._doPhase(i);
      } }, { key: "pointerUp", value: function(i, a, l, d) {
        var c = this.getPointerIndex(i);
        c === -1 && (c = this.updatePointer(i, a, l, !1));
        var f = /cancel$/i.test(a.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(f), { pointer: i, pointerIndex: c, pointerInfo: this.pointers[c], event: a, eventTarget: l, type: f, curEventTarget: d, interaction: this }), this.simulation || this.end(a), this.removePointer(i, a);
      } }, { key: "documentBlur", value: function(i) {
        this.end(i), this._scopeFire("interactions:blur", { event: i, type: "blur", interaction: this });
      } }, { key: "end", value: function(i) {
        var a;
        this._ending = !0, i = i || this._latestPointer.event, this.interacting() && (a = this._doPhase({ event: i, interaction: this, phase: "end" })), this._ending = !1, a === !0 && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(i) {
        var a = k.getPointerId(i);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : V.findIndex(this.pointers, function(l) {
          return l.id === a;
        });
      } }, { key: "getPointerInfo", value: function(i) {
        return this.pointers[this.getPointerIndex(i)];
      } }, { key: "updatePointer", value: function(i, a, l, d) {
        var c = k.getPointerId(i), f = this.getPointerIndex(i), g = this.pointers[f];
        return d = d !== !1 && (d || /(down|start)$/i.test(a.type)), g ? g.pointer = i : (g = new vn.PointerInfo(c, i, a, null, null), f = this.pointers.length, this.pointers.push(g)), k.setCoords(this.coords.cur, this.pointers.map(function(m) {
          return m.pointer;
        }), this._now()), k.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), d && (this.pointerIsDown = !0, g.downTime = this.coords.cur.timeStamp, g.downTarget = l, k.pointerExtend(this.downPointer, i), this.interacting() || (k.copyCoords(this.coords.start, this.coords.cur), k.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = a, this.pointerWasMoved = !1)), this._updateLatestPointer(i, a, l), this._scopeFire("interactions:update-pointer", { pointer: i, event: a, eventTarget: l, down: d, pointerInfo: g, pointerIndex: f, interaction: this }), f;
      } }, { key: "removePointer", value: function(i, a) {
        var l = this.getPointerIndex(i);
        if (l !== -1) {
          var d = this.pointers[l];
          this._scopeFire("interactions:remove-pointer", { pointer: i, event: a, eventTarget: null, pointerIndex: l, pointerInfo: d, interaction: this }), this.pointers.splice(l, 1), this.pointerIsDown = !1;
        }
      } }, { key: "_updateLatestPointer", value: function(i, a, l) {
        this._latestPointer.pointer = i, this._latestPointer.event = a, this._latestPointer.eventTarget = l;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(i, a, l, d) {
        return new hn.InteractEvent(this, i, this.prepared.name, a, this.element, l, d);
      } }, { key: "_fireEvent", value: function(i) {
        var a;
        (a = this.interactable) == null || a.fire(i), (!this.prevEvent || i.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = i);
      } }, { key: "_doPhase", value: function(i) {
        var a = i.event, l = i.phase, d = i.preEnd, c = i.type, f = this.rect;
        if (f && l === "move" && (J.addEdges(this.edges, f, this.coords.delta[this.interactable.options.deltaSource]), f.width = f.right - f.left, f.height = f.bottom - f.top), this._scopeFire("interactions:before-action-".concat(l), i) === !1)
          return !1;
        var g = i.iEvent = this._createPreparedEvent(a, l, d, c);
        return this._scopeFire("interactions:action-".concat(l), i), l === "start" && (this.prevEvent = g), this._fireEvent(g), this._scopeFire("interactions:after-action-".concat(l), i), !0;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], r && ul(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), e;
    }();
    je.Interaction = vo;
    var dl = vo;
    je.default = dl;
    var zt = {};
    function go(e) {
      e.pointerIsDown && (ni(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
    }
    function mo(e) {
      ti(e.interaction);
    }
    function ti(e) {
      if (!function(r) {
        return !(!r.offset.pending.x && !r.offset.pending.y);
      }(e))
        return !1;
      var n = e.offset.pending;
      return ni(e.coords.cur, n), ni(e.coords.delta, n), J.addEdges(e.edges, e.rect, n), n.x = 0, n.y = 0, !0;
    }
    function pl(e) {
      var n = e.x, r = e.y;
      this.offset.pending.x += n, this.offset.pending.y += r, this.offset.total.x += n, this.offset.total.y += r;
    }
    function ni(e, n) {
      var r = e.page, i = e.client, a = n.x, l = n.y;
      r.x += a, r.y += l, i.x += a, i.y += l;
    }
    Object.defineProperty(zt, "__esModule", { value: !0 }), zt.addTotal = go, zt.applyPending = ti, zt.default = void 0, je._ProxyMethods.offsetBy = "";
    var hl = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(e) {
      e.Interaction.prototype.offsetBy = pl;
    }, listeners: { "interactions:new": function(e) {
      e.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(e) {
      return go(e.interaction);
    }, "interactions:before-action-start": mo, "interactions:before-action-move": mo, "interactions:before-action-end": function(e) {
      var n = e.interaction;
      if (ti(n))
        return n.move({ offset: !0 }), n.end(), !1;
    }, "interactions:stop": function(e) {
      var n = e.interaction;
      n.offset.total.x = 0, n.offset.total.y = 0, n.offset.pending.x = 0, n.offset.pending.y = 0;
    } } }, vl = hl;
    zt.default = vl;
    var Kt = {};
    function gl(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function be(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.default = Kt.InertiaState = void 0;
    var yo = function() {
      function e(i) {
        (function(a, l) {
          if (!(a instanceof l))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), be(this, "active", !1), be(this, "isModified", !1), be(this, "smoothEnd", !1), be(this, "allowResume", !1), be(this, "modification", void 0), be(this, "modifierCount", 0), be(this, "modifierArg", void 0), be(this, "startCoords", void 0), be(this, "t0", 0), be(this, "v0", 0), be(this, "te", 0), be(this, "targetOffset", void 0), be(this, "modifiedOffset", void 0), be(this, "currentOffset", void 0), be(this, "lambda_v0", 0), be(this, "one_ve_v0", 0), be(this, "timeout", void 0), be(this, "interaction", void 0), this.interaction = i;
      }
      var n, r;
      return n = e, (r = [{ key: "start", value: function(i) {
        var a = this.interaction, l = nr(a);
        if (!l || !l.enabled)
          return !1;
        var d = a.coords.velocity.client, c = (0, Le.default)(d.x, d.y), f = this.modification || (this.modification = new Rt.default(a));
        if (f.copyFrom(a.modification), this.t0 = a._now(), this.allowResume = l.allowResume, this.v0 = c, this.currentOffset = { x: 0, y: 0 }, this.startCoords = a.coords.cur.page, this.modifierArg = f.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - a.coords.cur.timeStamp < 50 && c > l.minSpeed && c > l.endSpeed)
          this.startInertia();
        else {
          if (f.result = f.setAll(this.modifierArg), !f.result.changed)
            return !1;
          this.startSmoothEnd();
        }
        return a.modification.result.rect = null, a.offsetBy(this.targetOffset), a._doPhase({ interaction: a, event: i, phase: "inertiastart" }), a.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), a.modification.result.rect = null, this.active = !0, a.simulation = this, !0;
      } }, { key: "startInertia", value: function() {
        var i = this, a = this.interaction.coords.velocity.client, l = nr(this.interaction), d = l.resistance, c = -Math.log(l.endSpeed / this.v0) / d;
        this.targetOffset = { x: (a.x - c) / d, y: (a.y - c) / d }, this.te = c, this.lambda_v0 = d / this.v0, this.one_ve_v0 = 1 - l.endSpeed / this.v0;
        var f = this.modification, g = this.modifierArg;
        g.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, f.result = f.setAll(g), f.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + f.result.delta.x, y: this.targetOffset.y + f.result.delta.y }), this.onNextFrame(function() {
          return i.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var i = this;
        this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return i.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(i) {
        var a = this;
        this.timeout = Ye.default.request(function() {
          a.active && i();
        });
      } }, { key: "inertiaTick", value: function() {
        var i, a, l, d, c, f = this, g = this.interaction, m = nr(g).resistance, b = (g._now() - this.t0) / 1e3;
        if (b < this.te) {
          var x, _ = 1 - (Math.exp(-m * b) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (i = this.targetOffset.x, a = this.targetOffset.y, l = this.modifiedOffset.x, d = this.modifiedOffset.y, x = { x: bo(c = _, 0, i, l), y: bo(c, 0, a, d) }) : x = { x: this.targetOffset.x * _, y: this.targetOffset.y * _ };
          var w = { x: x.x - this.currentOffset.x, y: x.y - this.currentOffset.y };
          this.currentOffset.x += w.x, this.currentOffset.y += w.y, g.offsetBy(w), g.move(), this.onNextFrame(function() {
            return f.inertiaTick();
          });
        } else
          g.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var i = this, a = this.interaction, l = a._now() - this.t0, d = nr(a).smoothEndDuration;
        if (l < d) {
          var c = { x: wo(l, 0, this.targetOffset.x, d), y: wo(l, 0, this.targetOffset.y, d) }, f = { x: c.x - this.currentOffset.x, y: c.y - this.currentOffset.y };
          this.currentOffset.x += f.x, this.currentOffset.y += f.y, a.offsetBy(f), a.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return i.smoothEndTick();
          });
        } else
          a.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(i) {
        var a = i.pointer, l = i.event, d = i.eventTarget, c = this.interaction;
        c.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), c.updatePointer(a, l, d, !0), c._doPhase({ interaction: c, event: l, phase: "resume" }), (0, k.copyCoords)(c.coords.prev, c.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = !1, this.interaction.simulation = null, Ye.default.cancel(this.timeout);
      } }]) && gl(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), e;
    }();
    function nr(e) {
      var n = e.interactable, r = e.prepared;
      return n && n.options && r.name && n.options[r.name].inertia;
    }
    Kt.InertiaState = yo;
    var ml = { id: "inertia", before: ["modifiers", "actions"], install: function(e) {
      var n = e.defaults;
      e.usePlugin(zt.default), e.usePlugin(_e.default), e.actions.phases.inertiastart = !0, e.actions.phases.resume = !0, n.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(e) {
      var n = e.interaction;
      n.inertia = new yo(n);
    }, "interactions:before-action-end": function(e) {
      var n = e.interaction, r = e.event;
      return (!n._interacting || n.simulation || !n.inertia.start(r)) && null;
    }, "interactions:down": function(e) {
      var n = e.interaction, r = e.eventTarget, i = n.inertia;
      if (i.active)
        for (var a = r; v.default.element(a); ) {
          if (a === n.element) {
            i.resume(e);
            break;
          }
          a = I.parentNode(a);
        }
    }, "interactions:stop": function(e) {
      var n = e.interaction.inertia;
      n.active && n.stop();
    }, "interactions:before-action-resume": function(e) {
      var n = e.interaction.modification;
      n.stop(e), n.start(e, e.interaction.coords.cur.page), n.applyToInteraction(e);
    }, "interactions:before-action-inertiastart": function(e) {
      return e.interaction.modification.setAndApply(e);
    }, "interactions:action-resume": _e.addEventModifiers, "interactions:action-inertiastart": _e.addEventModifiers, "interactions:after-action-inertiastart": function(e) {
      return e.interaction.modification.restoreInteractionCoords(e);
    }, "interactions:after-action-resume": function(e) {
      return e.interaction.modification.restoreInteractionCoords(e);
    } } };
    function bo(e, n, r, i) {
      var a = 1 - e;
      return a * a * n + 2 * a * e * r + e * e * i;
    }
    function wo(e, n, r, i) {
      return -r * (e /= i) * (e - 2) + n;
    }
    var yl = ml;
    Kt.default = yl;
    var mn = {};
    function bl(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function yn(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    function xo(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        if (e.immediatePropagationStopped)
          break;
        i(e);
      }
    }
    Object.defineProperty(mn, "__esModule", { value: !0 }), mn.Eventable = void 0;
    var wl = function() {
      function e(i) {
        (function(a, l) {
          if (!(a instanceof l))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), yn(this, "options", void 0), yn(this, "types", {}), yn(this, "propagationStopped", !1), yn(this, "immediatePropagationStopped", !1), yn(this, "global", void 0), this.options = (0, z.default)({}, i || {});
      }
      var n, r;
      return n = e, (r = [{ key: "fire", value: function(i) {
        var a, l = this.global;
        (a = this.types[i.type]) && xo(i, a), !i.propagationStopped && l && (a = l[i.type]) && xo(i, a);
      } }, { key: "on", value: function(i, a) {
        var l = (0, ft.default)(i, a);
        for (i in l)
          this.types[i] = V.merge(this.types[i] || [], l[i]);
      } }, { key: "off", value: function(i, a) {
        var l = (0, ft.default)(i, a);
        for (i in l) {
          var d = this.types[i];
          if (d && d.length)
            for (var c = 0; c < l[i].length; c++) {
              var f = l[i][c], g = d.indexOf(f);
              g !== -1 && d.splice(g, 1);
            }
        }
      } }, { key: "getRect", value: function(i) {
        return null;
      } }]) && bl(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), e;
    }();
    mn.Eventable = wl;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: !0 }), ri.createInteractStatic = function(e) {
      var n = function r(i, a) {
        var l = e.interactables.getExisting(i, a);
        return l || ((l = e.interactables.new(i, a)).events.global = r.globalEvents), l;
      };
      return n.getPointerAverage = k.pointerAverage, n.getTouchBBox = k.touchBBox, n.getTouchDistance = k.touchDistance, n.getTouchAngle = k.touchAngle, n.getElementRect = I.getElementRect, n.getElementClientRect = I.getElementClientRect, n.matchesSelector = I.matchesSelector, n.closest = I.closest, n.globalEvents = {}, n.version = "1.10.23", n.scope = e, n.use = function(r, i) {
        return this.scope.usePlugin(r, i), this;
      }, n.isSet = function(r, i) {
        return !!this.scope.interactables.get(r, i && i.context);
      }, n.on = (0, Ae.warnOnce)(function(r, i, a) {
        if (v.default.string(r) && r.search(" ") !== -1 && (r = r.trim().split(/ +/)), v.default.array(r)) {
          for (var l = 0; l < r.length; l++) {
            var d = r[l];
            this.on(d, i, a);
          }
          return this;
        }
        if (v.default.object(r)) {
          for (var c in r)
            this.on(c, r[c], i);
          return this;
        }
        return (0, Gt.default)(r, this.scope.actions) ? this.globalEvents[r] ? this.globalEvents[r].push(i) : this.globalEvents[r] = [i] : this.scope.events.add(this.scope.document, r, i, { options: a }), this;
      }, "The interact.on() method is being deprecated"), n.off = (0, Ae.warnOnce)(function(r, i, a) {
        if (v.default.string(r) && r.search(" ") !== -1 && (r = r.trim().split(/ +/)), v.default.array(r)) {
          for (var l = 0; l < r.length; l++) {
            var d = r[l];
            this.off(d, i, a);
          }
          return this;
        }
        if (v.default.object(r)) {
          for (var c in r)
            this.off(c, r[c], i);
          return this;
        }
        var f;
        return (0, Gt.default)(r, this.scope.actions) ? r in this.globalEvents && (f = this.globalEvents[r].indexOf(i)) !== -1 && this.globalEvents[r].splice(f, 1) : this.scope.events.remove(this.scope.document, r, i, a), this;
      }, "The interact.off() method is being deprecated"), n.debug = function() {
        return this.scope;
      }, n.supportsTouch = function() {
        return E.default.supportsTouch;
      }, n.supportsPointerEvent = function() {
        return E.default.supportsPointerEvent;
      }, n.stop = function() {
        for (var r = 0; r < this.scope.interactions.list.length; r++)
          this.scope.interactions.list[r].stop();
        return this;
      }, n.pointerMoveTolerance = function(r) {
        return v.default.number(r) ? (this.scope.interactions.pointerMoveTolerance = r, this) : this.scope.interactions.pointerMoveTolerance;
      }, n.addDocument = function(r, i) {
        this.scope.addDocument(r, i);
      }, n.removeDocument = function(r) {
        this.scope.removeDocument(r);
      }, n;
    };
    var lt, rr = {};
    function xl(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function vt(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(rr, "__esModule", { value: !0 }), rr.Interactable = void 0, function(e) {
      e[e.On = 0] = "On", e[e.Off = 1] = "Off";
    }(lt || (lt = {}));
    var _l = function() {
      function e(i, a, l, d) {
        (function(c, f) {
          if (!(c instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), vt(this, "options", void 0), vt(this, "_actions", void 0), vt(this, "target", void 0), vt(this, "events", new mn.Eventable()), vt(this, "_context", void 0), vt(this, "_win", void 0), vt(this, "_doc", void 0), vt(this, "_scopeEvents", void 0), this._actions = a.actions, this.target = i, this._context = a.context || l, this._win = (0, u.getWindow)((0, I.trySelector)(i) ? this._context : i), this._doc = this._win.document, this._scopeEvents = d, this.set(a);
      }
      var n, r;
      return n = e, (r = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(i, a) {
        return v.default.func(a.onstart) && this.on("".concat(i, "start"), a.onstart), v.default.func(a.onmove) && this.on("".concat(i, "move"), a.onmove), v.default.func(a.onend) && this.on("".concat(i, "end"), a.onend), v.default.func(a.oninertiastart) && this.on("".concat(i, "inertiastart"), a.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(i, a, l) {
        var d, c = this, f = (d = this._actions.map[i]) == null ? void 0 : d.filterEventType, g = function(m) {
          return (f == null || f(m)) && (0, Gt.default)(m, c._actions);
        };
        (v.default.array(a) || v.default.object(a)) && this._onOff(lt.Off, i, a, void 0, g), (v.default.array(l) || v.default.object(l)) && this._onOff(lt.On, i, l, void 0, g);
      } }, { key: "setPerAction", value: function(i, a) {
        var l = this._defaults;
        for (var d in a) {
          var c = d, f = this.options[i], g = a[c];
          c === "listeners" && this.updatePerActionListeners(i, f.listeners, g), v.default.array(g) ? f[c] = V.from(g) : v.default.plainObject(g) ? (f[c] = (0, z.default)(f[c] || {}, (0, jt.default)(g)), v.default.object(l.perAction[c]) && "enabled" in l.perAction[c] && (f[c].enabled = g.enabled !== !1)) : v.default.bool(g) && v.default.object(l.perAction[c]) ? f[c].enabled = g : f[c] = g;
        }
      } }, { key: "getRect", value: function(i) {
        return i = i || (v.default.element(this.target) ? this.target : null), v.default.string(this.target) && (i = i || this._context.querySelector(this.target)), (0, I.getElementRect)(i);
      } }, { key: "rectChecker", value: function(i) {
        var a = this;
        return v.default.func(i) ? (this.getRect = function(l) {
          var d = (0, z.default)({}, i.apply(a, l));
          return "width" in d || (d.width = d.right - d.left, d.height = d.bottom - d.top), d;
        }, this) : i === null ? (delete this.getRect, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(i, a) {
        if ((0, I.trySelector)(a) || v.default.object(a)) {
          for (var l in this.options[i] = a, this._actions.map)
            this.options[l][i] = a;
          return this;
        }
        return this.options[i];
      } }, { key: "origin", value: function(i) {
        return this._backCompatOption("origin", i);
      } }, { key: "deltaSource", value: function(i) {
        return i === "page" || i === "client" ? (this.options.deltaSource = i, this) : this.options.deltaSource;
      } }, { key: "getAllElements", value: function() {
        var i = this.target;
        return v.default.string(i) ? Array.from(this._context.querySelectorAll(i)) : v.default.func(i) && i.getAllElements ? i.getAllElements() : v.default.element(i) ? [i] : [];
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(i) {
        return this._context === i.ownerDocument || (0, I.nodeContains)(this._context, i);
      } }, { key: "testIgnoreAllow", value: function(i, a, l) {
        return !this.testIgnore(i.ignoreFrom, a, l) && this.testAllow(i.allowFrom, a, l);
      } }, { key: "testAllow", value: function(i, a, l) {
        return !i || !!v.default.element(l) && (v.default.string(i) ? (0, I.matchesUpTo)(l, i, a) : !!v.default.element(i) && (0, I.nodeContains)(i, l));
      } }, { key: "testIgnore", value: function(i, a, l) {
        return !(!i || !v.default.element(l)) && (v.default.string(i) ? (0, I.matchesUpTo)(l, i, a) : !!v.default.element(i) && (0, I.nodeContains)(i, l));
      } }, { key: "fire", value: function(i) {
        return this.events.fire(i), this;
      } }, { key: "_onOff", value: function(i, a, l, d, c) {
        v.default.object(a) && !v.default.array(a) && (d = l, l = null);
        var f = (0, ft.default)(a, l, c);
        for (var g in f) {
          g === "wheel" && (g = E.default.wheelEvent);
          for (var m = 0; m < f[g].length; m++) {
            var b = f[g][m];
            (0, Gt.default)(g, this._actions) ? this.events[i === lt.On ? "on" : "off"](g, b) : v.default.string(this.target) ? this._scopeEvents[i === lt.On ? "addDelegate" : "removeDelegate"](this.target, this._context, g, b, d) : this._scopeEvents[i === lt.On ? "add" : "remove"](this.target, g, b, d);
          }
        }
        return this;
      } }, { key: "on", value: function(i, a, l) {
        return this._onOff(lt.On, i, a, l);
      } }, { key: "off", value: function(i, a, l) {
        return this._onOff(lt.Off, i, a, l);
      } }, { key: "set", value: function(i) {
        var a = this._defaults;
        for (var l in v.default.object(i) || (i = {}), this.options = (0, jt.default)(a.base), this._actions.methodDict) {
          var d = l, c = this._actions.methodDict[d];
          this.options[d] = {}, this.setPerAction(d, (0, z.default)((0, z.default)({}, a.perAction), a.actions[d])), this[c](i[d]);
        }
        for (var f in i)
          f !== "getRect" ? v.default.func(this[f]) && this[f](i[f]) : this.rectChecker(i.getRect);
        return this;
      } }, { key: "unset", value: function() {
        if (v.default.string(this.target))
          for (var i in this._scopeEvents.delegatedEvents)
            for (var a = this._scopeEvents.delegatedEvents[i], l = a.length - 1; l >= 0; l--) {
              var d = a[l], c = d.selector, f = d.context, g = d.listeners;
              c === this.target && f === this._context && a.splice(l, 1);
              for (var m = g.length - 1; m >= 0; m--)
                this._scopeEvents.removeDelegate(this.target, this._context, i, g[m][0], g[m][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && xl(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), e;
    }();
    rr.Interactable = _l;
    var ir = {};
    function El(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function ii(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(ir, "__esModule", { value: !0 }), ir.InteractableSet = void 0;
    var Ol = function() {
      function e(i) {
        var a = this;
        (function(l, d) {
          if (!(l instanceof d))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), ii(this, "list", []), ii(this, "selectorMap", {}), ii(this, "scope", void 0), this.scope = i, i.addListeners({ "interactable:unset": function(l) {
          var d = l.interactable, c = d.target, f = v.default.string(c) ? a.selectorMap[c] : c[a.scope.id], g = V.findIndex(f, function(m) {
            return m === d;
          });
          f.splice(g, 1);
        } });
      }
      var n, r;
      return n = e, (r = [{ key: "new", value: function(i, a) {
        a = (0, z.default)(a || {}, { actions: this.scope.actions });
        var l = new this.scope.Interactable(i, a, this.scope.document, this.scope.events);
        return this.scope.addDocument(l._doc), this.list.push(l), v.default.string(i) ? (this.selectorMap[i] || (this.selectorMap[i] = []), this.selectorMap[i].push(l)) : (l.target[this.scope.id] || Object.defineProperty(i, this.scope.id, { value: [], configurable: !0 }), i[this.scope.id].push(l)), this.scope.fire("interactable:new", { target: i, options: a, interactable: l, win: this.scope._win }), l;
      } }, { key: "getExisting", value: function(i, a) {
        var l = a && a.context || this.scope.document, d = v.default.string(i), c = d ? this.selectorMap[i] : i[this.scope.id];
        if (c)
          return V.find(c, function(f) {
            return f._context === l && (d || f.inContext(i));
          });
      } }, { key: "forEachMatch", value: function(i, a) {
        for (var l = 0; l < this.list.length; l++) {
          var d = this.list[l], c = void 0;
          if ((v.default.string(d.target) ? v.default.element(i) && I.matchesSelector(i, d.target) : i === d.target) && d.inContext(i) && (c = a(d)), c !== void 0)
            return c;
        }
      } }]) && El(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), e;
    }();
    ir.InteractableSet = Ol;
    var or = {};
    function Sl(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function oi(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    function _o(e, n) {
      (n == null || n > e.length) && (n = e.length);
      for (var r = 0, i = Array(n); r < n; r++)
        i[r] = e[r];
      return i;
    }
    Object.defineProperty(or, "__esModule", { value: !0 }), or.default = void 0;
    var Pl = function() {
      function e(i) {
        (function(a, l) {
          if (!(a instanceof l))
            throw new TypeError("Cannot call a class as a function");
        })(this, e), oi(this, "currentTarget", void 0), oi(this, "originalEvent", void 0), oi(this, "type", void 0), this.originalEvent = i, (0, Pt.default)(this, i);
      }
      var n, r;
      return n = e, (r = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && Sl(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), e;
    }();
    function bn(e) {
      return v.default.object(e) ? { capture: !!e.capture, passive: !!e.passive } : { capture: !!e, passive: !1 };
    }
    function ar(e, n) {
      return e === n || (typeof e == "boolean" ? !!n.capture === e && !!n.passive == 0 : !!e.capture == !!n.capture && !!e.passive == !!n.passive);
    }
    var Tl = { id: "events", install: function(e) {
      var n, r = [], i = {}, a = [], l = { add: d, remove: c, addDelegate: function(m, b, x, _, w) {
        var P = bn(w);
        if (!i[x]) {
          i[x] = [];
          for (var R = 0; R < a.length; R++) {
            var T = a[R];
            d(T, x, f), d(T, x, g, !0);
          }
        }
        var N = i[x], W = V.find(N, function(Y) {
          return Y.selector === m && Y.context === b;
        });
        W || (W = { selector: m, context: b, listeners: [] }, N.push(W)), W.listeners.push({ func: _, options: P });
      }, removeDelegate: function(m, b, x, _, w) {
        var P, R = bn(w), T = i[x], N = !1;
        if (T)
          for (P = T.length - 1; P >= 0; P--) {
            var W = T[P];
            if (W.selector === m && W.context === b) {
              for (var Y = W.listeners, Z = Y.length - 1; Z >= 0; Z--) {
                var oe = Y[Z];
                if (oe.func === _ && ar(oe.options, R)) {
                  Y.splice(Z, 1), Y.length || (T.splice(P, 1), c(b, x, f), c(b, x, g, !0)), N = !0;
                  break;
                }
              }
              if (N)
                break;
            }
          }
      }, delegateListener: f, delegateUseCapture: g, delegatedEvents: i, documents: a, targets: r, supportsOptions: !1, supportsPassive: !1 };
      function d(m, b, x, _) {
        if (m.addEventListener) {
          var w = bn(_), P = V.find(r, function(R) {
            return R.eventTarget === m;
          });
          P || (P = { eventTarget: m, events: {} }, r.push(P)), P.events[b] || (P.events[b] = []), V.find(P.events[b], function(R) {
            return R.func === x && ar(R.options, w);
          }) || (m.addEventListener(b, x, l.supportsOptions ? w : w.capture), P.events[b].push({ func: x, options: w }));
        }
      }
      function c(m, b, x, _) {
        if (m.addEventListener && m.removeEventListener) {
          var w = V.findIndex(r, function(q) {
            return q.eventTarget === m;
          }), P = r[w];
          if (P && P.events)
            if (b !== "all") {
              var R = !1, T = P.events[b];
              if (T) {
                if (x === "all") {
                  for (var N = T.length - 1; N >= 0; N--) {
                    var W = T[N];
                    c(m, b, W.func, W.options);
                  }
                  return;
                }
                for (var Y = bn(_), Z = 0; Z < T.length; Z++) {
                  var oe = T[Z];
                  if (oe.func === x && ar(oe.options, Y)) {
                    m.removeEventListener(b, x, l.supportsOptions ? Y : Y.capture), T.splice(Z, 1), T.length === 0 && (delete P.events[b], R = !0);
                    break;
                  }
                }
              }
              R && !Object.keys(P.events).length && r.splice(w, 1);
            } else
              for (b in P.events)
                P.events.hasOwnProperty(b) && c(m, b, "all");
        }
      }
      function f(m, b) {
        for (var x = bn(b), _ = new Pl(m), w = i[m.type], P = function(le, Qe) {
          return function(pe) {
            if (Array.isArray(pe))
              return pe;
          }(le) || function(pe, Ht) {
            var Ne = pe == null ? null : typeof Symbol < "u" && pe[Symbol.iterator] || pe["@@iterator"];
            if (Ne != null) {
              var Zo, Qo, Ei = [], Oi = !0, ea = !1;
              try {
                for (Ne = Ne.call(pe); !(Oi = (Zo = Ne.next()).done) && (Ei.push(Zo.value), !Ht || Ei.length !== Ht); Oi = !0)
                  ;
              } catch (xc) {
                ea = !0, Qo = xc;
              } finally {
                try {
                  Oi || Ne.return == null || Ne.return();
                } finally {
                  if (ea)
                    throw Qo;
                }
              }
              return Ei;
            }
          }(le, Qe) || function(pe, Ht) {
            if (pe) {
              if (typeof pe == "string")
                return _o(pe, Ht);
              var Ne = Object.prototype.toString.call(pe).slice(8, -1);
              return Ne === "Object" && pe.constructor && (Ne = pe.constructor.name), Ne === "Map" || Ne === "Set" ? Array.from(pe) : Ne === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ne) ? _o(pe, Ht) : void 0;
            }
          }(le, Qe) || function() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }();
        }(k.getEventTargets(m), 1)[0], R = P; v.default.element(R); ) {
          for (var T = 0; T < w.length; T++) {
            var N = w[T], W = N.selector, Y = N.context;
            if (I.matchesSelector(R, W) && I.nodeContains(Y, P) && I.nodeContains(Y, R)) {
              var Z = N.listeners;
              _.currentTarget = R;
              for (var oe = 0; oe < Z.length; oe++) {
                var q = Z[oe];
                ar(q.options, x) && q.func(_);
              }
            }
          }
          R = I.parentNode(R);
        }
      }
      function g(m) {
        return f(m, !0);
      }
      return (n = e.document) == null || n.createElement("div").addEventListener("test", null, { get capture() {
        return l.supportsOptions = !0;
      }, get passive() {
        return l.supportsPassive = !0;
      } }), e.events = l, l;
    } };
    or.default = Tl;
    var sr = {};
    Object.defineProperty(sr, "__esModule", { value: !0 }), sr.default = void 0;
    var lr = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(e) {
      for (var n = 0; n < lr.methodOrder.length; n++) {
        var r;
        r = lr.methodOrder[n];
        var i = lr[r](e);
        if (i)
          return i;
      }
      return null;
    }, simulationResume: function(e) {
      var n = e.pointerType, r = e.eventType, i = e.eventTarget, a = e.scope;
      if (!/down|start/i.test(r))
        return null;
      for (var l = 0; l < a.interactions.list.length; l++) {
        var d = a.interactions.list[l], c = i;
        if (d.simulation && d.simulation.allowResume && d.pointerType === n)
          for (; c; ) {
            if (c === d.element)
              return d;
            c = I.parentNode(c);
          }
      }
      return null;
    }, mouseOrPen: function(e) {
      var n, r = e.pointerId, i = e.pointerType, a = e.eventType, l = e.scope;
      if (i !== "mouse" && i !== "pen")
        return null;
      for (var d = 0; d < l.interactions.list.length; d++) {
        var c = l.interactions.list[d];
        if (c.pointerType === i) {
          if (c.simulation && !Eo(c, r))
            continue;
          if (c.interacting())
            return c;
          n || (n = c);
        }
      }
      if (n)
        return n;
      for (var f = 0; f < l.interactions.list.length; f++) {
        var g = l.interactions.list[f];
        if (!(g.pointerType !== i || /down/i.test(a) && g.simulation))
          return g;
      }
      return null;
    }, hasPointer: function(e) {
      for (var n = e.pointerId, r = e.scope, i = 0; i < r.interactions.list.length; i++) {
        var a = r.interactions.list[i];
        if (Eo(a, n))
          return a;
      }
      return null;
    }, idle: function(e) {
      for (var n = e.pointerType, r = e.scope, i = 0; i < r.interactions.list.length; i++) {
        var a = r.interactions.list[i];
        if (a.pointers.length === 1) {
          var l = a.interactable;
          if (l && (!l.options.gesture || !l.options.gesture.enabled))
            continue;
        } else if (a.pointers.length >= 2)
          continue;
        if (!a.interacting() && n === a.pointerType)
          return a;
      }
      return null;
    } };
    function Eo(e, n) {
      return e.pointers.some(function(r) {
        return r.id === n;
      });
    }
    var Ml = lr;
    sr.default = Ml;
    var cr = {};
    function ai(e) {
      return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, ai(e);
    }
    function Oo(e, n) {
      return function(r) {
        if (Array.isArray(r))
          return r;
      }(e) || function(r, i) {
        var a = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
        if (a != null) {
          var l, d, c = [], f = !0, g = !1;
          try {
            for (a = a.call(r); !(f = (l = a.next()).done) && (c.push(l.value), !i || c.length !== i); f = !0)
              ;
          } catch (m) {
            g = !0, d = m;
          } finally {
            try {
              f || a.return == null || a.return();
            } finally {
              if (g)
                throw d;
            }
          }
          return c;
        }
      }(e, n) || function(r, i) {
        if (r) {
          if (typeof r == "string")
            return So(r, i);
          var a = Object.prototype.toString.call(r).slice(8, -1);
          return a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set" ? Array.from(r) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? So(r, i) : void 0;
        }
      }(e, n) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function So(e, n) {
      (n == null || n > e.length) && (n = e.length);
      for (var r = 0, i = Array(n); r < n; r++)
        i[r] = e[r];
      return i;
    }
    function Dl(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function jl(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function si(e, n) {
      return si = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r;
      }, si(e, n);
    }
    function Rl(e, n) {
      if (n && (ai(n) === "object" || typeof n == "function"))
        return n;
      if (n !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(r) {
        if (r === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }(e);
    }
    function ur(e) {
      return ur = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      }, ur(e);
    }
    Object.defineProperty(cr, "__esModule", { value: !0 }), cr.default = void 0;
    var li = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Po(e, n) {
      return function(r) {
        var i = n.interactions.list, a = k.getPointerType(r), l = Oo(k.getEventTargets(r), 2), d = l[0], c = l[1], f = [];
        if (/^touch/.test(r.type)) {
          n.prevTouchTime = n.now();
          for (var g = 0; g < r.changedTouches.length; g++) {
            var m = r.changedTouches[g], b = { pointer: m, pointerId: k.getPointerId(m), pointerType: a, eventType: r.type, eventTarget: d, curEventTarget: c, scope: n }, x = To(b);
            f.push([b.pointer, b.eventTarget, b.curEventTarget, x]);
          }
        } else {
          var _ = !1;
          if (!E.default.supportsPointerEvent && /mouse/.test(r.type)) {
            for (var w = 0; w < i.length && !_; w++)
              _ = i[w].pointerType !== "mouse" && i[w].pointerIsDown;
            _ = _ || n.now() - n.prevTouchTime < 500 || r.timeStamp === 0;
          }
          if (!_) {
            var P = { pointer: r, pointerId: k.getPointerId(r), pointerType: a, eventType: r.type, curEventTarget: c, eventTarget: d, scope: n }, R = To(P);
            f.push([P.pointer, P.eventTarget, P.curEventTarget, R]);
          }
        }
        for (var T = 0; T < f.length; T++) {
          var N = Oo(f[T], 4), W = N[0], Y = N[1], Z = N[2];
          N[3][e](W, r, Y, Z);
        }
      };
    }
    function To(e) {
      var n = e.pointerType, r = e.scope, i = { interaction: sr.default.search(e), searchDetails: e };
      return r.fire("interactions:find", i), i.interaction || r.interactions.new({ pointerType: n });
    }
    function ci(e, n) {
      var r = e.doc, i = e.scope, a = e.options, l = i.interactions.docEvents, d = i.events, c = d[n];
      for (var f in i.browser.isIOS && !a.events && (a.events = { passive: !1 }), d.delegatedEvents)
        c(r, f, d.delegateListener), c(r, f, d.delegateUseCapture, !0);
      for (var g = a && a.events, m = 0; m < l.length; m++) {
        var b = l[m];
        c(r, b.type, b.listener, g);
      }
    }
    var zl = { id: "core/interactions", install: function(e) {
      for (var n = {}, r = 0; r < li.length; r++) {
        var i = li[r];
        n[i] = Po(i, e);
      }
      var a, l = E.default.pEventTypes;
      function d() {
        for (var c = 0; c < e.interactions.list.length; c++) {
          var f = e.interactions.list[c];
          if (f.pointerIsDown && f.pointerType === "touch" && !f._interacting)
            for (var g = function() {
              var b = f.pointers[m];
              e.documents.some(function(x) {
                var _ = x.doc;
                return (0, I.nodeContains)(_, b.downTarget);
              }) || f.removePointer(b.pointer, b.event);
            }, m = 0; m < f.pointers.length; m++)
              g();
        }
      }
      (a = G.default.PointerEvent ? [{ type: l.down, listener: d }, { type: l.down, listener: n.pointerDown }, { type: l.move, listener: n.pointerMove }, { type: l.up, listener: n.pointerUp }, { type: l.cancel, listener: n.pointerUp }] : [{ type: "mousedown", listener: n.pointerDown }, { type: "mousemove", listener: n.pointerMove }, { type: "mouseup", listener: n.pointerUp }, { type: "touchstart", listener: d }, { type: "touchstart", listener: n.pointerDown }, { type: "touchmove", listener: n.pointerMove }, { type: "touchend", listener: n.pointerUp }, { type: "touchcancel", listener: n.pointerUp }]).push({ type: "blur", listener: function(c) {
        for (var f = 0; f < e.interactions.list.length; f++)
          e.interactions.list[f].documentBlur(c);
      } }), e.prevTouchTime = 0, e.Interaction = function(c) {
        (function(w, P) {
          if (typeof P != "function" && P !== null)
            throw new TypeError("Super expression must either be null or a function");
          w.prototype = Object.create(P && P.prototype, { constructor: { value: w, writable: !0, configurable: !0 } }), Object.defineProperty(w, "prototype", { writable: !1 }), P && si(w, P);
        })(_, c);
        var f, g, m, b, x = (m = _, b = function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
            return !1;
          if (typeof Proxy == "function")
            return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }(), function() {
          var w, P = ur(m);
          if (b) {
            var R = ur(this).constructor;
            w = Reflect.construct(P, arguments, R);
          } else
            w = P.apply(this, arguments);
          return Rl(this, w);
        });
        function _() {
          return Dl(this, _), x.apply(this, arguments);
        }
        return f = _, (g = [{ key: "pointerMoveTolerance", get: function() {
          return e.interactions.pointerMoveTolerance;
        }, set: function(w) {
          e.interactions.pointerMoveTolerance = w;
        } }, { key: "_now", value: function() {
          return e.now();
        } }]) && jl(f.prototype, g), Object.defineProperty(f, "prototype", { writable: !1 }), _;
      }(je.default), e.interactions = { list: [], new: function(c) {
        c.scopeFire = function(g, m) {
          return e.fire(g, m);
        };
        var f = new e.Interaction(c);
        return e.interactions.list.push(f), f;
      }, listeners: n, docEvents: a, pointerMoveTolerance: 1 }, e.usePlugin(qt.default);
    }, listeners: { "scope:add-document": function(e) {
      return ci(e, "add");
    }, "scope:remove-document": function(e) {
      return ci(e, "remove");
    }, "interactable:unset": function(e, n) {
      for (var r = e.interactable, i = n.interactions.list.length - 1; i >= 0; i--) {
        var a = n.interactions.list[i];
        a.interactable === r && (a.stop(), n.fire("interactions:destroy", { interaction: a }), a.destroy(), n.interactions.list.length > 2 && n.interactions.list.splice(i, 1));
      }
    } }, onDocSignal: ci, doOnInteractions: Po, methodNames: li }, Il = zl;
    cr.default = Il;
    var wn = {};
    function ui(e) {
      return ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, ui(e);
    }
    function fr() {
      return fr = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(e, n, r) {
        var i = Cl(e, n);
        if (i) {
          var a = Object.getOwnPropertyDescriptor(i, n);
          return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
        }
      }, fr.apply(this, arguments);
    }
    function Cl(e, n) {
      for (; !Object.prototype.hasOwnProperty.call(e, n) && (e = It(e)) !== null; )
        ;
      return e;
    }
    function fi(e, n) {
      return fi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r;
      }, fi(e, n);
    }
    function kl(e, n) {
      if (n && (ui(n) === "object" || typeof n == "function"))
        return n;
      if (n !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(r) {
        if (r === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }(e);
    }
    function It(e) {
      return It = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      }, It(e);
    }
    function Mo(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function Do(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function jo(e, n, r) {
      return n && Do(e.prototype, n), r && Do(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
    }
    function Ee(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(wn, "__esModule", { value: !0 }), wn.Scope = void 0, wn.initScope = Ro;
    var Al = function() {
      function e() {
        var n = this;
        Mo(this, e), Ee(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), Ee(this, "isInitialized", !1), Ee(this, "listenerMaps", []), Ee(this, "browser", E.default), Ee(this, "defaults", (0, jt.default)(pn.defaults)), Ee(this, "Eventable", mn.Eventable), Ee(this, "actions", { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }), Ee(this, "interactStatic", (0, ri.createInteractStatic)(this)), Ee(this, "InteractEvent", hn.InteractEvent), Ee(this, "Interactable", void 0), Ee(this, "interactables", new ir.InteractableSet(this)), Ee(this, "_win", void 0), Ee(this, "document", void 0), Ee(this, "window", void 0), Ee(this, "documents", []), Ee(this, "_plugins", { list: [], map: {} }), Ee(this, "onWindowUnload", function(i) {
          return n.removeDocument(i.target);
        });
        var r = this;
        this.Interactable = function(i) {
          (function(f, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function");
            f.prototype = Object.create(g && g.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), g && fi(f, g);
          })(c, i);
          var a, l, d = (a = c, l = function() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }(), function() {
            var f, g = It(a);
            if (l) {
              var m = It(this).constructor;
              f = Reflect.construct(g, arguments, m);
            } else
              f = g.apply(this, arguments);
            return kl(this, f);
          });
          function c() {
            return Mo(this, c), d.apply(this, arguments);
          }
          return jo(c, [{ key: "_defaults", get: function() {
            return r.defaults;
          } }, { key: "set", value: function(f) {
            return fr(It(c.prototype), "set", this).call(this, f), r.fire("interactable:set", { options: f, interactable: this }), this;
          } }, { key: "unset", value: function() {
            fr(It(c.prototype), "unset", this).call(this);
            var f = r.interactables.list.indexOf(this);
            f < 0 || (r.interactables.list.splice(f, 1), r.fire("interactable:unset", { interactable: this }));
          } }]), c;
        }(rr.Interactable);
      }
      return jo(e, [{ key: "addListeners", value: function(n, r) {
        this.listenerMaps.push({ id: r, map: n });
      } }, { key: "fire", value: function(n, r) {
        for (var i = 0; i < this.listenerMaps.length; i++) {
          var a = this.listenerMaps[i].map[n];
          if (a && a(r, this, n) === !1)
            return !1;
        }
      } }, { key: "init", value: function(n) {
        return this.isInitialized ? this : Ro(this, n);
      } }, { key: "pluginIsInstalled", value: function(n) {
        var r = n.id;
        return r ? !!this._plugins.map[r] : this._plugins.list.indexOf(n) !== -1;
      } }, { key: "usePlugin", value: function(n, r) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(n))
          return this;
        if (n.id && (this._plugins.map[n.id] = n), this._plugins.list.push(n), n.install && n.install(this, r), n.listeners && n.before) {
          for (var i = 0, a = this.listenerMaps.length, l = n.before.reduce(function(c, f) {
            return c[f] = !0, c[zo(f)] = !0, c;
          }, {}); i < a; i++) {
            var d = this.listenerMaps[i].id;
            if (d && (l[d] || l[zo(d)]))
              break;
          }
          this.listenerMaps.splice(i, 0, { id: n.id, map: n.listeners });
        } else
          n.listeners && this.listenerMaps.push({ id: n.id, map: n.listeners });
        return this;
      } }, { key: "addDocument", value: function(n, r) {
        if (this.getDocIndex(n) !== -1)
          return !1;
        var i = u.getWindow(n);
        r = r ? (0, z.default)({}, r) : {}, this.documents.push({ doc: n, options: r }), this.events.documents.push(n), n !== this.document && this.events.add(i, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: n, window: i, scope: this, options: r });
      } }, { key: "removeDocument", value: function(n) {
        var r = this.getDocIndex(n), i = u.getWindow(n), a = this.documents[r].options;
        this.events.remove(i, "unload", this.onWindowUnload), this.documents.splice(r, 1), this.events.documents.splice(r, 1), this.fire("scope:remove-document", { doc: n, window: i, scope: this, options: a });
      } }, { key: "getDocIndex", value: function(n) {
        for (var r = 0; r < this.documents.length; r++)
          if (this.documents[r].doc === n)
            return r;
        return -1;
      } }, { key: "getDocOptions", value: function(n) {
        var r = this.getDocIndex(n);
        return r === -1 ? null : this.documents[r].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), e;
    }();
    function Ro(e, n) {
      return e.isInitialized = !0, v.default.window(n) && u.init(n), G.default.init(n), E.default.init(n), Ye.default.init(n), e.window = n, e.document = n.document, e.usePlugin(cr.default), e.usePlugin(or.default), e;
    }
    function zo(e) {
      return e && e.replace(/\/.*$/, "");
    }
    wn.Scope = Al;
    var Te = {};
    Object.defineProperty(Te, "__esModule", { value: !0 }), Te.default = void 0;
    var Io = new wn.Scope(), Nl = Io.interactStatic;
    Te.default = Nl;
    var Hl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : void 0;
    Io.init(Hl);
    var dr = {};
    Object.defineProperty(dr, "__esModule", { value: !0 }), dr.default = void 0, dr.default = function() {
    };
    var pr = {};
    Object.defineProperty(pr, "__esModule", { value: !0 }), pr.default = void 0, pr.default = function() {
    };
    var hr = {};
    function Co(e, n) {
      return function(r) {
        if (Array.isArray(r))
          return r;
      }(e) || function(r, i) {
        var a = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
        if (a != null) {
          var l, d, c = [], f = !0, g = !1;
          try {
            for (a = a.call(r); !(f = (l = a.next()).done) && (c.push(l.value), !i || c.length !== i); f = !0)
              ;
          } catch (m) {
            g = !0, d = m;
          } finally {
            try {
              f || a.return == null || a.return();
            } finally {
              if (g)
                throw d;
            }
          }
          return c;
        }
      }(e, n) || function(r, i) {
        if (r) {
          if (typeof r == "string")
            return ko(r, i);
          var a = Object.prototype.toString.call(r).slice(8, -1);
          return a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set" ? Array.from(r) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? ko(r, i) : void 0;
        }
      }(e, n) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function ko(e, n) {
      (n == null || n > e.length) && (n = e.length);
      for (var r = 0, i = Array(n); r < n; r++)
        i[r] = e[r];
      return i;
    }
    Object.defineProperty(hr, "__esModule", { value: !0 }), hr.default = void 0, hr.default = function(e) {
      var n = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(i) {
        var a = Co(i, 2), l = a[0], d = a[1];
        return l in e || d in e;
      }), r = function(i, a) {
        for (var l = e.range, d = e.limits, c = d === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : d, f = e.offset, g = f === void 0 ? { x: 0, y: 0 } : f, m = { range: l, grid: e, x: null, y: null }, b = 0; b < n.length; b++) {
          var x = Co(n[b], 2), _ = x[0], w = x[1], P = Math.round((i - g.x) / e[_]), R = Math.round((a - g.y) / e[w]);
          m[_] = Math.max(c.left, Math.min(c.right, P * e[_] + g.x)), m[w] = Math.max(c.top, Math.min(c.bottom, R * e[w] + g.y));
        }
        return m;
      };
      return r.grid = e, r.coordFields = n, r;
    };
    var xn = {};
    Object.defineProperty(xn, "__esModule", { value: !0 }), Object.defineProperty(xn, "edgeTarget", { enumerable: !0, get: function() {
      return dr.default;
    } }), Object.defineProperty(xn, "elements", { enumerable: !0, get: function() {
      return pr.default;
    } }), Object.defineProperty(xn, "grid", { enumerable: !0, get: function() {
      return hr.default;
    } });
    var vr = {};
    Object.defineProperty(vr, "__esModule", { value: !0 }), vr.default = void 0;
    var $l = { id: "snappers", install: function(e) {
      var n = e.interactStatic;
      n.snappers = (0, z.default)(n.snappers || {}, xn), n.createSnapGrid = n.snappers.grid;
    } }, Wl = $l;
    vr.default = Wl;
    var Jt = {};
    function Ao(e, n) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n && (i = i.filter(function(a) {
          return Object.getOwnPropertyDescriptor(e, a).enumerable;
        })), r.push.apply(r, i);
      }
      return r;
    }
    function di(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n] != null ? arguments[n] : {};
        n % 2 ? Ao(Object(r), !0).forEach(function(i) {
          Bl(e, i, r[i]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ao(Object(r)).forEach(function(i) {
          Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
        });
      }
      return e;
    }
    function Bl(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
    }
    Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.default = Jt.aspectRatio = void 0;
    var No = { start: function(e) {
      var n = e.state, r = e.rect, i = e.edges, a = e.pageCoords, l = n.options, d = l.ratio, c = l.enabled, f = n.options, g = f.equalDelta, m = f.modifiers;
      d === "preserve" && (d = r.width / r.height), n.startCoords = (0, z.default)({}, a), n.startRect = (0, z.default)({}, r), n.ratio = d, n.equalDelta = g;
      var b = n.linkedEdges = { top: i.top || i.left && !i.bottom, left: i.left || i.top && !i.right, bottom: i.bottom || i.right && !i.top, right: i.right || i.bottom && !i.left };
      if (n.xIsPrimaryAxis = !(!i.left && !i.right), n.equalDelta) {
        var x = (b.left ? 1 : -1) * (b.top ? 1 : -1);
        n.edgeSign = { x, y: x };
      } else
        n.edgeSign = { x: b.left ? -1 : 1, y: b.top ? -1 : 1 };
      if (c !== !1 && (0, z.default)(i, b), m != null && m.length) {
        var _ = new Rt.default(e.interaction);
        _.copyFrom(e.interaction.modification), _.prepareStates(m), n.subModification = _, _.startAll(di({}, e));
      }
    }, set: function(e) {
      var n = e.state, r = e.rect, i = e.coords, a = n.linkedEdges, l = (0, z.default)({}, i), d = n.equalDelta ? Fl : Ll;
      if ((0, z.default)(e.edges, a), d(n, n.xIsPrimaryAxis, i, r), !n.subModification)
        return null;
      var c = (0, z.default)({}, r);
      (0, J.addEdges)(a, c, { x: i.x - l.x, y: i.y - l.y });
      var f = n.subModification.setAll(di(di({}, e), {}, { rect: c, edges: a, pageCoords: i, prevCoords: i, prevRect: c })), g = f.delta;
      return f.changed && (d(n, Math.abs(g.x) > Math.abs(g.y), f.coords, f.rect), (0, z.default)(i, f.coords)), f.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
    function Fl(e, n, r) {
      var i = e.startCoords, a = e.edgeSign;
      n ? r.y = i.y + (r.x - i.x) * a.y : r.x = i.x + (r.y - i.y) * a.x;
    }
    function Ll(e, n, r, i) {
      var a = e.startRect, l = e.startCoords, d = e.ratio, c = e.edgeSign;
      if (n) {
        var f = i.width / d;
        r.y = l.y + (f - a.height) * c.y;
      } else {
        var g = i.height * d;
        r.x = l.x + (g - a.width) * c.x;
      }
    }
    Jt.aspectRatio = No;
    var Vl = (0, _e.makeModifier)(No, "aspectRatio");
    Jt.default = Vl;
    var Ct = {};
    Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.default = void 0;
    var Ho = function() {
    };
    Ho._defaults = {};
    var Yl = Ho;
    Ct.default = Yl;
    var pi = {};
    Object.defineProperty(pi, "__esModule", { value: !0 }), Object.defineProperty(pi, "default", { enumerable: !0, get: function() {
      return Ct.default;
    } });
    var Me = {};
    function hi(e, n, r) {
      return v.default.func(e) ? J.resolveRectLike(e, n.interactable, n.element, [r.x, r.y, n]) : J.resolveRectLike(e, n.interactable, n.element);
    }
    Object.defineProperty(Me, "__esModule", { value: !0 }), Me.default = void 0, Me.getRestrictionRect = hi, Me.restrict = void 0;
    var $o = { start: function(e) {
      var n = e.rect, r = e.startOffset, i = e.state, a = e.interaction, l = e.pageCoords, d = i.options, c = d.elementRect, f = (0, z.default)({ left: 0, top: 0, right: 0, bottom: 0 }, d.offset || {});
      if (n && c) {
        var g = hi(d.restriction, a, l);
        if (g) {
          var m = g.right - g.left - n.width, b = g.bottom - g.top - n.height;
          m < 0 && (f.left += m, f.right += m), b < 0 && (f.top += b, f.bottom += b);
        }
        f.left += r.left - n.width * c.left, f.top += r.top - n.height * c.top, f.right += r.right - n.width * (1 - c.right), f.bottom += r.bottom - n.height * (1 - c.bottom);
      }
      i.offset = f;
    }, set: function(e) {
      var n = e.coords, r = e.interaction, i = e.state, a = i.options, l = i.offset, d = hi(a.restriction, r, n);
      if (d) {
        var c = J.xywhToTlbr(d);
        n.x = Math.max(Math.min(c.right - l.right, n.x), c.left + l.left), n.y = Math.max(Math.min(c.bottom - l.bottom, n.y), c.top + l.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } };
    Me.restrict = $o;
    var Xl = (0, _e.makeModifier)($o, "restrict");
    Me.default = Xl;
    var Ze = {};
    Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.restrictEdges = Ze.default = void 0;
    var Wo = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Bo = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Fo(e, n) {
      for (var r = ["top", "left", "bottom", "right"], i = 0; i < r.length; i++) {
        var a = r[i];
        a in e || (e[a] = n[a]);
      }
      return e;
    }
    var Lo = { noInner: Wo, noOuter: Bo, start: function(e) {
      var n, r = e.interaction, i = e.startOffset, a = e.state, l = a.options;
      if (l) {
        var d = (0, Me.getRestrictionRect)(l.offset, r, r.coords.start.page);
        n = J.rectToXY(d);
      }
      n = n || { x: 0, y: 0 }, a.offset = { top: n.y + i.top, left: n.x + i.left, bottom: n.y - i.bottom, right: n.x - i.right };
    }, set: function(e) {
      var n = e.coords, r = e.edges, i = e.interaction, a = e.state, l = a.offset, d = a.options;
      if (r) {
        var c = (0, z.default)({}, n), f = (0, Me.getRestrictionRect)(d.inner, i, c) || {}, g = (0, Me.getRestrictionRect)(d.outer, i, c) || {};
        Fo(f, Wo), Fo(g, Bo), r.top ? n.y = Math.min(Math.max(g.top + l.top, c.y), f.top + l.top) : r.bottom && (n.y = Math.max(Math.min(g.bottom + l.bottom, c.y), f.bottom + l.bottom)), r.left ? n.x = Math.min(Math.max(g.left + l.left, c.x), f.left + l.left) : r.right && (n.x = Math.max(Math.min(g.right + l.right, c.x), f.right + l.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } };
    Ze.restrictEdges = Lo;
    var Ul = (0, _e.makeModifier)(Lo, "restrictEdges");
    Ze.default = Ul;
    var Zt = {};
    Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.restrictRect = Zt.default = void 0;
    var ql = (0, z.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(e) {
    } }, Me.restrict.defaults), Vo = { start: Me.restrict.start, set: Me.restrict.set, defaults: ql };
    Zt.restrictRect = Vo;
    var Gl = (0, _e.makeModifier)(Vo, "restrictRect");
    Zt.default = Gl;
    var Qt = {};
    Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.restrictSize = Qt.default = void 0;
    var Kl = { width: -1 / 0, height: -1 / 0 }, Jl = { width: 1 / 0, height: 1 / 0 }, Yo = { start: function(e) {
      return Ze.restrictEdges.start(e);
    }, set: function(e) {
      var n = e.interaction, r = e.state, i = e.rect, a = e.edges, l = r.options;
      if (a) {
        var d = J.tlbrToXywh((0, Me.getRestrictionRect)(l.min, n, e.coords)) || Kl, c = J.tlbrToXywh((0, Me.getRestrictionRect)(l.max, n, e.coords)) || Jl;
        r.options = { endOnly: l.endOnly, inner: (0, z.default)({}, Ze.restrictEdges.noInner), outer: (0, z.default)({}, Ze.restrictEdges.noOuter) }, a.top ? (r.options.inner.top = i.bottom - d.height, r.options.outer.top = i.bottom - c.height) : a.bottom && (r.options.inner.bottom = i.top + d.height, r.options.outer.bottom = i.top + c.height), a.left ? (r.options.inner.left = i.right - d.width, r.options.outer.left = i.right - c.width) : a.right && (r.options.inner.right = i.left + d.width, r.options.outer.right = i.left + c.width), Ze.restrictEdges.set(e), r.options = l;
      }
    }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } };
    Qt.restrictSize = Yo;
    var Zl = (0, _e.makeModifier)(Yo, "restrictSize");
    Qt.default = Zl;
    var vi = {};
    Object.defineProperty(vi, "__esModule", { value: !0 }), Object.defineProperty(vi, "default", { enumerable: !0, get: function() {
      return Ct.default;
    } });
    var gt = {};
    Object.defineProperty(gt, "__esModule", { value: !0 }), gt.snap = gt.default = void 0;
    var Xo = { start: function(e) {
      var n, r = e.interaction, i = e.interactable, a = e.element, l = e.rect, d = e.state, c = e.startOffset, f = d.options, g = f.offsetWithOrigin ? function(x) {
        var _ = x.interaction.element;
        return (0, J.rectToXY)((0, J.resolveRectLike)(x.state.options.origin, null, null, [_])) || (0, He.default)(x.interactable, _, x.interaction.prepared.name);
      }(e) : { x: 0, y: 0 };
      if (f.offset === "startCoords")
        n = { x: r.coords.start.page.x, y: r.coords.start.page.y };
      else {
        var m = (0, J.resolveRectLike)(f.offset, i, a, [r]);
        (n = (0, J.rectToXY)(m) || { x: 0, y: 0 }).x += g.x, n.y += g.y;
      }
      var b = f.relativePoints;
      d.offsets = l && b && b.length ? b.map(function(x, _) {
        return { index: _, relativePoint: x, x: c.left - l.width * x.x + n.x, y: c.top - l.height * x.y + n.y };
      }) : [{ index: 0, relativePoint: null, x: n.x, y: n.y }];
    }, set: function(e) {
      var n = e.interaction, r = e.coords, i = e.state, a = i.options, l = i.offsets, d = (0, He.default)(n.interactable, n.element, n.prepared.name), c = (0, z.default)({}, r), f = [];
      a.offsetWithOrigin || (c.x -= d.x, c.y -= d.y);
      for (var g = 0; g < l.length; g++)
        for (var m = l[g], b = c.x - m.x, x = c.y - m.y, _ = 0, w = a.targets.length; _ < w; _++) {
          var P, R = a.targets[_];
          (P = v.default.func(R) ? R(b, x, n._proxy, m, _) : R) && f.push({ x: (v.default.number(P.x) ? P.x : b) + m.x, y: (v.default.number(P.y) ? P.y : x) + m.y, range: v.default.number(P.range) ? P.range : a.range, source: R, index: _, offset: m });
        }
      for (var T = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, N = 0; N < f.length; N++) {
        var W = f[N], Y = W.range, Z = W.x - c.x, oe = W.y - c.y, q = (0, Le.default)(Z, oe), le = q <= Y;
        Y === 1 / 0 && T.inRange && T.range !== 1 / 0 && (le = !1), T.target && !(le ? T.inRange && Y !== 1 / 0 ? q / Y < T.distance / T.range : Y === 1 / 0 && T.range !== 1 / 0 || q < T.distance : !T.inRange && q < T.distance) || (T.target = W, T.distance = q, T.range = Y, T.inRange = le, T.delta.x = Z, T.delta.y = oe);
      }
      return T.inRange && (r.x = T.target.x, r.y = T.target.y), i.closest = T, T;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } };
    gt.snap = Xo;
    var Ql = (0, _e.makeModifier)(Xo, "snap");
    gt.default = Ql;
    var ct = {};
    function Uo(e, n) {
      (n == null || n > e.length) && (n = e.length);
      for (var r = 0, i = Array(n); r < n; r++)
        i[r] = e[r];
      return i;
    }
    Object.defineProperty(ct, "__esModule", { value: !0 }), ct.snapSize = ct.default = void 0;
    var qo = { start: function(e) {
      var n = e.state, r = e.edges, i = n.options;
      if (!r)
        return null;
      e.state = { options: { targets: null, relativePoints: [{ x: r.left ? 0 : 1, y: r.top ? 0 : 1 }], offset: i.offset || "self", origin: { x: 0, y: 0 }, range: i.range } }, n.targetFields = n.targetFields || [["width", "height"], ["x", "y"]], gt.snap.start(e), n.offsets = e.state.offsets, e.state = n;
    }, set: function(e) {
      var n, r, i = e.interaction, a = e.state, l = e.coords, d = a.options, c = a.offsets, f = { x: l.x - c[0].x, y: l.y - c[0].y };
      a.options = (0, z.default)({}, d), a.options.targets = [];
      for (var g = 0; g < (d.targets || []).length; g++) {
        var m = (d.targets || [])[g], b = void 0;
        if (b = v.default.func(m) ? m(f.x, f.y, i) : m) {
          for (var x = 0; x < a.targetFields.length; x++) {
            var _ = (n = a.targetFields[x], r = 2, function(T) {
              if (Array.isArray(T))
                return T;
            }(n) || function(T, N) {
              var W = T == null ? null : typeof Symbol < "u" && T[Symbol.iterator] || T["@@iterator"];
              if (W != null) {
                var Y, Z, oe = [], q = !0, le = !1;
                try {
                  for (W = W.call(T); !(q = (Y = W.next()).done) && (oe.push(Y.value), !N || oe.length !== N); q = !0)
                    ;
                } catch (Qe) {
                  le = !0, Z = Qe;
                } finally {
                  try {
                    q || W.return == null || W.return();
                  } finally {
                    if (le)
                      throw Z;
                  }
                }
                return oe;
              }
            }(n, r) || function(T, N) {
              if (T) {
                if (typeof T == "string")
                  return Uo(T, N);
                var W = Object.prototype.toString.call(T).slice(8, -1);
                return W === "Object" && T.constructor && (W = T.constructor.name), W === "Map" || W === "Set" ? Array.from(T) : W === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W) ? Uo(T, N) : void 0;
              }
            }(n, r) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), w = _[0], P = _[1];
            if (w in b || P in b) {
              b.x = b[w], b.y = b[P];
              break;
            }
          }
          a.options.targets.push(b);
        }
      }
      var R = gt.snap.set(e);
      return a.options = d, R;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } };
    ct.snapSize = qo;
    var ec = (0, _e.makeModifier)(qo, "snapSize");
    ct.default = ec;
    var en = {};
    Object.defineProperty(en, "__esModule", { value: !0 }), en.snapEdges = en.default = void 0;
    var Go = { start: function(e) {
      var n = e.edges;
      return n ? (e.state.targetFields = e.state.targetFields || [[n.left ? "left" : "right", n.top ? "top" : "bottom"]], ct.snapSize.start(e)) : null;
    }, set: ct.snapSize.set, defaults: (0, z.default)((0, jt.default)(ct.snapSize.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) };
    en.snapEdges = Go;
    var tc = (0, _e.makeModifier)(Go, "snapEdges");
    en.default = tc;
    var gi = {};
    Object.defineProperty(gi, "__esModule", { value: !0 }), Object.defineProperty(gi, "default", { enumerable: !0, get: function() {
      return Ct.default;
    } });
    var mi = {};
    Object.defineProperty(mi, "__esModule", { value: !0 }), Object.defineProperty(mi, "default", { enumerable: !0, get: function() {
      return Ct.default;
    } });
    var tn = {};
    Object.defineProperty(tn, "__esModule", { value: !0 }), tn.default = void 0;
    var nc = { aspectRatio: Jt.default, restrictEdges: Ze.default, restrict: Me.default, restrictRect: Zt.default, restrictSize: Qt.default, snapEdges: en.default, snap: gt.default, snapSize: ct.default, spring: gi.default, avoid: pi.default, transform: mi.default, rubberband: vi.default };
    tn.default = nc;
    var gr = {};
    Object.defineProperty(gr, "__esModule", { value: !0 }), gr.default = void 0;
    var rc = { id: "modifiers", install: function(e) {
      var n = e.interactStatic;
      for (var r in e.usePlugin(_e.default), e.usePlugin(vr.default), n.modifiers = tn.default, tn.default) {
        var i = tn.default[r], a = i._defaults, l = i._methods;
        a._methods = l, e.defaults.perAction[r] = a;
      }
    } }, ic = rc;
    gr.default = ic;
    var kt = {};
    function yi(e) {
      return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, yi(e);
    }
    function oc(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function bi(e, n) {
      return bi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r;
      }, bi(e, n);
    }
    function ac(e, n) {
      if (n && (yi(n) === "object" || typeof n == "function"))
        return n;
      if (n !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return wi(e);
    }
    function wi(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function mr(e) {
      return mr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      }, mr(e);
    }
    Object.defineProperty(kt, "__esModule", { value: !0 }), kt.default = kt.PointerEvent = void 0;
    var sc = function(e) {
      (function(c, f) {
        if (typeof f != "function" && f !== null)
          throw new TypeError("Super expression must either be null or a function");
        c.prototype = Object.create(f && f.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), f && bi(c, f);
      })(d, e);
      var n, r, i, a, l = (i = d, a = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }(), function() {
        var c, f = mr(i);
        if (a) {
          var g = mr(this).constructor;
          c = Reflect.construct(f, arguments, g);
        } else
          c = f.apply(this, arguments);
        return ac(this, c);
      });
      function d(c, f, g, m, b, x) {
        var _;
        if (function(R, T) {
          if (!(R instanceof T))
            throw new TypeError("Cannot call a class as a function");
        }(this, d), _ = l.call(this, b), k.pointerExtend(wi(_), g), g !== f && k.pointerExtend(wi(_), f), _.timeStamp = x, _.originalEvent = g, _.type = c, _.pointerId = k.getPointerId(f), _.pointerType = k.getPointerType(f), _.target = m, _.currentTarget = null, c === "tap") {
          var w = b.getPointerIndex(f);
          _.dt = _.timeStamp - b.pointers[w].downTime;
          var P = _.timeStamp - b.tapTime;
          _.double = !!b.prevTap && b.prevTap.type !== "doubletap" && b.prevTap.target === _.target && P < 500;
        } else
          c === "doubletap" && (_.dt = f.timeStamp - b.tapTime, _.double = !0);
        return _;
      }
      return n = d, (r = [{ key: "_subtractOrigin", value: function(c) {
        var f = c.x, g = c.y;
        return this.pageX -= f, this.pageY -= g, this.clientX -= f, this.clientY -= g, this;
      } }, { key: "_addOrigin", value: function(c) {
        var f = c.x, g = c.y;
        return this.pageX += f, this.pageY += g, this.clientX += f, this.clientY += g, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && oc(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), d;
    }(we.BaseEvent);
    kt.PointerEvent = kt.default = sc;
    var _n = {};
    Object.defineProperty(_n, "__esModule", { value: !0 }), _n.default = void 0;
    var yr = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(e) {
      e.pointerEvents = yr, e.defaults.actions.pointerEvents = yr.defaults, (0, z.default)(e.actions.phaselessTypes, yr.types);
    }, listeners: { "interactions:new": function(e) {
      var n = e.interaction;
      n.prevTap = null, n.tapTime = 0;
    }, "interactions:update-pointer": function(e) {
      var n = e.down, r = e.pointerInfo;
      !n && r.hold || (r.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(e, n) {
      var r = e.interaction, i = e.pointer, a = e.event, l = e.eventTarget;
      e.duplicate || r.pointerIsDown && !r.pointerWasMoved || (r.pointerIsDown && xi(e), mt({ interaction: r, pointer: i, event: a, eventTarget: l, type: "move" }, n));
    }, "interactions:down": function(e, n) {
      (function(r, i) {
        for (var a = r.interaction, l = r.pointer, d = r.event, c = r.eventTarget, f = r.pointerIndex, g = a.pointers[f].hold, m = I.getPath(c), b = { interaction: a, pointer: l, event: d, eventTarget: c, type: "hold", targets: [], path: m, node: null }, x = 0; x < m.length; x++) {
          var _ = m[x];
          b.node = _, i.fire("pointerEvents:collect-targets", b);
        }
        if (b.targets.length) {
          for (var w = 1 / 0, P = 0; P < b.targets.length; P++) {
            var R = b.targets[P].eventable.options.holdDuration;
            R < w && (w = R);
          }
          g.duration = w, g.timeout = setTimeout(function() {
            mt({ interaction: a, eventTarget: c, pointer: l, event: d, type: "hold" }, i);
          }, w);
        }
      })(e, n), mt(e, n);
    }, "interactions:up": function(e, n) {
      xi(e), mt(e, n), function(r, i) {
        var a = r.interaction, l = r.pointer, d = r.event, c = r.eventTarget;
        a.pointerWasMoved || mt({ interaction: a, eventTarget: c, pointer: l, event: d, type: "tap" }, i);
      }(e, n);
    }, "interactions:cancel": function(e, n) {
      xi(e), mt(e, n);
    } }, PointerEvent: kt.PointerEvent, fire: mt, collectEventTargets: Ko, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
    function mt(e, n) {
      var r = e.interaction, i = e.pointer, a = e.event, l = e.eventTarget, d = e.type, c = e.targets, f = c === void 0 ? Ko(e, n) : c, g = new kt.PointerEvent(d, i, a, l, r, n.now());
      n.fire("pointerEvents:new", { pointerEvent: g });
      for (var m = { interaction: r, pointer: i, event: a, eventTarget: l, targets: f, type: d, pointerEvent: g }, b = 0; b < f.length; b++) {
        var x = f[b];
        for (var _ in x.props || {})
          g[_] = x.props[_];
        var w = (0, He.default)(x.eventable, x.node);
        if (g._subtractOrigin(w), g.eventable = x.eventable, g.currentTarget = x.node, x.eventable.fire(g), g._addOrigin(w), g.immediatePropagationStopped || g.propagationStopped && b + 1 < f.length && f[b + 1].node !== g.currentTarget)
          break;
      }
      if (n.fire("pointerEvents:fired", m), d === "tap") {
        var P = g.double ? mt({ interaction: r, pointer: i, event: a, eventTarget: l, type: "doubletap" }, n) : g;
        r.prevTap = P, r.tapTime = P.timeStamp;
      }
      return g;
    }
    function Ko(e, n) {
      var r = e.interaction, i = e.pointer, a = e.event, l = e.eventTarget, d = e.type, c = r.getPointerIndex(i), f = r.pointers[c];
      if (d === "tap" && (r.pointerWasMoved || !f || f.downTarget !== l))
        return [];
      for (var g = I.getPath(l), m = { interaction: r, pointer: i, event: a, eventTarget: l, type: d, path: g, targets: [], node: null }, b = 0; b < g.length; b++) {
        var x = g[b];
        m.node = x, n.fire("pointerEvents:collect-targets", m);
      }
      return d === "hold" && (m.targets = m.targets.filter(function(_) {
        var w, P;
        return _.eventable.options.holdDuration === ((w = r.pointers[c]) == null || (P = w.hold) == null ? void 0 : P.duration);
      })), m.targets;
    }
    function xi(e) {
      var n = e.interaction, r = e.pointerIndex, i = n.pointers[r].hold;
      i && i.timeout && (clearTimeout(i.timeout), i.timeout = null);
    }
    var lc = yr;
    _n.default = lc;
    var br = {};
    function cc(e) {
      var n = e.interaction;
      n.holdIntervalHandle && (clearInterval(n.holdIntervalHandle), n.holdIntervalHandle = null);
    }
    Object.defineProperty(br, "__esModule", { value: !0 }), br.default = void 0;
    var uc = { id: "pointer-events/holdRepeat", install: function(e) {
      e.usePlugin(_n.default);
      var n = e.pointerEvents;
      n.defaults.holdRepeatInterval = 0, n.types.holdrepeat = e.actions.phaselessTypes.holdrepeat = !0;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(e, n) {
      return e["pointerEvents:".concat(n)] = cc, e;
    }, { "pointerEvents:new": function(e) {
      var n = e.pointerEvent;
      n.type === "hold" && (n.count = (n.count || 0) + 1);
    }, "pointerEvents:fired": function(e, n) {
      var r = e.interaction, i = e.pointerEvent, a = e.eventTarget, l = e.targets;
      if (i.type === "hold" && l.length) {
        var d = l[0].eventable.options.holdRepeatInterval;
        d <= 0 || (r.holdIntervalHandle = setTimeout(function() {
          n.pointerEvents.fire({ interaction: r, eventTarget: a, type: "hold", pointer: i, event: i }, n);
        }, d));
      }
    } }) }, fc = uc;
    br.default = fc;
    var wr = {};
    function dc(e) {
      return (0, z.default)(this.events.options, e), this;
    }
    Object.defineProperty(wr, "__esModule", { value: !0 }), wr.default = void 0;
    var pc = { id: "pointer-events/interactableTargets", install: function(e) {
      var n = e.Interactable;
      n.prototype.pointerEvents = dc;
      var r = n.prototype._backCompatOption;
      n.prototype._backCompatOption = function(i, a) {
        var l = r.call(this, i, a);
        return l === this && (this.events.options[i] = a), l;
      };
    }, listeners: { "pointerEvents:collect-targets": function(e, n) {
      var r = e.targets, i = e.node, a = e.type, l = e.eventTarget;
      n.interactables.forEachMatch(i, function(d) {
        var c = d.events, f = c.options;
        c.types[a] && c.types[a].length && d.testIgnoreAllow(f, i, l) && r.push({ node: i, eventable: c, props: { interactable: d } });
      });
    }, "interactable:new": function(e) {
      var n = e.interactable;
      n.events.getRect = function(r) {
        return n.getRect(r);
      };
    }, "interactable:set": function(e, n) {
      var r = e.interactable, i = e.options;
      (0, z.default)(r.events.options, n.pointerEvents.defaults), (0, z.default)(r.events.options, i.pointerEvents || {});
    } } }, hc = pc;
    wr.default = hc;
    var xr = {};
    Object.defineProperty(xr, "__esModule", { value: !0 }), xr.default = void 0;
    var vc = { id: "pointer-events", install: function(e) {
      e.usePlugin(_n), e.usePlugin(br.default), e.usePlugin(wr.default);
    } }, gc = vc;
    xr.default = gc;
    var En = {};
    function Jo(e) {
      var n = e.Interactable;
      e.actions.phases.reflow = !0, n.prototype.reflow = function(r) {
        return function(i, a, l) {
          for (var d = i.getAllElements(), c = l.window.Promise, f = c ? [] : null, g = function() {
            var b = d[m], x = i.getRect(b);
            if (!x)
              return "break";
            var _ = V.find(l.interactions.list, function(N) {
              return N.interacting() && N.interactable === i && N.element === b && N.prepared.name === a.name;
            }), w = void 0;
            if (_)
              _.move(), f && (w = _._reflowPromise || new c(function(N) {
                _._reflowResolve = N;
              }));
            else {
              var P = (0, J.tlbrToXywh)(x), R = { page: { x: P.x, y: P.y }, client: { x: P.x, y: P.y }, timeStamp: l.now() }, T = k.coordsToEvent(R);
              w = function(N, W, Y, Z, oe) {
                var q = N.interactions.new({ pointerType: "reflow" }), le = { interaction: q, event: oe, pointer: oe, eventTarget: Y, phase: "reflow" };
                q.interactable = W, q.element = Y, q.prevEvent = oe, q.updatePointer(oe, oe, Y, !0), k.setZeroCoords(q.coords.delta), (0, Ae.copyAction)(q.prepared, Z), q._doPhase(le);
                var Qe = N.window.Promise, pe = Qe ? new Qe(function(Ht) {
                  q._reflowResolve = Ht;
                }) : void 0;
                return q._reflowPromise = pe, q.start(Z, W, Y), q._interacting ? (q.move(le), q.end(oe)) : (q.stop(), q._reflowResolve()), q.removePointer(oe, oe), pe;
              }(l, i, b, a, T);
            }
            f && f.push(w);
          }, m = 0; m < d.length && g() !== "break"; m++)
            ;
          return f && c.all(f).then(function() {
            return i;
          });
        }(this, r, e);
      };
    }
    Object.defineProperty(En, "__esModule", { value: !0 }), En.default = void 0, En.install = Jo;
    var mc = { id: "reflow", install: Jo, listeners: { "interactions:stop": function(e, n) {
      var r = e.interaction;
      r.pointerType === "reflow" && (r._reflowResolve && r._reflowResolve(), V.remove(n.interactions.list, r));
    } } }, yc = mc;
    En.default = yc;
    var At = {};
    Object.defineProperty(At, "__esModule", { value: !0 }), At.default = void 0, Te.default.use(qt.default), Te.default.use(zt.default), Te.default.use(xr.default), Te.default.use(Kt.default), Te.default.use(gr.default), Te.default.use(Kn.default), Te.default.use(Vn.default), Te.default.use(pt.default), Te.default.use(En.default);
    var bc = Te.default;
    At.default = bc, Te.default.default = Te.default;
    var Nt = { exports: {} };
    function _i(e) {
      return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, _i(e);
    }
    Object.defineProperty(Nt.exports, "__esModule", { value: !0 }), Nt.exports.default = void 0;
    var wc = At.default;
    if (Nt.exports.default = wc, _i(Nt) === "object" && Nt)
      try {
        Nt.exports = At.default;
      } catch {
      }
    return At.default.default = At.default, Nt.exports;
  });
})(bs);
var lf = bs.exports;
const ba = /* @__PURE__ */ ys(lf);
function cf(t) {
  let o = 0, s;
  for (let u = 0, p = t.length; u < p; u++)
    s = t[u].y + t[u].h, s > o && (o = s);
  return o;
}
function Wi(t) {
  const o = Array(t.length);
  for (let s = 0, u = t.length; s < u; s++)
    o[s] = uf(t[s]);
  return o;
}
function uf(t) {
  return JSON.parse(JSON.stringify(t));
}
function ws(t, o) {
  return !(t === o || t.x + t.w <= o.x || t.x >= o.x + o.w || t.y + t.h <= o.y || t.y >= o.y + o.h);
}
function Dn(t, o) {
  const s = _s(t), u = Es(t), p = Array(t.length);
  for (let h = 0, y = u.length; h < y; h++) {
    let v = u[h];
    v.static || (v = ff(s, v, o), s.push(v)), p[t.indexOf(v)] = v, v.moved = !1;
  }
  return p;
}
function ff(t, o, s) {
  if (s)
    for (; o.y > 0 && !$r(t, o); )
      o.y--;
  let u;
  for (; u = $r(t, o); )
    o.y = u.y + u.h;
  return o;
}
function df(t, o) {
  const s = _s(t);
  for (let u = 0, p = t.length; u < p; u++) {
    const h = t[u];
    if (h.x + h.w > o.cols && (h.x = o.cols - h.w), h.x < 0 && (h.x = 0, h.w = o.cols), !h.static)
      s.push(h);
    else
      for (; $r(s, h); )
        h.y++;
  }
  return t;
}
function wa(t, o) {
  for (let s = 0, u = t.length; s < u; s++)
    if (t[s].i === o)
      return t[s];
}
function $r(t, o) {
  for (let s = 0, u = t.length; s < u; s++)
    if (ws(t[s], o))
      return t[s];
}
function xs(t, o) {
  return t.filter((s) => ws(s, o));
}
function _s(t) {
  return t.filter((o) => o.static);
}
function Bi(t, o, s, u, p, h = !1) {
  if (o.static)
    return t;
  const y = o.x, v = o.y, M = u && o.y > u;
  typeof s == "number" && (o.x = s), typeof u == "number" && (o.y = u), o.moved = !0;
  let O = Es(t);
  M && (O = O.reverse());
  const j = xs(O, o);
  if (h && j.length)
    return o.x = y, o.y = v, o.moved = !1, t;
  for (let S = 0, H = j.length; S < H; S++) {
    const $ = j[S];
    $.moved || o.y > $.y && o.y - $.y > $.h / 4 || ($.static ? t = xa(t, $, o, p) : t = xa(t, o, $, p));
  }
  return t;
}
function xa(t, o, s, u) {
  if (u) {
    const h = {
      x: s.x,
      y: s.y,
      w: s.w,
      h: s.h,
      i: "-1"
    };
    if (h.y = Math.max(o.y - s.h, 0), !$r(t, h))
      return Bi(t, s, void 0, h.y, !1);
  }
  return Bi(t, s, void 0, s.y + 1, !1);
}
function pf(t, o, s, u) {
  const p = "translate3d(" + o + "px," + t + "px, 0)";
  return {
    transform: p,
    WebkitTransform: p,
    MozTransform: p,
    msTransform: p,
    OTransform: p,
    width: s + "px",
    height: u + "px",
    position: "absolute"
  };
}
function hf(t, o, s, u) {
  const p = "translate3d(" + o * -1 + "px," + t + "px, 0)";
  return {
    transform: p,
    WebkitTransform: p,
    MozTransform: p,
    msTransform: p,
    OTransform: p,
    width: s + "px",
    height: u + "px",
    position: "absolute"
  };
}
function vf(t, o, s, u) {
  return {
    top: t + "px",
    left: o + "px",
    width: s + "px",
    height: u + "px",
    position: "absolute"
  };
}
function gf(t, o, s, u) {
  return {
    top: t + "px",
    right: o + "px",
    width: s + "px",
    height: u + "px",
    position: "absolute"
  };
}
function Es(t) {
  return [].concat(t).sort(function(o, s) {
    return o.y === s.y && o.x === s.x ? 0 : o.y > s.y || o.y === s.y && o.x > s.x ? 1 : -1;
  });
}
function mf(t, o = "Layout") {
  const s = ["x", "y", "w", "h"];
  if (!Array.isArray(t))
    throw new Error(o + " must be an array!");
  for (let u = 0, p = t.length; u < p; u++) {
    const h = t[u];
    for (let y = 0; y < s.length; y++)
      if (typeof h[s[y]] != "number")
        throw new Error("VueGridLayout: " + o + "[" + u + "]." + s[y] + " must be a number!");
    if (h.i && h.i, h.static !== void 0 && typeof h.static != "boolean")
      throw new Error("VueGridLayout: " + o + "[" + u + "].static must be a boolean!");
  }
}
function _a(t) {
  return yf(t);
}
function yf(t) {
  const o = t.target.offsetParent || document.body, s = o === document.body ? { left: 0, top: 0 } : o.getBoundingClientRect(), u = t.clientX + o.scrollLeft - s.left, p = t.clientY + o.scrollTop - s.top;
  return { x: u, y: p };
}
function Ea(t, o, s, u) {
  return bf(t) ? {
    deltaX: s - t,
    deltaY: u - o,
    lastX: t,
    lastY: o,
    x: s,
    y: u
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: s,
    lastY: u,
    x: s,
    y: u
  };
}
function bf(t) {
  return typeof t == "number" && !isNaN(t);
}
let wf = "auto";
function xf() {
  return typeof document < "u";
}
function Os() {
  return typeof window < "u";
}
function Oa() {
  return xf() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : wf;
}
function _f(t, o) {
  if (!Os) {
    o();
    return;
  }
  window.addEventListener(t, o);
}
function Ef(t, o) {
  Os && window.removeEventListener(t, o);
}
const Of = /* @__PURE__ */ Nu(
  {
    name: "GridItem",
    props: {
      /*cols: {
       type: Number,
       required: true
       },*/
      /*containerWidth: {
                   type: Number,
                   required: true
      
                   },
                   rowHeight: {
                   type: Number,
                   required: true
                   },
                   margin: {
                   type: Array,
                   required: true
                   },
                   maxRows: {
                   type: Number,
                   required: true
                   },*/
      isDraggable: {
        type: Boolean,
        required: !1,
        default: null
      },
      isResizable: {
        type: Boolean,
        required: !1,
        default: null
      },
      /*useCssTransforms: {
       type: Boolean,
       required: true
       },
       */
      static: {
        type: Boolean,
        required: !1,
        default: !1
      },
      minH: {
        type: Number,
        required: !1,
        default: 1
      },
      minW: {
        type: Number,
        required: !1,
        default: 1
      },
      maxH: {
        type: Number,
        required: !1,
        default: 1 / 0
      },
      maxW: {
        type: Number,
        required: !1,
        default: 1 / 0
      },
      x: {
        type: Number,
        required: !0
      },
      y: {
        type: Number,
        required: !0
      },
      w: {
        type: Number,
        required: !0
      },
      h: {
        type: Number,
        required: !0
      },
      i: {
        required: !0
      },
      dragIgnoreFrom: {
        type: String,
        required: !1,
        default: "a, button"
      },
      dragAllowFrom: {
        type: String,
        required: !1,
        default: null
      },
      resizeIgnoreFrom: {
        type: String,
        required: !1,
        default: "a, button"
      }
    },
    inject: ["eventBus"],
    data: function() {
      return {
        cols: 1,
        containerWidth: 100,
        rowHeight: 30,
        margin: [10, 10],
        maxRows: 1 / 0,
        draggable: null,
        resizable: null,
        useCssTransforms: !0,
        isDragging: !1,
        dragging: null,
        isResizing: !1,
        resizing: null,
        lastX: NaN,
        lastY: NaN,
        lastW: NaN,
        lastH: NaN,
        style: {},
        rtl: !1,
        dragEventSet: !1,
        resizeEventSet: !1,
        previousW: null,
        previousH: null,
        previousX: null,
        previousY: null,
        innerX: this.x,
        innerY: this.y,
        innerW: this.w,
        innerH: this.h
      };
    },
    created() {
      let t = this;
      t.updateWidthHandler = function(o) {
        t.updateWidth(o);
      }, t.compactHandler = function(o) {
        t.compact(o);
      }, t.setDraggableHandler = function(o) {
        t.isDraggable === null && (t.draggable = o);
      }, t.setResizableHandler = function(o) {
        t.isResizable === null && (t.resizable = o);
      }, t.setRowHeightHandler = function(o) {
        t.rowHeight = o;
      }, t.setMaxRowsHandler = function(o) {
        t.maxRows = o;
      }, t.directionchangeHandler = () => {
        this.rtl = Oa() === "rtl", this.compact();
      }, t.setColNum = (o) => {
        t.cols = parseInt(o);
      }, this.eventBus.on("updateWidth", t.updateWidthHandler), this.eventBus.on("compact", t.compactHandler), this.eventBus.on("setDraggable", t.setDraggableHandler), this.eventBus.on("setResizable", t.setResizableHandler), this.eventBus.on("setRowHeight", t.setRowHeightHandler), this.eventBus.on("setMaxRows", t.setMaxRowsHandler), this.eventBus.on("directionchange", t.directionchangeHandler), this.eventBus.on("setColNum", t.setColNum), this.rtl = Oa() === "rtl";
    },
    beforeUnmount: function() {
      let t = this;
      this.eventBus.off("updateWidth", t.updateWidthHandler), this.eventBus.off("compact", t.compactHandler), this.eventBus.off("setDraggable", t.setDraggableHandler), this.eventBus.off("setResizable", t.setResizableHandler), this.eventBus.off("setRowHeight", t.setRowHeightHandler), this.eventBus.off("setMaxRows", t.setMaxRowsHandler), this.eventBus.off("directionchange", t.directionchangeHandler), this.eventBus.off("setColNum", t.setColNum), this.interactObj && this.interactObj.unset();
    },
    mounted: function() {
      this.cols = this.$parent.colNum, this.rowHeight = this.$parent.rowHeight, this.containerWidth = this.$parent.width !== null ? this.$parent.width : 100, this.margin = this.$parent.margin !== void 0 ? this.$parent.margin : [10, 10], this.maxRows = this.$parent.maxRows, this.isDraggable === null ? this.draggable = this.$parent.isDraggable : this.draggable = this.isDraggable, this.isResizable === null ? this.resizable = this.$parent.isResizable : this.resizable = this.isResizable, this.useCssTransforms = this.$parent.useCssTransforms, this.createStyle();
    },
    watch: {
      isDraggable: function() {
        this.draggable = this.isDraggable;
      },
      static: function() {
        this.tryMakeDraggable(), this.tryMakeResizable();
      },
      draggable: function() {
        this.tryMakeDraggable();
      },
      isResizable: function() {
        this.resizable = this.isResizable;
      },
      resizable: function() {
        this.tryMakeResizable();
      },
      rowHeight: function() {
        this.createStyle(), this.emitContainerResized();
      },
      cols: function() {
        this.tryMakeResizable(), this.createStyle(), this.emitContainerResized();
      },
      containerWidth: function() {
        this.tryMakeResizable(), this.createStyle(), this.emitContainerResized();
      },
      x: function(t) {
        this.innerX = t, this.createStyle();
      },
      y: function(t) {
        this.innerY = t, this.createStyle();
      },
      h: function(t) {
        this.innerH = t, this.createStyle();
      },
      w: function(t) {
        this.innerW = t, this.createStyle();
      },
      renderRtl: function() {
        this.tryMakeResizable(), this.createStyle();
      },
      minH: function() {
        this.tryMakeResizable();
      },
      maxH: function() {
        this.tryMakeResizable();
      },
      minW: function() {
        this.tryMakeResizable();
      },
      maxW: function() {
        this.tryMakeResizable();
      },
      "$parent.margin": function(t) {
        !t || t[0] == this.margin[0] && t[1] == this.margin[1] || (this.margin = t.map((o) => Number(o)), this.createStyle(), this.emitContainerResized());
      }
    },
    computed: {
      classObj() {
        return {
          "vue-resizable": this.resizableAndNotStatic,
          static: this.static,
          resizing: this.isResizing,
          "vue-draggable-dragging": this.isDragging,
          cssTransforms: this.useCssTransforms,
          "render-rtl": this.renderRtl,
          "disable-userselect": this.isDragging,
          "no-touch": this.isAndroid && this.draggableOrResizableAndNotStatic
        };
      },
      resizableAndNotStatic() {
        return this.resizable && !this.static;
      },
      draggableOrResizableAndNotStatic() {
        return (this.draggable || this.resizable) && !this.static;
      },
      isAndroid() {
        return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
      },
      renderRtl() {
        return this.$parent.isMirrored ? !this.rtl : this.rtl;
      },
      resizableHandleClass() {
        return this.renderRtl ? "vue-resizable-handle vue-rtl-resizable-handle" : "vue-resizable-handle";
      }
    },
    methods: {
      createStyle: function() {
        this.x + this.w > this.cols ? (this.innerX = 0, this.innerW = this.w > this.cols ? this.cols : this.w) : (this.innerX = this.x, this.innerW = this.w);
        let t = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH);
        this.isDragging && (t.top = this.dragging.top, this.renderRtl ? t.right = this.dragging.left : t.left = this.dragging.left), this.isResizing && (t.width = this.resizing.width, t.height = this.resizing.height);
        let o;
        this.useCssTransforms ? this.renderRtl ? o = hf(t.top, t.right, t.width, t.height) : o = pf(t.top, t.left, t.width, t.height) : this.renderRtl ? o = gf(t.top, t.right, t.width, t.height) : o = vf(t.top, t.left, t.width, t.height), this.style = o;
      },
      emitContainerResized() {
        let t = {
          height: 0,
          width: 0
        };
        for (let o of ["width", "height"]) {
          let u = this.style[o].match(/^(\d+)px$/);
          if (!u)
            return;
          t[o] = u[1];
        }
        this.$emit("container-resized", this.i, this.h, this.w, t.height, t.width);
      },
      handleResize: function(t) {
        if (this.static)
          return;
        const o = _a(t);
        if (o == null)
          return;
        const { x: s, y: u } = o, p = { width: 0, height: 0 };
        let h;
        switch (t.type) {
          case "resizestart": {
            this.previousW = this.innerW, this.previousH = this.innerH, h = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH), p.width = h.width, p.height = h.height, this.resizing = p, this.isResizing = !0;
            break;
          }
          case "resizemove": {
            const y = Ea(this.lastW, this.lastH, s, u);
            this.renderRtl ? p.width = this.resizing.width - y.deltaX : p.width = this.resizing.width + y.deltaX, p.height = this.resizing.height + y.deltaY, this.resizing = p;
            break;
          }
          case "resizeend": {
            h = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH), p.width = h.width, p.height = h.height, this.resizing = null, this.isResizing = !1;
            break;
          }
        }
        h = this.calcWH(p.height, p.width), h.w < this.minW && (h.w = this.minW), h.w > this.maxW && (h.w = this.maxW), h.h < this.minH && (h.h = this.minH), h.h > this.maxH && (h.h = this.maxH), h.h < 1 && (h.h = 1), h.w < 1 && (h.w = 1), this.lastW = s, this.lastH = u, (this.innerW !== h.w || this.innerH !== h.h) && this.$emit("resize", this.i, h.h, h.w, p.height, p.width), t.type === "resizeend" && (this.previousW !== this.innerW || this.previousH !== this.innerH) && this.$emit("resized", this.i, h.h, h.w, p.height, p.width), this.eventBus.emit("resizeEvent", { eventType: t.type, i: this.i, x: this.innerX, y: this.innerY, h: h.h, w: h.w });
      },
      handleDrag(t) {
        if (this.static || this.isResizing)
          return;
        const o = _a(t);
        if (o === null)
          return;
        const { x: s, y: u } = o;
        let p = { top: 0, left: 0 };
        switch (t.type) {
          case "dragstart": {
            this.previousX = this.innerX, this.previousY = this.innerY;
            let y = t.target.offsetParent.getBoundingClientRect(), v = t.target.getBoundingClientRect();
            this.renderRtl ? p.left = (v.right - y.right) * -1 : p.left = v.left - y.left, p.top = v.top - y.top, this.dragging = p, this.isDragging = !0;
            break;
          }
          case "dragend": {
            if (!this.isDragging)
              return;
            let y = t.target.offsetParent.getBoundingClientRect(), v = t.target.getBoundingClientRect();
            this.renderRtl ? p.left = (v.right - y.right) * -1 : p.left = v.left - y.left, p.top = v.top - y.top, this.dragging = null, this.isDragging = !1;
            break;
          }
          case "dragmove": {
            const y = Ea(this.lastX, this.lastY, s, u);
            this.renderRtl ? p.left = this.dragging.left - y.deltaX : p.left = this.dragging.left + y.deltaX, p.top = this.dragging.top + y.deltaY, this.dragging = p;
            break;
          }
        }
        let h;
        this.renderRtl ? h = this.calcXY(p.top, p.left) : h = this.calcXY(p.top, p.left), this.lastX = s, this.lastY = u, (this.innerX !== h.x || this.innerY !== h.y) && this.$emit("move", this.i, h.x, h.y), t.type === "dragend" && (this.previousX !== this.innerX || this.previousY !== this.innerY) && this.$emit("moved", this.i, h.x, h.y), this.eventBus.emit("dragEvent", { eventType: t.type, i: this.i, x: h.x, y: h.y, h: this.innerH, w: this.innerW });
      },
      calcPosition: function(t, o, s, u) {
        const p = this.calcColWidth();
        let h;
        return this.renderRtl ? h = {
          right: Math.round(p * t + (t + 1) * this.margin[0]),
          top: Math.round(this.rowHeight * o + (o + 1) * this.margin[1]),
          // 0 * Infinity === NaN, which causes problems with resize constriants;
          // Fix this if it occurs.
          // Note we do it here rather than later because Math.round(Infinity) causes deopt
          width: s === 1 / 0 ? s : Math.round(p * s + Math.max(0, s - 1) * this.margin[0]),
          height: u === 1 / 0 ? u : Math.round(this.rowHeight * u + Math.max(0, u - 1) * this.margin[1])
        } : h = {
          left: Math.round(p * t + (t + 1) * this.margin[0]),
          top: Math.round(this.rowHeight * o + (o + 1) * this.margin[1]),
          // 0 * Infinity === NaN, which causes problems with resize constriants;
          // Fix this if it occurs.
          // Note we do it here rather than later because Math.round(Infinity) causes deopt
          width: s === 1 / 0 ? s : Math.round(p * s + Math.max(0, s - 1) * this.margin[0]),
          height: u === 1 / 0 ? u : Math.round(this.rowHeight * u + Math.max(0, u - 1) * this.margin[1])
        }, h;
      },
      /**
       * Translate x and y coordinates from pixels to grid units.
       * @param  {Number} top  Top position (relative to parent) in pixels.
       * @param  {Number} left Left position (relative to parent) in pixels.
       * @return {Object} x and y in grid units.
       */
      // TODO check if this function needs change in order to support rtl.
      calcXY(t, o) {
        const s = this.calcColWidth();
        let u = Math.round((o - this.margin[0]) / (s + this.margin[0])), p = Math.round((t - this.margin[1]) / (this.rowHeight + this.margin[1]));
        return u = Math.max(Math.min(u, this.cols - this.innerW), 0), p = Math.max(Math.min(p, this.maxRows - this.innerH), 0), { x: u, y: p };
      },
      // Helper for generating column width
      calcColWidth() {
        return (this.containerWidth - this.margin[0] * (this.cols + 1)) / this.cols;
      },
      /**
       * Given a height and width in pixel values, calculate grid units.
       * @param  {Number} height Height in pixels.
       * @param  {Number} width  Width in pixels.
       * @param  {Boolean} autoSizeFlag  function autoSize identifier.
       * @return {Object} w, h as grid units.
       */
      calcWH(t, o, s = !1) {
        const u = this.calcColWidth();
        let p = Math.round((o + this.margin[0]) / (u + this.margin[0])), h = 0;
        return s ? h = Math.ceil((t + this.margin[1]) / (this.rowHeight + this.margin[1])) : h = Math.round((t + this.margin[1]) / (this.rowHeight + this.margin[1])), p = Math.max(Math.min(p, this.cols - this.innerX), 0), h = Math.max(Math.min(h, this.maxRows - this.innerY), 0), { w: p, h };
      },
      updateWidth: function(t, o) {
        this.containerWidth = t, o != null && (this.cols = o);
      },
      compact: function() {
        this.createStyle();
      },
      tryMakeDraggable: function() {
        const t = this;
        if ((this.interactObj === null || this.interactObj === void 0) && (this.interactObj = ba(this.$refs.item)), this.draggable && !this.static) {
          const o = {
            ignoreFrom: this.dragIgnoreFrom,
            allowFrom: this.dragAllowFrom
          };
          this.interactObj.draggable(o), this.dragEventSet || (this.dragEventSet = !0, this.interactObj.on("dragstart dragmove dragend", function(s) {
            t.handleDrag(s);
          }));
        } else
          this.interactObj.draggable({
            enabled: !1
          });
      },
      tryMakeResizable: function() {
        const t = this;
        if ((this.interactObj === null || this.interactObj === void 0) && (this.interactObj = ba(this.$refs.item)), this.resizable && !this.static) {
          let o = this.calcPosition(0, 0, this.maxW, this.maxH), s = this.calcPosition(0, 0, this.minW, this.minH);
          const u = {
            preserveAspectRatio: !0,
            // allowFrom: "." + this.resizableHandleClass,
            edges: {
              left: !1,
              right: "." + this.resizableHandleClass,
              bottom: "." + this.resizableHandleClass,
              top: !1
            },
            ignoreFrom: this.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: s.height,
                width: s.width
              },
              max: {
                height: o.height,
                width: o.width
              }
            }
          };
          this.interactObj.resizable(u), this.resizeEventSet || (this.resizeEventSet = !0, this.interactObj.on("resizestart resizemove resizeend", function(p) {
            t.handleResize(p);
          }));
        } else
          this.interactObj.resizable({
            enabled: !1
          });
      },
      autoSize: function() {
        this.previousW = this.innerW, this.previousH = this.innerH;
        let t = this.$slots.default[0].elm.getBoundingClientRect(), o = this.calcWH(t.height, t.width, !0);
        o.w < this.minW && (o.w = this.minW), o.w > this.maxW && (o.w = this.maxW), o.h < this.minH && (o.h = this.minH), o.h > this.maxH && (o.h = this.maxH), o.h < 1 && (o.h = 1), o.w < 1 && (o.w = 1), (this.innerW !== o.w || this.innerH !== o.h) && this.$emit("resize", this.i, o.h, o.w, t.height, t.width), (this.previousW !== o.w || this.previousH !== o.h) && (this.$emit("resized", this.i, o.h, o.w, t.height, t.width), this.eventBus.emit("resizeEvent", { eventType: "resizeend", i: this.i, x: this.innerX, y: this.innerY, h: o.h, w: o.w }));
      }
    }
  }
), Ss = (t, o) => {
  const s = t.__vccOpts || t;
  for (const [u, p] of o)
    s[u] = p;
  return s;
};
function Sf(t, o, s, u, p, h) {
  return kn(), $i("div", {
    ref: "item",
    class: In(["vue-grid-item", t.classObj]),
    style: An(t.style)
  }, [
    os(t.$slots, "default"),
    t.resizableAndNotStatic ? (kn(), $i("span", {
      key: 0,
      ref: "handle",
      class: In(t.resizableHandleClass)
    }, null, 2)) : Ju("", !0)
  ], 6);
}
const Ps = /* @__PURE__ */ Ss(Of, [["render", Sf]]);
function Pf(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(o, s) {
    var u = t.get(o);
    u && u.push(s) || t.set(o, [s]);
  }, off: function(o, s) {
    var u = t.get(o);
    u && u.splice(u.indexOf(s) >>> 0, 1);
  }, emit: function(o, s) {
    (t.get(o) || []).slice().map(function(u) {
      u(s);
    }), (t.get("*") || []).slice().map(function(u) {
      u(o, s);
    });
  } };
}
var Ts = { exports: {} }, Tf = Ts.exports = {};
Tf.forEach = function(t, o) {
  for (var s = 0; s < t.length; s++) {
    var u = o(t[s]);
    if (u)
      return u;
  }
};
var Ms = Ts.exports, Mf = function(t) {
  var o = t.stateHandler.getState;
  function s(y) {
    var v = o(y);
    return v && !!v.isDetectable;
  }
  function u(y) {
    o(y).isDetectable = !0;
  }
  function p(y) {
    return !!o(y).busy;
  }
  function h(y, v) {
    o(y).busy = !!v;
  }
  return {
    isDetectable: s,
    markAsDetectable: u,
    isBusy: p,
    markBusy: h
  };
}, Df = function(t) {
  var o = {};
  function s(y) {
    var v = t.get(y);
    return v === void 0 ? [] : o[v] || [];
  }
  function u(y, v) {
    var M = t.get(y);
    o[M] || (o[M] = []), o[M].push(v);
  }
  function p(y, v) {
    for (var M = s(y), O = 0, j = M.length; O < j; ++O)
      if (M[O] === v) {
        M.splice(O, 1);
        break;
      }
  }
  function h(y) {
    var v = s(y);
    v && (v.length = 0);
  }
  return {
    get: s,
    add: u,
    removeListener: p,
    removeAllListeners: h
  };
}, jf = function() {
  var t = 1;
  function o() {
    return t++;
  }
  return {
    generate: o
  };
}, Rf = function(t) {
  var o = t.idGenerator, s = t.stateHandler.getState;
  function u(h) {
    var y = s(h);
    return y && y.id !== void 0 ? y.id : null;
  }
  function p(h) {
    var y = s(h);
    if (!y)
      throw new Error("setId required the element to have a resize detection state.");
    var v = o.generate();
    return y.id = v, v;
  }
  return {
    get: u,
    set: p
  };
}, zf = function(t) {
  function o() {
  }
  var s = {
    log: o,
    warn: o,
    error: o
  };
  if (!t && window.console) {
    var u = function(p, h) {
      p[h] = function() {
        var v = console[h];
        if (v.apply)
          v.apply(console, arguments);
        else
          for (var M = 0; M < arguments.length; M++)
            v(arguments[M]);
      };
    };
    u(s, "log"), u(s, "warn"), u(s, "error");
  }
  return s;
}, Ds = { exports: {} }, js = Ds.exports = {};
js.isIE = function(t) {
  function o() {
    var u = navigator.userAgent.toLowerCase();
    return u.indexOf("msie") !== -1 || u.indexOf("trident") !== -1 || u.indexOf(" edge/") !== -1;
  }
  if (!o())
    return !1;
  if (!t)
    return !0;
  var s = function() {
    var u, p = 3, h = document.createElement("div"), y = h.getElementsByTagName("i");
    do
      h.innerHTML = "<!--[if gt IE " + ++p + "]><i></i><![endif]-->";
    while (y[0]);
    return p > 4 ? p : u;
  }();
  return t === s;
};
js.isLegacyOpera = function() {
  return !!window.opera;
};
var Rs = Ds.exports, zs = { exports: {} }, If = zs.exports = {};
If.getOption = Cf;
function Cf(t, o, s) {
  var u = t[o];
  return u == null && s !== void 0 ? s : u;
}
var kf = zs.exports, Sa = kf, Af = function(o) {
  o = o || {};
  var s = o.reporter, u = Sa.getOption(o, "async", !0), p = Sa.getOption(o, "auto", !0);
  p && !u && (s && s.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), u = !0);
  var h = Pa(), y, v = !1;
  function M(L, Q) {
    !v && p && u && h.size() === 0 && S(), h.add(L, Q);
  }
  function O() {
    for (v = !0; h.size(); ) {
      var L = h;
      h = Pa(), L.process();
    }
    v = !1;
  }
  function j(L) {
    v || (L === void 0 && (L = u), y && (H(y), y = null), L ? S() : O());
  }
  function S() {
    y = $(O);
  }
  function H(L) {
    var Q = clearTimeout;
    return Q(L);
  }
  function $(L) {
    var Q = function(he) {
      return setTimeout(he, 0);
    };
    return Q(L);
  }
  return {
    add: M,
    force: j
  };
};
function Pa() {
  var t = {}, o = 0, s = 0, u = 0;
  function p(v, M) {
    M || (M = v, v = 0), v > s ? s = v : v < u && (u = v), t[v] || (t[v] = []), t[v].push(M), o++;
  }
  function h() {
    for (var v = u; v <= s; v++)
      for (var M = t[v], O = 0; O < M.length; O++) {
        var j = M[O];
        j();
      }
  }
  function y() {
    return o;
  }
  return {
    add: p,
    process: h,
    size: y
  };
}
var eo = "_erd";
function Nf(t) {
  return t[eo] = {}, Is(t);
}
function Is(t) {
  return t[eo];
}
function Hf(t) {
  delete t[eo];
}
var $f = {
  initState: Nf,
  getState: Is,
  cleanState: Hf
}, Pn = Rs, Wf = function(t) {
  t = t || {};
  var o = t.reporter, s = t.batchProcessor, u = t.stateHandler.getState;
  if (!o)
    throw new Error("Missing required dependency: reporter.");
  function p(O, j) {
    function S() {
      j(O);
    }
    if (Pn.isIE(8))
      u(O).object = {
        proxy: S
      }, O.attachEvent("onresize", S);
    else {
      var H = v(O);
      if (!H)
        throw new Error("Element is not detectable by this strategy.");
      H.contentDocument.defaultView.addEventListener("resize", S);
    }
  }
  function h(O) {
    var j = t.important ? " !important; " : "; ";
    return (O.join(j) + j).trim();
  }
  function y(O, j, S) {
    S || (S = j, j = O, O = null), O = O || {}, O.debug;
    function H($, L) {
      var Q = h(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]), he = !1, G = window.getComputedStyle($), B = $.offsetWidth, ie = $.offsetHeight;
      u($).startSize = {
        width: B,
        height: ie
      };
      function D() {
        function E() {
          if (G.position === "static") {
            $.style.setProperty("position", "relative", O.important ? "important" : "");
            var I = function(me, ee, ve, K) {
              function re(z) {
                return z.replace(/[^-\d\.]/g, "");
              }
              var Se = ve[K];
              Se !== "auto" && re(Se) !== "0" && (me.warn("An element that is positioned static has style." + K + "=" + Se + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + K + " will be set to 0. Element: ", ee), ee.style.setProperty(K, "0", O.important ? "important" : ""));
            };
            I(o, $, G, "top"), I(o, $, G, "right"), I(o, $, G, "bottom"), I(o, $, G, "left");
          }
        }
        function X() {
          he || E();
          function I(ee, ve) {
            if (!ee.contentDocument) {
              var K = u(ee);
              K.checkForObjectDocumentTimeoutId && window.clearTimeout(K.checkForObjectDocumentTimeoutId), K.checkForObjectDocumentTimeoutId = setTimeout(function() {
                K.checkForObjectDocumentTimeoutId = 0, I(ee, ve);
              }, 100);
              return;
            }
            ve(ee.contentDocument);
          }
          var me = this;
          I(me, function(ve) {
            L($);
          });
        }
        G.position !== "" && (E(), he = !0);
        var C = document.createElement("object");
        C.style.cssText = Q, C.tabIndex = -1, C.type = "text/html", C.setAttribute("aria-hidden", "true"), C.onload = X, Pn.isIE() || (C.data = "about:blank"), u($) && ($.appendChild(C), u($).object = C, Pn.isIE() && (C.data = "about:blank"));
      }
      s ? s.add(D) : D();
    }
    Pn.isIE(8) ? S(j) : H(j, S);
  }
  function v(O) {
    return u(O).object;
  }
  function M(O) {
    if (u(O)) {
      var j = v(O);
      j && (Pn.isIE(8) ? O.detachEvent("onresize", j.proxy) : O.removeChild(j), u(O).checkForObjectDocumentTimeoutId && window.clearTimeout(u(O).checkForObjectDocumentTimeoutId), delete u(O).object);
    }
  }
  return {
    makeDetectable: y,
    addListener: p,
    uninstall: M
  };
}, Bf = Ms.forEach, Ff = function(t) {
  t = t || {};
  var o = t.reporter, s = t.batchProcessor, u = t.stateHandler.getState;
  t.stateHandler.hasState;
  var p = t.idHandler;
  if (!s)
    throw new Error("Missing required dependency: batchProcessor");
  if (!o)
    throw new Error("Missing required dependency: reporter.");
  var h = j(), y = "erd_scroll_detection_scrollbar_style", v = "erd_scroll_detection_container";
  function M(D) {
    S(D, y, v);
  }
  M(window.document);
  function O(D) {
    var E = t.important ? " !important; " : "; ";
    return (D.join(E) + E).trim();
  }
  function j() {
    var D = 500, E = 500, X = document.createElement("div");
    X.style.cssText = O(["position: absolute", "width: " + D * 2 + "px", "height: " + E * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
    var C = document.createElement("div");
    C.style.cssText = O(["position: absolute", "width: " + D + "px", "height: " + E + "px", "overflow: scroll", "visibility: none", "top: " + -D * 3 + "px", "left: " + -E * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]), C.appendChild(X), document.body.insertBefore(C, document.body.firstChild);
    var I = D - C.clientWidth, me = E - C.clientHeight;
    return document.body.removeChild(C), {
      width: I,
      height: me
    };
  }
  function S(D, E, X) {
    function C(ve, K) {
      K = K || function(Se) {
        D.head.appendChild(Se);
      };
      var re = D.createElement("style");
      return re.innerHTML = ve, re.id = E, K(re), re;
    }
    if (!D.getElementById(E)) {
      var I = X + "_animation", me = X + "_animation_active", ee = `/* Created by the element-resize-detector library. */
`;
      ee += "." + X + " > div::-webkit-scrollbar { " + O(["display: none"]) + ` }

`, ee += "." + me + " { " + O(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + I, "animation-name: " + I]) + ` }
`, ee += "@-webkit-keyframes " + I + ` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`, ee += "@keyframes " + I + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }", C(ee);
    }
  }
  function H(D) {
    D.className += " " + v + "_animation_active";
  }
  function $(D, E, X) {
    if (D.addEventListener)
      D.addEventListener(E, X);
    else if (D.attachEvent)
      D.attachEvent("on" + E, X);
    else
      return o.error("[scroll] Don't know how to add event listeners.");
  }
  function L(D, E, X) {
    if (D.removeEventListener)
      D.removeEventListener(E, X);
    else if (D.detachEvent)
      D.detachEvent("on" + E, X);
    else
      return o.error("[scroll] Don't know how to remove event listeners.");
  }
  function Q(D) {
    return u(D).container.childNodes[0].childNodes[0].childNodes[0];
  }
  function he(D) {
    return u(D).container.childNodes[0].childNodes[0].childNodes[1];
  }
  function G(D, E) {
    var X = u(D).listeners;
    if (!X.push)
      throw new Error("Cannot add listener to an element that is not detectable.");
    u(D).listeners.push(E);
  }
  function B(D, E, X) {
    X || (X = E, E = D, D = null), D = D || {};
    function C() {
      if (D.debug) {
        var A = Array.prototype.slice.call(arguments);
        if (A.unshift(p.get(E), "Scroll: "), o.log.apply)
          o.log.apply(null, A);
        else
          for (var U = 0; U < A.length; U++)
            o.log(A[U]);
      }
    }
    function I(A) {
      function U(se) {
        var we = se.getRootNode && se.getRootNode().contains(se);
        return se === se.ownerDocument.body || se.ownerDocument.body.contains(se) || we;
      }
      return !U(A) || window.getComputedStyle(A) === null;
    }
    function me(A) {
      var U = u(A).container.childNodes[0], se = window.getComputedStyle(U);
      return !se.width || se.width.indexOf("px") === -1;
    }
    function ee() {
      var A = window.getComputedStyle(E), U = {};
      return U.position = A.position, U.width = E.offsetWidth, U.height = E.offsetHeight, U.top = A.top, U.right = A.right, U.bottom = A.bottom, U.left = A.left, U.widthCSS = A.width, U.heightCSS = A.height, U;
    }
    function ve() {
      var A = ee();
      u(E).startSize = {
        width: A.width,
        height: A.height
      }, C("Element start size", u(E).startSize);
    }
    function K() {
      u(E).listeners = [];
    }
    function re() {
      if (C("storeStyle invoked."), !u(E)) {
        C("Aborting because element has been uninstalled");
        return;
      }
      var A = ee();
      u(E).style = A;
    }
    function Se(A, U, se) {
      u(A).lastWidth = U, u(A).lastHeight = se;
    }
    function z(A) {
      return Q(A).childNodes[0];
    }
    function J() {
      return 2 * h.width + 1;
    }
    function ut() {
      return 2 * h.height + 1;
    }
    function St(A) {
      return A + 10 + J();
    }
    function He(A) {
      return A + 10 + ut();
    }
    function ft(A) {
      return A * 2 + J();
    }
    function Hn(A) {
      return A * 2 + ut();
    }
    function Le(A, U, se) {
      var we = Q(A), nt = he(A), rt = St(U), it = He(se), V = ft(U), te = Hn(se);
      we.scrollLeft = rt, we.scrollTop = it, nt.scrollLeft = V, nt.scrollTop = te;
    }
    function Pt() {
      var A = u(E).container;
      if (!A) {
        A = document.createElement("div"), A.className = v, A.style.cssText = O(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), u(E).container = A, H(A), E.appendChild(A);
        var U = function() {
          u(E).onRendered && u(E).onRendered();
        };
        $(A, "animationstart", U), u(E).onAnimationStart = U;
      }
      return A;
    }
    function Yr() {
      function A() {
        var fe = u(E).style;
        if (fe.position === "static") {
          E.style.setProperty("position", "relative", D.important ? "important" : "");
          var We = function(Ke, Je, un, dt) {
            function Bn(Xr) {
              return Xr.replace(/[^-\d\.]/g, "");
            }
            var Xt = un[dt];
            Xt !== "auto" && Bn(Xt) !== "0" && (Ke.warn("An element that is positioned static has style." + dt + "=" + Xt + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + dt + " will be set to 0. Element: ", Je), Je.style[dt] = 0);
          };
          We(o, E, fe, "top"), We(o, E, fe, "right"), We(o, E, fe, "bottom"), We(o, E, fe, "left");
        }
      }
      function U(fe, We, Ke, Je) {
        return fe = fe ? fe + "px" : "0", We = We ? We + "px" : "0", Ke = Ke ? Ke + "px" : "0", Je = Je ? Je + "px" : "0", ["left: " + fe, "top: " + We, "right: " + Je, "bottom: " + Ke];
      }
      if (C("Injecting elements"), !u(E)) {
        C("Aborting because element has been uninstalled");
        return;
      }
      A();
      var se = u(E).container;
      se || (se = Pt());
      var we = h.width, nt = h.height, rt = O(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]), it = O(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(U(-(1 + we), -(1 + nt), -nt, -we))), V = O(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), te = O(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), Pe = O(["position: absolute", "left: 0", "top: 0"]), xe = O(["position: absolute", "width: 200%", "height: 200%"]), ke = document.createElement("div"), Ve = document.createElement("div"), Ge = document.createElement("div"), $n = document.createElement("div"), $e = document.createElement("div"), Mt = document.createElement("div");
      ke.dir = "ltr", ke.style.cssText = rt, ke.className = v, Ve.className = v, Ve.style.cssText = it, Ge.style.cssText = V, $n.style.cssText = Pe, $e.style.cssText = te, Mt.style.cssText = xe, Ge.appendChild($n), $e.appendChild(Mt), Ve.appendChild(Ge), Ve.appendChild($e), ke.appendChild(Ve), se.appendChild(ke);
      function ot() {
        var fe = u(E);
        fe && fe.onExpand ? fe.onExpand() : C("Aborting expand scroll handler: element has been uninstalled");
      }
      function Wn() {
        var fe = u(E);
        fe && fe.onShrink ? fe.onShrink() : C("Aborting shrink scroll handler: element has been uninstalled");
      }
      $(Ge, "scroll", ot), $($e, "scroll", Wn), u(E).onExpandScroll = ot, u(E).onShrinkScroll = Wn;
    }
    function k() {
      function A(V, te, Pe) {
        var xe = z(V), ke = St(te), Ve = He(Pe);
        xe.style.setProperty("width", ke + "px", D.important ? "important" : ""), xe.style.setProperty("height", Ve + "px", D.important ? "important" : "");
      }
      function U(V) {
        var te = E.offsetWidth, Pe = E.offsetHeight, xe = te !== u(E).lastWidth || Pe !== u(E).lastHeight;
        C("Storing current size", te, Pe), Se(E, te, Pe), s.add(0, function() {
          if (xe) {
            if (!u(E)) {
              C("Aborting because element has been uninstalled");
              return;
            }
            if (!se()) {
              C("Aborting because element container has not been initialized");
              return;
            }
            if (D.debug) {
              var Ve = E.offsetWidth, Ge = E.offsetHeight;
              (Ve !== te || Ge !== Pe) && o.warn(p.get(E), "Scroll: Size changed before updating detector elements.");
            }
            A(E, te, Pe);
          }
        }), s.add(1, function() {
          if (!u(E)) {
            C("Aborting because element has been uninstalled");
            return;
          }
          if (!se()) {
            C("Aborting because element container has not been initialized");
            return;
          }
          Le(E, te, Pe);
        }), xe && V && s.add(2, function() {
          if (!u(E)) {
            C("Aborting because element has been uninstalled");
            return;
          }
          if (!se()) {
            C("Aborting because element container has not been initialized");
            return;
          }
          V();
        });
      }
      function se() {
        return !!u(E).container;
      }
      function we() {
        function V() {
          return u(E).lastNotifiedWidth === void 0;
        }
        C("notifyListenersIfNeeded invoked");
        var te = u(E);
        if (V() && te.lastWidth === te.startSize.width && te.lastHeight === te.startSize.height)
          return C("Not notifying: Size is the same as the start size, and there has been no notification yet.");
        if (te.lastWidth === te.lastNotifiedWidth && te.lastHeight === te.lastNotifiedHeight)
          return C("Not notifying: Size already notified");
        C("Current size not notified, notifying..."), te.lastNotifiedWidth = te.lastWidth, te.lastNotifiedHeight = te.lastHeight, Bf(u(E).listeners, function(Pe) {
          Pe(E);
        });
      }
      function nt() {
        if (C("startanimation triggered."), me(E)) {
          C("Ignoring since element is still unrendered...");
          return;
        }
        C("Element rendered.");
        var V = Q(E), te = he(E);
        (V.scrollLeft === 0 || V.scrollTop === 0 || te.scrollLeft === 0 || te.scrollTop === 0) && (C("Scrollbars out of sync. Updating detector elements..."), U(we));
      }
      function rt() {
        if (C("Scroll detected."), me(E)) {
          C("Scroll event fired while unrendered. Ignoring...");
          return;
        }
        U(we);
      }
      if (C("registerListenersAndPositionElements invoked."), !u(E)) {
        C("Aborting because element has been uninstalled");
        return;
      }
      u(E).onRendered = nt, u(E).onExpand = rt, u(E).onShrink = rt;
      var it = u(E).style;
      A(E, it.width, it.height);
    }
    function ln() {
      if (C("finalizeDomMutation invoked."), !u(E)) {
        C("Aborting because element has been uninstalled");
        return;
      }
      var A = u(E).style;
      Se(E, A.width, A.height), Le(E, A.width, A.height);
    }
    function Tt() {
      X(E);
    }
    function cn() {
      C("Installing..."), K(), ve(), s.add(0, re), s.add(1, Yr), s.add(2, k), s.add(3, ln), s.add(4, Tt);
    }
    C("Making detectable..."), I(E) ? (C("Element is detached"), Pt(), C("Waiting until element is attached..."), u(E).onRendered = function() {
      C("Element is now attached"), cn();
    }) : cn();
  }
  function ie(D) {
    var E = u(D);
    E && (E.onExpandScroll && L(Q(D), "scroll", E.onExpandScroll), E.onShrinkScroll && L(he(D), "scroll", E.onShrinkScroll), E.onAnimationStart && L(E.container, "animationstart", E.onAnimationStart), E.container && D.removeChild(E.container));
  }
  return {
    makeDetectable: B,
    addListener: G,
    uninstall: ie,
    initDocument: M
  };
}, jn = Ms.forEach, Lf = Mf, Vf = Df, Yf = jf, Xf = Rf, Uf = zf, Ta = Rs, qf = Af, bt = $f, Gf = Wf, Kf = Ff;
function Ma(t) {
  return Array.isArray(t) || t.length !== void 0;
}
function Da(t) {
  if (Array.isArray(t))
    return t;
  var o = [];
  return jn(t, function(s) {
    o.push(s);
  }), o;
}
function ja(t) {
  return t && t.nodeType === 1;
}
var Jf = function(t) {
  t = t || {};
  var o;
  if (t.idHandler)
    o = {
      get: function(B) {
        return t.idHandler.get(B, !0);
      },
      set: t.idHandler.set
    };
  else {
    var s = Yf(), u = Xf({
      idGenerator: s,
      stateHandler: bt
    });
    o = u;
  }
  var p = t.reporter;
  if (!p) {
    var h = p === !1;
    p = Uf(h);
  }
  var y = wt(t, "batchProcessor", qf({ reporter: p })), v = {};
  v.callOnAdd = !!wt(t, "callOnAdd", !0), v.debug = !!wt(t, "debug", !1);
  var M = Vf(o), O = Lf({
    stateHandler: bt
  }), j, S = wt(t, "strategy", "object"), H = wt(t, "important", !1), $ = {
    reporter: p,
    batchProcessor: y,
    stateHandler: bt,
    idHandler: o,
    important: H
  };
  if (S === "scroll" && (Ta.isLegacyOpera() ? (p.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), S = "object") : Ta.isIE(9) && (p.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), S = "object")), S === "scroll")
    j = Kf($);
  else if (S === "object")
    j = Gf($);
  else
    throw new Error("Invalid strategy name: " + S);
  var L = {};
  function Q(B, ie, D) {
    function E(ve) {
      var K = M.get(ve);
      jn(K, function(Se) {
        Se(ve);
      });
    }
    function X(ve, K, re) {
      M.add(K, re), ve && re(K);
    }
    if (D || (D = ie, ie = B, B = {}), !ie)
      throw new Error("At least one element required.");
    if (!D)
      throw new Error("Listener required.");
    if (ja(ie))
      ie = [ie];
    else if (Ma(ie))
      ie = Da(ie);
    else
      return p.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    var C = 0, I = wt(B, "callOnAdd", v.callOnAdd), me = wt(B, "onReady", function() {
    }), ee = wt(B, "debug", v.debug);
    jn(ie, function(K) {
      bt.getState(K) || (bt.initState(K), o.set(K));
      var re = o.get(K);
      if (ee && p.log("Attaching listener to element", re, K), !O.isDetectable(K)) {
        if (ee && p.log(re, "Not detectable."), O.isBusy(K)) {
          ee && p.log(re, "System busy making it detectable"), X(I, K, D), L[re] = L[re] || [], L[re].push(function() {
            C++, C === ie.length && me();
          });
          return;
        }
        return ee && p.log(re, "Making detectable..."), O.markBusy(K, !0), j.makeDetectable({ debug: ee, important: H }, K, function(z) {
          if (ee && p.log(re, "onElementDetectable"), bt.getState(z)) {
            O.markAsDetectable(z), O.markBusy(z, !1), j.addListener(z, E), X(I, z, D);
            var J = bt.getState(z);
            if (J && J.startSize) {
              var ut = z.offsetWidth, St = z.offsetHeight;
              (J.startSize.width !== ut || J.startSize.height !== St) && E(z);
            }
            L[re] && jn(L[re], function(He) {
              He();
            });
          } else
            ee && p.log(re, "Element uninstalled before being detectable.");
          delete L[re], C++, C === ie.length && me();
        });
      }
      ee && p.log(re, "Already detecable, adding listener."), X(I, K, D), C++;
    }), C === ie.length && me();
  }
  function he(B) {
    if (!B)
      return p.error("At least one element is required.");
    if (ja(B))
      B = [B];
    else if (Ma(B))
      B = Da(B);
    else
      return p.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    jn(B, function(ie) {
      M.removeAllListeners(ie), j.uninstall(ie), bt.cleanState(ie);
    });
  }
  function G(B) {
    j.initDocument && j.initDocument(B);
  }
  return {
    listenTo: Q,
    removeListener: M.removeListener,
    removeAllListeners: M.removeAllListeners,
    uninstall: he,
    initDocument: G
  };
};
function wt(t, o, s) {
  var u = t[o];
  return u == null && s !== void 0 ? s : u;
}
const Zf = /* @__PURE__ */ ys(Jf);
function Qf(t, o) {
  const s = Cs(t);
  let u = s[0];
  for (let p = 1, h = s.length; p < h; p++) {
    const y = s[p];
    o > t[y] && (u = y);
  }
  return u;
}
function Ra(t, o) {
  if (!o[t])
    throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint " + t + " is missing!");
  return o[t];
}
function ed(t, o, s, u, p, h, y) {
  if (o[u])
    return Wi(o[u]);
  let v = t;
  const M = Cs(s), O = M.slice(M.indexOf(u));
  for (let j = 0, S = O.length; j < S; j++) {
    const H = O[j];
    if (o[H]) {
      v = o[H];
      break;
    }
  }
  return v = Wi(v || []), Dn(df(v, { cols: h }), y);
}
function Cs(t) {
  return Object.keys(t).sort(function(s, u) {
    return t[s] - t[u];
  });
}
const td = {
  name: "GridLayout",
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  components: {
    GridItem: Ps
  },
  props: {
    // If true, the container height swells and contracts to fit contents
    autoSize: {
      type: Boolean,
      default: !0
    },
    colNum: {
      type: Number,
      default: 12
    },
    rowHeight: {
      type: Number,
      default: 150
    },
    maxRows: {
      type: Number,
      default: 1 / 0
    },
    margin: {
      type: Array,
      default: function() {
        return [10, 10];
      }
    },
    isDraggable: {
      type: Boolean,
      default: !0
    },
    isResizable: {
      type: Boolean,
      default: !0
    },
    isMirrored: {
      type: Boolean,
      default: !1
    },
    useCssTransforms: {
      type: Boolean,
      default: !0
    },
    verticalCompact: {
      type: Boolean,
      default: !0
    },
    layout: {
      type: Array,
      required: !0
    },
    responsive: {
      type: Boolean,
      default: !1
    },
    responsiveLayouts: {
      type: Object,
      default: function() {
        return {};
      }
    },
    breakpoints: {
      type: Object,
      default: function() {
        return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
      }
    },
    cols: {
      type: Object,
      default: function() {
        return { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
      }
    },
    preventCollision: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      eventBus: Pf(),
      width: null,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: !1,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: -1
      },
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null
      // store original Layout
    };
  },
  created() {
    const t = this;
    t.resizeEventHandler = function({ eventType: o, i: s, x: u, y: p, h, w: y }) {
      t.resizeEvent(o, s, u, p, h, y);
    }, t.dragEventHandler = function({ eventType: o, i: s, x: u, y: p, h, w: y }) {
      t.dragEvent(o, s, u, p, h, y);
    }, t.eventBus.on("resizeEvent", t.resizeEventHandler), t.eventBus.on("dragEvent", t.dragEventHandler), t.$emit("layout-created", t.layout);
  },
  beforeUnmount: function() {
    this.eventBus.off("resizeEvent", this.resizeEventHandler), this.eventBus.off("dragEvent", this.dragEventHandler), Ef("resize", this.onWindowResize), this.erd.uninstall(this.$refs.item);
  },
  beforeMount: function() {
    this.$emit("layout-before-mount", this.layout);
  },
  mounted() {
    this.$emit("layout-mounted", this.layout), this.$nextTick(() => {
      mf(this.layout), this.originalLayout = this.layout;
      const t = this;
      this.$nextTick(() => {
        t.onWindowResize(), t.initResponsiveFeatures(), _f("resize", t.onWindowResize), Dn(t.layout, t.verticalCompact), t.$emit("layout-updated", t.layout), t.updateHeight(), t.$nextTick(() => {
          this.erd = Zf({
            strategy: "scroll",
            //<- For ultra performance.
            // See https://github.com/wnr/element-resize-detector/issues/110 about callOnAdd.
            callOnAdd: !1
          }), this.erd.listenTo(t.$refs.item, function() {
            t.onWindowResize();
          });
        });
      });
    });
  },
  watch: {
    width: function(t, o) {
      const s = this;
      this.$nextTick(() => {
        this.eventBus.emit("updateWidth", this.width), o === null && this.$nextTick(() => {
          this.$emit("layout-ready", s.layout);
        }), this.updateHeight();
      });
    },
    "layout.length": function() {
      this.layoutUpdate();
    },
    layout: function() {
      this.layoutUpdate();
    },
    colNum: function(t) {
      this.eventBus.emit("setColNum", t);
    },
    rowHeight: function() {
      this.eventBus.emit("setRowHeight", this.rowHeight);
    },
    isDraggable: function() {
      this.eventBus.emit("setDraggable", this.isDraggable);
    },
    isResizable: function() {
      this.eventBus.emit("setResizable", this.isResizable);
    },
    responsive() {
      this.responsive || (this.$emit("update:layout", this.originalLayout), this.eventBus.emit("setColNum", this.colNum)), this.onWindowResize();
    },
    maxRows: function() {
      this.eventBus.emit("setMaxRows", this.maxRows);
    },
    margin() {
      this.updateHeight();
    }
  },
  methods: {
    layoutUpdate() {
      if (this.layout !== void 0 && this.originalLayout !== null) {
        if (this.layout.length !== this.originalLayout.length) {
          let t = this.findDifference(this.layout, this.originalLayout);
          t.length > 0 && (this.layout.length > this.originalLayout.length ? this.originalLayout = this.originalLayout.concat(t) : this.originalLayout = this.originalLayout.filter((o) => !t.some((s) => o.i === s.i))), this.lastLayoutLength = this.layout.length, this.initResponsiveFeatures();
        }
        Dn(this.layout, this.verticalCompact), this.eventBus.emit("updateWidth", this.width), this.updateHeight(), this.$emit("layout-updated", this.layout);
      }
    },
    updateHeight: function() {
      this.mergedStyle = {
        height: this.containerHeight()
      };
    },
    onWindowResize: function() {
      this.$refs !== null && this.$refs.item !== null && this.$refs.item !== void 0 && (this.width = this.$refs.item.offsetWidth), this.eventBus.emit("resizeEvent", {});
    },
    containerHeight: function() {
      if (this.autoSize)
        return cf(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + "px";
    },
    dragEvent: function(t, o, s, u, p, h) {
      let y = wa(this.layout, o);
      y == null && (y = { x: 0, y: 0 }), t === "dragmove" || t === "dragstart" ? (this.placeholder.i = o, this.placeholder.x = y.x, this.placeholder.y = y.y, this.placeholder.w = h, this.placeholder.h = p, this.$nextTick(() => {
        this.isDragging = !0;
      }), this.eventBus.emit("updateWidth", this.width)) : this.$nextTick(() => {
        this.isDragging = !1;
      }), Bi(this.layout, y, s, u, !0, this.preventCollision), Dn(this.layout, this.verticalCompact), this.eventBus.emit("compact"), this.updateHeight(), t === "dragend" && this.$emit("layout-updated", this.layout);
    },
    resizeEvent: function(t, o, s, u, p, h) {
      let y = wa(this.layout, o);
      y == null && (y = { h: 0, w: 0 });
      let v;
      if (this.preventCollision) {
        const M = xs(this.layout, { ...y, w: h, h: p }).filter(
          (O) => O.i !== y.i
        );
        if (v = M.length > 0, v) {
          let O = 1 / 0, j = 1 / 0;
          M.forEach((S) => {
            S.x > y.x && (O = Math.min(O, S.x)), S.y > y.y && (j = Math.min(j, S.y));
          }), Number.isFinite(O) && (y.w = O - y.x), Number.isFinite(j) && (y.h = j - y.y);
        }
      }
      v || (y.w = h, y.h = p), t === "resizestart" || t === "resizemove" ? (this.placeholder.i = o, this.placeholder.x = s, this.placeholder.y = u, this.placeholder.w = y.w, this.placeholder.h = y.h, this.$nextTick(() => {
        this.isDragging = !0;
      }), this.eventBus.emit("updateWidth", this.width)) : this.$nextTick(() => {
        this.isDragging = !1;
      }), this.responsive && this.responsiveGridLayout(), Dn(this.layout, this.verticalCompact), this.eventBus.emit("compact"), this.updateHeight(), t === "resizeend" && this.$emit("layout-updated", this.layout);
    },
    // finds or generates new layouts for set breakpoints
    responsiveGridLayout() {
      let t = Qf(this.breakpoints, this.width), o = Ra(t, this.cols);
      this.lastBreakpoint != null && !this.layouts[this.lastBreakpoint] && (this.layouts[this.lastBreakpoint] = Wi(this.layout));
      let s = ed(
        this.originalLayout,
        this.layouts,
        this.breakpoints,
        t,
        this.lastBreakpoint,
        o,
        this.verticalCompact
      );
      this.layouts[t] = s, this.lastBreakpoint !== t && this.$emit("breakpoint-changed", t, s), this.$emit("update:layout", s), this.lastBreakpoint = t, this.eventBus.emit("setColNum", Ra(t, this.cols));
    },
    // clear all responsive layouts
    initResponsiveFeatures() {
      this.layouts = Object.assign({}, this.responsiveLayouts);
    },
    // find difference in layouts
    findDifference(t, o) {
      let s = t.filter(function(p) {
        return !o.some(function(h) {
          return p.i === h.i;
        });
      }), u = o.filter(function(p) {
        return !t.some(function(h) {
          return p.i === h.i;
        });
      });
      return s.concat(u);
    }
  }
};
function nd(t, o, s, u, p, h) {
  const y = Mu("grid-item");
  return kn(), $i("div", {
    ref: "item",
    class: "vue-grid-layout",
    style: An(t.mergedStyle)
  }, [
    os(t.$slots, "default"),
    Au(Nn(y, {
      class: "vue-grid-placeholder",
      x: t.placeholder.x,
      y: t.placeholder.y,
      w: t.placeholder.w,
      h: t.placeholder.h,
      i: t.placeholder.i
    }, null, 8, ["x", "y", "w", "h", "i"]), [
      [af, t.isDragging]
    ])
  ], 4);
}
const rd = /* @__PURE__ */ Ss(td, [["render", nd]]), za = {
  // ResponsiveGridLayout,
  GridLayout: rd,
  GridItem: Ps
};
function Fi(t) {
  Fi.installed || (Fi.installed = !0, Object.keys(za).forEach((o) => {
    t.component(o, za[o]);
  }));
}
const id = {
  install: Fi
};
let Wr = null;
typeof window < "u" ? Wr = window.Vue : typeof global < "u" && (Wr = global.Vue);
Wr && Wr.use(id);
export {
  Ps as GridItem,
  rd as GridLayout,
  za as default,
  Fi as install
};

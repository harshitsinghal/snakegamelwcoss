!(function (e) {
    function t(t) {
        for (
            var i, o, n = t[0], h = t[1], l = t[2], c = 0, p = [];
            c < n.length;
            c++
        )
            (o = n[c]),
                Object.prototype.hasOwnProperty.call(a, o) &&
                    a[o] &&
                    p.push(a[o][0]),
                (a[o] = 0);
        for (i in h)
            Object.prototype.hasOwnProperty.call(h, i) && (e[i] = h[i]);
        for (d && d(t); p.length; ) p.shift()();
        return r.push.apply(r, l || []), s();
    }
    function s() {
        for (var e, t = 0; t < r.length; t++) {
            for (var s = r[t], i = !0, n = 1; n < s.length; n++) {
                var h = s[n];
                0 !== a[h] && (i = !1);
            }
            i && (r.splice(t--, 1), (e = o((o.s = s[0]))));
        }
        return e;
    }
    var i = {},
        a = { 1: 0 },
        r = [];
    function o(t) {
        if (i[t]) return i[t].exports;
        var s = (i[t] = { i: t, l: !1, exports: {} });
        return e[t].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
    }
    (o.m = e),
        (o.c = i),
        (o.d = function (e, t, s) {
            o.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (o.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.t = function (e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (
                (o.r(s),
                Object.defineProperty(s, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var i in e)
                    o.d(
                        s,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return s;
        }),
        (o.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return o.d(t, 'a', t), t;
        }),
        (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = './');
    var n = (window.webpackJsonp = window.webpackJsonp || []),
        h = n.push.bind(n);
    (n.push = t), (n = n.slice());
    for (var l = 0; l < n.length; l++) t(n[l]);
    var d = h;
    r.push([1, 0]), s();
})([
    ,
    function (e, t, s) {
        e.exports = s(3);
    },
    function (e, t) {
        var s;
        s = (function () {
            return this;
        })();
        try {
            s = s || new Function('return this')();
        } catch (e) {
            'object' == typeof window && (s = window);
        }
        e.exports = s;
    },
    function (e, t, s) {
        'use strict';
        s.r(t);
        var i = s(0);
        var a = [
            function (e, t, s) {
                return ['.container', t, '{width:70vw;margin:10% auto 0}'].join(
                    ''
                );
            }
        ];
        var r = [
            function (e, t, s) {
                return [
                    '.header',
                    t,
                    '{width:70vw;background:#eb1cc8;color:#fff}.game-container',
                    t,
                    '{width:70vw;height:60vh;background:#2904f8}.game-container',
                    t,
                    ' div',
                    t,
                    '{width:40px;height:40px;background:#e4fcb7;display:inline-block}.snake',
                    t,
                    '{background:orange!important}.food',
                    t,
                    '{background:red!important}'
                ].join('');
            }
        ];
        function o(e, t, s, i) {
            const { t: a, d: r, h: o, k: n, i: h } = e;
            return [
                o(
                    'div',
                    {
                        classMap: {
                            header: !0,
                            'slds-var-p-around_medium': !0,
                            'slds-text-align_center': !0
                        },
                        key: 0
                    },
                    [a('Score: '), r(t.score)]
                ),
                o(
                    'div',
                    { classMap: { 'game-container': !0 }, key: 2 },
                    h(t.gameBlocks, function (e) {
                        return o(
                            'div',
                            { className: e.class, key: n(1, e.id) },
                            [a(' ')]
                        );
                    })
                )
            ];
        }
        var n = Object(i.registerTemplate)(o);
        (o.stylesheets = []),
            r && o.stylesheets.push.apply(o.stylesheets, r),
            (o.stylesheetTokens = {
                hostAttribute: 'my-game-_game-host',
                shadowAttribute: 'my-game-_game'
            });
        class h extends i.LightningElement {
            constructor(...e) {
                super(...e),
                    (this.score = 0),
                    (this.blockSize = 40),
                    (this.gameBlocks = []),
                    (this.renderComplete = !1),
                    (this.xSpeed = 1),
                    (this.ySpeed = 0),
                    (this.xHead = 0),
                    (this.yHead = 0),
                    (this.xMax = void 0),
                    (this.yMax = void 0),
                    (this.tail = []);
            }
            startGame() {
                this.intervalObj = setInterval(() => {
                    this.move();
                }, 300);
            }
            move() {
                if (
                    this.tail[this.tail.length - 1] !==
                    `${this.xHead}:${this.yHead}`
                ) {
                    this.tail.push(`${this.xHead}:${this.yHead}`);
                    let e = this.tail.shift(),
                        t = this.gameBlocks.findIndex((t) => t.id === e);
                    (this.gameBlocks[t].snake = !1),
                        (this.gameBlocks[t].class = '');
                }
                if (
                    ((this.xHead += this.xSpeed),
                    (this.yHead += this.ySpeed),
                    this.xHead >= this.xMax && (this.xHead = 0),
                    this.xHead < 0 && (this.xHead = this.xMax - 1),
                    this.yHead >= this.yMax && (this.yHead = 0),
                    this.yHead < 0 && (this.yHead = this.yMax - 1),
                    this.tail.includes(`${this.xHead}:${this.yHead}`))
                )
                    alert('Game Over'),
                        (this.tail = []),
                        this.gameBlocks.forEach(function (e) {
                            (e.snake = !1), (e.class = '');
                        }),
                        (this.xHead = 0),
                        (this.yHead = 0),
                        (this.score = 0),
                        this.generateFood();
                else {
                    let e = this.gameBlocks.findIndex(
                        (e) => e.id === `${this.xHead}:${this.yHead}`
                    );
                    (this.gameBlocks[e].snake = !0),
                        (this.gameBlocks[e].class = 'snake'),
                        this.gameBlocks[e].food &&
                            (this.score++,
                            this.tail.push(`${this.xHead}:${this.yHead}`),
                            (this.gameBlocks[e].food = !1),
                            this.generateFood());
                }
            }
            generateFood() {
                let e = Math.floor(Math.random() * this.xMax),
                    t = Math.floor(Math.random() * this.yMax),
                    s = this.gameBlocks.findIndex((s) => s.id === `${e}:${t}`);
                (this.gameBlocks[s].food = !0),
                    (this.gameBlocks[s].class = 'food');
            }
            addKeyboardControls() {
                window.addEventListener('keydown', (e) => {
                    switch ((e.preventDefault(), e.key)) {
                        case 'ArrowUp':
                            (this.xSpeed = 0), (this.ySpeed = -1);
                            break;
                        case 'ArrowDown':
                            (this.xSpeed = 0), (this.ySpeed = 1);
                            break;
                        case 'ArrowRight':
                            (this.xSpeed = 1), (this.ySpeed = 0);
                            break;
                        case 'ArrowLeft':
                            (this.xSpeed = -1), (this.ySpeed = 0);
                    }
                });
            }
            renderedCallback() {
                if (!this.renderComplete) {
                    let e = this.template.querySelector('.game-container')
                            .clientWidth,
                        t = this.template.querySelector('.game-container')
                            .clientHeight;
                    (this.xMax = Math.floor(e / this.blockSize)),
                        (this.yMax = Math.floor(t / this.blockSize));
                    let s = [];
                    for (let e = 0; e < this.yMax; e++)
                        for (let t = 0; t < this.xMax; t++) {
                            let i;
                            (i =
                                0 === t && 0 === e
                                    ? {
                                          id: `${t}:${e}`,
                                          snake: !0,
                                          food: !1,
                                          class: 'snake'
                                      }
                                    : {
                                          id: `${t}:${e}`,
                                          snake: !1,
                                          food: !1,
                                          class: ''
                                      }),
                                s.push(i);
                        }
                    (this.renderComplete = !0),
                        (this.gameBlocks = s),
                        this.addKeyboardControls(),
                        this.generateFood(),
                        this.startGame();
                }
            }
        }
        Object(i.registerDecorators)(h, {
            track: { gameBlocks: 1 },
            fields: [
                'score',
                'blockSize',
                'renderComplete',
                'xSpeed',
                'ySpeed',
                'xHead',
                'yHead',
                'xMax',
                'yMax',
                'tail'
            ]
        });
        var l = Object(i.registerComponent)(h, { tmpl: n });
        function d(e, t, s, i) {
            const { c: a, h: r } = e;
            return [
                r('div', { classMap: { container: !0 }, key: 1 }, [
                    a('my-game', l, { key: 0 }, [])
                ])
            ];
        }
        var c = Object(i.registerTemplate)(d);
        (d.stylesheets = []),
            a && d.stylesheets.push.apply(d.stylesheets, a),
            (d.stylesheetTokens = {
                hostAttribute: 'my-app-_app-host',
                shadowAttribute: 'my-app-_app'
            });
        class p extends i.LightningElement {}
        var u = Object(i.registerComponent)(p, { tmpl: c });
        const y = Object(i.createElement)('my-app', { is: u });
        document.querySelector('#main').appendChild(y);
    }
]);

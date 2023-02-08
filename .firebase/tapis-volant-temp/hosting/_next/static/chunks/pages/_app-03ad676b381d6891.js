;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    1780: function (e, s, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return a(6696)
        },
      ])
    },
    8418: function (e, s, a) {
      'use strict'
      function l(e, s) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, s) {
            var a = [],
              l = !0,
              i = !1,
              c = void 0
            try {
              for (
                var n, r = e[Symbol.iterator]();
                !(l = (n = r.next()).done) &&
                (a.push(n.value), !s || a.length !== s);
                l = !0
              );
            } catch (t) {
              ;(i = !0), (c = t)
            } finally {
              try {
                l || null == r.return || r.return()
              } finally {
                if (i) throw c
              }
            }
            return a
          })(e, s) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      s.default = void 0
      var i,
        c = (i = a(7294)) && i.__esModule ? i : { default: i },
        n = a(6273),
        r = a(387),
        t = a(7190)
      var d = {}
      function h(e, s, a, l) {
        if (e && n.isLocalURL(s)) {
          e.prefetch(s, a, l).catch(function (e) {
            0
          })
          var i =
            l && 'undefined' !== typeof l.locale ? l.locale : e && e.locale
          d[s + '%' + a + (i ? '%' + i : '')] = !0
        }
      }
      var o = function (e) {
        var s,
          a = !1 !== e.prefetch,
          i = r.useRouter(),
          o = c.default.useMemo(
            function () {
              var s = l(n.resolveHref(i, e.href, !0), 2),
                a = s[0],
                c = s[1]
              return { href: a, as: e.as ? n.resolveHref(i, e.as) : c || a }
            },
            [i, e.href, e.as]
          ),
          x = o.href,
          m = o.as,
          j = e.children,
          u = e.replace,
          p = e.shallow,
          N = e.scroll,
          f = e.locale
        'string' === typeof j && (j = c.default.createElement('a', null, j))
        var v =
            (s = c.default.Children.only(j)) && 'object' === typeof s && s.ref,
          g = l(t.useIntersection({ rootMargin: '200px' }), 2),
          b = g[0],
          y = g[1],
          C = c.default.useCallback(
            function (e) {
              b(e),
                v &&
                  ('function' === typeof v
                    ? v(e)
                    : 'object' === typeof v && (v.current = e))
            },
            [v, b]
          )
        c.default.useEffect(
          function () {
            var e = y && a && n.isLocalURL(x),
              s = 'undefined' !== typeof f ? f : i && i.locale,
              l = d[x + '%' + m + (s ? '%' + s : '')]
            e && !l && h(i, x, m, { locale: s })
          },
          [m, x, y, f, a, i]
        )
        var S = {
          ref: C,
          onClick: function (e) {
            s.props &&
              'function' === typeof s.props.onClick &&
              s.props.onClick(e),
              e.defaultPrevented ||
                (function (e, s, a, l, i, c, r, t) {
                  ;('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var s = e.currentTarget.target
                      return (
                        (s && '_self' !== s) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      n.isLocalURL(a))) &&
                    (e.preventDefault(),
                    null == r && l.indexOf('#') >= 0 && (r = !1),
                    s[i ? 'replace' : 'push'](a, l, {
                      shallow: c,
                      locale: t,
                      scroll: r,
                    }))
                })(e, i, x, m, u, p, N, f)
          },
          onMouseEnter: function (e) {
            n.isLocalURL(x) &&
              (s.props &&
                'function' === typeof s.props.onMouseEnter &&
                s.props.onMouseEnter(e),
              h(i, x, m, { priority: !0 }))
          },
        }
        if (e.passHref || ('a' === s.type && !('href' in s.props))) {
          var w = 'undefined' !== typeof f ? f : i && i.locale,
            O =
              i &&
              i.isLocaleDomain &&
              n.getDomainLocale(m, w, i && i.locales, i && i.domainLocales)
          S.href = O || n.addBasePath(n.addLocale(m, w, i && i.defaultLocale))
        }
        return c.default.cloneElement(s, S)
      }
      s.default = o
    },
    7190: function (e, s, a) {
      'use strict'
      function l(e, s) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, s) {
            var a = [],
              l = !0,
              i = !1,
              c = void 0
            try {
              for (
                var n, r = e[Symbol.iterator]();
                !(l = (n = r.next()).done) &&
                (a.push(n.value), !s || a.length !== s);
                l = !0
              );
            } catch (t) {
              ;(i = !0), (c = t)
            } finally {
              try {
                l || null == r.return || r.return()
              } finally {
                if (i) throw c
              }
            }
            return a
          })(e, s) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      Object.defineProperty(s, '__esModule', { value: !0 }),
        (s.useIntersection = function (e) {
          var s = e.rootMargin,
            a = e.disabled || !n,
            t = i.useRef(),
            d = l(i.useState(!1), 2),
            h = d[0],
            o = d[1],
            x = i.useCallback(
              function (e) {
                t.current && (t.current(), (t.current = void 0)),
                  a ||
                    h ||
                    (e &&
                      e.tagName &&
                      (t.current = (function (e, s, a) {
                        var l = (function (e) {
                            var s = e.rootMargin || '',
                              a = r.get(s)
                            if (a) return a
                            var l = new Map(),
                              i = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var s = l.get(e.target),
                                    a =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0
                                  s && a && s(a)
                                })
                              }, e)
                            return (
                              r.set(
                                s,
                                (a = { id: s, observer: i, elements: l })
                              ),
                              a
                            )
                          })(a),
                          i = l.id,
                          c = l.observer,
                          n = l.elements
                        return (
                          n.set(e, s),
                          c.observe(e),
                          function () {
                            n.delete(e),
                              c.unobserve(e),
                              0 === n.size && (c.disconnect(), r.delete(i))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && o(e)
                        },
                        { rootMargin: s }
                      )))
              },
              [a, s, h]
            )
          return (
            i.useEffect(
              function () {
                if (!n && !h) {
                  var e = c.requestIdleCallback(function () {
                    return o(!0)
                  })
                  return function () {
                    return c.cancelIdleCallback(e)
                  }
                }
              },
              [h]
            ),
            [x, h]
          )
        })
      var i = a(7294),
        c = a(9311),
        n = 'undefined' !== typeof IntersectionObserver
      var r = new Map()
    },
    6696: function (e, s, a) {
      'use strict'
      a.r(s),
        a.d(s, {
          default: function () {
            return v
          },
        })
      var l = a(5893),
        i = a(7294),
        c =
          (a(4884),
          a(8931),
          a(6031),
          a(7888),
          a(1316),
          a(6637),
          a(8926),
          a(3481),
          a(2139),
          a(1552),
          a(5794),
          a(4681),
          a(4934),
          a(1020),
          a(7431),
          a(9008)),
        n = a(1163),
        r = a(3823),
        t = function () {
          var e = (0, i.useState)(!1),
            s = e[0],
            a = e[1],
            c = (0, i.useState)(!1),
            n = c[0],
            t = c[1],
            d = (0, i.useState)(!1),
            h = d[0],
            o = d[1],
            x = (0, i.useState)(!1),
            m = x[0],
            j = x[1],
            u = (0, i.useState)(!1),
            p = u[0],
            N = u[1],
            f = function () {
              t(!n)
            },
            v = function () {
              o(!h)
            },
            g = function () {
              j(!m)
            }
          window.addEventListener('scroll', function () {
            window.scrollY >= 80 ? N(!0) : N(!1)
          })
          var b = (0, i.useState)(!1),
            y = b[0],
            C = b[1],
            S = (0, i.useState)(!1),
            w = S[0],
            O = S[1],
            k = (0, i.useState)('Fran\xe7ais'),
            I = k[0],
            E = k[1],
            T = (0, i.useState)(!1),
            A = (T[0], T[1], (0, i.useState)(!1)),
            L = (A[0], A[1], (0, i.useState)('USD')),
            Z =
              (L[0],
              L[1],
              [
                'English',
                'Fran\xe7ais',
                '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
              ])
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)('div', {
              className: 'page-wrapper',
              children: [
                (0, l.jsx)('div', {
                  className: s ? 'body_overlay open' : 'body_overlay',
                }),
                (0, l.jsxs)('header', {
                  className: 'header-wrap style1',
                  children: [
                    (0, l.jsx)('div', {
                      className: n ? 'body_overlay open' : 'body_overlay',
                    }),
                    (0, l.jsx)('div', {
                      className: m ? 'header-top open' : 'header-top',
                      children: (0, l.jsx)('div', {
                        className: 'container-fluid',
                        children: (0, l.jsxs)('div', {
                          className: 'row align-items-center',
                          children: [
                            (0, l.jsx)('div', {
                              className: 'col-lg-7 col-md-12',
                              children: (0, l.jsxs)('div', {
                                className: 'header-top-left',
                                children: [
                                  (0, l.jsx)('div', {
                                    className: 'close-header-top xl-none',
                                    onClick: g,
                                    children: (0, l.jsx)('button', {
                                      type: 'button',
                                      children: (0, l.jsx)('i', {
                                        className: 'las la-times',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('p', {
                                    children:
                                      'Vacances adapt\xe9es pour adultes en situation de handicap.',
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)('div', {
                              className: 'col-lg-5',
                              children: (0, l.jsxs)('div', {
                                className: 'header-top-right',
                                children: [
                                  (0, l.jsx)(r.Z, {
                                    href: '/log-in',
                                    children: (0, l.jsxs)('a', {
                                      className: 'link style3',
                                      children: [
                                        (0, l.jsx)('i', {
                                          className: 'ri-user-line',
                                        }),
                                        'Se connecter',
                                      ],
                                    }),
                                  }),
                                  (0, l.jsxs)('div', {
                                    onClick: function () {
                                      C(!y)
                                    },
                                    className: y
                                      ? 'nice-select open'
                                      : 'nice-select',
                                    children: [
                                      (0, l.jsx)('span', {
                                        className: 'current',
                                        children: I,
                                      }),
                                      (0, l.jsx)('ul', {
                                        className: 'list',
                                        children:
                                          Z.length > 0 &&
                                          Z.map(function (e, s) {
                                            return (0, l.jsx)(
                                              'li',
                                              {
                                                onClick: function (a) {
                                                  return (function (e, s) {
                                                    if (w === s) return O(null)
                                                    O(s), E(e)
                                                  })(e, s)
                                                },
                                                onChange: function (e) {
                                                  return e
                                                },
                                                className:
                                                  w === s
                                                    ? 'option selected focus'
                                                    : 'option',
                                                children: e,
                                              },
                                              s
                                            )
                                          }),
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)('div', {
                                    className: 'contact-box xl-none',
                                    children: [
                                      (0, l.jsx)('span', {
                                        className: 'ri-phone-line',
                                      }),
                                      (0, l.jsxs)('p', {
                                        children: [
                                          'Contact Now ',
                                          (0, l.jsx)('br', {}),
                                          (0, l.jsx)('a', {
                                            href: 'tel:+15143214567',
                                            children: '+1 (514) 321-4567',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)('header', {
                  className: p
                    ? 'is-sticky header-wrap style1'
                    : 'header-wrap style1',
                  children: (0, l.jsx)('div', {
                    className: 'header-bottom',
                    children: (0, l.jsx)('div', {
                      className: 'container-fluid',
                      children: (0, l.jsxs)('div', {
                        className: 'row align-items-center',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'col-lg-2 col-md-3 col-5',
                            children: (0, l.jsx)('div', {
                              className: 'logo v2',
                              children: (0, l.jsx)(r.Z, {
                                href: '/',
                                children: (0, l.jsx)('a', {
                                  children: (0, l.jsx)('img', {
                                    src: '/images/logo.jpg',
                                    alt: 'Image',
                                  }),
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsxs)('div', {
                            className:
                              'col-lg-7 col-md-9 col-7 order-lg-1 order-md-2 order-2',
                            children: [
                              (0, l.jsxs)('div', {
                                className: h
                                  ? 'main-menu-wrap open'
                                  : 'main-menu-wrap',
                                children: [
                                  (0, l.jsx)('div', {
                                    className: 'menu-close xl-none',
                                    children: (0, l.jsx)('a', {
                                      onClick: v,
                                      children: (0, l.jsx)('i', {
                                        className: 'las la-times',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('div', {
                                    id: 'menu',
                                    children: (0, l.jsxs)('ul', {
                                      className: 'main-menu',
                                      children: [
                                        (0, l.jsx)('li', {
                                          children: (0, l.jsx)('a', {
                                            href: '/',
                                            children: 'Accueil',
                                          }),
                                        }),
                                        (0, l.jsxs)('li', {
                                          className: 'has-children',
                                          children: [
                                            (0, l.jsx)('a', {
                                              href: '/tours',
                                              children: 'S\xe9jours',
                                            }),
                                            (0, l.jsx)('span', {
                                              className: 'menu-expand',
                                              children: (0, l.jsx)('i', {
                                                className: 'las la-angle-down',
                                              }),
                                            }),
                                            (0, l.jsxs)('ul', {
                                              className: 'sub-menu',
                                              children: [
                                                (0, l.jsx)('li', {
                                                  children: (0, l.jsx)(r.Z, {
                                                    href: '/tours',
                                                    activeClassName: 'active',
                                                    children: (0, l.jsx)('a', {
                                                      children: 'S\xe9jours',
                                                    }),
                                                  }),
                                                }),
                                                (0, l.jsx)('li', {
                                                  children: (0, l.jsx)(r.Z, {
                                                    href: '/concerned-people',
                                                    activeClassName: 'active',
                                                    children: (0, l.jsx)('a', {
                                                      children:
                                                        'Les personnes concernes par les s\xe9jours',
                                                    }),
                                                  }),
                                                }),
                                                (0, l.jsx)('li', {
                                                  children: (0, l.jsx)(r.Z, {
                                                    href: '/financing',
                                                    activeClassName: 'active',
                                                    children: (0, l.jsx)('a', {
                                                      children:
                                                        'Ou chercher les financements pour mon voyage',
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, l.jsx)('li', {
                                          children: (0, l.jsx)('a', {
                                            href: '/destination',
                                            children: 'Destinations',
                                          }),
                                        }),
                                        (0, l.jsx)('li', {
                                          children: (0, l.jsx)('a', {
                                            href: '/about-us',
                                            children: 'Qui sommes-nous',
                                          }),
                                        }),
                                        (0, l.jsx)('li', {
                                          children: (0, l.jsx)('a', {
                                            href: '/contact-us',
                                            children: 'Nous contacter',
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, l.jsxs)('div', {
                                className: 'mobile-bar-wrap',
                                children: [
                                  (0, l.jsx)('div', {
                                    className: 'sidebar-menu xl-none',
                                    onClick: f,
                                    children: (0, l.jsx)('span', {
                                      className: 'ri-menu-3-line',
                                    }),
                                  }),
                                  (0, l.jsx)('div', {
                                    className: 'mobile-top-bar xl-none',
                                    onClick: g,
                                    children: (0, l.jsx)('i', {
                                      className: 'las la-sliders-h',
                                    }),
                                  }),
                                  (0, l.jsx)('div', {
                                    className: 'mobile-menu xl-none',
                                    children: (0, l.jsx)('a', {
                                      onClick: v,
                                      children: (0, l.jsx)('i', {
                                        className: 'las la-bars',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)('div', {
                            className:
                              'col-lg-3 col-md-6 order-lg-2 order-md-1 md-none',
                            children: (0, l.jsxs)('div', {
                              className: 'header-bottom-right',
                              children: [
                                (0, l.jsxs)('div', {
                                  className: 'contact-box',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'ri-phone-line',
                                    }),
                                    (0, l.jsxs)('p', {
                                      children: [
                                        'Contacter maintenant',
                                        (0, l.jsx)('br', {}),
                                        (0, l.jsx)('a', {
                                          href: 'tel:+33143156455',
                                          children: '+331.43.15.64.55',
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsx)('div', {
                                  className: 'sidebar-menu',
                                  onClick: f,
                                  children: (0, l.jsx)('span', {
                                    className: 'ri-menu-3-line',
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, l.jsxs)('div', {
                  className: n ? 'contact-popup open' : 'contact-popup',
                  children: [
                    (0, l.jsxs)('div', {
                      className: 'contact-popup-title',
                      children: [
                        (0, l.jsx)('h2', { children: 'Nous contacter' }),
                        (0, l.jsx)('button', {
                          type: 'button',
                          className: 'close-popup',
                          onClick: f,
                          children: (0, l.jsx)('i', {
                            className: 'ri-close-fill',
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: 'contact-popup-wrap',
                      children: [
                        (0, l.jsxs)('div', {
                          className: 'contact-address',
                          children: [
                            (0, l.jsx)('div', {
                              className: 'contact-icon',
                              children: (0, l.jsx)('i', {
                                className: 'ri-map-pin-fill',
                              }),
                            }),
                            (0, l.jsxs)('div', {
                              className: 'contact-info',
                              children: [
                                (0, l.jsx)('h5', { children: 'Paris, France' }),
                                (0, l.jsx)('p', {
                                  children:
                                    'Adresse: 03 rue Bisson 75020, Paris',
                                }),
                                (0, l.jsxs)('p', {
                                  children: [
                                    'Tel: ',
                                    (0, l.jsx)('a', {
                                      href: 'tel:+33143156455',
                                      children: '+331.43.15.64.55',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              className: 'contact-info',
                              children: [
                                (0, l.jsx)('h5', {
                                  className: 'mtb-15',
                                  children: 'Suivez-nous sur:',
                                }),
                                (0, l.jsxs)('ul', {
                                  className: 'social-profile v1',
                                  children: [
                                    (0, l.jsx)('li', {
                                      children: (0, l.jsx)('a', {
                                        target: '_blank',
                                        href: 'https://facebook.com',
                                        children: (0, l.jsx)('i', {
                                          className: 'ri-facebook-fill',
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)('li', {
                                      children: (0, l.jsx)('a', {
                                        target: '_blank',
                                        href: 'https://linkedin.com',
                                        children: (0, l.jsx)('i', {
                                          className: 'ri-linkedin-fill',
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)('li', {
                                      children: (0, l.jsx)('a', {
                                        target: '_blank',
                                        href: 'https://twitter.com',
                                        children: (0, l.jsx)('i', {
                                          className: 'ri-twitter-fill',
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)('li', {
                                      children: (0, l.jsx)('a', {
                                        target: '_blank',
                                        href: 'https://instagram.com',
                                        children: (0, l.jsx)('i', {
                                          className: 'ri-instagram-line',
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)('div', {
                          className: 'comp_map',
                          children: (0, l.jsx)('iframe', {
                            class: 'gmap_iframe',
                            frameborder: '0',
                            scrolling: 'no',
                            marginheight: '0',
                            marginwidth: '0',
                            src: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=03 rue Bisson 75020, Paris&t=&z=14&ie=UTF8&iwloc=B&output=embed',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)('div', {
                  className: s ? 'cart-popup open' : 'cart-popup',
                  children: [
                    (0, l.jsxs)('div', {
                      className: 'cart-popup-title',
                      children: [
                        (0, l.jsx)('h2', { children: 'Shopping Cart (4)' }),
                        (0, l.jsx)('button', {
                          type: 'button',
                          className: 'close-popup',
                          onClick: function () {
                            a(!s)
                          },
                          children: (0, l.jsx)('i', {
                            className: 'las la-times',
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: 'cart-popup-item-wrap',
                      children: [
                        (0, l.jsxs)('div', {
                          className: 'cart-popup-item',
                          children: [
                            (0, l.jsx)('div', {
                              className: 'cart-popup-item-img',
                              children: (0, l.jsx)('img', {
                                src: '/images/product/cart-thumb-1.jpg',
                                alt: 'Image',
                              }),
                            }),
                            (0, l.jsxs)('div', {
                              className: 'cart-popup-item-name',
                              children: [
                                (0, l.jsx)('p', { children: 'Large Suitcase' }),
                                (0, l.jsx)('div', {
                                  className: 'product-quantity',
                                  children: (0, l.jsxs)('div', {
                                    className: 'qtySelector',
                                    children: [
                                      (0, l.jsx)('span', {
                                        className:
                                          'ri-subtract-line decreaseQty',
                                      }),
                                      (0, l.jsx)('input', {
                                        type: 'text',
                                        className: 'qtyValue',
                                        value: '1',
                                        onChange: function (e) {
                                          return e
                                        },
                                      }),
                                      (0, l.jsx)('span', {
                                        className: 'las la-plus increaseQty',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              className: 'cart-popup-item-price',
                              children: [
                                (0, l.jsx)('button', {
                                  type: 'button',
                                  children: (0, l.jsx)('i', {
                                    className: 'las la-times',
                                  }),
                                }),
                                (0, l.jsx)('span', { children: '$148.00' }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)('div', {
                          className: 'cart-popup-item',
                          children: [
                            (0, l.jsx)('div', {
                              className: 'cart-popup-item-img',
                              children: (0, l.jsx)('img', {
                                src: '/images/product/cart-thumb-2.jpg',
                                alt: 'Image',
                              }),
                            }),
                            (0, l.jsxs)('div', {
                              className: 'cart-popup-item-name',
                              children: [
                                (0, l.jsx)('p', {
                                  children: 'Leather Backpack',
                                }),
                                (0, l.jsx)('div', {
                                  className: 'product-quantity',
                                  children: (0, l.jsxs)('div', {
                                    className: 'qtySelector',
                                    children: [
                                      (0, l.jsx)('span', {
                                        className:
                                          'ri-subtract-line decreaseQty',
                                      }),
                                      (0, l.jsx)('input', {
                                        type: 'text',
                                        className: 'qtyValue',
                                        value: '1',
                                        onChange: function (e) {
                                          return e
                                        },
                                      }),
                                      (0, l.jsx)('span', {
                                        className: 'las la-plus increaseQty',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              className: 'cart-popup-item-price',
                              children: [
                                (0, l.jsx)('button', {
                                  type: 'button',
                                  children: (0, l.jsx)('i', {
                                    className: 'las la-times',
                                  }),
                                }),
                                (0, l.jsx)('span', { children: '$148.00' }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)('div', {
                          className: 'cart-popup-item',
                          children: [
                            (0, l.jsx)('div', {
                              className: 'cart-popup-item-img',
                              children: (0, l.jsx)('img', {
                                src: '/images/product/cart-thumb-3.jpg',
                                alt: 'Image',
                              }),
                            }),
                            (0, l.jsxs)('div', {
                              className: 'cart-popup-item-name',
                              children: [
                                (0, l.jsx)('p', {
                                  children: 'Orange Suitcase',
                                }),
                                (0, l.jsx)('div', {
                                  className: 'product-quantity',
                                  children: (0, l.jsxs)('div', {
                                    className: 'qtySelector',
                                    children: [
                                      (0, l.jsx)('span', {
                                        className:
                                          'ri-subtract-line decreaseQty',
                                      }),
                                      (0, l.jsx)('input', {
                                        type: 'text',
                                        className: 'qtyValue',
                                        value: '1',
                                        onChange: function (e) {
                                          return e
                                        },
                                      }),
                                      (0, l.jsx)('span', {
                                        className: 'las la-plus increaseQty',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              className: 'cart-popup-item-price',
                              children: [
                                (0, l.jsx)('button', {
                                  type: 'button',
                                  children: (0, l.jsx)('i', {
                                    className: 'las la-times',
                                  }),
                                }),
                                (0, l.jsx)('span', { children: '$148.00' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: 'cart-popup-total-wrap',
                      children: [
                        (0, l.jsxs)('div', {
                          className: 'cart-popup-total',
                          children: [
                            (0, l.jsx)('h5', { children: 'TOTAL' }),
                            (0, l.jsx)('h5', { children: '$444.00' }),
                          ],
                        }),
                        (0, l.jsx)(r.Z, {
                          href: '/shop-left-sidebar',
                          children: (0, l.jsx)('a', {
                            className: 'btn v4',
                            children: 'Continue Shopping',
                          }),
                        }),
                        (0, l.jsx)(r.Z, {
                          href: '/checkout',
                          children: (0, l.jsx)('a', {
                            className: 'btn v3',
                            children: 'Check Out',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        d = function () {
          var e = (0, i.useState)(!1),
            s = e[0],
            a = e[1],
            c = (0, i.useState)(!1),
            n = c[0],
            t = c[1],
            d = (0, i.useState)(!1),
            h = d[0],
            o = d[1],
            x = (0, i.useState)(!1),
            m = x[0],
            j = x[1],
            u = (0, i.useState)(!1),
            p = u[0],
            N = u[1],
            f = function () {
              a(!s)
            },
            v = function () {
              t(!n)
            },
            g = function () {
              o(!h)
            },
            b = function () {
              j(!m)
            }
          window.addEventListener('scroll', function () {
            window.scrollY >= 80 ? N(!0) : N(!1)
          })
          var y = (0, i.useState)(!1),
            C = y[0],
            S = y[1],
            w = (0, i.useState)(!1),
            O = w[0],
            k = w[1],
            I = (0, i.useState)('English'),
            E = I[0],
            T = I[1],
            A = (0, i.useState)(!1),
            L = A[0],
            Z = A[1],
            R = (0, i.useState)(!1),
            D = R[0],
            _ = R[1],
            B = (0, i.useState)('USD'),
            P = B[0],
            U = B[1],
            G = ['English', 'French', 'Arabic'],
            H = ['USE', 'EURO', 'YEN']
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)('div', {
                className: n ? 'body_overlay open' : 'body_overlay',
              }),
              (0, l.jsxs)('header', {
                className: 'header-wrap style2',
                children: [
                  (0, l.jsx)('div', {
                    className: s ? 'body_overlay open' : 'body_overlay',
                  }),
                  (0, l.jsx)('div', {
                    className: m ? 'header-top open' : 'header-top',
                    children: (0, l.jsx)('div', {
                      className: 'container-fluid',
                      children: (0, l.jsxs)('div', {
                        className: 'row align-items-center',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'col-lg-7 col-md-12',
                            children: (0, l.jsxs)('div', {
                              className: 'header-top-left',
                              children: [
                                (0, l.jsx)('div', {
                                  className: 'close-header-top xl-none',
                                  onClick: b,
                                  children: (0, l.jsx)('button', {
                                    type: 'button',
                                    children: (0, l.jsx)('i', {
                                      className: 'las la-times',
                                    }),
                                  }),
                                }),
                                (0, l.jsx)('p', {
                                  children:
                                    'Find the best spot, restaurant, hotel, fitness center, shop etc.',
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)('div', {
                            className: 'col-lg-5',
                            children: (0, l.jsxs)('div', {
                              className: 'header-top-right',
                              children: [
                                (0, l.jsx)(r.Z, {
                                  href: '/log-in',
                                  children: (0, l.jsxs)('a', {
                                    className: 'link style3',
                                    children: [
                                      (0, l.jsx)('i', {
                                        className: 'ri-user-line',
                                      }),
                                      'SIGN IN',
                                    ],
                                  }),
                                }),
                                (0, l.jsxs)('div', {
                                  onClick: function () {
                                    S(!C)
                                  },
                                  className: C
                                    ? 'nice-select open'
                                    : 'nice-select',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'current',
                                      children: E,
                                    }),
                                    (0, l.jsx)('ul', {
                                      className: 'list',
                                      children:
                                        G.length > 0 &&
                                        G.map(function (e, s) {
                                          return (0, l.jsx)(
                                            'li',
                                            {
                                              onClick: function (a) {
                                                return (function (e, s) {
                                                  if (O === s) return k(null)
                                                  k(s), T(e)
                                                })(e, s)
                                              },
                                              onChange: function (e) {
                                                return e
                                              },
                                              className:
                                                O === s
                                                  ? 'option selected focus'
                                                  : 'option',
                                              children: e,
                                            },
                                            s
                                          )
                                        }),
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  onClick: function () {
                                    Z(!L)
                                  },
                                  className: L
                                    ? 'nice-select open'
                                    : 'nice-select',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'current',
                                      children: P,
                                    }),
                                    (0, l.jsx)('ul', {
                                      className: 'list',
                                      children:
                                        H.length > 0 &&
                                        H.map(function (e, s) {
                                          return (0, l.jsx)(
                                            'li',
                                            {
                                              onClick: function (a) {
                                                return (function (e, s) {
                                                  if (D === s) return _(null)
                                                  _(s), U(e)
                                                })(e, s)
                                              },
                                              onChange: function (e) {
                                                return e
                                              },
                                              className:
                                                O === s
                                                  ? 'option selected focus'
                                                  : 'option',
                                              children: e,
                                            },
                                            s
                                          )
                                        }),
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'shopcart md-none',
                                  onClick: f,
                                  children: [
                                    (0, l.jsxs)('button', {
                                      type: 'button',
                                      children: [
                                        (0, l.jsx)('i', {
                                          className: 'ri-shopping-cart-line',
                                        }),
                                        (0, l.jsx)('span', {
                                          className: 'item-amt',
                                          children: '1',
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'cart-total',
                                      children: '$0.00',
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'contact-box xl-none',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'ri-phone-line',
                                    }),
                                    (0, l.jsxs)('p', {
                                      children: [
                                        'Contact Now ',
                                        (0, l.jsx)('br', {}),
                                        (0, l.jsx)('a', {
                                          href: 'tel:+15143214567',
                                          children: '+1 (514) 321-4567',
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, l.jsx)('header', {
                className: p
                  ? 'is-sticky header-wrap style2'
                  : 'header-wrap style2',
                children: (0, l.jsx)('div', {
                  className: 'header-bottom',
                  children: (0, l.jsx)('div', {
                    className: 'container-fluid',
                    children: (0, l.jsxs)('div', {
                      className: 'row align-items-center',
                      children: [
                        (0, l.jsx)('div', {
                          className: 'col-lg-3 col-md-3 col-5',
                          children: (0, l.jsx)('div', {
                            className: 'logo v2',
                            children: (0, l.jsx)(r.Z, {
                              href: '/',
                              children: (0, l.jsx)('a', {
                                children: (0, l.jsx)('img', {
                                  src: '/images/logo.png',
                                  alt: 'Image',
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsxs)('div', {
                          className:
                            'col-lg-6 col-md-9 col-7 order-lg-1 order-md-2 order-2',
                          children: [
                            (0, l.jsxs)('div', {
                              className: h
                                ? 'main-menu-wrap open'
                                : 'main-menu-wrap',
                              children: [
                                (0, l.jsx)('div', {
                                  className: 'menu-close xl-none',
                                  children: (0, l.jsx)('a', {
                                    onClick: g,
                                    children: (0, l.jsx)('i', {
                                      className: 'las la-times',
                                    }),
                                  }),
                                }),
                                (0, l.jsx)('div', {
                                  id: 'menu',
                                  children: (0, l.jsxs)('ul', {
                                    className: 'main-menu',
                                    children: [
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)('a', {
                                            href: '#',
                                            children: 'HOME',
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'HOME 1',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/index-2',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'HOME 2',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/index-3',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'HOME 3',
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)('a', {
                                            href: '#',
                                            children: 'TOURS',
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/tours',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'TOURS',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/tour-details',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'TOURS DETAILS',
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)('a', {
                                            href: '#',
                                            children: 'DESTINATION',
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/destination',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'DESTINATIONS',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/destination-details',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children:
                                                      'DESTINATION DETAILS',
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)('a', {
                                            href: '#',
                                            children: 'SHOP',
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsxs)('li', {
                                                className: 'has-children',
                                                children: [
                                                  (0, l.jsx)('a', {
                                                    href: '#',
                                                    children: 'SHOP LAYOUT',
                                                  }),
                                                  (0, l.jsx)('span', {
                                                    className: 'menu-expand',
                                                    children: (0, l.jsx)('i', {
                                                      className:
                                                        'las la-angle-down',
                                                    }),
                                                  }),
                                                  (0, l.jsxs)('ul', {
                                                    className: 'sub-menu',
                                                    children: [
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/shop-left-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'SHOP LEFT SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/shop-right-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'SHOP RIGHR SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/shop-no-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'SHOP NO SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/shop-details',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'SHOP DETAILS',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/wishlist',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'WISHLIST',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/cart',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'CART',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/checkout',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'CHECKOUT',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsxs)('li', {
                                                className: 'has-children',
                                                children: [
                                                  (0, l.jsx)('a', {
                                                    href: '#',
                                                    children: 'USER',
                                                  }),
                                                  (0, l.jsx)('span', {
                                                    className: 'menu-expand',
                                                    children: (0, l.jsx)('i', {
                                                      className:
                                                        'las la-angle-down',
                                                    }),
                                                  }),
                                                  (0, l.jsxs)('ul', {
                                                    className: 'sub-menu',
                                                    children: [
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/log-in',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'LOG IN',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/register',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'REGISTER',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/forgot-password',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'FORGOT PASSWORD',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/admin/profile',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'MY ACCOUNT',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)('a', {
                                            href: '#',
                                            children: 'BLOG',
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsxs)('li', {
                                                className: 'has-children',
                                                children: [
                                                  (0, l.jsx)('a', {
                                                    href: '#',
                                                    children: 'BLOG LAYOUT',
                                                  }),
                                                  (0, l.jsx)('span', {
                                                    className: 'menu-expand',
                                                    children: (0, l.jsx)('i', {
                                                      className:
                                                        'las la-angle-down',
                                                    }),
                                                  }),
                                                  (0, l.jsxs)('ul', {
                                                    className: 'sub-menu',
                                                    children: [
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-left-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG LEFT SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-right-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG RIGHT SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-no-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG NO SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, l.jsxs)('li', {
                                                className: 'has-children',
                                                children: [
                                                  (0, l.jsx)('a', {
                                                    href: '#',
                                                    children: 'BLOG DETAILS',
                                                  }),
                                                  (0, l.jsx)('span', {
                                                    className: 'menu-expand',
                                                    children: (0, l.jsx)('i', {
                                                      className:
                                                        'las la-angle-down',
                                                    }),
                                                  }),
                                                  (0, l.jsxs)('ul', {
                                                    className: 'sub-menu',
                                                    children: [
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-details-left-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG DETAILS LEFT SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-details-right-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG DETAILS RIGHT SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-details-no-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG DETAILS NO SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)(r.Z, {
                                            href: '/contact-use',
                                            children: (0, l.jsx)('a', {
                                              children: 'PAGES',
                                            }),
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/about-us',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'ABOUT US',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/contact-us',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'CONTACT US',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/team',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'TEAM',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/pricing-plan',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'PRICING PLAN',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/testimonial',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'TESTIMONIALS',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/faq',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'FAQ',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/privacy-policy',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'PRIVACY POLICY',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/terms-condition',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children:
                                                      'TERMS & CONDITIONS',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/404',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: '404',
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              className: 'mobile-bar-wrap',
                              children: [
                                (0, l.jsxs)('div', {
                                  className: 'shopcart xl-none',
                                  onClick: f,
                                  children: [
                                    (0, l.jsxs)('button', {
                                      type: 'button',
                                      children: [
                                        (0, l.jsx)('i', {
                                          className: 'ri-shopping-cart-line',
                                        }),
                                        (0, l.jsx)('span', {
                                          className: 'item-amt',
                                          children: '1',
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'cart-total',
                                      children: '$0.00',
                                    }),
                                  ],
                                }),
                                (0, l.jsx)('div', {
                                  className: 'sidebar-menu xl-none',
                                  onClick: v,
                                  children: (0, l.jsx)('span', {
                                    className: 'ri-menu-3-line',
                                  }),
                                }),
                                (0, l.jsx)('div', {
                                  className: 'mobile-top-bar xl-none',
                                  onClick: b,
                                  children: (0, l.jsx)('i', {
                                    className: 'las la-sliders-h',
                                  }),
                                }),
                                (0, l.jsx)('div', {
                                  className: 'mobile-menu xl-none',
                                  children: (0, l.jsx)('a', {
                                    onClick: g,
                                    children: (0, l.jsx)('i', {
                                      className: 'las la-bars',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)('div', {
                          className:
                            'col-lg-3 col-md-6 order-lg-2 order-md-1 md-none',
                          children: (0, l.jsxs)('div', {
                            className: 'header-bottom-right',
                            children: [
                              (0, l.jsxs)('div', {
                                className: 'contact-box',
                                children: [
                                  (0, l.jsx)('span', {
                                    className: 'ri-phone-line',
                                  }),
                                  (0, l.jsxs)('p', {
                                    children: [
                                      'Contact Now ',
                                      (0, l.jsx)('br', {}),
                                      (0, l.jsx)('a', {
                                        href: 'tel:+15143214567',
                                        children: '+1 (514) 321-4567',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsx)('div', {
                                className: 'sidebar-menu',
                                onClick: v,
                                children: (0, l.jsx)('span', {
                                  className: 'ri-menu-3-line',
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, l.jsxs)('div', {
                className: n ? 'contact-popup open' : 'contact-popup',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'contact-popup-title',
                    children: [
                      (0, l.jsx)('h2', { children: 'Contact Us' }),
                      (0, l.jsx)('button', {
                        type: 'button',
                        className: 'close-popup',
                        onClick: v,
                        children: (0, l.jsx)('i', {
                          className: 'ri-close-fill',
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'contact-popup-wrap',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'contact-address',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'contact-icon',
                            children: (0, l.jsx)('i', {
                              className: 'ri-map-pin-fill',
                            }),
                          }),
                          (0, l.jsxs)('div', {
                            className: 'contact-info',
                            children: [
                              (0, l.jsx)('h5', {
                                children: 'San Francisco,USA',
                              }),
                              (0, l.jsx)('p', {
                                children: 'Address: 123 westearn Road,LA',
                              }),
                              (0, l.jsxs)('p', {
                                children: [
                                  'Phone: ',
                                  (0, l.jsx)('a', {
                                    href: 'tel:2132008224',
                                    children: '213-200-8224',
                                  }),
                                  (0, l.jsx)('a', {
                                    href: 'tel:2132008225',
                                    children: '213-200-8225',
                                  }),
                                ],
                              }),
                              (0, l.jsx)('h5', {
                                className: 'mt-30 mb-20',
                                children: 'Follow Us On:',
                              }),
                              (0, l.jsxs)('ul', {
                                className: 'social-profile v1',
                                children: [
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('a', {
                                      target: '_blank',
                                      href: 'https://facebook.com',
                                      children: (0, l.jsx)('i', {
                                        className: 'ri-facebook-fill',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('a', {
                                      target: '_blank',
                                      href: 'https://linkedin.com',
                                      children: (0, l.jsx)('i', {
                                        className: 'ri-linkedin-fill',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('a', {
                                      target: '_blank',
                                      href: 'https://twitter.com',
                                      children: (0, l.jsx)('i', {
                                        className: 'ri-twitter-fill',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('a', {
                                      target: '_blank',
                                      href: 'https://instagram.com',
                                      children: (0, l.jsx)('i', {
                                        className: 'ri-instagram-line',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)('div', {
                        className: 'comp_map',
                        children: (0, l.jsx)('iframe', {
                          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)('div', {
                className: s ? 'cart-popup open' : 'cart-popup',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'cart-popup-title',
                    children: [
                      (0, l.jsx)('h2', { children: 'Shopping Cart (4)' }),
                      (0, l.jsx)('button', {
                        type: 'button',
                        className: 'close-popup',
                        onClick: f,
                        children: (0, l.jsx)('i', {
                          className: 'las la-times',
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'cart-popup-item-wrap',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'cart-popup-item',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'cart-popup-item-img',
                            children: (0, l.jsx)('img', {
                              src: '/images/product/cart-thumb-1.jpg',
                              alt: 'Image',
                            }),
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-name',
                            children: [
                              (0, l.jsx)('p', { children: 'Large Suitcase' }),
                              (0, l.jsx)('div', {
                                className: 'product-quantity',
                                children: (0, l.jsxs)('div', {
                                  className: 'qtySelector',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'ri-subtract-line decreaseQty',
                                    }),
                                    (0, l.jsx)('input', {
                                      type: 'text',
                                      className: 'qtyValue',
                                      value: '1',
                                      onChange: function (e) {
                                        return e
                                      },
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'las la-plus increaseQty',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-price',
                            children: [
                              (0, l.jsx)('button', {
                                type: 'button',
                                children: (0, l.jsx)('i', {
                                  className: 'las la-times',
                                }),
                              }),
                              (0, l.jsx)('span', { children: '$148.00' }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'cart-popup-item',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'cart-popup-item-img',
                            children: (0, l.jsx)('img', {
                              src: '/images/product/cart-thumb-2.jpg',
                              alt: 'Image',
                            }),
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-name',
                            children: [
                              (0, l.jsx)('p', { children: 'Leather Backpack' }),
                              (0, l.jsx)('div', {
                                className: 'product-quantity',
                                children: (0, l.jsxs)('div', {
                                  className: 'qtySelector',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'ri-subtract-line decreaseQty',
                                    }),
                                    (0, l.jsx)('input', {
                                      type: 'text',
                                      className: 'qtyValue',
                                      value: '1',
                                      onChange: function (e) {
                                        return e
                                      },
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'las la-plus increaseQty',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-price',
                            children: [
                              (0, l.jsx)('button', {
                                type: 'button',
                                children: (0, l.jsx)('i', {
                                  className: 'las la-times',
                                }),
                              }),
                              (0, l.jsx)('span', { children: '$148.00' }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'cart-popup-item',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'cart-popup-item-img',
                            children: (0, l.jsx)('img', {
                              src: '/images/product/cart-thumb-3.jpg',
                              alt: 'Image',
                            }),
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-name',
                            children: [
                              (0, l.jsx)('p', { children: 'Orange Suitcase' }),
                              (0, l.jsx)('div', {
                                className: 'product-quantity',
                                children: (0, l.jsxs)('div', {
                                  className: 'qtySelector',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'ri-subtract-line decreaseQty',
                                    }),
                                    (0, l.jsx)('input', {
                                      type: 'text',
                                      className: 'qtyValue',
                                      value: '1',
                                      onChange: function (e) {
                                        return e
                                      },
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'las la-plus increaseQty',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-price',
                            children: [
                              (0, l.jsx)('button', {
                                type: 'button',
                                children: (0, l.jsx)('i', {
                                  className: 'las la-times',
                                }),
                              }),
                              (0, l.jsx)('span', { children: '$148.00' }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'cart-popup-total-wrap',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'cart-popup-total',
                        children: [
                          (0, l.jsx)('h5', { children: 'TOTAL' }),
                          (0, l.jsx)('h5', { children: '$444.00' }),
                        ],
                      }),
                      (0, l.jsx)(r.Z, {
                        href: '/shop-left-sidebar',
                        children: (0, l.jsx)('a', {
                          className: 'btn v4',
                          children: 'Continue Shopping',
                        }),
                      }),
                      (0, l.jsx)(r.Z, {
                        href: '/checkout',
                        children: (0, l.jsx)('a', {
                          className: 'btn v3',
                          children: 'Check Out',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        h = function () {
          var e = (0, i.useState)(!1),
            s = e[0],
            a = e[1],
            c = (0, i.useState)(!1),
            n = c[0],
            t = c[1],
            d = (0, i.useState)(!1),
            h = d[0],
            o = d[1],
            x = (0, i.useState)(!1),
            m = x[0],
            j = x[1],
            u = (0, i.useState)(!1),
            p = u[0],
            N = u[1],
            f = function () {
              a(!s)
            },
            v = function () {
              t(!n)
            },
            g = function () {
              o(!h)
            },
            b = function () {
              j(!m)
            }
          window.addEventListener('scroll', function () {
            window.scrollY >= 80 ? N(!0) : N(!1)
          })
          var y = (0, i.useState)(!1),
            C = y[0],
            S = y[1],
            w = (0, i.useState)(!1),
            O = w[0],
            k = w[1],
            I = (0, i.useState)('English'),
            E = I[0],
            T = I[1],
            A = (0, i.useState)(!1),
            L = A[0],
            Z = A[1],
            R = (0, i.useState)(!1),
            D = R[0],
            _ = R[1],
            B = (0, i.useState)('USD'),
            P = B[0],
            U = B[1],
            G = ['English', 'French', 'Arabic'],
            H = ['USE', 'EURO', 'YEN']
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)('div', {
                className: n ? 'body_overlay open' : 'body_overlay',
              }),
              (0, l.jsxs)('header', {
                className: 'header-wrap style3',
                children: [
                  (0, l.jsx)('div', {
                    className: s ? 'body_overlay open' : 'body_overlay',
                  }),
                  (0, l.jsx)('div', {
                    className: m ? 'header-top open' : 'header-top',
                    children: (0, l.jsx)('div', {
                      className: 'container-fluid',
                      children: (0, l.jsxs)('div', {
                        className: 'row align-items-center',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'col-lg-7 col-md-12',
                            children: (0, l.jsxs)('div', {
                              className: 'header-top-left',
                              children: [
                                (0, l.jsx)('div', {
                                  className: 'close-header-top xl-none',
                                  onClick: b,
                                  children: (0, l.jsx)('button', {
                                    type: 'button',
                                    children: (0, l.jsx)('i', {
                                      className: 'las la-times',
                                    }),
                                  }),
                                }),
                                (0, l.jsx)('p', {
                                  children:
                                    'Find the best spot, restaurant, hotel, fitness center, shop etc.',
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)('div', {
                            className: 'col-lg-5',
                            children: (0, l.jsxs)('div', {
                              className: 'header-top-right',
                              children: [
                                (0, l.jsx)(r.Z, {
                                  href: '/log-in',
                                  children: (0, l.jsxs)('a', {
                                    className: 'link style3',
                                    children: [
                                      (0, l.jsx)('i', {
                                        className: 'ri-user-line',
                                      }),
                                      'SIGN IN',
                                    ],
                                  }),
                                }),
                                (0, l.jsxs)('div', {
                                  onClick: function () {
                                    S(!C)
                                  },
                                  className: C
                                    ? 'nice-select open'
                                    : 'nice-select',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'current',
                                      children: E,
                                    }),
                                    (0, l.jsx)('ul', {
                                      className: 'list',
                                      children:
                                        G.length > 0 &&
                                        G.map(function (e, s) {
                                          return (0, l.jsx)(
                                            'li',
                                            {
                                              onClick: function (a) {
                                                return (function (e, s) {
                                                  if (O === s) return k(null)
                                                  k(s), T(e)
                                                })(e, s)
                                              },
                                              onChange: function (e) {
                                                return e
                                              },
                                              className:
                                                O === s
                                                  ? 'option selected focus'
                                                  : 'option',
                                              children: e,
                                            },
                                            s
                                          )
                                        }),
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  onClick: function () {
                                    Z(!L)
                                  },
                                  className: L
                                    ? 'nice-select open'
                                    : 'nice-select',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'current',
                                      children: P,
                                    }),
                                    (0, l.jsx)('ul', {
                                      className: 'list',
                                      children:
                                        H.length > 0 &&
                                        H.map(function (e, s) {
                                          return (0, l.jsx)(
                                            'li',
                                            {
                                              onClick: function (a) {
                                                return (function (e, s) {
                                                  if (D === s) return _(null)
                                                  _(s), U(e)
                                                })(e, s)
                                              },
                                              onChange: function (e) {
                                                return e
                                              },
                                              className:
                                                O === s
                                                  ? 'option selected focus'
                                                  : 'option',
                                              children: e,
                                            },
                                            s
                                          )
                                        }),
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'shopcart md-none',
                                  onClick: f,
                                  children: [
                                    (0, l.jsxs)('button', {
                                      type: 'button',
                                      children: [
                                        (0, l.jsx)('i', {
                                          className: 'ri-shopping-cart-line',
                                        }),
                                        (0, l.jsx)('span', {
                                          className: 'item-amt',
                                          children: '1',
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'cart-total',
                                      children: '$0.00',
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'contact-box xl-none',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'ri-phone-line',
                                    }),
                                    (0, l.jsxs)('p', {
                                      children: [
                                        'Contact Now ',
                                        (0, l.jsx)('br', {}),
                                        (0, l.jsx)('a', {
                                          href: 'tel:+15143214567',
                                          children: '+1 (514) 321-4567',
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, l.jsx)('header', {
                className: p
                  ? 'is-sticky header-wrap style2'
                  : 'header-wrap style2',
                children: (0, l.jsx)('div', {
                  className: 'header-bottom',
                  children: (0, l.jsx)('div', {
                    className: 'container-fluid',
                    children: (0, l.jsxs)('div', {
                      className: 'row align-items-center',
                      children: [
                        (0, l.jsx)('div', {
                          className: 'col-lg-3 col-md-3 col-5',
                          children: (0, l.jsx)('div', {
                            className: 'logo v2',
                            children: (0, l.jsx)(r.Z, {
                              href: '/',
                              children: (0, l.jsx)('a', {
                                children: (0, l.jsx)('img', {
                                  src: '/images/logo.png',
                                  alt: 'Image',
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsxs)('div', {
                          className:
                            'col-lg-6 col-md-9 col-7 order-lg-1 order-md-2 order-2',
                          children: [
                            (0, l.jsxs)('div', {
                              className: h
                                ? 'main-menu-wrap open'
                                : 'main-menu-wrap',
                              children: [
                                (0, l.jsx)('div', {
                                  className: 'menu-close xl-none',
                                  children: (0, l.jsx)('a', {
                                    onClick: g,
                                    children: (0, l.jsx)('i', {
                                      className: 'las la-times',
                                    }),
                                  }),
                                }),
                                (0, l.jsx)('div', {
                                  id: 'menu',
                                  children: (0, l.jsxs)('ul', {
                                    className: 'main-menu',
                                    children: [
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)('a', {
                                            href: '#',
                                            children: 'HOME',
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'HOME 1',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/index-2',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'HOME 2',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/index-3',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'HOME 3',
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)('a', {
                                            href: '#',
                                            children: 'TOURS',
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/tours',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'TOURS',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/tour-details',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'TOURS DETAILS',
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)('a', {
                                            href: '#',
                                            children: 'DESTINATION',
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/destination',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'DESTINATIONS',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/destination-details',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children:
                                                      'DESTINATION DETAILS',
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)('a', {
                                            href: '#',
                                            children: 'SHOP',
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsxs)('li', {
                                                className: 'has-children',
                                                children: [
                                                  (0, l.jsx)('a', {
                                                    href: '#',
                                                    children: 'SHOP LAYOUT',
                                                  }),
                                                  (0, l.jsx)('span', {
                                                    className: 'menu-expand',
                                                    children: (0, l.jsx)('i', {
                                                      className:
                                                        'las la-angle-down',
                                                    }),
                                                  }),
                                                  (0, l.jsxs)('ul', {
                                                    className: 'sub-menu',
                                                    children: [
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/shop-left-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'SHOP LEFT SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/shop-right-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'SHOP RIGHR SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/shop-no-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'SHOP NO SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/shop-details',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'SHOP DETAILS',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/wishlist',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'WISHLIST',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/cart',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'CART',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/checkout',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'CHECKOUT',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsxs)('li', {
                                                className: 'has-children',
                                                children: [
                                                  (0, l.jsx)('a', {
                                                    href: '#',
                                                    children: 'USER',
                                                  }),
                                                  (0, l.jsx)('span', {
                                                    className: 'menu-expand',
                                                    children: (0, l.jsx)('i', {
                                                      className:
                                                        'las la-angle-down',
                                                    }),
                                                  }),
                                                  (0, l.jsxs)('ul', {
                                                    className: 'sub-menu',
                                                    children: [
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/log-in',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'LOG IN',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/register',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'REGISTER',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/forgot-password',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'FORGOT PASSWORD',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/admin/profile',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'MY ACCOUNT',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)('a', {
                                            href: '#',
                                            children: 'BLOG',
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsxs)('li', {
                                                className: 'has-children',
                                                children: [
                                                  (0, l.jsx)('a', {
                                                    href: '#',
                                                    children: 'BLOG LAYOUT',
                                                  }),
                                                  (0, l.jsx)('span', {
                                                    className: 'menu-expand',
                                                    children: (0, l.jsx)('i', {
                                                      className:
                                                        'las la-angle-down',
                                                    }),
                                                  }),
                                                  (0, l.jsxs)('ul', {
                                                    className: 'sub-menu',
                                                    children: [
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-left-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG LEFT SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-right-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG RIGHT SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-no-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG NO SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, l.jsxs)('li', {
                                                className: 'has-children',
                                                children: [
                                                  (0, l.jsx)('a', {
                                                    href: '#',
                                                    children: 'BLOG DETAILS',
                                                  }),
                                                  (0, l.jsx)('span', {
                                                    className: 'menu-expand',
                                                    children: (0, l.jsx)('i', {
                                                      className:
                                                        'las la-angle-down',
                                                    }),
                                                  }),
                                                  (0, l.jsxs)('ul', {
                                                    className: 'sub-menu',
                                                    children: [
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-details-left-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG DETAILS LEFT SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-details-right-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG DETAILS RIGHT SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, l.jsx)('li', {
                                                        children: (0, l.jsx)(
                                                          r.Z,
                                                          {
                                                            href: '/blog-details-no-sidebar',
                                                            activeClassName:
                                                              'active',
                                                            children: (0,
                                                            l.jsx)('a', {
                                                              children:
                                                                'BLOG DETAILS NO SIDEBAR',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)('li', {
                                        className: 'has-children',
                                        children: [
                                          (0, l.jsx)(r.Z, {
                                            href: '/contact-us',
                                            children: (0, l.jsx)('a', {
                                              children: 'PAGES',
                                            }),
                                          }),
                                          (0, l.jsx)('span', {
                                            className: 'menu-expand',
                                            children: (0, l.jsx)('i', {
                                              className: 'las la-angle-down',
                                            }),
                                          }),
                                          (0, l.jsxs)('ul', {
                                            className: 'sub-menu',
                                            children: [
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/about-us',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'ABOUT US',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/contact-us',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'CONTACT US',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/team',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'TEAM',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/pricing-plan',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'PRICING PLAN',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/testimonial',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'TESTIMONIALS',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/faq',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'FAQ',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/privacy-policy',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: 'PRIVACY POLICY',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/terms-condition',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children:
                                                      'TERMS & CONDITIONS',
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)('li', {
                                                children: (0, l.jsx)(r.Z, {
                                                  href: '/404',
                                                  activeClassName: 'active',
                                                  children: (0, l.jsx)('a', {
                                                    children: '404',
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              className: 'mobile-bar-wrap',
                              children: [
                                (0, l.jsxs)('div', {
                                  className: 'shopcart xl-none',
                                  onClick: f,
                                  children: [
                                    (0, l.jsxs)('button', {
                                      type: 'button',
                                      children: [
                                        (0, l.jsx)('i', {
                                          className: 'ri-shopping-cart-line',
                                        }),
                                        (0, l.jsx)('span', {
                                          className: 'item-amt',
                                          children: '1',
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'cart-total',
                                      children: '$0.00',
                                    }),
                                  ],
                                }),
                                (0, l.jsx)('div', {
                                  className: 'sidebar-menu xl-none',
                                  onClick: v,
                                  children: (0, l.jsx)('span', {
                                    className: 'ri-menu-3-line',
                                  }),
                                }),
                                (0, l.jsx)('div', {
                                  className: 'mobile-top-bar xl-none',
                                  onClick: b,
                                  children: (0, l.jsx)('i', {
                                    className: 'las la-sliders-h',
                                  }),
                                }),
                                (0, l.jsx)('div', {
                                  className: 'mobile-menu xl-none',
                                  children: (0, l.jsx)('a', {
                                    onClick: g,
                                    children: (0, l.jsx)('i', {
                                      className: 'las la-bars',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)('div', {
                          className:
                            'col-lg-3 col-md-6 order-lg-2 order-md-1 md-none',
                          children: (0, l.jsxs)('div', {
                            className: 'header-bottom-right',
                            children: [
                              (0, l.jsxs)('div', {
                                className: 'contact-box',
                                children: [
                                  (0, l.jsx)('span', {
                                    className: 'ri-phone-line',
                                  }),
                                  (0, l.jsxs)('p', {
                                    children: [
                                      'Contact Now ',
                                      (0, l.jsx)('br', {}),
                                      (0, l.jsx)('a', {
                                        href: 'tel:+15143214567',
                                        children: '+1 (514) 321-4567',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsx)('div', {
                                className: 'sidebar-menu',
                                onClick: v,
                                children: (0, l.jsx)('span', {
                                  className: 'ri-menu-3-line',
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, l.jsxs)('div', {
                className: n ? 'contact-popup open' : 'contact-popup',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'contact-popup-title',
                    children: [
                      (0, l.jsx)('h2', { children: 'Contact Us' }),
                      (0, l.jsx)('button', {
                        type: 'button',
                        className: 'close-popup',
                        onClick: v,
                        children: (0, l.jsx)('i', {
                          className: 'ri-close-fill',
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'contact-popup-wrap',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'contact-address',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'contact-icon',
                            children: (0, l.jsx)('i', {
                              className: 'ri-map-pin-fill',
                            }),
                          }),
                          (0, l.jsxs)('div', {
                            className: 'contact-info',
                            children: [
                              (0, l.jsx)('h5', {
                                children: 'San Francisco,USA',
                              }),
                              (0, l.jsx)('p', {
                                children: 'Address: 123 westearn Road,LA',
                              }),
                              (0, l.jsxs)('p', {
                                children: [
                                  'Phone: ',
                                  (0, l.jsx)('a', {
                                    href: 'tel:2132008224',
                                    children: '213-200-8224',
                                  }),
                                  (0, l.jsx)('a', {
                                    href: 'tel:2132008225',
                                    children: '213-200-8225',
                                  }),
                                ],
                              }),
                              (0, l.jsx)('h5', {
                                className: 'mt-30 mb-20',
                                children: 'Follow Us On:',
                              }),
                              (0, l.jsxs)('ul', {
                                className: 'social-profile v1',
                                children: [
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('a', {
                                      target: '_blank',
                                      href: 'https://facebook.com',
                                      children: (0, l.jsx)('i', {
                                        className: 'ri-facebook-fill',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('a', {
                                      target: '_blank',
                                      href: 'https://linkedin.com',
                                      children: (0, l.jsx)('i', {
                                        className: 'ri-linkedin-fill',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('a', {
                                      target: '_blank',
                                      href: 'https://twitter.com',
                                      children: (0, l.jsx)('i', {
                                        className: 'ri-twitter-fill',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('a', {
                                      target: '_blank',
                                      href: 'https://instagram.com',
                                      children: (0, l.jsx)('i', {
                                        className: 'ri-instagram-line',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)('div', {
                        className: 'comp_map',
                        children: (0, l.jsx)('iframe', {
                          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)('div', {
                className: s ? 'cart-popup open' : 'cart-popup',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'cart-popup-title',
                    children: [
                      (0, l.jsx)('h2', { children: 'Shopping Cart (4)' }),
                      (0, l.jsx)('button', {
                        type: 'button',
                        className: 'close-popup',
                        onClick: f,
                        children: (0, l.jsx)('i', {
                          className: 'las la-times',
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'cart-popup-item-wrap',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'cart-popup-item',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'cart-popup-item-img',
                            children: (0, l.jsx)('img', {
                              src: '/images/product/cart-thumb-1.jpg',
                              alt: 'Image',
                            }),
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-name',
                            children: [
                              (0, l.jsx)('p', { children: 'Large Suitcase' }),
                              (0, l.jsx)('div', {
                                className: 'product-quantity',
                                children: (0, l.jsxs)('div', {
                                  className: 'qtySelector',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'ri-subtract-line decreaseQty',
                                    }),
                                    (0, l.jsx)('input', {
                                      type: 'text',
                                      className: 'qtyValue',
                                      value: '1',
                                      onChange: function (e) {
                                        return e
                                      },
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'las la-plus increaseQty',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-price',
                            children: [
                              (0, l.jsx)('button', {
                                type: 'button',
                                children: (0, l.jsx)('i', {
                                  className: 'las la-times',
                                }),
                              }),
                              (0, l.jsx)('span', { children: '$148.00' }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'cart-popup-item',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'cart-popup-item-img',
                            children: (0, l.jsx)('img', {
                              src: '/images/product/cart-thumb-2.jpg',
                              alt: 'Image',
                            }),
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-name',
                            children: [
                              (0, l.jsx)('p', { children: 'Leather Backpack' }),
                              (0, l.jsx)('div', {
                                className: 'product-quantity',
                                children: (0, l.jsxs)('div', {
                                  className: 'qtySelector',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'ri-subtract-line decreaseQty',
                                    }),
                                    (0, l.jsx)('input', {
                                      type: 'text',
                                      className: 'qtyValue',
                                      value: '1',
                                      onChange: function (e) {
                                        return e
                                      },
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'las la-plus increaseQty',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-price',
                            children: [
                              (0, l.jsx)('button', {
                                type: 'button',
                                children: (0, l.jsx)('i', {
                                  className: 'las la-times',
                                }),
                              }),
                              (0, l.jsx)('span', { children: '$148.00' }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'cart-popup-item',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'cart-popup-item-img',
                            children: (0, l.jsx)('img', {
                              src: '/images/product/cart-thumb-3.jpg',
                              alt: 'Image',
                            }),
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-name',
                            children: [
                              (0, l.jsx)('p', { children: 'Orange Suitcase' }),
                              (0, l.jsx)('div', {
                                className: 'product-quantity',
                                children: (0, l.jsxs)('div', {
                                  className: 'qtySelector',
                                  children: [
                                    (0, l.jsx)('span', {
                                      className: 'ri-subtract-line decreaseQty',
                                    }),
                                    (0, l.jsx)('input', {
                                      type: 'text',
                                      className: 'qtyValue',
                                      value: '1',
                                      onChange: function (e) {
                                        return e
                                      },
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'las la-plus increaseQty',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'cart-popup-item-price',
                            children: [
                              (0, l.jsx)('button', {
                                type: 'button',
                                children: (0, l.jsx)('i', {
                                  className: 'las la-times',
                                }),
                              }),
                              (0, l.jsx)('span', { children: '$148.00' }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'cart-popup-total-wrap',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'cart-popup-total',
                        children: [
                          (0, l.jsx)('h5', { children: 'TOTAL' }),
                          (0, l.jsx)('h5', { children: '$444.00' }),
                        ],
                      }),
                      (0, l.jsx)(r.Z, {
                        href: '/shop-left-sidebar',
                        children: (0, l.jsx)('a', {
                          className: 'btn v4',
                          children: 'Continue Shopping',
                        }),
                      }),
                      (0, l.jsx)(r.Z, {
                        href: '/checkout',
                        children: (0, l.jsx)('a', {
                          className: 'btn v3',
                          children: 'Check Out',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        o = a(1664),
        x = function () {
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)('footer', {
              className: 'footer-wrap style1 bg-heath',
              children: (0, l.jsxs)('div', {
                className: 'container',
                children: [
                  (0, l.jsx)('div', {
                    className: 'footer-top pt-100 pb-70',
                    children: (0, l.jsxs)('div', {
                      className: 'row',
                      children: [
                        (0, l.jsx)('div', {
                          className: 'col-lg-3 col-md-6 col-sm-6',
                          children: (0, l.jsxs)('div', {
                            className: 'footer-widget',
                            children: [
                              (0, l.jsx)('h4', {
                                className: 'footer-widget-title',
                                children: 'Tapis Volant',
                              }),
                              (0, l.jsxs)('ul', {
                                className: 'footer-menu',
                                children: [
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/about-us',
                                      children: (0, l.jsx)('a', {
                                        children: 'Qui sommes-nous',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/contact-us',
                                      children: (0, l.jsx)('a', {
                                        children: 'Nous contacter',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)('div', {
                          className: 'col-lg-3 col-md-6 col-sm-6',
                          children: (0, l.jsxs)('div', {
                            className: 'footer-widget',
                            children: [
                              (0, l.jsx)('h4', {
                                className: 'footer-widget-title',
                                children: 'Services',
                              }),
                              (0, l.jsxs)('ul', {
                                className: 'footer-menu',
                                children: [
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        href: 'tours',
                                        children: 'S\xe9jours',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/destination',
                                      children: (0, l.jsx)('a', {
                                        children: 'Destination',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)('div', {
                          className: 'col-lg-3 col-md-6 col-sm-6',
                          children: (0, l.jsxs)('div', {
                            className: 'footer-widget',
                            children: [
                              (0, l.jsx)('h4', {
                                className: 'footer-widget-title',
                                children: 'Information',
                              }),
                              (0, l.jsxs)('ul', {
                                className: 'footer-menu',
                                children: [
                                  (0, l.jsx)(o.default, {
                                    href: '/concerned-people',
                                    children: (0, l.jsx)('li', {
                                      children: (0, l.jsx)('a', {
                                        children:
                                          'Les personnes concernes par les s\xe9jours',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/financing',
                                      children: (0, l.jsx)('a', {
                                        children:
                                          'Ou chercher les financements pour mon voyage',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)('div', {
                          className: 'col-lg-3 col-md-6 col-sm-6',
                          children: (0, l.jsxs)('div', {
                            className: 'footer-widget',
                            children: [
                              (0, l.jsx)('h4', {
                                className: 'footer-widget-title',
                                children: 'Paiement S\xe9curis\xe9',
                              }),
                              (0, l.jsx)('p', {
                                children: 'Modes de r\xe8glement accept\xe9s :',
                              }),
                              (0, l.jsxs)('ul', {
                                className: 'payment-option',
                                children: [
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('img', {
                                      src: '/images/paypal.png',
                                      alt: 'Image',
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('img', {
                                      src: '/images/mastercard.png',
                                      alt: 'Image',
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('img', {
                                      src: '/images/visa.png',
                                      alt: 'Image',
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)('div', {
                    className: 'footer-bottom',
                    children: (0, l.jsxs)('div', {
                      className: 'row align-items-center',
                      children: [
                        (0, l.jsx)('div', {
                          className: 'col-lg-6 col-md-4',
                          children: (0, l.jsxs)('ul', {
                            className: 'social-profile v1',
                            children: [
                              (0, l.jsx)('li', {
                                children: (0, l.jsx)('a', {
                                  target: '_blank',
                                  href: 'https://facebook.com',
                                  children: (0, l.jsx)('i', {
                                    className: 'ri-facebook-fill',
                                  }),
                                }),
                              }),
                              (0, l.jsx)('li', {
                                children: (0, l.jsx)('a', {
                                  target: '_blank',
                                  href: 'https://linkedin.com',
                                  children: (0, l.jsx)('i', {
                                    className: 'ri-linkedin-fill',
                                  }),
                                }),
                              }),
                              (0, l.jsx)('li', {
                                children: (0, l.jsx)('a', {
                                  target: '_blank',
                                  href: 'https://twitter.com',
                                  children: (0, l.jsx)('i', {
                                    className: 'ri-twitter-fill',
                                  }),
                                }),
                              }),
                              (0, l.jsx)('li', {
                                children: (0, l.jsx)('a', {
                                  target: '_blank',
                                  href: 'https://instagram.com',
                                  children: (0, l.jsx)('i', {
                                    className: 'ri-instagram-line',
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)('div', {
                          className: 'col-lg-6 col-md-8',
                          children: (0, l.jsx)('div', {
                            className: 'copyright-text',
                            children: (0, l.jsxs)('p', {
                              children: [
                                'Copyright ',
                                (0, l.jsx)('span', {
                                  className: 'las la-copyright',
                                }),
                                ' 2023 Tapis Volant. All Rights Reserved',
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        m = function () {
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)('footer', {
              className: 'footer-wrap style1',
              children: (0, l.jsxs)('div', {
                className: 'container',
                children: [
                  (0, l.jsx)('div', {
                    className: 'footer-top pt-100 pb-70',
                    children: (0, l.jsxs)('div', {
                      className: 'row',
                      children: [
                        (0, l.jsx)('div', {
                          className: 'col-lg-3 col-md-6 col-sm-6',
                          children: (0, l.jsxs)('div', {
                            className: 'footer-widget',
                            children: [
                              (0, l.jsx)('h4', {
                                className: 'footer-widget-title',
                                children: 'About',
                              }),
                              (0, l.jsxs)('ul', {
                                className: 'footer-menu',
                                children: [
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/about-us',
                                      children: (0, l.jsx)('a', {
                                        children: 'Company',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/about-us',
                                      children: (0, l.jsx)('a', {
                                        children: 'Careers',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/contact-us',
                                      children: (0, l.jsx)('a', {
                                        children: 'Help Center',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/privacy-policy',
                                      children: (0, l.jsx)('a', {
                                        children: 'Privacy',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/terms-condition',
                                      children: (0, l.jsx)('a', {
                                        children: 'Terms & Conditions',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)('div', {
                          className: 'col-lg-3 col-md-6 col-sm-6',
                          children: (0, l.jsxs)('div', {
                            className: 'footer-widget',
                            children: [
                              (0, l.jsx)('h4', {
                                className: 'footer-widget-title',
                                children: 'Services',
                              }),
                              (0, l.jsxs)('ul', {
                                className: 'footer-menu',
                                children: [
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        href: 'tours',
                                        children: 'Hotel Booking',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        children: 'Car Rental',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        children: 'Bus Ticket',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        children: 'Flight Booking',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        children: 'Restaurant',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)('div', {
                          className: 'col-lg-3 col-md-6 col-sm-6',
                          children: (0, l.jsxs)('div', {
                            className: 'footer-widget',
                            children: [
                              (0, l.jsx)('h4', {
                                className: 'footer-widget-title',
                                children: 'Quick Links',
                              }),
                              (0, l.jsxs)('ul', {
                                className: 'footer-menu',
                                children: [
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        children: 'Franch Experience',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        children: 'Ancient Rome Discover',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        children: 'Get Into Naxos Island',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        children: 'Vietnam Island Experience',
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)(o.default, {
                                      href: '/tours',
                                      children: (0, l.jsx)('a', {
                                        children: 'Restaurant',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)('div', {
                          className: 'col-lg-3 col-md-6 col-sm-6',
                          children: (0, l.jsxs)('div', {
                            className: 'footer-widget',
                            children: [
                              (0, l.jsx)('h4', {
                                className: 'footer-widget-title',
                                children: 'Pay Safely With US',
                              }),
                              (0, l.jsx)('p', {
                                children:
                                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quaerat nam, similique assumenda quam dolor ratione voluptatibus iure dicta pariatur.',
                              }),
                              (0, l.jsxs)('ul', {
                                className: 'payment-option',
                                children: [
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('img', {
                                      src: '/images/paypal.png',
                                      alt: 'Image',
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('img', {
                                      src: '/images/american-express.png',
                                      alt: 'Image',
                                    }),
                                  }),
                                  (0, l.jsx)('li', {
                                    children: (0, l.jsx)('img', {
                                      src: '/images/visa.png',
                                      alt: 'Image',
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)('div', {
                    className: 'footer-bottom',
                    children: (0, l.jsxs)('div', {
                      className: 'row align-items-center',
                      children: [
                        (0, l.jsx)('div', {
                          className: 'col-lg-6 col-md-4',
                          children: (0, l.jsxs)('ul', {
                            className: 'social-profile v1',
                            children: [
                              (0, l.jsx)('li', {
                                children: (0, l.jsx)('a', {
                                  target: '_blank',
                                  href: 'https://facebook.com',
                                  children: (0, l.jsx)('i', {
                                    className: 'ri-facebook-fill',
                                  }),
                                }),
                              }),
                              (0, l.jsx)('li', {
                                children: (0, l.jsx)('a', {
                                  target: '_blank',
                                  href: 'https://linkedin.com',
                                  children: (0, l.jsx)('i', {
                                    className: 'ri-linkedin-fill',
                                  }),
                                }),
                              }),
                              (0, l.jsx)('li', {
                                children: (0, l.jsx)('a', {
                                  target: '_blank',
                                  href: 'https://twitter.com',
                                  children: (0, l.jsx)('i', {
                                    className: 'ri-twitter-fill',
                                  }),
                                }),
                              }),
                              (0, l.jsx)('li', {
                                children: (0, l.jsx)('a', {
                                  target: '_blank',
                                  href: 'https://instagram.com',
                                  children: (0, l.jsx)('i', {
                                    className: 'ri-instagram-line',
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)('div', {
                          className: 'col-lg-6 col-md-8',
                          children: (0, l.jsx)('div', {
                            className: 'copyright-text',
                            children: (0, l.jsxs)('p', {
                              children: [
                                'Copyright ',
                                (0, l.jsx)('span', {
                                  className: 'las la-copyright',
                                }),
                                ' 2021 Detour. All Rights Reserved By',
                                ' ',
                                (0, l.jsx)('a', {
                                  href: 'https://themeforest.net/user/hibootstrap/portfolio',
                                  children: 'Hibootstrap',
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        j = function (e) {
          var s = e.children,
            a = (0, n.useRouter)().pathname
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(c.default, {
                children: [
                  (0, l.jsx)('title', { children: 'Tapis volant' }),
                  (0, l.jsx)('meta', {
                    name: 'viewport',
                    content:
                      'width=device-width, initial-scale=1, shrink-to-fit=no',
                  }),
                  (0, l.jsx)('meta', {
                    name: 'description',
                    content: 'Tapis volant',
                  }),
                  (0, l.jsx)('meta', {
                    name: 'og:title',
                    property: 'og:title',
                    content: 'Tapis volant',
                  }),
                  (0, l.jsx)('meta', {
                    name: 'twitter:card',
                    content: 'Tapis volant',
                  }),
                  (0, l.jsx)('link', {
                    rel: 'canonical',
                    href: 'https://detour.hibootstrap.com',
                  }),
                ],
              }),
              '/index-3' === a
                ? (0, l.jsx)(h, {})
                : '/index-2' === a
                ? (0, l.jsx)(d, {})
                : (0, l.jsx)(t, {}),
              s,
              '/index-3' === a ||
              '/index-2' === a ||
              '/destination' === a ||
              '/destination-details' === a
                ? (0, l.jsx)(m, {})
                : (0, l.jsx)(x, {}),
            ],
          })
        },
        u = function (e) {
          var s = e.loading
          return (0, l.jsx)(l.Fragment, {
            children:
              s &&
              (0, l.jsx)('div', {
                className: 'preloader js-preloader',
                children: (0, l.jsx)('img', {
                  src: '/images/preloader.gif',
                  alt: 'Image',
                }),
              }),
          })
        },
        p = function () {
          var e = (0, i.useState)(!1),
            s = e[0],
            a = e[1]
          ;(0, i.useEffect)(function () {
            document.addEventListener('scroll', function (e) {
              c()
            })
          }, [])
          var c = function () {
            window.pageYOffset > 300 ? a(!0) : a(!1)
          }
          return (0, l.jsx)(l.Fragment, {
            children:
              s &&
              (0, l.jsx)('a', {
                className: 'back-to-top active bounce',
                onClick: function () {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                },
                children: (0, l.jsx)('i', { className: 'las la-arrow-up' }),
              }),
          })
        }
      function N(e, s, a) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = a),
          e
        )
      }
      function f(e) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {},
            l = Object.keys(a)
          'function' === typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
              })
            )),
            l.forEach(function (s) {
              N(e, s, a[s])
            })
        }
        return e
      }
      var v = function (e) {
        var s = e.Component,
          a = e.pageProps,
          c = (0, i.useState)(!0),
          n = c[0],
          r = c[1]
        return (
          (0, i.useEffect)(function () {
            setTimeout(function () {
              return r(!1)
            }, 2e3)
          }, []),
          (0, l.jsxs)(j, {
            children: [
              (0, l.jsx)(s, f({}, a)),
              (0, l.jsx)(u, { loading: n }),
              (0, l.jsx)(p, { scrollStepInPx: '100', delayInMs: '10.50' }),
            ],
          })
        )
      }
    },
    3823: function (e, s, a) {
      'use strict'
      var l = a(5893),
        i = a(1163),
        c = a(1664),
        n = a(7294)
      function r(e, s, a) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = a),
          e
        )
      }
      function t(e, s) {
        if (null == e) return {}
        var a,
          l,
          i = (function (e, s) {
            if (null == e) return {}
            var a,
              l,
              i = {},
              c = Object.keys(e)
            for (l = 0; l < c.length; l++)
              (a = c[l]), s.indexOf(a) >= 0 || (i[a] = e[a])
            return i
          })(e, s)
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e)
          for (l = 0; l < c.length; l++)
            (a = c[l]),
              s.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (i[a] = e[a]))
        }
        return i
      }
      s.Z = (0, i.withRouter)(function (e) {
        var s = e.router,
          a = e.children,
          i = t(e, ['router', 'children']),
          d = n.Children.only(a),
          h = d.props.className || ''
        return (
          s.pathname === i.href &&
            i.activeClassName &&
            (h = ''.concat(h, ' ').concat(i.activeClassName).trim()),
          delete i.activeClassName,
          (0, l.jsx)(
            c.default,
            (function (e) {
              for (var s = 1; s < arguments.length; s++) {
                var a = null != arguments[s] ? arguments[s] : {},
                  l = Object.keys(a)
                'function' === typeof Object.getOwnPropertySymbols &&
                  (l = l.concat(
                    Object.getOwnPropertySymbols(a).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(a, e).enumerable
                    })
                  )),
                  l.forEach(function (s) {
                    r(e, s, a[s])
                  })
              }
              return e
            })({}, i, { children: n.cloneElement(d, { className: h }) })
          )
        )
      })
    },
    8926: function () {},
    1552: function () {},
    2139: function () {},
    3481: function () {},
    8931: function () {},
    4884: function () {},
    1316: function () {},
    7888: function () {},
    6637: function () {},
    4934: function () {},
    5794: function () {},
    4681: function () {},
    1020: function () {},
    7431: function () {},
    6031: function () {},
    9008: function (e, s, a) {
      e.exports = a(5443)
    },
    1664: function (e, s, a) {
      e.exports = a(8418)
    },
    1163: function (e, s, a) {
      e.exports = a(387)
    },
  },
  function (e) {
    var s = function (s) {
      return e((e.s = s))
    }
    e.O(0, [9774, 179], function () {
      return s(1780), s(387)
    })
    var a = e.O()
    _N_E = a
  },
])

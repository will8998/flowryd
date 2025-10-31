(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MatchingAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchingAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
// const DURATION = 8; // seconds (full loop) // reserved
function useContainerSize(ref) {
    _s();
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        w: 0,
        h: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContainerSize.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const ro = new ResizeObserver({
                "useContainerSize.useEffect": ()=>{
                    const r = el.getBoundingClientRect();
                    setSize({
                        w: r.width,
                        h: r.height
                    });
                }
            }["useContainerSize.useEffect"]);
            ro.observe(el);
            return ({
                "useContainerSize.useEffect": ()=>ro.disconnect()
            })["useContainerSize.useEffect"];
        }
    }["useContainerSize.useEffect"], [
        ref
    ]);
    return size;
}
_s(useContainerSize, "vXM7WI7DIJXKSH67Uw1X1vsHZak=");
const ease = [
    0.6,
    0.05,
    0.2,
    1
];
const centerAnchor = {
    x: 0.5,
    y: 0.5
};
function anchors3x3() {
    const g = [
        1 / 6,
        0.5,
        5 / 6
    ];
    const out = [];
    for(let yi = 0; yi < 3; yi++){
        for(let xi = 0; xi < 3; xi++){
            out.push({
                x: g[xi],
                y: g[yi]
            });
        }
    }
    return out;
}
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function CircleGlyph(param) {
    let { size = 56 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 56 56",
        className: "text-white/90",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "28",
                cy: "28",
                r: "18",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/MatchingAnimation.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "28",
                cy: "28",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "1.5",
                opacity: 0.9
            }, void 0, false, {
                fileName: "[project]/src/components/MatchingAnimation.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "28",
                cy: "28",
                r: "3",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/MatchingAnimation.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            [
                0,
                90,
                180,
                270
            ].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: 28 + 18 * Math.cos(a * Math.PI / 180),
                    cy: 28 + 18 * Math.sin(a * Math.PI / 180),
                    r: "2.5",
                    fill: "currentColor"
                }, a, false, {
                    fileName: "[project]/src/components/MatchingAnimation.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MatchingAnimation.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c = CircleGlyph;
function SquareGlyph(param) {
    let { size = 54 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 56 56",
        className: "text-white/90",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "11",
                y: "11",
                width: "34",
                height: "34",
                rx: "3",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/MatchingAnimation.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "18",
                y: "18",
                width: "20",
                height: "20",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "1.5",
                opacity: 0.9
            }, void 0, false, {
                fileName: "[project]/src/components/MatchingAnimation.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            [
                {
                    x: 11,
                    y: 11
                },
                {
                    x: 45,
                    y: 11
                },
                {
                    x: 11,
                    y: 45
                },
                {
                    x: 45,
                    y: 45
                }
            ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: p.x,
                    cy: p.y,
                    r: "2.5",
                    fill: "currentColor"
                }, i, false, {
                    fileName: "[project]/src/components/MatchingAnimation.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MatchingAnimation.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c1 = SquareGlyph;
function TriangleGlyph(param) {
    let { size = 58 } = param;
    const p1 = {
        x: 28,
        y: 8
    };
    const p2 = {
        x: 8,
        y: 46
    };
    const p3 = {
        x: 48,
        y: 46
    };
    const ip1 = {
        x: 28,
        y: 16
    };
    const ip2 = {
        x: 16,
        y: 38
    };
    const ip3 = {
        x: 40,
        y: 38
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 56 56",
        className: "text-white/90",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M ".concat(p1.x, " ").concat(p1.y, " L ").concat(p2.x, " ").concat(p2.y, " L ").concat(p3.x, " ").concat(p3.y, " Z"),
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/MatchingAnimation.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M ".concat(ip1.x, " ").concat(ip1.y, " L ").concat(ip2.x, " ").concat(ip2.y, " L ").concat(ip3.x, " ").concat(ip3.y, " Z"),
                stroke: "currentColor",
                strokeWidth: "1.5",
                opacity: 0.9
            }, void 0, false, {
                fileName: "[project]/src/components/MatchingAnimation.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            [
                p1,
                p2,
                p3
            ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: p.x,
                    cy: p.y,
                    r: "2.5",
                    fill: "currentColor"
                }, i, false, {
                    fileName: "[project]/src/components/MatchingAnimation.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MatchingAnimation.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c2 = TriangleGlyph;
function MatchingAnimation(param) {
    let { logos = false } = param;
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // cast to satisfy strict RefObject<HTMLDivElement>
    const { w, h } = useContainerSize(containerRef);
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MatchingAnimation.useMemo[grid]": ()=>anchors3x3()
    }["MatchingAnimation.useMemo[grid]"], []);
    // support up to 4 elements; use first N based on mode
    const controls = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])()
    ];
    const opacityControls = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])()
    ];
    const scaleControls = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])()
    ];
    const count = logos ? 4 : 3;
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            x: Math.random() * 0.8 + 0.1,
            y: Math.random() * 0.8 + 0.1
        },
        {
            x: Math.random() * 0.8 + 0.1,
            y: Math.random() * 0.8 + 0.1
        },
        {
            x: Math.random() * 0.8 + 0.1,
            y: Math.random() * 0.8 + 0.1
        },
        {
            x: Math.random() * 0.8 + 0.1,
            y: Math.random() * 0.8 + 0.1
        }
    ]);
    const [showLines, setShowLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pathProgress, setPathProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const toPercent = (a)=>({
            left: "".concat(a.x * 100, "%"),
            top: "".concat(a.y * 100, "%")
        });
    const toPx = (a)=>({
            x: a.x * w,
            y: a.y * h
        });
    // Timeline orchestrator
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatchingAnimation.useEffect": ()=>{
            let mounted = true;
            const run = {
                "MatchingAnimation.useEffect.run": async ()=>{
                    while(mounted){
                        // Stage 1 — Idle Fade-In (0-1s)
                        const startAnchors = [
                            pick(grid),
                            pick(grid),
                            pick(grid),
                            pick(grid)
                        ];
                        setPoints(startAnchors);
                        await Promise.all(Array.from({
                            length: count
                        }, {
                            "MatchingAnimation.useEffect.run": (_, i)=>Promise.all([
                                    controls[i].set(toPercent(startAnchors[i])),
                                    opacityControls[i].start({
                                        opacity: [
                                            0,
                                            1
                                        ],
                                        transition: {
                                            duration: 0.8,
                                            ease
                                        }
                                    }),
                                    scaleControls[i].start({
                                        scale: 1,
                                        transition: {
                                            duration: 0
                                        }
                                    })
                                ])
                        }["MatchingAnimation.useEffect.run"]));
                        if (logos) {
                            // Continuous drifting search for logos mode
                            for(let hop = 0; hop < 6 && mounted; hop++){
                                const next = [
                                    pick(grid),
                                    pick(grid),
                                    pick(grid),
                                    pick(grid)
                                ];
                                setPoints(next);
                                await Promise.all(Array.from({
                                    length: count
                                }, {
                                    "MatchingAnimation.useEffect.run": (_, i)=>controls[i].start({
                                            ...toPercent(next[i]),
                                            transition: {
                                                duration: 1.1,
                                                ease
                                            }
                                        })
                                }["MatchingAnimation.useEffect.run"]));
                            }
                            continue; // loop again
                        }
                        // Stage 2 — Search (1-4s) 3 hops
                        for(let hop = 0; hop < 3; hop++){
                            const next = [
                                pick(grid),
                                pick(grid),
                                pick(grid)
                            ];
                            setPoints(next);
                            await Promise.all([
                                0,
                                1,
                                2
                            ].slice(0, count).map({
                                "MatchingAnimation.useEffect.run": (i)=>controls[i].start({
                                        ...toPercent(next[i]),
                                        transition: {
                                            duration: 0.9,
                                            ease
                                        }
                                    })
                            }["MatchingAnimation.useEffect.run"]));
                        }
                        // Stage 3 — Connect (4-6s)
                        setShowLines(true);
                        setPathProgress(0);
                        await new Promise({
                            "MatchingAnimation.useEffect.run": (r)=>setTimeout(r, 50)
                        }["MatchingAnimation.useEffect.run"]);
                        setPathProgress(1);
                        await new Promise({
                            "MatchingAnimation.useEffect.run": (r)=>setTimeout(r, 1200)
                        }["MatchingAnimation.useEffect.run"]);
                        // Stage 4 — Align & Pulse (6-8s)
                        setPoints([
                            centerAnchor,
                            centerAnchor,
                            centerAnchor
                        ]);
                        await Promise.all([
                            0,
                            1,
                            2
                        ].slice(0, count).map({
                            "MatchingAnimation.useEffect.run": (i)=>controls[i].start({
                                    ...toPercent(centerAnchor),
                                    transition: {
                                        duration: 0.9,
                                        ease
                                    }
                                })
                        }["MatchingAnimation.useEffect.run"]));
                        await Promise.all([
                            0,
                            1,
                            2
                        ].slice(0, count).map({
                            "MatchingAnimation.useEffect.run": (i)=>scaleControls[i].start({
                                    scale: [
                                        1,
                                        1.18,
                                        1
                                    ],
                                    transition: {
                                        duration: 0.7,
                                        ease
                                    }
                                })
                        }["MatchingAnimation.useEffect.run"]));
                        setShowLines(false);
                        await Promise.all([
                            0,
                            1,
                            2
                        ].slice(0, count).map({
                            "MatchingAnimation.useEffect.run": (i)=>opacityControls[i].start({
                                    opacity: [
                                        1,
                                        0.6,
                                        1
                                    ],
                                    transition: {
                                        duration: 0.3
                                    }
                                })
                        }["MatchingAnimation.useEffect.run"]));
                    }
                }
            }["MatchingAnimation.useEffect.run"];
            run();
            return ({
                "MatchingAnimation.useEffect": ()=>{
                    mounted = false;
                }
            })["MatchingAnimation.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MatchingAnimation.useEffect"], []);
    const pathCoords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MatchingAnimation.useMemo[pathCoords]": ()=>points.map(toPx)
    }["MatchingAnimation.useMemo[pathCoords]"], [
        points,
        w,
        h,
        toPx
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full h-full overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 grid grid-cols-3 grid-rows-3 gap-6 p-6",
                children: Array.from({
                    length: 9
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-white/10 bg-white/[0.015]"
                    }, i, false, {
                        fileName: "[project]/src/components/MatchingAnimation.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/MatchingAnimation.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute inset-0",
                width: w,
                height: h,
                viewBox: "0 0 ".concat(w, " ").concat(h),
                children: showLines && w > 0 && h > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: "M ".concat(pathCoords[0].x, " ").concat(pathCoords[0].y, " L ").concat(pathCoords[1].x, " ").concat(pathCoords[1].y, " L ").concat(pathCoords[2].x, " ").concat(pathCoords[2].y, " Z"),
                    stroke: "white",
                    strokeOpacity: 0.9,
                    strokeWidth: 1,
                    fill: "none",
                    initial: {
                        pathLength: 0
                    },
                    animate: {
                        pathLength: pathProgress
                    },
                    transition: {
                        duration: 1.2,
                        ease
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/MatchingAnimation.tsx",
                    lineNumber: 265,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MatchingAnimation.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            [
                CircleGlyph,
                SquareGlyph,
                TriangleGlyph
            ].map((Glyph, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute -translate-x-1/2 -translate-y-1/2 mix-blend-lighten [filter:drop-shadow(0_0_8px_rgba(255,255,255,0.2))]",
                    animate: controls[i],
                    initial: {
                        left: "50%",
                        top: "50%"
                    },
                    style: {
                        pointerEvents: "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: scaleControls[i],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: opacityControls[i],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Glyph, {}, void 0, false, {
                                fileName: "[project]/src/components/MatchingAnimation.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MatchingAnimation.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MatchingAnimation.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/components/MatchingAnimation.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MatchingAnimation.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
} /* Example usage

<section className="w-full h-[400px] bg-black">
  <MatchingAnimation />
</section>

*/ 
_s1(MatchingAnimation, "rReUt28E1sBWfpm1EqjbaDhCO40=", false, function() {
    return [
        useContainerSize,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c3 = MatchingAnimation;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CircleGlyph");
__turbopack_context__.k.register(_c1, "SquareGlyph");
__turbopack_context__.k.register(_c2, "TriangleGlyph");
__turbopack_context__.k.register(_c3, "MatchingAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TypeWord.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypeWord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TypeWord(param) {
    let { words, className, typingSpeedMs = 90, deletingSpeedMs = 55, pauseMs = 850 } = param;
    _s();
    const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TypeWord.useMemo[list]": ()=>words.length ? words : [
                ""
            ]
    }["TypeWord.useMemo[list]"], [
        words
    ]);
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // index in words
    const [txt, setTxt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [del, setDel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypeWord.useEffect": ()=>{
            let t;
            const full = list[i % list.length];
            const speed = del ? deletingSpeedMs : typingSpeedMs;
            if (!del && txt === full) {
                t = setTimeout({
                    "TypeWord.useEffect": ()=>setDel(true)
                }["TypeWord.useEffect"], pauseMs);
            } else if (del && txt === "") {
                setDel(false);
                setI({
                    "TypeWord.useEffect": (v)=>(v + 1) % list.length
                }["TypeWord.useEffect"]);
            } else {
                t = setTimeout({
                    "TypeWord.useEffect": ()=>{
                        setTxt({
                            "TypeWord.useEffect": (s)=>del ? s.slice(0, -1) : full.slice(0, s.length + 1)
                        }["TypeWord.useEffect"]);
                    }
                }["TypeWord.useEffect"], speed);
            }
            return ({
                "TypeWord.useEffect": ()=>clearTimeout(t)
            })["TypeWord.useEffect"];
        }
    }["TypeWord.useEffect"], [
        txt,
        del,
        i,
        list,
        typingSpeedMs,
        deletingSpeedMs,
        pauseMs
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        style: {
            color: "#96FFC2"
        },
        children: [
            txt,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1 inline-block w-[2px] h-[0.9em] align-[-0.05em] bg-[#96FFC2] animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/TypeWord.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TypeWord.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(TypeWord, "jpRDAbGt+HmHSKS+RX0DkkMljvE=");
_c = TypeWord;
var _c;
__turbopack_context__.k.register(_c, "TypeWord");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_3dc15266._.js.map
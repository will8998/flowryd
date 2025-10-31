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
"[project]/src/components/HeroGlyphs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroGlyphs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HeroGlyphs() {
    _s();
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroGlyphs.useEffect": ()=>{
            if (!mountRef.current) return;
            const mount = mountRef.current;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fog"](0x000000, 30, 140);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            const { clientWidth: W, clientHeight: H } = mount;
            renderer.setSize(W, H);
            renderer.shadowMap.enabled = true;
            mount.appendChild(renderer.domElement);
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, W / H, 0.1, 1000);
            camera.position.set(0, 6, 26);
            // lights
            // unify palette to #f3ff97 (0xf3ff97)
            const PALETTE = 0xf3ff97;
            scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HemisphereLight"](PALETTE, 0x0a0a0a, 0.5));
            const key = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpotLight"](PALETTE, 3.0, 200, Math.PI / 6, 0.25, 1.5);
            key.position.set(18, 22, 16);
            key.castShadow = true;
            scene.add(key);
            const rim = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](PALETTE, 1.4);
            rim.position.set(-18, 8, -12);
            scene.add(rim);
            const resin = {
                "HeroGlyphs.useEffect.resin": function(hex, emissiveHex) {
                    let opacity = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.45;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
                        color: hex,
                        transparent: true,
                        opacity,
                        roughness: 0.15,
                        metalness: 0.0,
                        transmission: 0.85,
                        thickness: 0.8,
                        clearcoat: 1.0,
                        clearcoatRoughness: 0.1,
                        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](emissiveHex),
                        emissiveIntensity: 0.25
                    });
                }
            }["HeroGlyphs.useEffect.resin"];
            const neonMesh = {
                "HeroGlyphs.useEffect.neonMesh": function() {
                    let hex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : PALETTE;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: hex,
                        emissive: hex,
                        emissiveIntensity: 1.6,
                        metalness: 0.2,
                        roughness: 0.25
                    });
                }
            }["HeroGlyphs.useEffect.neonMesh"];
            const connectionTube = {
                "HeroGlyphs.useEffect.connectionTube": function(points) {
                    let radius = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.06, color = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : PALETTE;
                    const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](points);
                    const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](curve, 180, radius, 16, false);
                    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color,
                        emissive: color,
                        emissiveIntensity: 1.2,
                        roughness: 0.35,
                        metalness: 0.0
                    });
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mat);
                }
            }["HeroGlyphs.useEffect.connectionTube"];
            const addNode = {
                "HeroGlyphs.useEffect.addNode": function(p) {
                    let color = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0x7cffb2, size = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.24;
                    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](size, 24, 24);
                    const m = neonMesh(color);
                    const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](g, m);
                    s.position.copy(p);
                    s.castShadow = true;
                    s.receiveShadow = true;
                    return s;
                }
            }["HeroGlyphs.useEffect.addNode"];
            function createSuperValidator() {
                const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                [
                    2.2,
                    1.6,
                    1.0,
                    0.45
                ].forEach({
                    "HeroGlyphs.useEffect.createSuperValidator": (r, i)=>{
                        const torus = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](r, 0.07 + 0.02 * i, 16, 128), resin(PALETTE, PALETTE, 0.35 + 0.06 * i));
                        torus.rotation.x = Math.PI / 2;
                        group.add(torus);
                    }
                }["HeroGlyphs.useEffect.createSuperValidator"]);
                const orbit = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](1.9, 0.08, 16, 160), resin(PALETTE, PALETTE, 0.55));
                orbit.rotation.x = Math.PI / 2;
                group.add(orbit);
                [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1.9, 0),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1.9, 0, 0),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1.9, 0),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1.9, 0, 0)
                ].forEach({
                    "HeroGlyphs.useEffect.createSuperValidator": (p)=>group.add(addNode(p))
                }["HeroGlyphs.useEffect.createSuperValidator"]);
                const grid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](6, 6, 0.1, 6, 6, 1)), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                    color: PALETTE,
                    transparent: true,
                    opacity: 0.25
                }));
                grid.position.z = -0.35;
                group.add(grid);
                group.userData.tick = ({
                    "HeroGlyphs.useEffect.createSuperValidator": (t)=>{
                        orbit.rotation.z = t * 0.4;
                        group.rotation.z = Math.sin(t * 0.2) * 0.15;
                    }
                })["HeroGlyphs.useEffect.createSuperValidator"];
                return group;
            }
            function createApplicationBuilder() {
                const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                [
                    3.0,
                    2.2,
                    1.4,
                    0.7
                ].forEach({
                    "HeroGlyphs.useEffect.createApplicationBuilder": (s, i)=>{
                        const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](s, s, 0.08), resin(PALETTE, PALETTE, 0.28 + i * 0.08));
                        group.add(mesh);
                    }
                }["HeroGlyphs.useEffect.createApplicationBuilder"]);
                const c = 1.7;
                [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](c, c, 0),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-c, c, 0),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-c, -c, 0),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](c, -c, 0)
                ].forEach({
                    "HeroGlyphs.useEffect.createApplicationBuilder": (p)=>group.add(addNode(p, PALETTE, 0.22))
                }["HeroGlyphs.useEffect.createApplicationBuilder"]);
                group.userData.tick = ({
                    "HeroGlyphs.useEffect.createApplicationBuilder": (t)=>{
                        group.rotation.x = Math.sin(t * 0.35) * 0.25 + 0.3;
                        group.rotation.y = t * 0.25;
                    }
                })["HeroGlyphs.useEffect.createApplicationBuilder"];
                return group;
            }
            function createUserValidator() {
                const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                const makeTri = {
                    "HeroGlyphs.useEffect.createUserValidator.makeTri": function(r, color) {
                        let thick = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.07;
                        const pts = [];
                        for(let i = 0; i < 3; i++){
                            const a = i * (Math.PI * 2 / 3) - Math.PI / 2;
                            pts.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(a) * r, Math.sin(a) * r, 0));
                        }
                        pts.push(pts[0].clone());
                        const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](pts);
                        group.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(pts), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                            color
                        })));
                        group.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](curve, 90, thick, 12, true), neonMesh(color)));
                    }
                }["HeroGlyphs.useEffect.createUserValidator.makeTri"];
                makeTri(2.0, PALETTE, 0.05);
                makeTri(1.4, PALETTE, 0.04);
                makeTri(0.85, PALETTE, 0.035);
                const r = 2.0;
                for(let i = 0; i < 3; i++){
                    const a = i * (Math.PI * 2 / 3) - Math.PI / 2;
                    group.add(addNode(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(a) * r, Math.sin(a) * r, 0), PALETTE, 0.24));
                }
                group.userData.tick = ({
                    "HeroGlyphs.useEffect.createUserValidator": (t)=>{
                        group.rotation.z = t * 0.3 + 0.3;
                    }
                })["HeroGlyphs.useEffect.createUserValidator"];
                return group;
            }
            const glyphA = createSuperValidator();
            glyphA.position.set(-7.2, 3.4, 0);
            scene.add(glyphA);
            const glyphB = createApplicationBuilder();
            glyphB.position.set(7.2, 2.0, 0);
            scene.add(glyphB);
            const glyphC = createUserValidator();
            glyphC.position.set(0, -4.5, 0);
            scene.add(glyphC);
            const connections = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            scene.add(connections);
            const connect = {
                "HeroGlyphs.useEffect.connect": function(a, b) {
                    let wobble = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.6, height = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 2.6, color = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0x7cffb2;
                    const mid = a.clone().lerp(b, 0.5);
                    const perp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(b, a).cross(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0)).normalize();
                    const p1 = a.clone();
                    const p2 = mid.clone().addScaledVector(perp, wobble).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, height, 0));
                    const p3 = mid.clone().addScaledVector(perp, -wobble).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -height * 0.2, 0));
                    const p4 = b.clone();
                    return connectionTube([
                        p1,
                        p2,
                        p3,
                        p4
                    ], 0.08, color);
                }
            }["HeroGlyphs.useEffect.connect"];
            const tubeAB = connect(glyphA.position, glyphB.position, 1.1, 2.4, PALETTE);
            const tubeBC = connect(glyphB.position, glyphC.position, 0.8, 3.2, PALETTE);
            const tubeCA = connect(glyphC.position, glyphA.position, 1.4, 2.2, PALETTE);
            connections.add(tubeAB, tubeBC, tubeCA);
            const starGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const starCount = 900;
            const positions = new Float32Array(starCount * 3);
            for(let i = 0; i < starCount; i++){
                positions[i * 3 + 0] = (Math.random() - 0.5) * 140;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 140;
            }
            starGeo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            const stars = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](starGeo, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                size: 0.6,
                color: PALETTE,
                transparent: true,
                opacity: 0.35
            }));
            scene.add(stars);
            const start = performance.now();
            const glyphs = [
                glyphA,
                glyphB,
                glyphC
            ];
            const animate = {
                "HeroGlyphs.useEffect.animate": ()=>{
                    const t = (performance.now() - start) / 1000;
                    [
                        tubeAB,
                        tubeBC,
                        tubeCA
                    ].forEach({
                        "HeroGlyphs.useEffect.animate": (m, i)=>{
                            const k = 1.0 + Math.sin(t * (1.2 + 0.2 * i)) * 0.25;
                            m.material.emissiveIntensity = 0.9 * k;
                        }
                    }["HeroGlyphs.useEffect.animate"]);
                    glyphs.forEach({
                        "HeroGlyphs.useEffect.animate": (g)=>{
                            const tick = g.userData.tick;
                            if (tick) tick(t);
                        }
                    }["HeroGlyphs.useEffect.animate"]);
                    stars.rotation.y = t * 0.01;
                    renderer.render(scene, camera);
                    requestAnimationFrame(animate);
                }
            }["HeroGlyphs.useEffect.animate"];
            animate();
            const onResize = {
                "HeroGlyphs.useEffect.onResize": ()=>{
                    const W = mount.clientWidth;
                    const H = mount.clientHeight;
                    camera.aspect = W / H;
                    camera.updateProjectionMatrix();
                    renderer.setSize(W, H);
                }
            }["HeroGlyphs.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            return ({
                "HeroGlyphs.useEffect": ()=>{
                    window.removeEventListener("resize", onResize);
                    mount.removeChild(renderer.domElement);
                    renderer.dispose();
                }
            })["HeroGlyphs.useEffect"];
        }
    }["HeroGlyphs.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: "absolute inset-0"
    }, void 0, false, {
        fileName: "[project]/src/components/HeroGlyphs.tsx",
        lineNumber: 211,
        columnNumber: 10
    }, this);
}
_s(HeroGlyphs, "V9/qkEdV8GfsDZk7lMTA1T8g5Ps=");
_c = HeroGlyphs;
var _c;
__turbopack_context__.k.register(_c, "HeroGlyphs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ClientHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroGlyphs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroGlyphs.tsx [app-client] (ecmascript)");
"use client";
;
;
function ClientHero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[320px] md:h-[420px] lg:h-[520px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroGlyphs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/ClientHero.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ClientHero.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ClientHero;
var _c;
__turbopack_context__.k.register(_c, "ClientHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_8e6c72fb._.js.map
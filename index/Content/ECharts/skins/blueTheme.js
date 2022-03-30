
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('blueTheme', {
        "color": [
            "#41ccd3",
            "#2498e3",
            "#2268d4",
            "#d6c76e",
            "#d39255",
            "#35c87a",
            "#44ae2e",
            "#7d5dcc",
            "#4d4cdb",
            "#c6504f",
            "#c93696"
        ],
        "backgroundColor": "rgba(20,87,240,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#2ad0ff"
            },
            "subtextStyle": {
                "color": "#cfdcff"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "0",
                "barBorderColor": "#2478ec"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2478ec"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2478ec"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2478ec"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2478ec"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2478ec"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2478ec"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2478ec"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#c12e34",
                "color0": "#2b821d",
                "borderColor": "#c12e34",
                "borderColor0": "#2b821d",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2478ec"
            },
            "lineStyle": {
                "width": 1,
                "color": "#2498e3"
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#41ccd3",
                "#2498e3",
                "#2268d4",
                "#d6c76e",
                "#d39255",
                "#35c87a",
                "#44ae2e",
                "#7d5dcc",
                "#4d4cdb",
                "#c6504f",
                "#c93696"
            ],
            "label": {
                "color": "#ffffff"
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#ddd",
                    "borderColor": "#eee",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "#e6b600",
                    "borderColor": "#ddd",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#c12e34"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#c12e34"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#ddd",
                    "borderColor": "#eee",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "#e6b600",
                    "borderColor": "#ddd",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#c12e34"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#c12e34"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#29a4ff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#29a4ff"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#cfdcff"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#3f76e0"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#29a4ff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#29a4ff"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#cfdcff"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#3f76e0"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#29a4ff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#cfdcff"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#cfdcff"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#3f76e0"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#29a4ff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#cfdcff"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#cfdcff"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#3f76e0"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#06467c"
                },
                "emphasis": {
                    "borderColor": "#4187c2"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#cfdcff"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#1790cf",
                    "width": "1"
                },
                "crossStyle": {
                    "color": "#1790cf",
                    "width": "1"
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#005eaa",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#005eaa"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#005eaa",
                "borderColor": "#316bc2"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#1790cf",
                "#a2d4e6"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "color": "#ffffff"
            },
            "emphasis": {
                "label": {
                    "color": "#ffffff"
                }
            }
        }
    });
}));

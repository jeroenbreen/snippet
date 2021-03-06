function Settings(app) {
    this.app = app;

    this.typography = {
        lineHeight: 15
    };
    this.animation = {
        valorisation: 750,
        popup: 200,
        showBottomFrame: 1000,
        hideTopFrame: 1000,
        labelFade: 500,
        radar: 500
    };

    this.container = this.measureContainer();
    this.timing = this.getTiming();
    this.sizes = this.getSizes();
    this.graph = this.getGraph();
    this.labels = this.getLabels();
    this.properties = this.getProperties();
}

Settings.prototype.getLabels = function() {
    switch (window.device) {
        case 0: // mobile  sizing set:
            return {
                rawLabel: {
                    distance: 20,
                    width: 130,
                    junction: 'center',
                    position: 'right'
                },
                profitLabel: {
                    distance: 50,
                    width: 110,
                    junction: 'center',
                    position: 'top'
                },
                sidestreamLabel: {
                    distance: 60,
                    width: 110,
                    junction: 'center',
                    position: 'right'
                },
                filterLabel: {
                    distance: 50,
                    width: 110
                }

            };
            break;
        case 1: // tablet portrait sizing set:
            return {
                rawLabel: {
                    distance: 50,
                    width: 130,
                    junction: 'center',
                    position: 'right'
                },
                profitLabel: {
                    distance: 50,
                    width: 100,
                    junction: 'center',
                    position: 'top'
                },
                sidestreamLabel: {
                    distance: 49,
                    width: 90,
                    junction: 'center',
                    position: 'right'
                },
                filterLabel: {
                    distance: 50,
                    width: 90
                }
            };
            break;
        case 2: // tablet landscape sizing set:
            return {
                rawLabel: {
                    distance: 60,
                    width: 150,
                    junction: 'center',
                    position: 'right'
                },
                profitLabel: {
                    distance: 60,
                    width: 95,
                    junction: -35,
                    position: 'top'
                },
                sidestreamLabel: {
                    distance: 49,
                    width: 95,
                    junction: 'center',
                    position: 'right'
                },
                filterLabel: {
                    distance: 50,
                    width: 95
                }

            };
            break;
        case 3: // desktop sizing set:
            return {
                rawLabel: {
                    distance: 60,
                    width: 150,
                    junction: 'center',
                    position: 'right'
                },
                profitLabel: {
                    distance: 60,
                    width: 110,
                    junction: -35,
                    position: 'top'
                },
                sidestreamLabel: {
                    distance: 49,
                    width: 110,
                    junction: 'center',
                    position: 'right'
                },
                filterLabel: {
                    distance: 50,
                    width: 110
                }
                
            };
            break;
    }
};

Settings.prototype.getGraph = function() {
    switch (window.device) {
        case 0: // mobile  sizing set:
            return {
                width: this.container.width - 40,
                height: this.container.height - 300,
                margin: 10
            };
            break;
        case 1: // tablet portrait sizing set:
            return {
                width: 500,
                height: this.container.height < 680 ? this.container.height - 360 : 320,
                margin: 20
            };
            break;
        case 2: // tablet landscape sizing set:
        case 3: // desktop sizing set:
            return {
                width: 630,
                height: this.container.height < 680 ? this.container.height - 360 : 320,
                margin: 20
            };
            break;
    }
};

Settings.prototype.getProperties = function() {
    switch (window.device) {
        case 0: // mobile  sizing set:
            return {
                path: {
                    stroke: 1.5
                },
                radar: {
                    r: this.graph.width > 440 ? this.graph.width / 22 : 20,
                    gap: 3,
                    n: 3,
                    stroke: 1.5
                },
                story: {
                    margin: 15
                },
                graph: {
                    offset: 0,
                    bar: {
                        y: 420,
                        width: 20
                    }
                }
            };
            break;
        case 1: // tablet portrait sizing set:
            return {
                path: {
                    stroke: 1.5
                },
                radar: {
                    r: 30,
                    gap: 5,
                    n: 3,
                    stroke: 2
                },
                story: {
                    margin: 15
                },
                graph: {
                    offset: 75,
                    bar: {
                        y: 315,
                        width: 15
                    }
                }
            };
            break;
        case 2: // tablet landscape sizing set:
        case 3: // desktop sizing set:
            return {
                path: {
                    stroke: 2
                },
                radar: {
                    r: 30, // to prevent a valorisation radar to overlap the graph (when value 1 or 10), this value should be < this.bottomFrame.height / 10
                    gap: 5,
                    n: 3,
                    stroke: 2
                },
                story: {
                    margin: 15
                },
                graph: {
                    offset: 100,
                    bar: {
                        y: 420,
                        width: 20
                    }
                }
            };
            break;
    }
};

Settings.prototype.getTiming = function() {
    switch (window.device) {
        case 0: // mobile  sizing set:
            return {
                sidestreamBars: [100, 240],
                labels: {
                    profitLabel: 220,
                    sidestreamLabel: 600,
                    productionLabel: 270
                },
                story: {
                    chapter: [0, 650, 1000]
                },
                disclaimer: 2000,
                topFrame: {
                    origin: [20, 280], // [x,y]
                    transitions: [
                        {
                            start: 50,
                            end: 500,
                            origin: 280, // keep this one the same as origin[1]
                            destination: -250
                        },
                        {
                            start: 2000,
                            end: 2400,
                            origin: -150, // keep this on the same as previous destination
                            destination: -500
                        }
                    ]
                },
                bottomFrame: {
                    origin: [20, 2000],
                    transitions: [
                        {
                            start: 400,
                            end: 500,
                            origin: 1600,
                            destination: 800
                        },
                        {
                            start: 800,
                            end: 1100,
                            origin: 800,
                            destination: 80
                        }
                    ]
                },
                sidestreamLabels: {
                    origin: [44, 1600],
                    transitions: [
                        {
                            start: 300,
                            end: 1500,
                            origin: 1600,
                            destination: 390
                        },
                        {
                            start: 2000,
                            end: 2400,
                            origin: 390,
                            destination: 70
                        }
                    ]
                }
            };
            break;
        case 1: // tablet portrait sizing set:
        case 2: // tablet landscape sizing set:
            return {
                sidestreamBars: [100, 220, 340, 460, 580, 700],
                labels: {
                    profitLabel: 620,
                    sidestreamLabel: 1000,
                    productionLabel: 200
                },
                story: {
                    chapter: [0, 1800, 2400],
                    wait: 1400
                },
                disclaimer: 2000,
                topFrame: {
                    origin: [60, 180], // [x,y]
                    transitions: [
                        {
                            start: 100,
                            end: 1500,
                            origin: 180, // keep this one the same as origin[1]
                            destination: -150
                        },
                        {
                            start: 2000,
                            end: 2400,
                            origin: -150, // keep this on the same as previous destination
                            destination: -500
                        }
                    ]
                },
                bottomFrame: {
                    origin: [60, 2000],
                    transitions: [
                        {
                            start: 1200,
                            end: 1700,
                            origin: 1600,
                            destination: 430
                        },
                        {
                            start: 2000,
                            end: 2400,
                            origin: 430,
                            destination: 70
                        }
                    ]
                },
                sidestreamLabels: {
                    origin: [84, 1600],
                    transitions: [
                        {
                            start: 300,
                            end: 1500,
                            origin: 1600,
                            destination: 390
                        },
                        {
                            start: 2000,
                            end: 2400,
                            origin: 390,
                            destination: 40
                        }
                    ]
                }
            };
        case 3: // desktop sizing set:
            return {
                sidestreamBars: [100, 220, 340, 460, 580, 700],
                labels: {
                    profitLabel: 620,
                    sidestreamLabel: 1000,
                    productionLabel: 200
                },
                story: {
                    chapter: [0, 1860, 2460],
                    wait: 1500
                },
                disclaimer: 2000,
                topFrame: {
                    origin: [60, 180], // [x,y]
                    transitions: [
                        {
                            start: 100,
                            end: 1500,
                            origin: 180, // keep this one the same as origin[1]
                            destination: -150
                        },
                        {
                            start: 2000,
                            end: 2400,
                            origin: -150, // keep this on the same as previous destination
                            destination: -500
                        }
                    ]
                },
                bottomFrame: {
                    origin: [60, 2000],
                    transitions: [
                        {
                            start: 1200,
                            end: 1700,
                            origin: 1600,
                            destination: 430
                        },
                        {
                            start: 2000,
                            end: 2400,
                            origin: 430,
                            destination: 85
                        }
                    ]
                },
                sidestreamLabels: {
                    origin: [84, 1600],
                    transitions: [
                        {
                            start: 300,
                            end: 1500,
                            origin: 1600,
                            destination: 390
                        },
                        {
                            start: 2000,
                            end: 2400,
                            origin: 390,
                            destination: 55
                        }
                    ]
                }
            };
            break;
    }
};

Settings.prototype.getSizes = function() {
    switch (window.device) {
        case 0: // mobile  sizing set:
            return {
                artboard: [0,0],
                topFrame: this.timing.topFrame.origin,
                rawLabel: [200,80],
                profitLabel: [228,255],
                sidestreamLabel: [40,500],
                productionLabel: [30,230],
                bottomFrame: this.timing.bottomFrame.origin,
                graphHeaderText: [0, 80],
                graphSubHeader: [0, 16],
                filterSidestreams: [24,20],
                graphBody: [0,160],
                sidestreamLabels: this.timing.sidestreamLabels.origin,
                filterLabel: [595,5]
            };
            break;
        case 1: // tablet portrait sizing set:
            return {
                artboard: [20,0],
                topFrame: this.timing.topFrame.origin,
                rawLabel: [160,55],
                profitLabel: [470,160],
                sidestreamLabel: [427,380],
                productionLabel: [110,180],
                bottomFrame: this.timing.bottomFrame.origin,
                graphHeaderText: [0, 80],
                graphSubHeader: [0, 16],
                filterSidestreams: [24,20],
                graphBody: [0,160],
                sidestreamLabels: this.timing.sidestreamLabels.origin,
                filterLabel: [460,5]
            };
            break;
        case 2: // tablet landscape sizing set:
            return {
                artboard: [40,0],
                topFrame: this.timing.topFrame.origin,
                rawLabel: [210,80],
                profitLabel: [628,240],
                sidestreamLabel: [562,480],
                productionLabel: [220,258],
                bottomFrame: this.timing.bottomFrame.origin,
                graphHeaderText: [0, 80],
                graphSubHeader: [0, 32],
                filterSidestreams: [24,20],
                graphBody: [0,160],
                sidestreamLabels: this.timing.sidestreamLabels.origin,
                filterLabel: [595,5]
            };
            break;
        case 3: // desktop sizing set:
            return {
                artboard: [60,0],
                topFrame: this.timing.topFrame.origin,
                rawLabel: [210,80],
                profitLabel: [663,240],
                sidestreamLabel: [562,480],
                productionLabel: [220,258],
                bottomFrame: this.timing.bottomFrame.origin,
                graphHeaderText: [0, 100], 
                graphSubHeader: [0, 32],
                filterSidestreams: [24,20],
                graphBody: [0,180],
                sidestreamLabels: this.timing.sidestreamLabels.origin,
                filterLabel: [595,5]
            };
            break;
    }
};

Settings.prototype.measureContainer = function() {
    var width = $(this.app.container).outerWidth(),
        height = $(this.app.container).outerHeight();
    return {
        width: width,
        height: height,
        margin: 20
    }
};
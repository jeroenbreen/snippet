function App(container) {
    this.container = container;
    this.settings = {};
    this.paths = [];
    this.sets = [];
    this.valorisations = [];
    this.sidestreams = [];
    this.streams = [];
    this.canvas = null;
    this.animation = null;
    this.story = {};
    this.frame = 0;
    this.timer = null;
    this.init();
}

App.prototype.init = function() {
    $('html').scrollTop(0);
    this.settings = new Settings(this);
    this.story = new Story(this);
    this.canvas = new Canvas(this);
    this.getSidestreams();
    this.getOutstreams();
    this.getPaths();
    this.getValorisations();
    // execute after valorisations and sidestreams are injected
    this.canvas.createSidestreamContent();
    // if that is done, we can set all the positions right
    this.canvas.setPositions();
    // finaly the animation, in where the d3 selection is done
    this.animation = new Animation(this);
    this.loaded();
};

App.prototype.redraw = function() {
    $('.valorisation-popup').remove();
    this.empty();
    this.init();

};

App.prototype.empty = function() {
    this.settings = new Settings(this);
    this.paths = [];
    this.sets = [];
    this.valorisations = [];
    this.sidestreams = [];
    this.streams = [];
};

App.prototype.getPaths = function() {
    var thisPaths;
    if (window.device > 1) {
        thisPaths = paths;
    } else if (window.device === 1){
        thisPaths = pathsTablet;
    } else {
        thisPaths = pathsMobile;
    }

    for (var i = 0, l = thisPaths.length; i < l; i++) {
        var path = thisPaths[i],
            model;
        switch (path.type) {
            case 'regular':
                model = new Path(this, path);
                this.paths.push(model);
                break;
            case 'static':
                // statics don't get pushed in the array, cause they dont
                // have scroll function
                model = new Static(this, path);
                break;
            case 'cover':
                model = new Cover(this, path);
                this.paths.push(model);
                break;
        }
    }
};

App.prototype.getValorisations = function() {
    $('.legend').empty(); // empty for a redraw
    for (var i = 0, l = sets.length; i < l; i++) {
        var set = sets[i],
            setModel = new Set(this, set);
        this.sets.push(setModel);
        for (var j = 0, jl = set.valorisations.length; j < jl; j++) {
            var valorisation = set.valorisations[j],
                valorisationModel = new Valorisation(this, setModel, valorisation);
            this.valorisations.push(valorisationModel);
            setModel.children.push(valorisationModel);
        }
    }
};

App.prototype.getSidestreams = function() {
    for (var i = 0, l = sidestreams.length; i < l; i++) {
        var sidestream = sidestreams[i],
            model = new Sidestream(this, sidestream);
        this.streams.push(model);
        this.sidestreams.push(model);
    }
};

App.prototype.getOutstreams = function() {
    for (var i = 0, l = outstreams.length; i < l; i++) {
        var outstream = outstreams[i];
        this.streams.push(
            new Outstream(this, outstream)
        );
    }
};

App.prototype.loaded = function() {
    $('body').addClass('loaded');
};

App.prototype.scroll = function(frame) {
    this.animation.scroll(frame);
};

App.prototype.filter = function() {
    for (var j = 0, jl = this.valorisations.length; j < jl; j++) {
        var valorisation = this.valorisations[j];
        valorisation.update();
    }
};



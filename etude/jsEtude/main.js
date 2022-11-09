$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        stepsOrientation: "vertical",
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back Step',
            next : '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
            finish : '<i class="fa fa-paper-plane" aria-hidden="true"></i>',
            current : ''
        },
    })
});

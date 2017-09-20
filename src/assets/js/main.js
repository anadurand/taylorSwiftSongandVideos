"use strict";


const root = $(".root");

const render = (root, otherChart) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    switch (state.pagina) {
        case null:
            wrapper.append(SongsList(updated));
            
            break;
        
    };

    root.append(wrapper);

    
}

const updated = function () {
    render(root);
}
const state = {
    pagina: null,
}


$(_ => {

    const root = $(".root");
    const chart = $('.other-chart');
    chart.append(OtherChart);
    $.ajax({
        url: 'https://itunes.apple.com/search?term=taylor+swift&media=music&limit=200&country=us',
        method: 'GET',
        dataType: "jsonp",
        success: function (response) {
            if (response) {
                state.songs = response.results;
                if(state.songs){
                    console.log(state.songs);
                    console.log("success");
                    render(root);
                }
                               
            }
        },
        fail: function (request) {
            if (request) {
                console.log(request.message);
            }
        }
    });
    
});

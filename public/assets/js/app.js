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

"use strict";

const SongsList = (updated) => {

    const parent = $('<div class=""></div>');
    const ul = $('<ul class="collection"></ul>');

    parent.append(ul);
    
    const uniqueSongs = state.songs.reduce( (array, e1) => {

                            var match = array.filter ( (e2) => {
                                return e1.trackName == e2.trackName
                            });
                            if(match.length == 0){
                                array.push(e1);
                            }
                            return array;
                        }, []);
    console.log(uniqueSongs);
    uniqueSongs.forEach( (song, i) => {
        ul.append(detailSong(song, i+1));
    });

    return parent;
}

const detailSong = (song, i) => {
    const li = $('<li class="collection-item avatar"><span class= "negrita count">'+ i +'</span></li>');
    const img = $('<img src="'+song.artworkUrl30+'" alt="" class="circle">');
    const title = $('<span class="title trucate negrita">'+song.trackName+'</span>');
    const collection = $('<p class="truncate">'+song.collectionName+'</p>');
    const id = $('<a href="" class="secondary-content id"><i class="material-icons icon-id">all_inclusive</i><span class = "id-number">'+song.trackId+'</span></a>');

    li.append(img);
    li.append(title);
    li.append(collection);
    li.append(id);

    return li
}


'use strict';

const OtherChart = () => {
    const otherArray = [{"title": "Global Top 100", "description": "The most Shazamed song ...", "img": ""},
        { "title": "Future Hits", "description": "New songs you'll love.", "img": "" },
        {"title": "Hip-Hop", "description": "The hottest rap right now.", "img": "" },
        {"title": "Pop", "description": "Featuring the biggest stars on ...", "img": "" },
        {"title": "Dance", "description": "The freshest EDM hits.", "img": "" },
        {"title": "Country", "description": "The top 10 new anthems.", "img": "" },
        {"title": "Latin", "description": "The best new Latin grooves.", "img": "" },
        { "title": "Hall of Fame", "description": "The most Shazamed song ...", "img": "" }];

    const parent = $('<div class=""><h5>Other Chart</h5></div>');
    const div = $('<div class="row"></div>');
    parent.append(div);

    otherArray.forEach((obj)=> {
        div.append(DetailChart(obj));
    });
    console.log(parent);
    return parent
}

const DetailChart = (obj) => {
    const parent = $('<div class="col s6"></div>');
    const container = $('<div></div>');
    const divImg = $('<div class="img-div"><img src="'+obj.img+'" alt=""></div>');
    const divDesc = $('<div class="div-desc"><p class="chart-title>'+obj.title+'<br>'+obj.description+'</p></div>');

    container.append(divImg);
    container.append(divDesc);
    parent.append(container);

    return parent
}
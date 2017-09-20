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
        console.log(obj);
        div.append(DetailChart(obj));
    });
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
'use strict';

const OtherChart = () => {
    const otherArray = [{"title": "Global Top 100", "description": "The most Shazamed song ...", "img": "top100.png"},
        { "title": "Future Hits", "description": "New songs you'll love.", "img": "future-hits.jpg" },
        {"title": "Hip-Hop", "description": "The hottest rap right now.", "img": "hiphop.jpg" },
        {"title": "Pop", "description": "Featuring the biggest stars on ...", "img": "pop.jpg" },
        {"title": "Dance", "description": "The freshest EDM hits.", "img": "dance.jpg" },
        {"title": "Country", "description": "The top 10 new anthems.", "img": "country.jpg" },
        {"title": "Latin", "description": "The best new Latin grooves.", "img": "latin.jpg" },
        { "title": "Hall of Fame", "description": "The most Shazamed song ...", "img": "shazam.jpg" }];

    const parent = $('<div class="row"><h5>Other Chart</h5></div>');
    const div = $('<div class="col s12"></div>');
    parent.append(div);

    otherArray.forEach((obj)=> {
        div.append(DetailChart(obj));
    });
    return parent
}

const DetailChart = (obj) => {
    const parent = $('<div class="col s12 l6"></div>');
    const container = $('<div class = "detail-chart"></div>');
    const divImg = $('<div class="img-div"></div>');
    const divImgDetail = $('<div class="icon col s12"><span class="circle"><i class="material-icons icon-share">all_inclusive</i></span></div><div class="col s12 text"><p>' + obj.title +' <br> <span class="truncate">Chart</span></p></div>');
    const divDesc = $('<div class="div-desc"><p class="chart-title negrita">'+ obj.title +'<br><span class="chart-desc">'+ obj.description +'</span></p></div>');

    // divImg.append(divImgDetail);
    container.append(divImg);
    container.append(divDesc);
    parent.append(container);

    divImg.css({ "background-image": 'url(assets/img/' + obj.img + ')' });
    

    return parent
}
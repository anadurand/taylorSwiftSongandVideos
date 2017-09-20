"use strict";

const SongsList = (updated) => {

    const parent = $('<div class="list-content"></div>');
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
        if(i+1<10){
            i = "0" + (i+1);
        }else if(i+1==10){
            i=i+1;
        }
        ul.append(detailSong(song, i));
    });

    return parent;
}

const detailSong = (song, i) => {
    const li = $('<li class="collection-item avatar"><div class= "negrita count">'+ i +'</div></li>');
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


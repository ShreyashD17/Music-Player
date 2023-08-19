const music_list = [
    {
        img : './image/calmdown.jpg',
        name : 'Calm Down',
        artist : 'Rema, Selena Gomez ',
        music : './songs/calmdown.mp3'
    },
    {
        img : './image/lostsky.jpg',
        name : 'Lost Sky',
        artist : 'Chris Linton',
        music : './songs/lostsky.mp3'
    },
    {
        img : './image/unstoppable.jpg',
        name : 'Unstoppable',
        artist : 'Sia',
        music : './songs/unstopable.mp3'
    }
];

// var song = music_list[0].music;
// console.log(song)

let currentMusic = 0;

const work = document.querySelector("#work");
const song_image = document.querySelector("#song-image");
const track_name = document.querySelector(".track-name");
const track_artist = document.querySelector(".track-artist");
const music = document.querySelector("#audio");
const total_duration = document.querySelector(".total-duration");
const current_time = document.querySelector(".current-time");
const seek_slider = document.querySelector(".seek_slider");
const vol_slider = document.querySelector(".volume_slider");
const vol_low = document.querySelector(".volm0");
const vol_high = document.querySelector(".volm1");
const replay = document.querySelector(".replay");
const previous = document.querySelector(".previous");
const play_pause = document.querySelector(".play-pause");
const next = document.querySelector(".next");
const like = document.querySelector(".like");

// const audio = new Audio(song)

play_pause.addEventListener('click', () => {
//   var y =  play_pause.firstChild.setAttribute("class", "fa-solid fa-circle-pause");
      if(play_pause.firstChild.id =="play")
            {
              playmusic();
            }
       else {
             stopmusic();
            }
})

function playmusic(){
    play_pause.innerHTML = `<i class="fa-solid fa-circle-pause" id="pause"></i>`
     audio.play();
}

function stopmusic(){
    play_pause.innerHTML = `<i class="fa-solid fa-circle-play" id="play"></i>`
    audio.pause();
}

// function showtrackname(){
//     // var name = music_list[0].name;
//     // track_name.innerHTML = name;
// }

// function showtrackartist(){

// }


// Setup music

const setMusic = (i) => {
    seek_slider.value = 0;
    let song = music_list[i];
    currentMusic = i;
    music.src = song.music;

    work.innerHTML = `Song ${i+1} of ${music_list.length}`;
    track_name.innerHTML = song.name;
    track_artist.innerHTML = song.artist;
    song_image.src = song.img;

    current_time.innerHTML = "00:00";
    setTimeout(() => {
      seek_slider.max = music.duration;
      total_duration.innerHTML = formatTime(music.duration);
    }, 300)
}

setMusic(0);

// Formatting time from sec to min 

const formatTime = (time) => {
    let min = Math.floor(time/60);
    if(min<10){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if(sec<10){
        sec = `0${sec}`;
    }
  return `${min}:${sec}`;
} 


// seek slider running

setInterval(() => {
    seek_slider.value = music.currentTime;
    current_time.innerHTML = formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(seek_slider.max)){
        next.click();
    }
},500)

seek_slider.addEventListener('change', () => {
    music.currentTime = seek_slider.value;
})

// Next and previous button

next.addEventListener('click', () => {
    if(currentMusic >= music_list.length-1){
        currentMusic = 0;
    }
    else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playmusic();
})


previous.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = music_list.length-1;
    }
    else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playmusic();
})

like.addEventListener('click', () => {
    console.log(like.firstChild.style.color)
    if(like.firstChild.style.color == "rgb(105, 133, 155)")
    {
        like.firstChild.style = "color: red;";
    }
    else {
        like.firstChild.style.color = "rgb(105, 133, 155)";
    }

    // like.firstChild.style.color.toggle = 'red';
})


// Replay Button

replay.addEventListener('click', () => {
    seek_slider.value = 0;
    music.currentTime = seek_slider.value;
    console.log(music.currentTime)
})

//Volm buttton

vol_low.addEventListener('click', () => {
    vol_slider.value = 0;
    music.volume = 0;
})

vol_high.addEventListener('click', () => {
    vol_slider.value = 100;
    music.volume = 1;
})

vol_slider.addEventListener('change', () => {
    console.log(vol_slider.value/100)
    music.volume = (vol_slider.value/100);
})





























// const play_pause = document.querySelector(".play-pause");
// const total_duration = document.querySelector(".total-duration");
// const current_time = document.querySelector("current-time")
// console.log(total_duration)
// const audio = new Audio("./songs/Rema, Selena Gomez - Calm Down (Official Music Video).mp3")
// audio.addEventListener('loadeddata', () => {
//     var totaltime = audio.duration;
//     console.log(totaltime);
//     total_duration.innerHTML = totaltime;
//     // The duration variable now holds the duration (in seconds) of the audio clip 
//   })
  
// //   audio.addEventListener('loadeddata', ()=>{
// //     let time = audio.currentTime;
// //     current_time.innerHTML = time;
// // })

// play_pause.addEventListener("click", function(){
    
//     if(play_pause.firstChild.id=="play")
//             {
//                 play_pause.innerHTML = `<i class="fa-solid fa-circle-play" id="pause"></i>`
//                 audio.play();
//             }
    
//             play_pause.addEventListener("click", function(){
//                 if(play_pause.firstChild.id=="pause"){
//                     play_pause.innerHTML = `<i class="fa-solid fa-circle-pause" id="play"></i>`
//                     audio.pause();
//                 }
              
//             })
        
// })



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

const getTrackUrl = name => {
	let tracks = {
		"1":"https://psv4.vk.me/c611828/u80080293/audios/ccf14aa3265c.mp3",
		"2":"https://psv4.vk.me/c5743/u166471037/audios/4d3ecdb1f8bb.mp3"
	};
	return tracks[name];
};


$(document).on('click', '#track', e => {
	let player = $('#player');
	$('#player-src').attr('src', getTrackUrl(e.currentTarget.innerText));
	player.load();
});


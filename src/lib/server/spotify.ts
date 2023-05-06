/*
  Credits to: https://github.com/leerob/leerob.io
*/

import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';
import type { GetAccessTokenRes, GetNowPlayingRes, GetTopTracksResponse } from '$lib/types';
import { URL } from 'url';

const client_id = SPOTIFY_CLIENT_ID;
const client_secret = SPOTIFY_CLIENT_SECRET;
const refresh_token = SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
export const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
export const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
export const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async (): Promise<GetAccessTokenRes> => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			refresh_token,
			grant_type: 'refresh_token'
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} as any)
	});

	return response.json();
};




export const getNowPlaying = async (): Promise<GetNowPlayingRes | undefined> => {
	const { access_token } = await getAccessToken();

	const fetchData = async () => {
		const res = await fetch(NOW_PLAYING_ENDPOINT, {
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		});

		if (res.status === 204 || res.status > 400) {
			return undefined;
		}

		return res.json();
	};

	const data = await fetchData();
	return data;
};

export const getTopTracks = async (
	time_range: 'short_term' | 'medium_term' | 'long_term'
): Promise<GetTopTracksResponse> => {
	const { access_token } = await getAccessToken();

	const url = new URL(TOP_TRACKS_ENDPOINT);
	url.searchParams.set('time_range', time_range);

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	});

	return res.json();
};

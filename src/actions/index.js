export const REQUEST_GIFS = 'REQUEST_GIFS'

export function requestGifs(term = null) {
	return {
		type: REQUEST_GIFS,
		term
	}
}
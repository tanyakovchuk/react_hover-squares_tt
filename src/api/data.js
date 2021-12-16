const API_URL = `https://demo1030918.mockable.io/`;

export function getData() {
    return fetch(API_URL)
        .then(response => response.json())
}

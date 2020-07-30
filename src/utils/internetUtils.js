import isOnline from 'is-online'

export async function checkInternetConnectionStatus() {
    return await isOnline();
}